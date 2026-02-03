import React from 'react'
import { getData } from '../Context/DataContext'
import { useNavigate } from 'react-router-dom'

const Category = () => {
  const navigate = useNavigate()
  const { data } = getData()

  const getUniqueCategory = (data, property) => {
    let newVal = data?.map((curElem) => curElem[property])
    newVal = [...new Set(newVal)]
    return newVal
  }

  const categoryOnlyData = getUniqueCategory(data, 'category')

  return (
    <div className="bg-white mt-6">
      <div
        className="
          max-w-7xl mx-auto 
          flex flex-wrap justify-center 
          gap-3 sm:gap-4 md:gap-6 
          py-6 px-3 sm:px-6
        "
      >
        {categoryOnlyData?.slice(6, 12).map((item, index) => (
          <button
            key={index}
            onClick={() => navigate(`/category/${item}`)}
            className="
              uppercase tracking-wide text-[13px] sm:text-sm md:text-base font-semibold
              bg-gradient-to-r from-[#141E30] via-[#243B55] to-[#141E30]
              text-white px-5 sm:px-7 py-2 sm:py-2.5
              rounded-full cursor-pointer
              shadow-md shadow-blue-500/40
              hover:shadow-blue-500/70
              hover:scale-110 active:scale-95
              transition-all duration-300 ease-in-out
            "
          >
            {item.replace('-', ' ')}
          </button>
        ))}
      </div>
    </div>
  )
}

export default Category
