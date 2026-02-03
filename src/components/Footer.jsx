import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook, FaInstagram, FaPinterest, FaTwitterSquare } from 'react-icons/fa'

const Footer = () => {
  return (
    
    <footer className='bg-gray-950 text-gray-300 py-5'>
      <div className='max-w-7xl mx-auto px-4 md:flex md:justify-between md:space-x-8'>

        
        <div className='mb-8 md:mb-0 space-y-3 flex-shrink-0'>
          <Link to='/' className='inline-block'>
          
            <h1 className='text-white font-serif text-3xl font-extrabold'>
              <span className='text-blue-500'>i</span>commerce
            </h1>
          </Link>
          <p className='text-sm max-w-xs'>Your Trusted Source for Smart Electronics.</p>
          <p className='text-sm'>123 Digital Blvd, Future Town, NY 10001</p>
          <p className='text-sm hover:text-blue-400 transition duration-200'>
            Email: <a href="mailto:new@Icommerce.com" className='text-blue-400'>new@Icommerce.com</a>
          </p>
          <p className='text-sm'>Phone: (800) 987-6543</p>
        </div>

        
        <div className='mb-8 md:mb-0'>
          <h3 className='text-xl font-bold text-white mb-4 border-b border-blue-600 pb-1 inline-block'>Customer Service</h3>
          <ul className='text-sm space-y-3'>
      
            <li className='hover:text-blue-400 transition duration-200'>
              Contact Us
            </li>

            <li className='hover:text-blue-400 transition duration-200'>
              Shipping & Returns
            </li>

            <li className='hover:text-blue-400 transition duration-200'>  FAQs</li>
          

          <li className='hover:text-blue-400 transition duration-200'>
            Order Tracking
          </li>

          <li className='hover:text-blue-400 transition duration-200'>
            Size Guide
          </li>

        </ul>
      </div>

      
      <div className='mb-8 md:mb-0'>
        <h3 className='text-xl font-bold text-white mb-4 border-b border-blue-600 pb-1 inline-block'>Follow Us</h3>
        <div className='flex space-x-5 mt-2'>
          
          <a href='#' aria-label='Facebook' className='text-2xl hover:text-blue-400 transition duration-200'>
            <FaFacebook />
          </a>
          <a href='#' aria-label='Instagram' className='text-2xl hover:text-blue-400 transition duration-200'>
            <FaInstagram />
          </a>
          <a href='#' aria-label='Twitter' className='text-2xl hover:text-blue-400 transition duration-200'>
            <FaTwitterSquare />
          </a>
          <a href='#' aria-label='Pinterest' className='text-2xl hover:text-blue-400 transition duration-200'>
            <FaPinterest />
          </a>
        </div>
      </div>

    
      <div className='max-w-md'>
        <h3 className='text-xl font-bold text-white mb-4 border-b border-blue-600 pb-1 inline-block'>Connect with Us</h3>
        <p className='mt-2 text-sm mb-4'>Subscribe for exclusive deals, new arrivals, and special updates.</p>
        <form action="" className='mt-4 flex shadow-lg'>
          <input
            type="email"
            placeholder='Your email address'
            
            className='w-full p-3 rounded-l-lg bg-gray-800 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-700'
          />
          
          <button
            type='submit'
            className='bg-blue-600 text-white font-semibold px-5 rounded-r-lg hover:bg-blue-500 transition duration-200'
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>

      
  <div className='mt-10 border-t border-gray-800 pt-6 text-center text-sm'>
    <p>&copy; {new Date().getFullYear()} <span className='text-blue-400 font-semibold'>Icommerce</span>. All rights reserved</p>
  </div>
    </footer >
  )
}

export default Footer