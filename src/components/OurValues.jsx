import React from 'react'
import ourvalue1 from '../assets/ourvalue1.jpg'
import ourvalue2 from '../assets/ourvalue2.jpg'
import ourvalue3 from '../assets/ourvalue3.jpg'
// import ourvalue4 from '../assets/ourvalue4.jpg'
import ourvalue4 from '../assets/ourvalue4.png'


const OurValues = () => {
  return (
    <div className='bg-[#f7f7f8]'>
        <div className='flex flex-col max-w-[1280px] px-2 sm:px-4 md:px-5 sm:py-7 md:py-8 pb-[15px] '>

            <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold text-center my-3 sm:my-5 md:my-6'>Our Values</h2>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 md:gap-4 lg:gap-5'>


                <div className='flex flex-col bg-[#f2382c] text-white px-2 py-2 rounded-md'>
                    <img src={ourvalue1} alt=""  className='rounded-lg'/>
                    <p className='text-2xl sm:text-3xl font-bold text-center mt-[5px] mb-[10px]'>Performance Orientation</p>
                    <p className='text-center text-[1.1rem]'>
                        Make it simple and close effective to have access to top talent by helping train professionals in their fields and provide fulfillment to an organization anytime.
                    </p>
                </div>


                <div className='flex flex-col bg-[#f2382c] text-white px-2 py-2 rounded-md'>
                    <img src={ourvalue2} alt=""  className='rounded-lg'/>
                    <p className='text-2xl sm:text-3xl font-bold text-center mt-[5px] mb-[10px]'>Service Orientation</p>
                    <p className='text-center text-[1.1rem]'>
                        We actually support full outsource of functions be it finance, HR, product, management, recruitment, facilitation, etc.
                    </p>
                </div>


                <div className='flex flex-col bg-[#f2382c] text-white px-2 py-2 rounded-md'>
                    <img src={ourvalue3} alt=""  className='rounded-lg'/>
                    <p className='text-2xl sm:text-3xl font-bold text-center mt-[5px] mb-[10px]'>Human Resource Management</p>
                    <p className='text-center text-[1.1rem]'>
                        We help in HR management through our HR consultancy by making highly functional team of proffesionals that are highly performative.
                    </p>
                </div>


                <div className='flex flex-col bg-[#f2382c] text-white px-2 py-2 rounded-md'>
                    <img src={ourvalue4} alt=""  className='rounded-lg'/>
                    <p className='text-2xl sm:text-3xl font-bold text-center mt-[5px] mb-[10px]'>Client Centric</p>
                    <p className='text-center text-[1.1rem]'>
                        Make it simple and close effective to have access to top talent by helping train professionals in their fields and provide fulfillment to an organization anytime.
                    </p>
                </div>


            </div>
        </div>
    </div>
  )
}

export default OurValues