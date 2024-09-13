import React from 'react'
import { GrYoga } from 'react-icons/gr'
import { FaDumbbell } from 'react-icons/fa'
import { GiGymBag } from 'react-icons/gi'
import { link, title } from 'framer-motion/client'
import { delay } from 'framer-motion'
import { motion } from 'framer-motion'
import { SlideLeft } from '../ulities/animation'

const Cards = () => {
    const equitmentdata =[
        {id:1,
         title:"Yoga Equitment",  
         description:"A cushioned surface that provides grip and comfort during poses.",  
         link:"/",
         icon:<GrYoga/>,
         delay:0.3
        },
        {id:2,
          title:"fitness Equitment",  
          description:"A cushioned surface that provides grip and comfort during poses.",  
          link:"/",
          icon:<GiGymBag/>,
          delay:0.6
         },
         {id:3,
          title:"Muscle Equitment",  
          description:"A cushioned surface that provides grip and comfort during poses.",  
          link:"/",
          icon:<FaDumbbell/>,
          delay:0.9
         }
    ]
  return (

    <div>
      <div className='container py-24'>
        <div className='grid grid-cols-1 gridsm:grid-col-2  md:grid-cols-4 gap-6 font-playfair'>
          <div className='space-y-4 p-6'>
            <h1 className='text-3xl md:4xl font-bold'>What we offer for you</h1>
            <p className='text-gray-500'>A cushioned surface that provides grip and comfort during poses.</p>
          </div>
          {
           equitmentdata.map((item) =>{
            return(
              <motion.div
              variants={SlideLeft(item.delay)}
              initial='hidden'
              whileInView='visible'
              key={item.id}
              className='space-y-4 p-6 bg-gray-200 hover:bg-white rounded-xl hover:shadow-[0_0_2px_0_rgba(0,_0,_0,_0.25)]'>
                 <div className='text-4xl'>{item.icon} </div>
                 <p className='text-20xl font-semibold'>{item.title}</p>
                 <p className='text-gray-500'>{item.description}</p>

                </motion.div>
            

            )

           })

          }



        </div>
      </div>
    </div>
  )
}

export default Cards