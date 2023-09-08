import React from 'react'

const WhoAreWe = () => {
  return (
    <div>
        <div className='max-w-[1280px] w-full min-h-[100vh] mx-auto grid grid-cols-1 sm:grid-cols-2'>
            <div className='flex font-semibold flex-col justify-center py-[40px] sm:py-[0px] px-[10px] sm:px-[25px] md:px-[40px]'>
                <p className='text-3xl sm:text-4xl md:text-5xl font-semibold mb-[20px]'>Who We Are?</p>
                <p className='text-[#f8471e] font-bold text-xl md:text-2xl my-[10px] sm:my-[20px]'>We Help You Change For The Better</p>
                <p className='text-[1.1rem] mb-[25px]'>
                    Our training and development company called Skilldify specializes in Initiatives to equip working professionals and making them a high performance team by using techniques like-
                </p>
                <li className='text-[1.1rem] mb-[20px] pl-[15px]'>
                    H.R Consultancy and to create high performance teams that provide the organization with more output and high boom rate
                </li>
                <li className='text-[1.1rem] mb-[20px] pl-[15px]'>
                    Training and Development
                </li>
                <li className='text-[1.1rem] mb-[20px] pl-[15px]'>
                    Hiring and Recruitment
                </li>
                <p className='text-[#f8471e] font-bold text-xl md:text-2xl'>
                    SKILLDIFY- Initiative to drive talent transformation across the Indian corporates.
                </p>
            </div>


            <div className='flex flex-col bg-[#1bb2be] justify-center  text-white py-[40px] sm:py-0 px-[40px]'>
                <p className='font-bold uppercase text-2xl md:text-2xl my-[15px] sm:my-[24px] md:my-[30px]'>
                    Let's number talk
                </p>
                <div className='grid grid-cols-2 gap-4 my-[30px] sm:my-[40px] md:my-[50px]'>
                    <div className='flex flex-col items-center justify-center'>
                        <span className='text-5xl sm:text-5xl md:text-6xl font-bold'>3+</span>
                        <span className='text-[0.9rem] md:text-2xl font-bold items-center'>Years in Business</span>
                    </div>

                    <div className='flex flex-col items-center justify-center'>
                        <span className='text-5xl sm:text-5xl md:text-6xl font-bold'>70+</span>
                        <span className='text-[0.9rem] md:text-2xl font-bold items-center'>Happy Customers</span>
                    </div>
                </div>

                <div className='grid grid-cols-2 gap-4 my-[30px] sm:my-[40px] md:my-[50px]'>
                    <div className='flex flex-col items-center justify-center'>
                        <span className='text-5xl sm:text-5xl md:text-6xl font-bold'>500+</span>
                        <span className='text-[0.9rem] md:text-2xl font-bold items-center'>Trainings</span>
                    </div>

                    <div className='flex flex-col items-center justify-center'>
                        <span className='text-5xl sm:text-5xl md:text-6xl font-bold'>20K+</span>
                        <span className='text-[0.9rem] md:text-2xl font-bold items-center'>Employees Trained</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WhoAreWe