import React from 'react'
import { FaStar } from 'react-icons/fa6'
import testimoni from '../assets/testimoni.jpg'

const Testimonies = () => {
  return (
    <div className='container '>
        <div className='  flex justify-around '>
            <div>
             <h1 className='text-primary text-3xl md:text-4xl font-bold' >What Our Happy Clients Say About US</h1>
             <p className=' max-w-[500px]'>Joining FitTshabi was one of the best decisions I've ever made. The trainers
                 are incredibly knowledgeable and supportive, and the variety of classes
                 keeps things exciting. I've seen amazing results in my fitness journey
                 and have made some great friends along the way!</p>


            </div>

          
                <div  className='space-y-2 ml-24 h-[320px] w-[350px] bg-slate-600'>
                  <img src={testimoni} alt="" className='h-[60px] width-[25px] rounded-full mt-7'/>
                    <div className='flex flex-col'>
                   
                             <p >Michael S</p>
                             <p>Happy Customer</p>
                    </div>
                    <div className='flex space-x-3'>
                        <FaStar/><FaStar/><FaStar/>

                    </div>
                    <div className=' text-justify'>
                        <p>Joining FitTshabi was one of the best decisions I've ever made.
                        I've seen amazing results in my fitness journey
                        and have made some great friends along the way!
                        </p>
                    </div>



            </div>









        </div>
    </div>
  )
}

export default Testimonies