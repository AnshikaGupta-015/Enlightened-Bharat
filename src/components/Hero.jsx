// import { useState } from "react";
// import schoolImage from "../assets/school1.jpeg"
// function Hero(){
//     return(
      
//       <div className="max-w-7xl mx-auto px-6 mt-10">

//         <div className="bg-white/70 backdrop-blur-md rounded-3xl shadow-xl p-6 md:p-10 flex flex-col md:flex-row items-center justify-between gap-10">

//           {/* Left Image */}
//           <img
//             src={schoolImage}
//             alt="school"
//             className="w-full md:w-96 h-60 object-cover rounded-2xl hover:scale-105 duration-400"
//           />

//           {/* Right Content */}
//           <div>

//             <h1 className="text-4xl md:text-6xl font-bold text-blue-950 leading-tight">
//               Enlightened Bharat
//             </h1>

//             <p className="text-lg text-gray-700 mt-4 font-medium tracking-wide">
//               Future of Smart Education
//             </p>

//             <button className="mt-6 bg-blue-900 text-white px-6 py-3 rounded-xl shadow-blue-900/50 ring-1 ring-white/20 hover:-translate-y-1 hover:bg-blue-700 hover:scale-105 duration-300">
//               Explore More
//             </button>

//           </div>

//         </div>

//       </div>
//     )
// }
// export default Hero


// updated code 



import { Link } from "react-router-dom"
import schoolImage from "../assets/school4.jpeg"

function Hero() {

  return (

    <section
      className="relative min-h-[120vh] md:min-h-screen bg-cover bg-center bg-fixed flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${schoolImage})`,
      }}
    >

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-[#061224]/80 to-[#061224] pointer-events-none z-0"></div>

      {/* Hero Content */}
      <div className="relative z-20 text-center px-6 max-w-6xl mt-20">

        {/* Main Heading */}
        <h1 className="text-white text-4xl md:text-[95px] font-extrabold leading-tight">

          ENLIGHTENED

          <span className="block text-yellow-400">

            BHARAT GURUKUL

          </span>

        </h1>

        {/* Description */}
        <p className="text-gray-200 mt-8 text-base md:text-2xl leading-8 md:leading-10 max-w-4xl mx-auto">

          Modern Education with Vedic Soul.
          Building disciplined, future-ready leaders
          with wisdom, values and character.

        </p>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-5 mt-12">

          {/* Apply Button */}
          <Link
            to="/admissions"
            className="cursor-pointer bg-yellow-400 text-black px-10 py-4 rounded-xl font-semibold text-lg hover:scale-[1.03] duration-300 ease-in-out shadow-2xl"
          >

            Apply Now

          </Link>

          {/* Explore Button */}
          <button className="cursor-pointer border border-yellow-400 text-yellow-400 px-10 py-4 rounded-xl font-semibold text-lg hover:bg-yellow-400 hover:text-black duration-300 ease-in-out">

            Explore Campus

          </button>

        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-20">

          <div className="bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/10 hover:scale-[1.02] duration-300">

            <h3 className="text-yellow-400 text-2xl font-bold">
              CBSE
            </h3>

            <p className="text-white mt-2 text-sm">
              Modern Curriculum
            </p>

          </div>

          <div className="bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/10 hover:scale-[1.02] duration-300">

            <h3 className="text-yellow-400 text-2xl font-bold">
              Sports
            </h3>

            <p className="text-white mt-2 text-sm">
              Holistic Development
            </p>

          </div>

          <div className="bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/10 hover:scale-[1.02] duration-300">

            <h3 className="text-yellow-400 text-2xl font-bold">
              Values
            </h3>

            <p className="text-white mt-2 text-sm">
              Vedic Wisdom
            </p>

          </div>

          <div className="bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/10 hover:scale-[1.02] duration-300">

            <h3 className="text-yellow-400 text-2xl font-bold">
              Future
            </h3>

            <p className="text-white mt-2 text-sm">
              Career Focused
            </p>

          </div>

        </div>

      </div>

    </section>

  )

}

export default Hero