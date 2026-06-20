{/* Not Connected  */}


import schoolImage from "../assets/school3.jpeg"

function Academics() {

  return (

    <div className="bg-[#061224] text-white overflow-hidden">

      {/* Hero Section */}
      <section className="relative h-[65vh] flex items-center justify-center">

        <img
          src={schoolImage}
          alt="Academics at Enlightened Bharat Gurukul"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 text-center px-6 max-w-5xl">

          <p className="text-yellow-400 tracking-[5px] uppercase mb-5">

            Academics

          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">

            Modern Learning
            <span className="block text-yellow-400">

              Rooted In Discipline

            </span>

          </h1>

        </div>

      </section>

      {/* Curriculum */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center">

        <div>

          <p className="text-yellow-400 tracking-[4px] uppercase mb-4">

            Curriculum

          </p>

          <h2 className="text-4xl md:text-6xl font-bold leading-tight">

            Academic Excellence
            <span className="block text-yellow-400">

              With Practical Learning

            </span>

          </h2>

          <p className="text-gray-300 mt-8 text-lg leading-9">

            Our curriculum combines modern education,
            practical understanding and value-based learning.
            Students are encouraged to develop strong concepts,
            problem-solving ability and disciplined learning habits.

          </p>

        </div>

        <div>

          <img
            src={schoolImage}
            alt="School Curriculum"
            className="w-full h-[320px] md:h-[500px] object-cover rounded-3xl shadow-2xl"
          />

        </div>

      </section>

      {/* Learning Approach */}
      <section className="max-w-7xl mx-auto px-6 py-10">

        <div className="text-center max-w-4xl mx-auto">

          <p className="text-yellow-400 tracking-[4px] uppercase mb-4">

            Learning Approach

          </p>

          <h2 className="text-4xl md:text-6xl font-bold leading-tight">

            Learning Through
            <span className="block text-yellow-400">

              Curiosity & Practice

            </span>

          </h2>

          <p className="text-gray-300 mt-8 text-lg leading-9">

            We encourage students to ask questions,
            think independently and strengthen understanding
            through repetition, discussion and practical application.

          </p>

        </div>

      </section>

      {/* Subjects & Skills */}
      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="text-center mb-16">

          <p className="text-yellow-400 tracking-[4px] uppercase mb-4">

            Subjects & Skills

          </p>

          <h2 className="text-4xl md:text-6xl font-bold">

            Balanced Academic
            <span className="block text-yellow-400">

              Growth

            </span>

          </h2>

        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

          <div className="bg-white/10 backdrop-blur-xl border border-white/10 p-8 rounded-3xl">

            <h3 className="text-yellow-400 text-2xl font-bold mb-4">

              Mathematics

            </h3>

            <p className="text-gray-300 leading-8">

              Logical thinking and strong problem-solving foundation.

            </p>

          </div>

          <div className="bg-white/10 backdrop-blur-xl border border-white/10 p-8 rounded-3xl">

            <h3 className="text-yellow-400 text-2xl font-bold mb-4">

              Languages

            </h3>

            <p className="text-gray-300 leading-8">

              English, Hindi and communication development.

            </p>

          </div>

          <div className="bg-white/10 backdrop-blur-xl border border-white/10 p-8 rounded-3xl">

            <h3 className="text-yellow-400 text-2xl font-bold mb-4">

              Science

            </h3>

            <p className="text-gray-300 leading-8">

              Practical learning with conceptual clarity and curiosity.

            </p>

          </div>

          <div className="bg-white/10 backdrop-blur-xl border border-white/10 p-8 rounded-3xl">

            <h3 className="text-yellow-400 text-2xl font-bold mb-4">

              Life Skills

            </h3>

            <p className="text-gray-300 leading-8">

              Discipline, focus, leadership and teamwork development.

            </p>

          </div>

        </div>

      </section>

      {/* Smart Learning */}
      <section className="max-w-7xl mx-auto px-6 py-24">

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white/10 backdrop-blur-xl border border-white/10 p-10 rounded-3xl">

            <h3 className="text-yellow-400 text-3xl font-bold mb-5">

              Smart Classes

            </h3>

            <p className="text-gray-300 leading-8">

              Modern teaching tools and technology-enabled classrooms.

            </p>

          </div>

          <div className="bg-white/10 backdrop-blur-xl border border-white/10 p-10 rounded-3xl">

            <h3 className="text-yellow-400 text-3xl font-bold mb-5">

              Discipline

            </h3>

            <p className="text-gray-300 leading-8">

              Structured learning environment focused on consistency and focus.

            </p>

          </div>

          <div className="bg-white/10 backdrop-blur-xl border border-white/10 p-10 rounded-3xl">

            <h3 className="text-yellow-400 text-3xl font-bold mb-5">

              Holistic Growth

            </h3>

            <p className="text-gray-300 leading-8">

              Equal importance to academics, values, fitness and character.

            </p>

          </div>

        </div>

      </section>

    </div>

  )

}

export default Academics