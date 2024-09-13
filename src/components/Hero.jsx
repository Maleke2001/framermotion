import React from 'react';
import { FaPlay } from 'react-icons/fa';
import heroImg from '../assets/hero.jpg';
import { motion } from 'framer-motion';
import { SlideRight, SlideUp } from '../ulities/animation';

const Hero = () => {
  return (
    <div className='container grid grid-cols-1 md:grid-cols-2 min-h-[650px] relative'>
      {/* Brand Info */}
      <div className='justify-start mt-44 md:py-0 '>
        <div className='text-center md:text-left space-y-6'>
          <motion.h1
            variants={SlideRight(0.6)}
            initial='hidden'
            animate='visible'
            className='text-5xl lg:text-6xl font-bold'>
            Gym Gives you the perfect <span className='text-primary'>Health</span>
          </motion.h1>
          <motion.p
           variants={SlideRight(1.2)}
           initial='hidden'
           animate='visible'
          className='text-gray-600 xl:max-w-[500px]'>
            Exercise may increase brain sensitivity Trusted Source to serotonin. These hormones relieve feelings of depression.
          </motion.p>
        </div>
        <motion.div 
         variants={SlideRight(1.5)}
         initial='hidden'
         animate='visible'
        className='flex justify-center items-center gap-8 md:justify-start mt-4'>
          <button className='primary-btn flex items-center gap-2 mt-8'>Order Now</button>
          <button className='flex items-center gap-2 mt-8'>
            <FaPlay /> Watch Now
          </button>
        </motion.div>
      </div>
      {/* Images */}
      < div className='flex justify-center items-center'>
        <motion.img
       
        variants={SlideUp(0.2)}
        initial='hidden'
        animate='visible'
        src={heroImg} alt='Hero' className='w-[300px]' />
      </div>
    </div>
  );
};

export default Hero;
