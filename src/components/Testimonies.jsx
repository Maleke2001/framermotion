import React from 'react'
import { FaStar } from 'react-icons/fa6'
import testimoni from '../assets/testimoni.jpg'

const Testimonies = () => {
  return (
    <div className='container '>

        <div className='flex gap-64 '>
            <div className='space-y-7'>
             <h1 className='text-primary  text-3xl md:text-4xl max-w-[500px] font-bold' >What Our Happy Clients Say About US</h1>
             <p className=' max-w-[480px]'>Joining FitTshabi was one of the best decisions I've ever made. The trainers
                 are incredibly knowledgeable and supportive, and the variety of classes
                 keeps things exciting. I've seen amazing results in my fitness journey
                 and have made some great friends along the way!</p>

            </div>


                <div className=' h-[260px] w-[470px] bg-slate-600'>
                  <div className='ml-9 space-y-5'>

                     <div className='flex gap-10 items-center'> 
                    <img src={testimoni} alt="" className='h-[60px] width-[25px] rounded-full mt-7'/>
                     <div className='flex flex-col mt-9 '>

                             <p >Michael S</p>
                             <p>Happy Customer</p> 
                    </div>
                  </div>
                   
                    <div className=' text-justify space-y-4 '>
                        <div className='flex'>
                          <FaStar/>  <FaStar/>  <FaStar/>  <FaStar/>   <FaStar/>  
                        </div>
                        <p className='max-w-80'>Joining FitTshabi was one of the best decisions I've ever made.
                        I've seen amazing results in my fitness journey
                        and have made some great friends along the way!
                        </p>
                    </div>
                  </div>
                
            </div>
        </div>
    </div>
  )
}

export default Testimonies