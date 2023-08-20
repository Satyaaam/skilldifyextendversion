import React from 'react'

const MadeInIndia = () => {
  return (
    <div>
        <div className='bg-[#f8471e] text-white grid gap-8 grid-cols-1 sm:grid-cols-3 py-6 px-3'>

            <div className='flex flex-col items-center justify-center gap-4'>
                <i className="fa-solid fa-star text-[6rem] md:text-[8rem]"></i>
                <span className='text-xl font-bold text-center'>Made In India</span>
                <p className='text-center font-semibold text-[0.9rem]'>Developed and conceptualized by the high grade Indian professionals having a great deal of experience in talent transformatios.</p>
            </div>
            
            <div className='flex flex-col items-center justify-center gap-4'>
                <i className="fa-solid fa-star text-[6rem] md:text-[8rem]"></i>
                <span className='text-xl font-bold text-center'>Made In India</span>
                <p className='text-center font-semibold text-[0.9rem]'>Enriched with the real life Indian corporate stories and issues, delivers realistic and analyzed solutions to day problems of corporates</p>
            </div>

            <div className='flex flex-col items-center justify-center gap-4'>
                <i className="fa-solid fa-star text-[6rem] md:text-[8rem]"></i>
                <span className='text-xl font-bold text-center'>Made In India</span>
                <p className='text-center font-semibold text-[0.9rem]'>It aims as an initiative to drive talent transformation across the Indian corporates and revolutionize their training techinques by helping them.</p>
            </div>

        </div>
    </div>
  )
}

export default MadeInIndia