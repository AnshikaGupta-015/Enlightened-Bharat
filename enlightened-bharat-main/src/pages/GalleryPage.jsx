import image1 from "../assets/school1.jpeg"
import image2 from "../assets/school2.jpeg"
import image3 from "../assets/school3.jpeg"
import image4 from "../assets/school4.jpeg"
// import image5 from "../assets/school5.jpeg"
// import image6 from "../assets/school6.jpeg"

function GalleryPage() {

  const galleryImages = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
  ]

  return (

    <div className="bg-[#061224] text-white overflow-hidden">

      {/* Hero Section */}
      <section className="relative h-[65vh] flex items-center justify-center">

        <img
          src={image2}
          alt="Enlightened Bharat Gallery"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 text-center px-6 max-w-5xl">

          <p className="text-yellow-400 tracking-[5px] uppercase mb-5">

            Gallery

          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">

            Campus Life
            <span className="block text-yellow-400">

              & Learning Environment

            </span>

          </h1>

        </div>

      </section>

      {/* Gallery Grid */}
      <section className="max-w-7xl mx-auto px-6 py-24">

        <div className="text-center mb-16">

          <p className="text-yellow-400 tracking-[4px] uppercase mb-4">

            Our Campus

          </p>

          <h2 className="text-4xl md:text-6xl font-bold">

            Moments From
            <span className="block text-yellow-400">

              Enlightened Bharat

            </span>

          </h2>

        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {

            galleryImages.map((image, index) => (

              <div
                key={index}
                className="overflow-hidden rounded-3xl border border-white/10 group"
              >

                <img
                  src={image}
                  alt={`Campus Image ${index + 1}`}
                  className="w-full h-[280px] md:h-[350px] object-cover group-hover:scale-110 duration-500"
                />

              </div>

            ))

          }

        </div>

      </section>

      {/* Activities Section */}
      <section className="max-w-7xl mx-auto px-6 py-10">

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white/10 backdrop-blur-xl border border-white/10 p-10 rounded-3xl">

            <h3 className="text-yellow-400 text-3xl font-bold mb-5">

              Smart Learning

            </h3>

            <p className="text-gray-300 leading-8">

              Modern classrooms focused on conceptual understanding and practical learning.

            </p>

          </div>

          <div className="bg-white/10 backdrop-blur-xl border border-white/10 p-10 rounded-3xl">

            <h3 className="text-yellow-400 text-3xl font-bold mb-5">

              Discipline

            </h3>

            <p className="text-gray-300 leading-8">

              A structured environment that encourages focus, values and responsibility.

            </p>

          </div>

          <div className="bg-white/10 backdrop-blur-xl border border-white/10 p-10 rounded-3xl">

            <h3 className="text-yellow-400 text-3xl font-bold mb-5">

              Holistic Growth

            </h3>

            <p className="text-gray-300 leading-8">

              Equal importance to academics, physical fitness and character development.

            </p>

          </div>

        </div>

      </section>

      {/* Campus Life */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center">

        <div>

          <p className="text-yellow-400 tracking-[4px] uppercase mb-4">

            Campus Life

          </p>

          <h2 className="text-4xl md:text-6xl font-bold leading-tight">

            A Positive
            <span className="block text-yellow-400">

              Learning Atmosphere

            </span>

          </h2>

          <p className="text-gray-300 mt-8 text-lg leading-9">

            Our campus environment is designed to support
            focused learning, discipline, collaboration and
            overall personality development for every student.

          </p>

        </div>

        <div>

          <img
            src={image4}
            alt="Campus Life"
            className="w-full h-[320px] md:h-[500px] object-cover rounded-3xl shadow-2xl"
          />

        </div>

      </section>

    </div>

  )

}

export default GalleryPage