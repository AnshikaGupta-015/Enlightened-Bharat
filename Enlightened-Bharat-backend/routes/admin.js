import express from "express"
import { db } from "../config/firebase.js"
import adminAuth from "../middleware/adminAuth.js"

const router = express.Router()

router.use(adminAuth)



router.get("/admissions", async (req, res) => {

  try {

    const snapshot = await db.collection("admissions")
      .orderBy("submittedAt", "desc")
      .get()

    const admissions = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }))

    res.json(admissions)

  } catch (error) {

    console.error("Fetch error:", error)
    res.status(500).json({ error: "Data fetch nahi hua" })

  }

})


// PATCH /api/admin/admissions/:id
// Status update karo — approved / rejected
router.patch("/admissions/:id", async (req, res) => {

  try {

    const { id } = req.params
    const { status } = req.body  // "approved" ya "rejected"

    if (!["approved", "rejected", "pending"].includes(status)) {
      return res.status(400).json({ error: "Invalid status" })
    }

    await db.collection("admissions").doc(id).update({ status })

    res.json({ message: `Application ${status} kar di gayi ✅` })

  } catch (error) {

    console.error("Update error:", error)
    res.status(500).json({ error: "Update nahi hua" })

  }

})


// DELETE /api/admin/admissions/:id
// Application delete karo
router.delete("/admissions/:id", async (req, res) => {

  try {

    const { id } = req.params

    await db.collection("admissions").doc(id).delete()

    res.json({ message: "Application delete ho gayi 🗑️" })

  } catch (error) {

    console.error("Delete error:", error)
    res.status(500).json({ error: "Delete nahi hua" })

  }

})

export default router
