import React from 'react'
import { useCart } from '../Context/CartContext'
import { FaRegTrashAlt } from 'react-icons/fa';
import { LuNotebookText } from 'react-icons/lu';
import { MdDeliveryDining } from 'react-icons/md';
import { GiShoppingBag } from 'react-icons/gi';
import { useUser } from '@clerk/clerk-react';
import { useNavigate } from 'react-router-dom';
import shoppingCart from "../assets/shopping-cart.png"

const Cart = ({location, getLocation}) => {
  const { cartItem , updateQuantity, deleteItem} = useCart()
  const {user} = useUser()
  const navigate = useNavigate()

 const totalPrice = cartItem.reduce((total, item) => total + item.price * item.quantity, 0)

  return (
    <div className='mt-10 max-w-6xl mx-auto mb-5 px-4 md:px-0'>
      {
        cartItem.length > 0 ? (
          <div>
            <h1 className='font-bold text-2xl '>My Cart ({cartItem.length})</h1>

              <div className='mt-10 space-y-4'>
                {cartItem.map((item, index) => {
                  return (
                    <div 
                      key={index} 
                      className='bg-gray-100 p-4 md:p-5 rounded-md flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-0'
                    >
                     
                      <div className='flex items-start md:items-center gap-4'>
                        <img 
                          src={item.images?.[0] || item.thumbnail}  
                          alt={item.title} 
                          className='w-20 h-20 rounded-md'
                        />
                        
                        <div className='space-y-1 md:w-[300px]'>
                          <h1 className='line-clamp-2'>{item.title}</h1>
                          <p className='text-blue-500 font-semibold text-lg'>${item.price}</p>
                          <p>Total Price: ${(item.price * item.quantity).toFixed(2)}</p>
                        </div>
                      </div>
                    
        
                    <div className='flex items-center justify-between w-full md:w-auto mt-2 md:mt-0'>
                        
                    
                        <div className='bg-blue-500 text-white flex gap-4 p-2 rounded-md font-bold text-xl items-center justify-center w-32 flex-shrink-0'>
                        
                          <button 
                            onClick={()=>updateQuantity(cartItem, item.id, "decrease")} 
                            className='cursor-pointer'
                          >-</button>

                          <span>{item.quantity}</span>

                          <button 
                            onClick={()=>updateQuantity(cartItem, item.id, "increase")} 
                            className='cursor-pointer'
                          >+</button>
                        </div>

                    
                      <span 
                        onClick={()=>deleteItem(item.id)} 
                        className='hover:bg-white/60 transition-all rounded-full p-3 hover:shadow-2xl md:self-center ml-4'
                    
                      >
                        <FaRegTrashAlt className='text-red-500 text-2xl cursor-pointer' />
                      </span>
                    </div> 
            

                    </div>
                  )
                })}
              </div>

           
              <div className='grid grid-cols-1 md:grid-cols-2 md:gap-20'>
                
                
                <div className='bg-gray-100 rounded-md p-5 md:p-7 mt-4 space-y-2'>
                  <h1 className='text-gray-800 font-bold text-xl'>Delivery Info</h1>

                  <div className='flex flex-col space-y-1'>
                    <label>Full Name</label>
                    <input 
                      type="text" 
                      placeholder='Enter your name' 
                      className='p-2 rounded-md' 
                      value={user?.fullName}
                    />
                  </div>

                  <div className='flex flex-col space-y-1'>
                    <label>Address</label>
                    <input 
                      type="text" 
                      placeholder='Enter your address' 
                      className='p-2 rounded-md' 
                      value={location?.county}
                    />
                  </div>

                  <div className='flex flex-col md:flex-row w-full gap-5'>
                    <div className='flex flex-col space-y-1 w-full'>
                      <label>State</label>
                      <input 
                        type="text" 
                        placeholder='Enter your state' 
                        className='p-2 rounded-md w-full' 
                        value={location?.state}
                      />
                    </div>

                    <div className='flex flex-col space-y-1 w-full'>
                      <label>PostCode</label>
                      <input 
                        type="text" 
                        placeholder='Enter your postcode' 
                        className='p-2 rounded-md w-full' 
                        value={location?.postcode}
                      />
                    </div>
                  </div>

                  <div className='flex flex-col md:flex-row w-full gap-5'>
                    <div className='flex flex-col space-y-1 w-full'>
                      <label>Country</label>
                      <input 
                        type="text" 
                        placeholder='Enter your country' 
                        className='p-2 rounded-md w-full' 
                        value={location?.country}
                      />
                    </div>

                    <div className='flex flex-col space-y-1 w-full'>
                      <label>Phone No</label>
                      <input 
                        type="text" 
                        placeholder='Enter your Number' 
                        className='p-2 rounded-md w-full'
                      />
                    </div>
                  </div>

                  <button className='bg-blue-500 text-white px-3 py-1 rounded-md mt-3 cursor-pointer w-full md:w-auto'>
                    Submit
                  </button>

                  <div className='flex items-center justify-center w-full text-gray-700'>
                    ---------OR-----------
                  </div>

                  <div className='flex justify-center'>
                    <button 
                      onClick={getLocation} 
                      className='bg-blue-500 text-white px-3 py-2 rounded-md'
                    >Detect Location</button>
                  </div>
                </div>

                
                <div className='bg-white border border-gray-100 shadow-xl rounded-md p-5 md:p-7 mt-4 space-y-2 h-max'>
                  <h1 className='text-gray-800 font-bold text-xl'>Bill details</h1>

                  <div className='flex justify-between items-center'>
                    <h1 className='flex gap-1 items-center text-gray-700'>
                      <LuNotebookText /> Items total
                    </h1>
                    <p>${totalPrice.toFixed(2)}</p>
                  </div>

                  <div className='flex justify-between items-center'>
                    <h1 className='flex gap-1 items-center text-gray-700'>
                      <MdDeliveryDining /> Delivery Charge
                    </h1>
                    <p className='text-blue-500 font-semibold'>
                      <span className='text-gray-600 line-through'>$25</span> FREE
                    </p>
                  </div>

                  <div className='flex justify-between items-center'>
                    <h1 className='flex gap-1 items-center text-gray-700'>
                      <GiShoppingBag /> Handling Charge
                    </h1>
                    <p className='text-blue-500 font-semibold'>$5</p>
                  </div>

                  <hr className='text-gray-200 mt-2' />

                  <div className='flex justify-between items-center'>
                    <h1 className='font-semibold text-lg'>Grand total</h1>
                    <p className='font-semibold text-lg'>
                      ${(totalPrice + 5).toFixed(2)}
                    </p>
                  </div>

                  <div>
                    <h1 className='font-semibold text-gray-700 mb-3 mt-7'>Apply Promo Code</h1>
                    <div className='flex flex-col sm:flex-row gap-3'>
                      <input 
                        type="text" 
                        placeholder='Enter code' 
                        className='p-2 rounded-md w-full'
                      />
                      <button className='bg-white text-black border border-gray-200 px-4 py-1 rounded-md'>
                        Apply
                      </button>
                    </div>
                  </div>

                  <button 
                    onClick={() => user ? navigate('/checkout') : navigate('/sign-in')} // Assuming checkout route exists
                    className='bg-blue-500 text-white px-3 py-2 rounded-md w-full cursor-pointer mt-3'
                  >
                    Proceed to Checkout
                  </button>
                </div>

              </div>
            </div>
        ) : (

          <div className='flex flex-col gap-3 justify-center items-center h-[500px] px-4 text-center'>
            <h1 className='text-black font-bold text-4xl md:text-5xl'>Your cart is empty!</h1>
            <img src={shoppingCart} alt="" className='w-[250px] md:w-[400px]' />
            <button 
              onClick={()=>navigate('/products')} 
              className='bg-blue-500 text-white px-5 py-2 rounded-md cursor-pointer'
            >
              Continue Shopping
            </button>
          </div>

        )
      }
    </div>
  )
}

export default Cart