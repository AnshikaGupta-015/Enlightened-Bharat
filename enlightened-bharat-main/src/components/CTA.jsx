// function CTA(){
//     return(
//         <section className="mt-20 px-6">
//            <div className="max-w-5xl mx-auto bg-white/10 backdrop-blur-lg rounded-3xl p-10 text-center shadow-xl">
//              <h2 className="text-4xl font-bold text-white">Admissions Open 2026</h2>
//              <p className="text-gray-200 mt-4 leading-7 max-w-2xl mx-auto">Join Enlightened Bharat and shape your child’s future with modern education and Gurukul values.</p>
//                 <div className="flex flex-col md:flex-row gap-4 justify-center mt-8">
//                     <button className=" w-fit mx-auto bg-blue-900 text-white px-6 py-3 rounded-xl hover:bg-blue-700 hover:scale-105 duration-300">Apply Now</button>

//                     <button className="border border-white/30 text-white px-6 py-3 rounded-xl hover:bg-white/10 duration-300 w-fit mx-auto">Contact Us</button>

//                 </div>

//            </div>
//         </section>
//     )
// }
// export default CTA




// Updated code


import { Link } from "react-router-dom"

function CTA() {

  return (

    <section className="bg-[#061224] px-6 py-24 overflow-hidden">

      <div className="max-w-6xl mx-auto">

        <div className="relative rounded-[40px] overflow-hidden bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 p-[1px] shadow-2xl">

          <div className="bg-[#08172d] rounded-[40px] px-8 md:px-16 py-16 md:py-24 text-center">

            
            <p className="text-yellow-400 tracking-[5px] uppercase mb-6">

              Admissions Open

            </p>

            {/* Main Heading */}
            <h2 className="text-white text-4xl md:text-7xl font-bold leading-tight">

              Begin Your Journey
              <span className="block text-yellow-400">

                With Enlightened Bharat

              </span>

            </h2>

            {/* Description */}
            <p className="text-gray-300 text-lg md:text-xl leading-9 max-w-4xl mx-auto mt-10">

              Join a learning environment focused on discipline,
              values, modern education and holistic growth.
              Build a strong foundation for a successful future.

            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12">

              <Link
                to="/admissions"
                className="bg-yellow-400 text-black px-10 py-4 rounded-xl font-semibold text-lg hover:scale-[1.05] duration-300 shadow-2xl"
              >

                Apply Now

              </Link>

              <Link
                to="/contact"
                className="border border-yellow-400 text-yellow-400 px-10 py-4 rounded-xl font-semibold text-lg hover:bg-yellow-400 hover:text-black duration-300"
              >

                Contact Us

              </Link>

            </div>

          </div>

        </div>

      </div>

    </section>

  )

}

export default CTA