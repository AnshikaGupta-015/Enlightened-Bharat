function AboutCard({ icon, title, description }){
    return(
       
            
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg hover:scale-105 duration-300 shadow-2xl">
            <div className="text-4xl mb-4">{icon}</div>
          <h3 className="text-2xl font-semibold text-white">{title}</h3>
          <p className="text-gray-200 mt-3 leading-7">{description}</p>
      </div>


        
    )
}
export default AboutCard