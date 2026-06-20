import dotenv from "dotenv"
dotenv.config()

const ADMIN_SECRET = process.env.ADMIN_SECRET

const adminAuth = (req, res, next) => {

  const secret = req.headers["x-admin-secret"]

  if (!secret || secret !== ADMIN_SECRET) {
    return res.status(401).json({ error: "Unauthorized ❌" })
  }

  next()

}

export default adminAuth
