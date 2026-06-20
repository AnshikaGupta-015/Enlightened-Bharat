import express from "express"
import multer from "multer"
import streamifier from "streamifier"
import { v2 as cloudinary } from "cloudinary"
import { db } from "../config/firebase.js"

const router = express.Router()

// Cloudinary config
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
})

// Multer — memory storage
const upload = multer({ storage: multer.memoryStorage() })

// Helper — buffer to cloudinary stream
const streamUpload = (buffer) => {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      { folder: "enlightened-bharat" },
      (error, result) => {
        if (result) resolve(result)
        else reject(error)
      }
    )
    streamifier.createReadStream(buffer).pipe(stream)
  })
}

//PUBLIC: Fetch all gallery images 
router.get("/", async (req, res) => {
  try {
    const snapshot = await db.collection("gallery").orderBy("uploadedAt", "desc").get()
    const images = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
    res.json(images)
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch gallery." })
  }
})

//ADMIN: Upload gallery image 
router.post("/", upload.single("image"), async (req, res) => {
  try {
    const { title, description } = req.body
    const file = req.file

    if (!file) return res.status(400).json({ error: "No image file provided." })

    // Upload to Cloudinary
    const result = await streamUpload(file.buffer)
    const imageUrl = result.secure_url

    // Save to Firestore
    await db.collection("gallery").add({
      title: title || "",
      description: description || "",
      imageUrl,
      uploadedAt: new Date(),
    })

    res.json({ message: "Image uploaded successfully!", imageUrl })
  } catch (error) {
    console.error("Gallery upload error:", error)
    res.status(500).json({ error: "Failed to upload image." })
  }
})

//ADMIN: Delete gallery image
router.delete("/:id", async (req, res) => {
  try {
    await db.collection("gallery").doc(req.params.id).delete()
    res.json({ message: "Image deleted successfully!" })
  } catch (error) {
    res.status(500).json({ error: "Failed to delete image." })
  }
})

export default router