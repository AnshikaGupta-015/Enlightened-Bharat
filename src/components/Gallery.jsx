// import { useState } from "react";
// import GalleryCard from "./GalleryCard"

// import schoolImage1 from "../assets/school1.jpeg"
// import schoolImage2 from "../assets/school2.jpeg"
// import schoolImage3 from "../assets/school3.jpeg"
// import groundImage1 from "../assets/ground1.jpeg"
// import groundImage2 from "../assets/ground2.jpeg"
// import groundImage3 from "../assets/ground3.jpeg"

// const galleryData = [
//     {
//   image: schoolImage1,
//   title: "Campus Area",
//   description: "A modern and eco-friendly school campus environment."
// },
// {
//   image: schoolImage2,
//   title: "Sport",
//   description: "A modern and eco-friendly school campus environment."
// },
// {
//   image: schoolImage3,
//   title: "Campus Area",
//   description: "A modern and eco-friendly school campus environment."
// },
// {
//   image: groundImage1,
//   title: "Campus Area",
//   description: "A modern and eco-friendly school campus environment."
// },
// {
//   image: groundImage2,
//   title: "Campus Area",
//   description: "A modern and eco-friendly school campus environment."
// },
// {
//   image: groundImage3,
//   title: "Campus Area",
//   description: "A modern and eco-friendly school campus environment."
// }

// ]
// function Gallery(){
//     return(
//         <section className="mt-16 px-6">
//         <h2 className="text-4xl font-bold text-white text-center">Gallery</h2>
//         <p className="text-gray-200 text-center mt-4 max-w-2xl mx-auto leading-7">Moments of learning, culture, sports and creativity at Enlightened Bharat.</p>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">

//             {
//             galleryData.map((item) => (
//             <GalleryCard
//               image={item.image}
//               title={item.title}
//               description={item.description}
//             />
//             ))
//             }
          
       

//         </div>
//       </section>
//     )
// }
// export default Gallery

// ── Supabase fetch (old) ───────────────────────────────
// const { data, error } = await supabase
//   .from("gallery")
//   .select("*")
//   .order("created_at", { ascending: false })
// ──────────────────────────────────────────────────────

import { useEffect, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination } from "swiper/modules"

import "swiper/css"
import "swiper/css/pagination"

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000"

function Gallery() {

  const [images, setImages] = useState([])

  // =========================
  // FETCH GALLERY IMAGES
  // =========================

  const fetchGallery = async () => {

    try {

      const res = await fetch(`${API_URL}/api/gallery`)
      const data = await res.json()
      setImages(data)

    } catch (error) {

      console.log(error)

    }

  }

  useEffect(() => {

    fetchGallery()

  }, [])

  return (

    <section
      id="gallery"
      className="bg-[#061224] py-24 px-6 overflow-hidden"
    >

      <div className="max-w-7xl mx-auto">

        {/* Sanskrit Strip */}
        <div className="text-center mb-20">

          <h2 className="text-yellow-400 text-3xl md:text-5xl font-bold tracking-[8px] drop-shadow-[0_0_25px_rgba(250,204,21,0.6)]">

            ॥ सा विद्या या विमुक्तये ॥

          </h2>

          <p className="text-gray-400 mt-6 text-lg tracking-[3px]">

            True Knowledge Liberates The Soul

          </p>

          <div className="w-40 h-[2px] bg-yellow-400 mx-auto mt-6 rounded-full"></div>

        </div>

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">

          <p className="text-yellow-400 tracking-[5px] uppercase text-sm font-semibold mb-4">

            Campus Gallery

          </p>

          <h2 className="text-white text-4xl md:text-6xl font-bold leading-tight">

            Explore Our
            <span className="block text-yellow-400">

              Modern Gurukul Campus

            </span>

          </h2>

          <p className="text-gray-300 mt-8 text-lg leading-9">

            Experience the vibrant learning environment,
            smart classrooms, sports facilities and holistic campus life.

          </p>

        </div>

        {/* Slider */}
        <div className="mt-20">

          <Swiper

            modules={[Autoplay, Pagination]}

            spaceBetween={30}

            slidesPerView={1}

            loop={true}

            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}

            pagination={{
              clickable: true,
            }}

            breakpoints={{

              768: {
                slidesPerView: 2,
              },

              1024: {
                slidesPerView: 3,
              },

            }}

          >

            {

              images.map((image) => (

                <SwiperSlide key={image.id}>

                  <div className="relative group overflow-hidden rounded-3xl">

                    <img
                      src={image.imageUrl}
                      alt={image.title}
                      className="w-full h-[280px] md:h-[450px] object-cover group-hover:scale-[1.03] duration-500"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                    {/* Text */}
                    <div className="absolute bottom-6 left-6">

                      <h3 className="text-white text-2xl font-bold">

                        {image.title}

                      </h3>

                      <p className="text-yellow-400 mt-2">

                        {image.description}

                      </p>

                    </div>

                  </div>

                </SwiperSlide>

              ))

            }

          </Swiper>

        </div>

      </div>

    </section>

  )

}

export default Gallery