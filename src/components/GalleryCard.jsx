import schoolImage3 from "../assets/school3.jpeg"
function GalleryCard({ image, title, description }) {
  return (

    <div>
      <div className="hover:scale-105 duration-350 cursor-pointer h-full flex flex-col">
          <img className="w-full h-64 object-cover rounded-2xl shadow-lg hover:scale-[1.02] duration-400 ease-in-out"
  src={image}
  alt="school"
/>
<h3 className="text-white font-semibold text-xl mt-4 ">{title}</h3>
<p className="text-gray-200 mt-2 leading-6 text-sm">{description}</p>
          </div>
    </div>

  )
}
export default GalleryCard