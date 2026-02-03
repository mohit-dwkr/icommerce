import { UserButton, useUser } from '@clerk/clerk-react'
import React from 'react'
import { FaUserCircle } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { MapPin, X } from 'lucide-react'

const ResponsiveMenu = ({ openNav, setOpenNav, location, getLocation }) => {
  const { user } = useUser()

  return (
    <div
      className={`fixed top-0 bottom-0 z-50 w-[80%] sm:w-[60%] md:hidden bg-gradient-to-b from-white to-gray-100 shadow-2xl rounded-r-2xl px-6 py-8 flex flex-col justify-between transition-all duration-500 ease-in-out ${
        openNav ? 'left-0' : '-left-[100%]'
      }`}
    >
      
      <div>
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            {user ? (
              <UserButton />
            ) : (
              <FaUserCircle size={45} className="text-gray-500" />
            )}
            <div>
              <h1 className="font-semibold text-lg text-gray-800">
                Hello, {user?.firstName || 'Guest'}
              </h1>
              <p className="text-sm text-gray-500">
                {user ? 'Premium User' : 'Sign in for best experience'}
              </p>
            </div>
          </div>

          <button
            onClick={() => setOpenNav(false)}
            className="text-gray-600 hover:bg-gray-200 p-2 rounded-full transition-all"
          >
            <X size={22} />
          </button>
        </div>

        
        <nav className="mt-6">
          <ul className="flex flex-col gap-5 text-2xl font-medium text-gray-700">
            {[
              { name: 'Home', path: '/' },
              { name: 'Products', path: '/products' },
              { name: 'About', path: '/about' },
              { name: 'Contact', path: '/contact' },
            ].map((link, i) => (
              <Link
                key={i}
                to={link.path}
                onClick={() => setOpenNav(false)}
                className="hover:text-blue-600 hover:translate-x-1 transition-all duration-200"
              >
                {link.name}
              </Link>
            ))}
          </ul>
        </nav>
      </div>

      
      <div className="border-t border-gray-200 pt-5 mt-8">
        {location ? (
          <div className="flex items-center gap-3 text-gray-700">
            <MapPin className="text-blue-500" />
            <div className="leading-tight">
              <p className="font-semibold">{location.city_district}</p>
              <p className="text-sm text-gray-500">{location.state}</p>
            </div>
          </div>
        ) : (
          <button
            onClick={getLocation}
            className="flex items-center justify-center gap-2 w-full bg-blue-600 text-white font-medium py-2 rounded-lg hover:bg-blue-700 active:scale-95 transition-all">
            <MapPin size={18} /> Detect My Location
          </button>
        )}
      </div>
    </div>
  )
}

export default ResponsiveMenu
