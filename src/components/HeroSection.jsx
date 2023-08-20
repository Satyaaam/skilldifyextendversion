import React from 'react'
import Navbar from './Navbar'
import './heroHelper.css'

const HeroSection = () => {
  return (
    <div className='hero_part h-fit'>
        <Navbar/>
        <div className='flex flex-col items-end py-5'>
            <div className='flex flex-col w-[55%] px-3'>
                <p className='text-white font-semibold text-4xl w-[50%] mt-[50px]'>Transforming
                    Talents to
                    Revolutionize
                    the Corporate
                    Work Places
                </p>
                <p className='text-gray-200 text-lg mt-[20px] w-[80%]'>
                    “Skilldify’s aim is to provide a healthy workplace for the right set of talent to the company without any fear of losing…
                </p>
                <p className='text-gray-200 text-[1rem] font-bold mt-[15px]'>
                    “HUMAN CAPITAL”
                </p>
                <hr className='mt-[20px] mb-[30px] w-[90%]'/>
                <p className='flex items-center gap-4'>
                    <div className='h-[70px] w-[70px] bg-[#f8471e] rounded-[50%] flex justify-center items-center'>
                        <i className="fa-solid fa-phone text-white  text-[2.3rem]"></i>
                    </div>

                    <div className='text-white'>
                        <p className='text-2xl font-semibold'>Call Us Today</p>
                        <p className='text-4xl font-bold'>8700-786-057</p>
                    </div>
                </p>
            </div>
        </div>
    </div>
  )
}

export default HeroSection