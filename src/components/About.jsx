import React from 'react'
import aboutImg from '../assets/about.jpg'
import { motion } from 'framer-motion'
import { SlideRight } from '../ulities/animation'

const About = () => {
  return (
    <div className=''>
        <div className=' container grid grid-cols-1   md:grid-cols-2 py-28'>
            < motion.div
             variants={SlideRight(0.6)}
             initial='hidden'
             whileInView='visible'>
               <img src ={aboutImg} className="h-[350px] rounded-lg" />

            </motion.div>

            <div className=' flex flex-col text-justify gap-4'>
          
                <h1 className='text-3xl text-primary md:4xl font-bold'>Get Ready To Reach Your Fitness Goal</h1>
                <p className='text-gray-600 xl:max-w-[500px]'>At FitLife Gym, we offer more than just a workout space; we provide 
                   a comprehensive fitness experience designed to help you achieve your goals.</p>

                <p className='text-gray-600 xl:max-w-[500px]'>Our state-of-the-art facility features a wide range of equipment, from the 
                   latest cardio machines to free weights and resistance training tools</p>

            <div>
                <button className='primary-btn flex items-center gap-2 mt-8 '>Free trial</button>
            </div>

            </div>






        </div>

    </div>
  )
}

export default About