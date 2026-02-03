import { ClerkProvider } from '@clerk/clerk-react';
import { SignedOut, SignInButton, UserButton, SignedIn } from '@clerk/clerk-react'
import { MapPin } from 'lucide-react'
import React, { useState } from 'react'
import { CgClose } from 'react-icons/cg';
import { FaCaretDown } from 'react-icons/fa'
import { IoCartOutline } from 'react-icons/io5'
import { Link, NavLink } from 'react-router-dom'
import { useCart } from '../Context/CartContext';
import { HiMenuAlt1, HiMenuAlt3 } from 'react-icons/hi';
import ResponsiveMenu from '../components/ResponsiveMenu'
const Navbar = ({ location, getLocation, openDropdown, setOpenDropdown }) => {

    const {cartItem} = useCart()
    const[openNav, setOpenNav] = useState(false)

    const toggleDropdown = () => {
        setOpenDropdown(!openDropdown)
    }
    return (
        <div className='bg-white py-3 shadow-2xl px-4 md:px-0 sticky top-0 z-50 '>
            <div className='max-w-7xl mx-auto flex justify-between item-center'>

                <div className=' flex gap-7 items-center'>
                    <Link to={'/'}><h1 className='font-bold text-3xl font-serif'> <span className='text-blue-700'>i</span>commerce</h1></Link>

                    <div className='md:flex gap-1 cursor-pointer text-gray-700 items-center hidden'>
                        <MapPin className='text-blue-500' />
                        <span className='font-semibold'>{location ? <div className='-space-y-2'>
                            <p>{location.city_district}</p>
                            <p>{location.state}</p>
                        </div> : "Add Address"}</span>
                        <FaCaretDown onClick={toggleDropdown} />
                    </div>


                    {
                        openDropdown ? (
                            <div className='w-[250px] h-max shadow-2xl bg-white fixed top-16 left-62 border-2 p-4 border-gray-300 rounded-md'>

                                <h1 className='font-semibold text-xl flex justify-between items-center mb-4'>Change Location
                                    <span onClick={toggleDropdown} className='cursor-pointer p-1 rounded-full hover:bg-gray-100 transition-colors'>
                                        <CgClose className='h-5 w-5' />
                                    </span>
                                </h1>

                                <button onClick={getLocation} className='bg-blue-500 text-white w-full px-4 py-2 rounded-md cursor-pointer font-medium hover:bg-blue-600  active:scale-95 transition-all'>Detect My Location</button>
                            </div>
                        ) : null
                    }
                </div>

                <nav className='flex gap-7 items-center'>
                    <ul className='md:flex gap-7 items-center text-xl font-semibold hidden'>

                        <NavLink to={'/'} className={({ isActive }) => isActive ? 'border-b-3 transition-all border-blue-500 ' : 'transition-all duration-200  hover:-translate-y-1.5'}> <li>Home</li> </NavLink>

                        <NavLink to={'/Products'} className={({ isActive }) => isActive ? 'border-b-3 transition-all border-blue-500' : 'transition-all duration-200   hover:-translate-y-1.5'}> <li>Products</li> </NavLink>

                        <NavLink to={'/About'} className={({ isActive }) => isActive ? 'border-b-3 transition-all border-blue-500' : 'transition-all duration-200   hover:-translate-y-1.5'}> <li>About</li> </NavLink>

                        <NavLink to={'/Contact'} className={({ isActive }) => isActive ? 'border-b-3 transition-all border-blue-500' : 'transition-all duration-200   hover:-translate-y-1.5'}> <li>Contact</li> </NavLink>

                    </ul>

                    <Link to={'/Cart'} className='relative'>
                        <IoCartOutline className='h-7 w-7' />
                        <span className='bg-red-500 px-2 rounded-full absolute -top-3 -right-3 text-white'>{cartItem.length}</span>
                    </Link>

                    <div className='hidden md:block'>
                        <SignedOut >
                            <SignInButton className='bg-blue-500  px-3 py-1 rounded-md cursor-pointer text-white hover:border-3 hover:border-blue-500 hover:text-black hover:bg-white hover:font-semibold transition-all duration-100' />
                        </SignedOut >
                        <SignedIn>
                            <UserButton />
                        </SignedIn></div>

{
    openNav ? <HiMenuAlt3
     onClick={()=>setOpenNav(false)} 
     className='h-7 w-7 md:hidden '/>

     : <HiMenuAlt1
      onClick={()=>setOpenNav(true)}
       className='h-7 w-7 md:hidden '/> 
}

                </nav>

            </div>

<ResponsiveMenu openNav={openNav} setOpenNav={setOpenNav}  location={location} getLocation={getLocation}/>

        </div>
    )
}

export default Navbar
