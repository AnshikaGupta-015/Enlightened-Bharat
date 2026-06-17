// import { useState } from "react"

// function Navbar() {

//   const [menuOpen, setMenuOpen] = useState(false)
//     return(
//         <div>
//             {/* Navbar */}
//                   <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center overflow-visible">
            
//                     {/* Logo */}
//                     <h2 className="text-xl font-bold text-white">
//                       Enlightened Bharat
//                     </h2>
            
//                     {/* Desktop Menu */}
//                     <ul className="hidden md:flex gap-6 text-white text-sm font-medium">
            
//                       <li className="hover:text-blue-200 cursor-pointer duration-300">
//                         About Us
//                       </li>
            
//                       <li className="hover:text-blue-200 cursor-pointer duration-300">
//                         Academics
//                       </li>
            
//                       <li className="hover:text-blue-200 cursor-pointer duration-300">
//                         Admissions
//                       </li>
            
//                       <li className="hover:text-blue-200 cursor-pointer duration-300">
//                         Gallery
//                       </li>
            
//                       <li className="hover:text-blue-200 cursor-pointer duration-300">
//                         News
//                       </li>
            
//                       <li className="hover:text-blue-200 cursor-pointer duration-300">
//                         Contact Us
//                       </li>
            
//                     </ul>
            
//                     {/* Mobile Menu */}
//                     <div className="relative">
            
//                       {/* Hamburger Button */}
//                       <button
//                         onClick={() => setMenuOpen(!menuOpen)}
//                         className="flex md:hidden text-3xl text-white px-2 py-1 rounded-md hover:bg-white/10 duration-300"
//                       >
//                         ☰
//                       </button>
            
//                       {/* Dropdown */}
//                       {menuOpen && (
            
//                         <div className="absolute right-0 top-12 z-50 h-auto bg-white/10 w-36 backdrop-blur-lg rounded-2xl shadow-xl p-4">
//                           <ul className="flex flex-col gap-4 text-white text-sm w-full">
            
//                             <li className="hover:text-blue-200 cursor-pointer duration-300">
//                               About Us
//                             </li>
            
//                             <li className="hover:text-blue-200 cursor-pointer duration-300">
//                               Academics
//                             </li>
            
//                             <li className="hover:text-blue-200 cursor-pointer duration-300">
//                               Admissions
//                             </li>
            
//                             <li className="hover:text-blue-200 cursor-pointer duration-300">
//                               Gallery
//                             </li>
            
//                             <li className="hover:text-blue-200 cursor-pointer duration-300">
//                               News
//                             </li>
            
//                             <li className="hover:text-blue-200 cursor-pointer duration-300">
//                               Contact Us
//                             </li>
            
//                           </ul>
            
//                         </div>
            
//                       )}
            
//                     </div>
            
//                   </div>
//         </div>
//     )
// }
// export default Navbar




// updated code 







import { useState } from "react";
import { Link } from "react-router-dom";

import logo from "../assets/logo.jpeg";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (

    <nav className="w-full fixed top-0 left-0 z-50 bg-black/30 backdrop-blur-lg border-b border-white/10">

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">

          <img
            src={logo}
            alt="Enlightened Bharat Logo"
            className="w-12 h-12 rounded-full object-cover border-2 border-yellow-400"
          />

          <div>

            <h2 className="text-xl font-bold text-white">
              Enlightened Bharat
            </h2>

            <p className="text-xs text-yellow-400 tracking-widest">
              Modern Gurukul
            </p>

          </div>

        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-white font-medium">

          <li className="hover:text-yellow-400 duration-300">
            <Link to="/">Home</Link>
          </li>

          <li className="hover:text-yellow-400 duration-300">
            <Link to="/about">About</Link>
          </li>

          <li className="hover:text-yellow-400 duration-300">
            <Link to="/academics">Academics</Link>
          </li>

          <li className="hover:text-yellow-400 duration-300">
            <Link to="/gallery">Gallery</Link>
          </li>

          <li className="hover:text-yellow-400 duration-300">
            <Link to="/contact">Contact</Link>
          </li>

        </ul>

        {/* Apply Button */}
        <Link to="/admissions">

          <button className="hidden md:block bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-5 py-2 rounded-xl duration-300 shadow-lg">

            Apply Now

          </button>

        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white text-3xl"
        >
          ☰
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (

        <div className="md:hidden bg-black/90 backdrop-blur-lg px-6 py-6">

          <ul className="flex flex-col gap-5 text-white font-medium">

            <li>
              <Link to="/" onClick={() => setMenuOpen(false)}>
                Home
              </Link>
            </li>

            <li>
              <Link to="/about" onClick={() => setMenuOpen(false)}>
                About
              </Link>
            </li>

            <li>
              <Link to="/academics" onClick={() => setMenuOpen(false)}>
                Academics
              </Link>
            </li>

            <li>
              <Link to="/gallery" onClick={() => setMenuOpen(false)}>
                Gallery
              </Link>
            </li>

            <li>
              <Link to="/contact" onClick={() => setMenuOpen(false)}>
                Contact
              </Link>
            </li>

            <Link to="/admissions">

              <button className="bg-yellow-500 text-black font-semibold px-5 py-3 rounded-xl mt-2 w-fit">

                Apply Now

              </button>

            </Link>

          </ul>

        </div>

      )}

    </nav>

  );

}

export default Navbar;