import { useEffect, useState } from "react"

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000"
const ADMIN_SECRET = import.meta.env.VITE_ADMIN_SECRET || ""

function Admin() {
  const [students, setStudents] = useState([])
  const [filtered, setFiltered] = useState([])
  const [secret, setSecret] = useState("")
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [searchQuery, setSearchQuery] = useState("")
  const [showPassword, setShowPassword] = useState(false)

  // Gallery state
  const [imageTitle, setImageTitle] = useState("")
  const [imageDesc, setImageDesc] = useState("")
  const [imageFile, setImageFile] = useState(null)
  const [galleryImages, setGalleryImages] = useState([])

  const adminHeaders = {
    "Content-Type": "application/json",
    "x-admin-secret": secret || ADMIN_SECRET,
  }

  //LOGIN 
  const handleLogin = async () => {
    setLoading(true)
    setError("")
    try {
      const res = await fetch(`${API_URL}/api/admin/admissions`, {
        headers: { "x-admin-secret": secret },
      })
      if (res.ok) {
        setIsAuthenticated(true)
        const data = await res.json()
        setStudents(data)
        setFiltered(data)
      } else {
        setError("Invalid secret key. Access denied.")
      }
    } catch {
      setError("Unable to connect to the server. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  //FETCH STUDENTS 
  const fetchStudents = async () => {
    const res = await fetch(`${API_URL}/api/admin/admissions`, { headers: adminHeaders })
    const data = await res.json()
    setStudents(data)
    applySearch(data, searchQuery)
  }

  //FETCH GALLERY 
  const fetchGallery = async () => {
    try {
      const res = await fetch(`${API_URL}/api/gallery`)
      const data = await res.json()
      setGalleryImages(data)
    } catch {
      console.error("Failed to fetch gallery.")
    }
  }

  //SEARCH 
  const applySearch = (list, q) => {
    if (!q) return setFiltered(list)
    const lower = q.toLowerCase()
    setFiltered(
      list.filter(
        (s) =>
          s.studentName?.toLowerCase().includes(lower) ||
          s.mobile?.includes(lower) ||
          s.email?.toLowerCase().includes(lower)
      )
    )
  }

  const handleSearch = (e) => {
    setSearchQuery(e.target.value)
    applySearch(students, e.target.value)
  }

  //UPDATE STATUS 
  const updateStatus = async (id, status) => {
    const res = await fetch(`${API_URL}/api/admin/admissions/${id}`, {
      method: "PATCH",
      headers: adminHeaders,
      body: JSON.stringify({ status }),
    })
    const data = await res.json()
    alert(data.message)
    fetchStudents()
  }

  //DELETE STUDENT 
  const deleteStudent = async (id) => {
    if (!confirm("Reject this application? This action cannot be undone.")) return
    const res = await fetch(`${API_URL}/api/admin/admissions/${id}`, {
      method: "DELETE",
      headers: adminHeaders,
    })
    const data = await res.json()
    alert(data.message)
    fetchStudents()
  }

  //GALLERY UPLOAD 
  const handleGalleryUpload = async () => {
    if (!imageFile) return alert("Please choose a file first.")
    const formData = new FormData()
    formData.append("title", imageTitle)
    formData.append("description", imageDesc)
    formData.append("image", imageFile)
    try {
      const res = await fetch(`${API_URL}/api/admin/gallery`, {
        method: "POST",
        headers: { "x-admin-secret": secret || ADMIN_SECRET },
        body: formData,
      })
      const data = await res.json()
      alert(data.message || "Image uploaded successfully!")
      setImageTitle("")
      setImageDesc("")
      setImageFile(null)
      fetchGallery()
    } catch {
      alert("Upload failed. Please try again.")
    }
  }

  //DELETE GALLERY IMAGE 
  const deleteGalleryImage = async (id) => {
    if (!confirm("Delete this image? This action cannot be undone.")) return
    try {
      const res = await fetch(`${API_URL}/api/admin/gallery/${id}`, {
        method: "DELETE",
        headers: adminHeaders,
      })
      const data = await res.json()
      alert(data.message || "Image deleted successfully!")
      fetchGallery()
    } catch {
      alert("Delete failed. Please try again.")
    }
  }

  useEffect(() => {
    if (isAuthenticated) {
      fetchStudents()
      fetchGallery()
    }
  }, [isAuthenticated])

  const statusBadge = (status) => {
    const map = {
      approved: "bg-emerald-500/15 text-emerald-400 border border-emerald-500/20",
      rejected: "bg-red-500/15 text-red-400 border border-red-500/20",
      pending: "bg-yellow-400/15 text-yellow-400 border border-yellow-400/20",
    }
    return map[status] || map.pending
  }

 
  // LOGIN SCREEN
  
  if (!isAuthenticated) {
    return (
      <section className="min-h-screen bg-[#07111f] flex items-center justify-center px-6">
        <div className="w-full max-w-sm">

          {/* Logo mark */}
          <div className="flex justify-center mb-8">
            <div className="w-14 h-14 rounded-2xl bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center">
              <svg className="w-7 h-7 text-yellow-400" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
              </svg>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
            <h2 className="text-white text-2xl font-semibold text-center mb-1">Admin Login</h2>
            <p className="text-white/40 text-sm text-center mb-7">Access restricted to authorized personnel only.</p>

            <label className="block text-white/50 text-xs mb-2 tracking-wider uppercase">Secret Key</label>
            <div className="relative mb-3">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter admin secret key"
                value={secret}
                onChange={(e) => setSecret(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleLogin()}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 pr-12 text-white text-sm outline-none focus:border-yellow-400/60 transition-colors placeholder:text-white/25"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-white/40 hover:text-white/70 transition-colors"
              >
                {showPassword ? (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                )}
              </button>
            </div>

            {error && (
              <p className="text-red-400 text-xs mb-3 flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                </svg>
                {error}
              </p>
            )}

            <button
              onClick={handleLogin}
              disabled={loading}
              className="w-full bg-yellow-400 hover:bg-yellow-300 disabled:opacity-60 text-[#07111f] font-semibold text-sm py-3.5 rounded-xl transition-colors duration-200"
            >
              {loading ? "Verifying…" : "Login"}
            </button>
          </div>
        </div>
      </section>
    )
  }


  // DASHBOARD
  
  return (
    <section className="min-h-screen bg-[#07111f] px-4 md:px-8 py-10">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="relative flex items-start justify-center mb-10">
          <div className="text-center">
            <p className="text-yellow-400 tracking-[4px] uppercase text-xs mb-2">Enlightened Bharat</p>
            <h1 className="text-white text-4xl md:text-5xl font-semibold">Admin Dashboard</h1>
            <p className="text-white/40 text-sm mt-2">Manage admissions, upload gallery images, and monitor student records.</p>
            <div className="w-12 h-0.5 bg-yellow-400 mt-3 rounded-full mx-auto" />
          </div>
          <button
            onClick={() => { setIsAuthenticated(false); setSecret("") }}
            className="absolute right-0 top-0 flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white/60 hover:text-white text-xs px-4 py-2.5 rounded-xl transition-all"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
            </svg>
            Logout
          </button>
        </div>

        {/* Stat Cards */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-[#1a0e00] border border-[#3d2600] rounded-2xl px-5 py-4 flex items-center justify-between">
            <div>
              <p className="text-white/40 text-[10px] tracking-[2px] uppercase mb-1">Total Admissions</p>
              <p className="text-white text-4xl font-semibold">{students.length}</p>
            </div>
            <div className="w-11 h-11 rounded-xl bg-yellow-400/10 flex items-center justify-center">
              <svg className="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
              </svg>
            </div>
          </div>
          <div className="bg-[#001a12] border border-[#003d28] rounded-2xl px-5 py-4 flex items-center justify-between">
            <div>
              <p className="text-white/40 text-[10px] tracking-[2px] uppercase mb-1">Records Loaded</p>
              <p className="text-white text-4xl font-semibold">{filtered.length}</p>
            </div>
            <div className="w-11 h-11 rounded-xl bg-emerald-500/10 flex items-center justify-center">
              <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Gallery Upload */}
        <div className="bg-white/[0.04] border border-white/10 rounded-2xl p-6 mb-5">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-8 rounded-lg bg-yellow-400/10 flex items-center justify-center flex-shrink-0">
              <svg className="w-4 h-4 text-yellow-400" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
              </svg>
            </div>
            <h2 className="text-white font-semibold text-base">Upload Gallery Image</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
            <input
              type="text"
              placeholder="Image Title"
              value={imageTitle}
              onChange={(e) => setImageTitle(e.target.value)}
              className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-yellow-400/50 transition-colors placeholder:text-white/25"
            />
            <input
              type="text"
              placeholder="Image Description"
              value={imageDesc}
              onChange={(e) => setImageDesc(e.target.value)}
              className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-yellow-400/50 transition-colors placeholder:text-white/25"
            />
          </div>

          <div className="flex items-center gap-3 mb-5">
            <label className="bg-yellow-400 hover:bg-yellow-300 text-[#07111f] font-semibold text-xs px-4 py-2.5 rounded-lg cursor-pointer transition-colors">
              Choose file
              <input type="file" accept="image/*" className="hidden" onChange={(e) => setImageFile(e.target.files[0])} />
            </label>
            <span className="text-white/35 text-sm">{imageFile ? imageFile.name : "No file chosen"}</span>
          </div>

          <button
            onClick={handleGalleryUpload}
            className="flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-[#07111f] font-semibold text-sm px-6 py-3 rounded-xl transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
            </svg>
            Upload Image
          </button>

          {/* Gallery Images List */}
          {galleryImages.length > 0 && (
            <div className="mt-8">
              <p className="text-white/50 text-xs tracking-[1.5px] uppercase mb-4">Uploaded Images ({galleryImages.length})</p>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {galleryImages.map((img) => (
                  <div key={img.id} className="relative group rounded-xl overflow-hidden border border-white/10">
                    <img
                      src={img.imageUrl}
                      alt={img.title}
                      className="w-full h-36 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col justify-between p-3">
                      <div>
                        <p className="text-white text-xs font-semibold truncate">{img.title}</p>
                        <p className="text-white/60 text-[10px] truncate mt-0.5">{img.description}</p>
                      </div>
                      <button
                        onClick={() => deleteGalleryImage(img.id)}
                        className="w-full bg-red-500/80 hover:bg-red-500 text-white text-[10px] font-semibold py-1.5 rounded-lg transition-colors flex items-center justify-center gap-1"
                      >
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                        </svg>
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Admissions Table */}
        <div className="bg-white/[0.04] border border-white/10 rounded-2xl p-6">
          <div className="flex items-center justify-between flex-wrap gap-3 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-yellow-400/10 flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-yellow-400" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                </svg>
              </div>
              <h2 className="text-white font-semibold text-base">Admission Records</h2>
            </div>

            {/* Search */}
            <div className="flex items-center gap-2.5 bg-white/5 border border-white/10 rounded-xl px-3.5 py-2.5 w-full md:w-72">
              <svg className="w-4 h-4 text-white/40 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 15.803 7.5 7.5 0 0016.803 16.803z" />
              </svg>
              <input
                type="text"
                placeholder="Search by name, mobile, email…"
                value={searchQuery}
                onChange={handleSearch}
                className="bg-transparent outline-none text-white text-sm placeholder:text-white/30 w-full"
              />
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-white/10">
                  {["Student Name", "Father Name", "Class", "Mobile", "Email", "Status", "Action"].map((h) => (
                    <th key={h} className="pb-3 px-3 text-white/40 text-[10px] tracking-[1.5px] uppercase font-medium whitespace-nowrap">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filtered.map((student) => (
                  <tr key={student.id} className="border-b border-white/[0.06] hover:bg-white/[0.03] transition-colors">
                    <td className="py-4 px-3 text-white text-sm font-medium">{student.studentName}</td>
                    <td className="py-4 px-3 text-white/70 text-sm">{student.fatherName}</td>
                    <td className="py-4 px-3 text-white/70 text-sm">{student.className}</td>
                    <td className="py-4 px-3 text-white/70 text-sm">{student.mobile}</td>
                    <td className="py-4 px-3 text-white/50 text-xs">{student.email}</td>
                    <td className="py-4 px-3">
                      <span className={`px-3 py-1 rounded-full text-[10px] font-semibold tracking-wide ${statusBadge(student.status)}`}>
                        {student.status}
                      </span>
                    </td>
                    <td className="py-4 px-3">
                      <div className="flex items-center gap-1.5 flex-wrap">
                        {student.status !== "approved" && (
                          <button
                            onClick={() => updateStatus(student.id, "approved")}
                            className="bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/20 text-emerald-400 text-[10px] px-3 py-1.5 rounded-lg transition-colors"
                          >
                            ✓ Approve
                          </button>
                        )}
                        
                        <button
                          onClick={() => deleteStudent(student.id)}
                         className="bg-orange-500/10 hover:bg-orange-500/20 border border-orange-500/20 text-orange-400 text-[10px] px-3 py-1.5 rounded-lg transition-colors"
                        >
                          ✗ Reject
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {filtered.length === 0 && (
              <p className="text-white/30 text-sm text-center py-12">No applications have been received yet.</p>
            )}
          </div>
        </div>

      </div>
    </section>
  )
}

export default Admin