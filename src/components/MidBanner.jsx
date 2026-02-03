import React from 'react'
import banner from '../assets/banner-1.jpg'
import { useNavigate } from 'react-router-dom'

const MidBanner = () => {
  const navigate = useNavigate()

  return (
    <div className="bg-gray-100 md:py-24 -mt-2">
      <div
        className="
          relative max-w-7xl mx-auto 
          h-[380px] sm:h-[450px] md:h-[550px] lg:h-[600px] 
          bg-cover bg-center 
          md:rounded-2xl 
          flex items-center justify-center
        "
        style={{
          backgroundImage: `url(${banner})`,
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        
        <div className="absolute inset-0 bg-black/60 md:rounded-2xl flex items-center justify-center px-4 sm:px-6">
          <div className="text-center text-white w-full max-w-2xl">
            <h1
              className="
                text-2xl sm:text-3xl md:text-5xl lg:text-6xl 
                font-bold mb-3 sm:mb-4 
                leading-tight
              "
            >
              Power Up with the Latest Tech
            </h1>
            <p
              className="
                text-sm sm:text-base md:text-lg lg:text-xl 
                mb-4 sm:mb-6 
                opacity-90
              "
            >
              Grab the hottest tech at the coolest prices with free shipping!
            </p>
            <button
              onClick={() => navigate('/Products')}
              className="
                bg-blue-500 
                hover:border-2 border-blue-500 hover:bg-transparent 
                hover:font-semibold 
                text-white font-medium 
                py-2 px-5 sm:py-2.5 sm:px-6 md:py-3 md:px-8 
                rounded-lg 
                transition-all duration-300 ease-in-out 
                cursor-pointer
                hover:scale-110 active:scale-95
              "
            >
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MidBanner
