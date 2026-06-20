import express from "express"
import { db } from "../config/firebase.js"

const router = express.Router()

// POST /api/admissions
router.post("/", async (req, res) => {

  try {

    const { studentName, fatherName, className, mobile, email, address } = req.body

    // Basic validation
    if (!studentName || !fatherName || !className || !mobile || !email || !address) {
      return res.status(400).json({ error: "All fields are required. Please fill in the complete form." })
    }

    // Save to Firestore
    const docRef = await db.collection("admissions").add({
      studentName,
      fatherName,
      className,
      mobile,
      email,
      address,
      status: "pending",
      submittedAt: new Date().toISOString()
    })

    res.status(201).json({
      message: "Your application has been submitted successfully. We will get back to you shortly. 🎉",
      id: docRef.id
    })

  } catch (error) {

    console.error("Admission submission error:", error)
    res.status(500).json({ error: "An internal server error occurred. Please try again later." })

  }

})

export default router