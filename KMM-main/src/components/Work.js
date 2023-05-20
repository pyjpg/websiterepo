import React from "react";

import {motion} from 'framer-motion';

import {fadeIn} from '../variants'

import Img1 from '../assets/light2.png'

import Img3 from '../assets/dark1.png'


const Work = () => {
  return (
    <section className='section' id='work'>
  <div className='container mx-auto'>
    <div className='flex flex-col lg:flex-row gap-x-10'>
      <motion.div 
        variants={fadeIn('left', 0.2)}
        initial='hidden'
        whileInView={'show'}
        viewport={{ once: false, amount: 0.3 }}
        className='flex-1 flex flex-col gap-y-102 mb-10 lg:mb-0'>
        {/* text */}
        <div>
          <h2 className='h2 leading-tight text-accent mb-4 text-[30px] font-primary font-bold leading-[0.8] lg:text-[100px]'>
            Latest <br/>
            Work
          </h2>
          <p className='max-w-sm mb-16 from-purple-600 to-#FFD700-600 text-[40px]'>Creating Using Swift <br/> & SwiftUI</p>
          <a href="https://github.com/naomimatthews">        
          <button className="btn btn-lg">View all Projects</button>
          </a> 
          <div className='flex py-16 '>
  <ul className="lg:text-[35px] tracking-wider">
    <li className='py-5'>⮞ Data Modelling </li>
    <li className='py-4'>⮞ Data Networking </li>
    <li className='py-4'>⮞ Combine </li>
    <li className='py-4'>⮞ MVVM</li>
    <li className='py-4'>⮞ Libraries</li>
    <li className='py-5'>⮞ Navigation</li>
  </ul>
</div>

        </div>
      </motion.div>
      <motion.div 
        variants={fadeIn('right', 0.5)}
        initial='hidden'
        whileInView={'show'}
        viewport={{ once: false, amount: 0.3 }}
        className='flex-1 flex flex-col gap-y-10'>
        {/* image */}
        <div className='group relative overflow-hidden '>
          {/* overlay */}
          <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration'></div>
          {/* img */}
          <img 
            className='group-hover:scale-125 transition-all duration-500' 
            src={Img1} 
            alt="" 
            width='500px'
          />   
          {/* pretitle */}
          <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
            <span className='text-gradient'>
              Light Mode
            </span>
          </div>
          {/* title */}
          <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
            <span className='text-3xl text-white'>Expense Tracker</span>
          </div>
        </div>
        {/* image */}
        <div className='group relative overflow-hidden '>
          {/* overlay */}
          <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration'></div>
          {/* img */}
          <img 
              className='group-hover:scale-125 transition-all duration-500'
              src={Img3} 
              alt=""
              width='500px'
            />

          
          {/* pretitle */}
          <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
            <span className='text-gradient'>
              Dark Mode
            </span>
          </div>
          {/* title */}
          <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
            <span className='text-3xl text-white'>Expense Tracker</span>
          </div>
        </div>
      </motion.div>
    </div>
  </div>
</section>
  )
}

export default Work