// import logo from "../assets/logo.png"
// function Footer() {

//   return (

//     <footer className="mt-20 bg-black/20 backdrop-blur-lg px-6 py-10">
//         <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
//             <div>
//                 <img className="w-20 h-20 rounded-full mb-4 object-cover" src={logo} alt="logo"/>
//                 <h2 className="text-2xl font-bold text-white">Enlightened Bharat</h2>
//                 <p className="text-gray-300 mt-4 leading-7 max-w-sm" >Empowering students with modern education, discipline and Gurukul values.</p>
//             </div>

//             <div>
//                 <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
//                 <ul className="flex flex-col gap-3 text-gray-300">
//                     <li className="hover:text-white cursor-pointer duration-300">Home</li>
//                     <li className="hover:text-white cursor-pointer duration-300">About</li>
//                     <li className="hover:text-white cursor-pointer duration-300">Gallery</li>
//                     <li className="hover:text-white cursor-pointer duration-300">Admissions</li>
//                     <li className="hover:text-white cursor-pointer duration-300">Contact</li>

//                 </ul>
//             </div>

//             <div>
//                 <h3 className="text-xl font-semibold text-white mb-4">Contact</h3>
//                 <a className="text-gray-300 hover:text-white duration-300 block mb-3" href="https://maps.app.goo.gl/Av8eQAsdFn5izbqa8" target="_blank"> 🌎Bareilly, India</a>
//                 <p className="text-gray-300 mb-3">📞 +91 98765 43210</p>
//                 <p className="text-gray-300 mb-3">✉️info@enlightenedbharat.com</p>
//             </div>

//         </div>
      
//     </footer>

//   )

// }

// export default Footer




// Updated code




import logo from "../assets/logo.jpeg"

function Footer() {

  return (

    <footer className="bg-black border-t border-white/10 py-20 px-6 overflow-hidden">

      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">

        {/* Logo Section */}
        <div>

          <div className="flex items-center gap-4">

            <img
              src={logo}
              alt="logo"
              className="w-16 h-16 rounded-full object-cover border border-yellow-400/40"
            />

            <div>

              <h2 className="text-white text-2xl font-bold">

                Enlightened Bharat

              </h2>

              <p className="text-yellow-400 tracking-[4px] uppercase text-xs mt-1">

                Gurukul

              </p>

            </div>

          </div>

          <p className="text-gray-400 leading-8 mt-6">

            Modern Education with Vedic Soul.
            Building future-ready leaders with values,
            wisdom and discipline.

          </p>

        </div>

        {/* Quick Links */}
        <div>

          <h3 className="text-white text-2xl font-semibold mb-6">

            Quick Links

          </h3>

          <ul className="space-y-4 text-gray-400">

            <li className="hover:text-yellow-400 duration-300 cursor-pointer">
              Home
            </li>

            <li className="hover:text-yellow-400 duration-300 cursor-pointer">
              About
            </li>

            <li className="hover:text-yellow-400 duration-300 cursor-pointer">
              Academics
            </li>

            <li className="hover:text-yellow-400 duration-300 cursor-pointer">
              Gallery
            </li>

            <li className="hover:text-yellow-400 duration-300 cursor-pointer">
              Contact
            </li>

          </ul>

        </div>

        {/* Contact */}
        <div>

          <h3 className="text-white text-2xl font-semibold mb-6">

            Contact

          </h3>

          <div className="space-y-5 text-gray-400">

            <p>
                <a href="https://maps.app.goo.gl/EREyA2k3sLRs2b8d6"> Enlightened Bharat Gurukul</a>
              
            </p>

            <p>
              📞 +91 9876543210
            </p>

            <p>
              ✉️ info@enlightenedbharat.com
            </p>

          </div>

        </div>

        {/* Social Media */}
        <div>

          <h3 className="text-white text-2xl font-semibold mb-6">

            Follow Us

          </h3>

          <div className="flex gap-5 flex-wrap">

            {/* Instagram */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-yellow-400 duration-300"
            >

              <img
                src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
                alt="instagram"
                className="w-6 h-6"
              />

            </a>

            {/* YouTube */}
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer"
              className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-yellow-400 duration-300"
            >

              <img
                src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png"
                alt="youtube"
                className="w-6 h-6"
              />

            </a>

            {/* Facebook */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-yellow-400 duration-300"
            >

              <img
                src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
                alt="facebook"
                className="w-6 h-6"
              />

            </a>

            {/* Email */}
            <a
              href="mailto:info@enlightenedbharat.com"
              className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-yellow-400 duration-300"
            >

              <img
                src="https://cdn-icons-png.flaticon.com/512/732/732200.png"
                alt="email"
                className="w-6 h-6"
              />

            </a>

          </div>

        </div>

      </div>

      {/* Google Map */}
      <div className="max-w-7xl mx-auto mt-16 rounded-3xl overflow-hidden border border-white/10">

        <iframe
          src="https://maps.google.com/maps?q=28.228929,79.455620&z=16&output=embed"
          width="100%"
          height="350"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="map"
        ></iframe>

      </div>

      {/* Bottom */}
      <div className="border-t border-white/10 mt-16 pt-8 text-center">

        <p className="text-gray-500">

          © 2026 Enlightened Bharat Gurukul. All Rights Reserved.

        </p>

      </div>

    </footer>

  )

}

export default Footer