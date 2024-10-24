import React from 'react'
import { MdDashboard } from 'react-icons/md'; // Dashboard icon
import { FaCog, FaUsers } from 'react-icons/fa'; // Leads icon
import { AiOutlineLineChart } from 'react-icons/ai'; // Analytics icon
import { HiOutlineDocumentReport } from 'react-icons/hi'; // Reports icon
import { NavLink } from 'react-router-dom'


const Sidebar = ({ sidebarToggle }) => {


    return (
        <div className={`${sidebarToggle ? "hidden" : "block"} w-64 bg-dark fixed h-full px-4 py-2`} >
            <div className='my-2 mb-4'>
                <h1 className='text-2xl font-bold text-secondary'>EzyMetrics</h1>
            </div>
            <hr />
            <ul className='mt-3 text-white font-bold'>

                <li className='mb-2 rounded hover:shadow hover:bg-white/10 py-2'>
                    <NavLink to='/' className='px-3 text-secondary'>
                        <MdDashboard className='inline-block w-6 h-6 mr-2 text-accent -mt-2' />
                        Dashboard
                    </NavLink>
                </li>

                <li className='mb-2 rounded hover:shadow hover:bg-white/10 py-2'>
                    <NavLink to='/leads' className='px-3 text-secondary'>
                        <FaUsers className='inline-block text-accent w-6 h-6 mr-2 -mt-2' />
                        Leads
                    </NavLink>
                </li>

                <li className='mb-2 rounded hover:shadow hover:bg-white/10 py-2'>
                    <NavLink to='/analytics' className='px-3 text-secondary'>
                        <AiOutlineLineChart className='inline-block text-accent w-6 h-6 mr-2 -mt-2' />
                        Analytics
                    </NavLink>
                </li>

                <li className='mb-2 rounded hover:shadow hover:bg-white/10 py-2'>
                    <NavLink to='/reports' className='px-3 text-secondary'>
                        <HiOutlineDocumentReport className='inline-block text-accent w-6 h-6 mr-2 -mt-2' />
                        Reports
                    </NavLink>
                </li>

                <li className='mb-2 rounded hover:shadow hover:bg-white/10 py-2'>
                    <NavLink to='/setting' className='px-3 text-secondary'>
                        <FaCog className='inline-block text-accent w-6 h-6 mr-2 -mt-2'></FaCog>
                        Setting
                    </NavLink>
                </li>
                
            </ul>
        </div >
    )
}

export default Sidebar