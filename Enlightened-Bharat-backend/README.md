# Enlightened Bharat — Backend API

A Node.js + Express backend for the Enlightened Bharat school website. Handles student admissions, admin management, and gallery image uploads.

---

## Tech Stack

| Technology | Purpose |

 Node.js + Express | Server & API |
 Firebase Firestore | Database |
 Cloudinary | Image Storage |
 Multer | File Upload Handling |

---

## Project Structure

```
backend/
├── config/
│   └── firebase.js          # Firebase Admin SDK setup
├── routes/
│   ├── admissions.js        # Public admission form route
│   ├── admin.js             # Protected admin routes
│   └── gallery.js           # Gallery fetch & upload routes
├── .env                     # Environment variables (never commit)
├── index.js                 # Entry point
└── package.json
  


 