import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import { db } from "./config/firebase.js"
import admissionRoutes from "./routes/admissions.js"
import adminRoutes from "./routes/admin.js"
import galleryRoutes from "./routes/gallery.js"

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors({ origin: process.env.FRONTEND_URL || "*" }))
app.use(express.json())

// Routes
app.use("/api/admissions", admissionRoutes)   // Public — form submit
app.use("/api/admin", adminRoutes)             // Protected — admin only
app.use("/api/gallery", galleryRoutes)         // Public — website gallery display
app.use("/api/admin/gallery", galleryRoutes)  // Admin — gallery upload/delete

app.get("/", (req, res) => {
  res.json({ message: "Enlightened Bharat Backend Running ✅" })
})

// Start server after Firebase check
db.collection("admissions").limit(1).get()
  .then(() => {
    console.log("✅ Firebase Firestore Connected!")
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`)
    })
  })
  .catch((err) => {
    console.error("❌ Firebase connection failed:", err.message)
  })