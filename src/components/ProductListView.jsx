import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../Context/CartContext'

const ProductListView = ({ product }) => {
  const navigate = useNavigate()
  const { addToCart } = useCart()

  const getDeliveryDates = () => {
    const today = new Date()

    const tomorrow = new Date(today)
    tomorrow.setDate(today.getDate() + 1)

    const normalDelivery = new Date(today)
    normalDelivery.setDate(today.getDate() + 4)


    const formatDate = (date) =>
      date.toLocaleDateString('en-IN', {
        weekday: 'short',
        day: 'numeric',
        month: 'short',
      })

    return {
      tomorrow: formatDate(tomorrow),
      normal: formatDate(normalDelivery),
    }
  }

  const { tomorrow, normal } = getDeliveryDates()


  return (

    <div className='w-full mt-2'>
      <div className='bg-gray-100 flex flex-col sm:flex-row gap-4 sm:gap-6 items-start sm:items-center p-3 rounded-md'>
        <img src={product.thumbnail || product.images?.[0]} alt={product.title} className='w-full sm:w-44 md:w-48 h-48 sm:h-36 md:h-40 object-cover rounded-md flex-shrink-0' onClick={() => navigate(`/products/${product.id}`)} />
        <div className='space-y-2 w-full'>
          <h1 className='font-bold md:text-xl text-lg line-clamp-2 hover:text-blue-400'>{product.title}</h1>
          <p className='font-semibold flex items-center md:text-lg text-sm'>$<span className='md:text-4xl text-3xl'>{product.price}</span> ({product.discountPercentage}% off)</p>
          <p className="text-xs sm:text-sm text-gray-700">
            FREE delivery <span className="font-semibold">{normal}</span>
            <br />
            Or fastest delivery <span className="font-semibold">{tomorrow}</span>
          </p>
          <button onClick={() => addToCart(product)} className='bg-blue-500 text-white px-3 py-1 rounded-md'>Add to Cart</button>
        </div>
      </div>
    </div>
  )
}

export default ProductListView