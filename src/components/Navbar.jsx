import React from 'react'
import Logo from '../assets/logo_design.png'
import { RiArrowDropDownLine } from 'react-icons/ri'
import './navbarHelper.css'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center md:px-8 md:py-5 max-w-[1280px]'>
        <div className='logo_div flex flex-col scale-80 md:scale-100'>
            <span className='text-4xl font-bold text-white'>Skilldify</span>
            <p className='mt-[5px] flex flex-wrap'>
                <span className='text-[#f8471e] uppercase font-bold'>Performance</span>.
                <span className='text-black uppercase font-bold'>Productivity</span>.
                <span className='text-[#1ab0c1] uppercase font-bold'>People</span>
            </p>
        </div>

        <div className='nav_list flex gap-10 text-white'>
            <li className='list-none uppercase cursor-pointer hover:underline font-semibold'>Home</li>
            <li className='list-none uppercase cursor-pointer hover:underline font-semibold'>About us</li>
            <li className='list-none uppercase cursor-pointer hover:underline font-semibold'>Contact us</li>

            <li className='more_list_item list-none uppercase cursor-pointer hover:underline font-semibold relative'>more 
            <i className="fa-solid fa-chevron-down ml-[5px]"></i>
            <div className='more_dropdown  px-2 absolute w-[240px] py-3 rounded-lg'>
                <div className='flex flex-col gap-1'>
                    <li className='more_list py-3 px-1'>Terms and Conditions</li>
                    <li className='more_list py-3 px-1'>Privacy Policy</li>
                    <li className='more_list py-3 px-1'>Shipping and Delivery</li>
                    <li className='more_list py-3 px-1'>Refund and Cancellation policy</li>
                </div>
            </div>
            </li>
        </div>

        <div className='flex flex-col text-white'>
            <span className='have_question font-semibold'>
                Have any questions?
            </span>
            <p className='phone_number text-xl font-bold items-right'>+91 8700786057</p>
        </div>


    </div>
  )
}

export default Navbar