import { useState } from "react"

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000"

function Admissions() {

  const [formData, setFormData] = useState({
    studentName: "",
    fatherName: "",
    className: "Grade 6",
    mobile: "",
    email: "",
    address: ""
  })

  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {

    e.preventDefault()
    setLoading(true)

    try {

      const response = await fetch(`${API_URL}/api/admissions`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      })

      const result = await response.json()

      if (!response.ok) {
        alert(result.error || "Something went wrong. Please try again.")
      } else {
        alert(result.message)
        setFormData({
          studentName: "",
          fatherName: "",
          className: "Grade 6",
          mobile: "",
          email: "",
          address: ""
        })
      }

    } catch (error) {
      alert("Unable to connect to the server. Please check your connection and try again.")
      console.error(error)
    } finally {
      setLoading(false)
    }

  }

  return (

    <section className="min-h-screen bg-gradient-to-b from-blue-950 to-black px-6 py-32">

      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <div className="text-center">

          <p className="text-yellow-400 tracking-[4px] uppercase text-sm">
            Admissions Open 2026
          </p>

          <h1 className="text-white text-5xl md:text-6xl font-bold mt-4">
            Apply For Admission
          </h1>

          <p className="text-gray-300 mt-6 max-w-2xl mx-auto leading-8">
            Begin your child's journey with Enlightened Bharat Gurukul —
            where modern education meets discipline, wisdom and values.
          </p>

        </div>

        {/* Form */}
        <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 mt-16 shadow-2xl">

          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Student Name */}
            <div>
              <label className="text-white block mb-3">Student Name</label>
              <input
                type="text"
                placeholder="Enter student's full name"
                value={formData.studentName}
                onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                required
                className="w-full bg-white/10 border border-white/10 rounded-xl px-5 py-4 text-white outline-none focus:border-yellow-400"
              />
            </div>

            {/* Father Name */}
            <div>
              <label className="text-white block mb-3">Father's Name</label>
              <input
                type="text"
                placeholder="Enter father's full name"
                value={formData.fatherName}
                onChange={(e) => setFormData({ ...formData, fatherName: e.target.value })}
                required
                className="w-full bg-white/10 border border-white/10 rounded-xl px-5 py-4 text-white outline-none focus:border-yellow-400"
              />
            </div>

            {/* Class */}
            <div>
              <label className="text-white block mb-3">Applying for Class</label>
              <select
                value={formData.className}
                onChange={(e) => setFormData({ ...formData, className: e.target.value })}
                className="w-full bg-white/10 border border-white/10 rounded-xl px-5 py-4 text-white outline-none focus:border-yellow-400"
              >
                <option className="text-black">Grade 6</option>
                <option className="text-black">Grade 7</option>
                <option className="text-black">Grade 8</option>
              </select>
            </div>

            {/* Mobile */}
            <div>
              <label className="text-white block mb-3">Contact Number</label>
              <input
                type="text"
                placeholder="Enter contact number"
                value={formData.mobile}
                onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                required
                className="w-full bg-white/10 border border-white/10 rounded-xl px-5 py-4 text-white outline-none focus:border-yellow-400"
              />
            </div>

            {/* Email */}
            <div className="md:col-span-2">
              <label className="text-white block mb-3">Email Address</label>
              <input
                type="email"
                placeholder="Enter a valid email address"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="w-full bg-white/10 border border-white/10 rounded-xl px-5 py-4 text-white outline-none focus:border-yellow-400"
              />
            </div>

            {/* Address */}
            <div className="md:col-span-2">
              <label className="text-white block mb-3">Residential Address</label>
              <textarea
                rows="5"
                placeholder="Enter full residential address"
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                required
                className="w-full bg-white/10 border border-white/10 rounded-xl px-5 py-4 text-white outline-none focus:border-yellow-400"
              ></textarea>
            </div>

            {/* Button */}
            <div className="md:col-span-2 text-center">
              <button
                type="submit"
                disabled={loading}
                className="bg-yellow-400 hover:bg-yellow-300 text-black font-semibold px-10 py-4 rounded-full duration-300 hover:scale-[1.02] shadow-xl disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? "Submitting Application..." : "Submit Application"}
              </button>
            </div>

          </form>

        </div>

      </div>

    </section>

  )

}

export default Admissions