import React from 'react'
import { FaBars, FaBell, FaSearch, FaUserCircle } from 'react-icons/fa'


const Navbar = ({ sidebarToggle, setSidebarToggle }) => {
      

    return (
        <nav className='bg-dark px-4 py-3 flex justify-between'>
            <div className='flex items-center text-xl'>
                <FaBars className='text-white me-4 cursor-pointer hover:shadow hover:bg-white/10' onClick={() => setSidebarToggle(!sidebarToggle)} />
               
            </div>
            
            <div className='flex items-center gap-x-5'>
                <div className='relative'>
                    <span className='relative md:absolute inset-y-0 left-0 flex items-center pl-2'>
                        <button className='p-1 focus:outline-none text-white md:text-black'><FaSearch /></button></span>
                    <input type="text" className='w-full px-4 py-1 pl-12 rounded shadow outline-none hidden md:block' placeholder='Search...' />
                </div>

                <div className='text-white'>
                    <FaBell className='w-6 h-6' />
                </div>
                <div className='relative'>
                    <button className='text-white group'>
                        <FaUserCircle className='w-6 h-6 mt-1' />
                        <div className='z-10 hidden absolute rounded-lg bg-white shadow w-32 group-focus:block top-full right-0'>
                            <ul className='py-2 text-sm text-gray-950'>
                                <li>Logout</li>
                            </ul>
                        </div>
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar