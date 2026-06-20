// import { useState } from "react";
// import AboutCard from "./AboutCard"

// const cardData = [
//     {
//       icon: "🏫",
//       title: "Campus Area",
//       description: "A modern and eco-friendly school campus environment."
//     },
//     {
//       icon: "📚",
//       title: "Campus Area",
//       description: "A modern and eco-friendly school campus environment."
//     },
//     {
//       icon: "⚽",
//       title: "Campus Area",
//       description: "A modern and eco-friendly school campus environment."
//     },
//     {
//       icon: "🧑‍🏫",
//       title: "Campus Area",
//       description: "A modern and eco-friendly school campus environment."
//     },
//     {
//       icon: "🌿",
//       title: "Campus Area",
//       description: "A modern and eco-friendly school campus environment."
//     },
//     {
//       icon: "💻",
//       title: "Campus Area",
//       description: "A modern and eco-friendly school campus environment."
//     },
    
// ]

// function About(){
//     return(
//         <section className="mt-16 px-6">
//     <h2 className="text-4xl font-bold text-white text-center">About Us</h2>
//     <p className="text-gray-200 text-center mt-4 max-w-3xl mx-auto leading-8" >Enlightened Bharat is a modern CBSE Gurukul school focused on smart education and holistic development.</p>

// {/*for cards */}

//     <div className="grid md:grid-cols-3 gap-6 mt-10">
//        {
//             cardData.map((item) => (
//             <AboutCard
//               icon={item.icon}
//               title={item.title}
//               description={item.description}
//             />
//             ))
//             }
      
      

//     </div>
//     </section>
//     )
// }
// export default About




// New updated code





import schoolImage from "../assets/school2.jpeg"
import learningImage from "../assets/school4.jpeg"

function AboutPage() {

  return (

    <div className="bg-[#061224] text-white overflow-hidden">

      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center">

        <img
          src={schoolImage}
          alt="Enlightened Bharat Gurukul Campus"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 text-center px-6 max-w-5xl">

          <p className="text-yellow-400 tracking-[5px] uppercase mb-5">

            About Enlightened Bharat

          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">

            Skill-Based Education
            <span className="block text-yellow-400">

              Rooted In Vedic Wisdom

            </span>

          </h1>

        </div>

      </section>

      {/* Vision */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center">

        <div>

          <p className="text-yellow-400 tracking-[4px] uppercase mb-4">

            Our Vision

          </p>

          <h2 className="text-4xl md:text-6xl font-bold leading-tight">

            Modern Learning
            <span className="block text-yellow-400">

              With Strong Values

            </span>

          </h2>

          <p className="text-gray-300 mt-8 text-lg leading-9">

            Enlightened Bharat envisions a skill-based education
            system rooted in the timeless wisdom of Vedic teachings.
            Our goal is to help students become disciplined,
            knowledgeable and future-ready individuals who
            contribute positively to society.

          </p>

        </div>

        <div>

          <img
            src={schoolImage}
            alt="School Vision"
            className="w-full h-[320px] md:h-[500px] object-cover rounded-3xl shadow-2xl"
          />

        </div>

      </section>

      {/* Teaching Methodology */}
      <section className="max-w-7xl mx-auto px-6 py-10">

        <div className="text-center max-w-4xl mx-auto">

          <p className="text-yellow-400 tracking-[4px] uppercase mb-4">

            Teaching Methodology

          </p>

          <h2 className="text-4xl md:text-6xl font-bold leading-tight">

            Learning Through
            <span className="block text-yellow-400">

              Curiosity & Discipline

            </span>

          </h2>

          <p className="text-gray-300 mt-8 text-lg leading-9">

            Our teaching approach focuses on developing focused attention,
            discipline, endurance and deep practice. Students are encouraged
            to ask questions, think deeply and learn through meaningful
            discussions and practical understanding.

          </p>

        </div>

      </section>

      {/* 4 Steps of Learning */}
      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="text-center mb-16">

          <p className="text-yellow-400 tracking-[4px] uppercase mb-4">

            4 Steps Of Learning

          </p>

          <h2 className="text-4xl md:text-6xl font-bold">

            Our Learning Process

          </h2>

        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

          <div className="bg-white/10 backdrop-blur-xl border border-white/10 p-8 rounded-3xl">

            <h3 className="text-yellow-400 text-2xl font-bold mb-4">

              Aditi

            </h3>

            <p className="text-gray-300 leading-8">

              Students learn through listening, reading and observation.

            </p>

          </div>

          <div className="bg-white/10 backdrop-blur-xl border border-white/10 p-8 rounded-3xl">

            <h3 className="text-yellow-400 text-2xl font-bold mb-4">

              Abhyas

            </h3>

            <p className="text-gray-300 leading-8">

              Concepts are strengthened through repetition and practice.

            </p>

          </div>

          <div className="bg-white/10 backdrop-blur-xl border border-white/10 p-8 rounded-3xl">

            <h3 className="text-yellow-400 text-2xl font-bold mb-4">

              Prayog

            </h3>

            <p className="text-gray-300 leading-8">

              Knowledge is applied in practical situations and tasks.

            </p>

          </div>

          <div className="bg-white/10 backdrop-blur-xl border border-white/10 p-8 rounded-3xl">

            <h3 className="text-yellow-400 text-2xl font-bold mb-4">

              Prasaar

            </h3>

            <p className="text-gray-300 leading-8">

              Learning becomes stronger when students share knowledge with others.

            </p>

          </div>

        </div>

      </section>

      {/* Focus & Discipline */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center">

        <div>

          <img
            src={learningImage}
            alt="Focused Learning"
            className="w-full h-[320px] md:h-[500px] object-cover rounded-3xl shadow-2xl"
          />

        </div>

        <div>

          <p className="text-yellow-400 tracking-[4px] uppercase mb-4">

            Core Values

          </p>

          <h2 className="text-4xl md:text-6xl font-bold leading-tight">

            Focus, Discipline
            <span className="block text-yellow-400">

              And Deep Learning

            </span>

          </h2>

          <p className="text-gray-300 mt-8 text-lg leading-9">

            Students are trained to develop focus, discipline,
            endurance and consistency. We believe true education
            is achieved through attention, practice and meaningful effort.

          </p>

        </div>

      </section>

      {/* Future Students */}
      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="text-center mb-16">

          <p className="text-yellow-400 tracking-[4px] uppercase mb-4">

            Our Future Students

          </p>

          <h2 className="text-4xl md:text-6xl font-bold leading-tight">

            Future Ready
            <span className="block text-yellow-400">

              Leaders & Innovators

            </span>

          </h2>

        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

          <div className="bg-white/10 backdrop-blur-xl border border-white/10 p-8 rounded-3xl text-center">

            <h3 className="text-yellow-400 text-2xl font-bold">

              Innovators

            </h3>

          </div>

          <div className="bg-white/10 backdrop-blur-xl border border-white/10 p-8 rounded-3xl text-center">

            <h3 className="text-yellow-400 text-2xl font-bold">

              Doctors

            </h3>

          </div>

          <div className="bg-white/10 backdrop-blur-xl border border-white/10 p-8 rounded-3xl text-center">

            <h3 className="text-yellow-400 text-2xl font-bold">

              Engineers

            </h3>

          </div>

          <div className="bg-white/10 backdrop-blur-xl border border-white/10 p-8 rounded-3xl text-center">

            <h3 className="text-yellow-400 text-2xl font-bold">

              Civil Servants

            </h3>

          </div>

        </div>

      </section>

    </div>

  )

}

export default AboutPage