function Contact() {

  return (

    <div className="bg-[#061224] text-white overflow-hidden">

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">

        <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-[#061224]"></div>

        <div className="relative z-10 text-center px-6 max-w-5xl">

          <p className="text-yellow-400 tracking-[5px] uppercase mb-5">

            Contact Us

          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">

            Connect With
            <span className="block text-yellow-400">

              Enlightened Bharat

            </span>

          </h1>

        </div>

      </section>

      {/* Contact Section */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16">

        {/* Left Info */}
        <div>

          <p className="text-yellow-400 tracking-[4px] uppercase mb-4">

            Get In Touch

          </p>

          <h2 className="text-4xl md:text-6xl font-bold leading-tight">

            We Would Love
            <span className="block text-yellow-400">

              To Hear From You

            </span>

          </h2>

          <p className="text-gray-300 mt-8 text-lg leading-9">

            Contact us for admissions, campus visits,
            academic information or any other queries.
            Our team will be happy to assist you.

          </p>

          {/* Contact Cards */}
          <div className="mt-12 space-y-6">

            <div className="bg-white/10 backdrop-blur-xl border border-white/10 p-6 rounded-2xl">

              <h3 className="text-yellow-400 text-2xl font-bold mb-3">

                Address

              </h3>

              <p className="text-gray-300 leading-8">

                Enlightened Bharat Gurukul,
                Uttar Pradesh, India

              </p>

            </div>

            <div className="bg-white/10 backdrop-blur-xl border border-white/10 p-6 rounded-2xl">

              <h3 className="text-yellow-400 text-2xl font-bold mb-3">

                Phone

              </h3>

              <p className="text-gray-300 leading-8">

                +91 9876543210

              </p>

            </div>

            <div className="bg-white/10 backdrop-blur-xl border border-white/10 p-6 rounded-2xl">

              <h3 className="text-yellow-400 text-2xl font-bold mb-3">

                Email

              </h3>

              <p className="text-gray-300 leading-8">

                info@enlightenedbharat.com

              </p>

            </div>

          </div>

        </div>

        {/* Contact Form */}
        <div className="bg-white/10 backdrop-blur-xl border border-white/10 p-8 md:p-10 rounded-3xl">

          <h2 className="text-4xl font-bold mb-8">

            Send Message

          </h2>

          <form className="space-y-6">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-black/20 border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-yellow-400"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full bg-black/20 border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-yellow-400"
            />

            <input
              type="text"
              placeholder="Phone Number"
              className="w-full bg-black/20 border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-yellow-400"
            />

            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full bg-black/20 border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-yellow-400"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-yellow-400 text-black py-4 rounded-xl font-semibold hover:scale-[1.02] duration-300"
            >

              Send Message

            </button>

          </form>

        </div>

      </section>

      {/* Google Map */}
      <section className="max-w-7xl mx-auto px-6 pb-24">

        <div className="rounded-3xl overflow-hidden border border-white/10">

          <iframe
            src="https://maps.google.com/maps?q=28.228929,79.455620&z=16&output=embed"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="map"
          ></iframe>

        </div>

      </section>

    </div>

  )

}

export default Contact