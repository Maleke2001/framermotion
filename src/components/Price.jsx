import { delay } from 'framer-motion';
import React from 'react';
import { FaCheck } from "react-icons/fa";
import { motion } from 'framer-motion';
import { SlideLeft} from '../ulities/animation';

const Price = () => {
 
  const plans = [
    {
      name: 'Discover',
      price: 'R99',
      features: [
        '5 days per week',
        '4 group class monthly',
        'Online classes access',
        'Ebook fitness guideline'
      ],
      delay:0.6
    },
    {
      name: 'Enterprise',
      price: 'R299',
      features: [
        '5 days per week',
        '4 group class monthly',
        'Online classes access',
        'Ebook fitness guideline'
      ],
      delay:0.6
    },
    {
      name: 'Professional',
      price: 'R199',
      features: [
        '5 days per week',
        '4 group class monthly',
        'Online classes access',
        'Ebook fitness guideline'
      ],
      delay:0.6
    }
  ];

  return (
    <div className=' md:bg-[fbfbfb] h-[700px] '>
      <div className='flex flex-col items-center space-y-3 '>
        <h1 className='text-primary text-3xl md:text-4xl font-bold'>Choose the best plan</h1>
        <p className='text-gray-600'>Choose a plan that's right for your growing team, simple pricing & no hidden charges</p>
      </div>

      <div className='container grid grid-cols-1 mt-14 md:grid-cols-3 gap-6 '>
        {plans.map((plan, index) => (
          <motion.div 
          variants={SlideLeft(plan.delay)}
          initial='hidden'
          whileInView='visible'
          key={index} className='price-cart space-y-3 bg-slate-200 w-[290px] h-[340px] flex flex-col items-center'>
            <p className='mt-6 text-black'>{plan.name}</p>
            <div className='flex items-center'>
              <p className='text-3xl font-bold text-black'>{plan.price}</p>
              <p className='ml-1 text-black'>/Per Month</p>
            </div>
            <div className='text-justify space-y-3 text-black relative'>
              {plan.features.map((feature, featureIndex) => (
                <div key={featureIndex} className='flex items-center'>
                  <FaCheck className='text-primary' />
                  <p className='ml-2'>{feature}</p>
                </div>
              ))}
            </div>
            <div className='pt-8'>
              <button className='py-3 px-8 border-black bg-slate-100 text-black rounded-full hover:bg-primary'>Choose Plan</button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Price;
