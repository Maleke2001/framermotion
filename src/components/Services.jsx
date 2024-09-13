import React from 'react'
import serviceImg from '../assets/service.jpg'
import { FaCheck } from "react-icons/fa";
import { motion } from 'framer-motion';
import { SlideLeft } from '../ulities/animation';
const Services = () => {
  return (
    <div>
        <div className=' container grid grid-cols-1 gap-24 py-44 md:grid-cols-2'>
            <div className='space-y-6'> 
                <h1 className='text-3xl  md:4xl font-bold'>Why Should people choose FitTshabi Services</h1>
               <div className='flex items-center gap-3'>
               <FaCheck className='text-primary'/>
                <p> Personal Training</p>
               </div>
               <p className='text-gray-600 xl:max-w-[500px]'> Our personal trainers can  provides individualized
                   exercise and fitness guidance to help clients achieve their health and fitness goals. </p>

               <div className='flex items-center gap-3'>
               <FaCheck className='text-primary' />
                <p> Expect Trainer</p>
               </div>
               <p className='text-gray-600 xl:max-w-[500px]'> Our expect trainers help our clients achieve their fitness
                   goals through personalized guidance, motivation, and expertise.  </p>

               <div className='flex items-center gap-3'>
                <FaCheck className='text-primary'/>
                <p> Flexible time</p>
               </div>
               <p className='text-gray-600 xl:max-w-[500px]'> There are many fitness classes that are offered during
                   off-peak-hours, such as early morning or late afternoon </p>
                

            </div>

            < motion.div
             variants={SlideLeft(0.6)}
             initial='hidden'
             whileInView='visible'>
           
                <img src={serviceImg} className='w-[500px] mt-24'/>
  
            </motion.div>







        </div>
    </div>
  )
}

export default Services