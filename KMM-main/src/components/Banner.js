import React from 'react';
import { FaGithub, FaYoutube, FaDribbble, FaTwitter, FaLinkedinIn} from 'react-icons/fa'
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import {fadeIn } from '../variants';

import Slider from './Slider';
import { SliderData } from './SliderData';



const Banner = () => {
  return <section className='min-h-[85vh] lg:min-h-[78vh] flex items-center' id='home'>
    <div className='container mx-auto'>
      <div className='flex flex-col gap-y-15 justify-center lg:flex-row lg:items-center'>
        <div className='flex-1 text-center font-secondary lg:text-left lg:pr-16'>
          <motion.h1 
            variants={fadeIn('left', 0.6)}
           inital='hidden' 
           whileInView={'show'} 
           viewport={{ once: false, amount: 0.7 }}
           className="mb-4 text-[40px] font-primary font-bold leading-[0.8] lg:text-[110px]">
            Naomi <span class=" bg-gradient-to-b from-purple-600 to-#FFD700-600 lg:text-[70px]">Matthews</span>
            
          </motion.h1>
          <motion.div
          variants={fadeIn('right', 0.6)}
          inital='hidden'
          whileInView={'show'} 
          viewport={{ once: false, amount: 0.7 }}
           className='mb-6 text-[26px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]'>
            <span className='text-white mr-4'>I am a<br></br></span>
            <TypeAnimation sequence={[
              'Developer',
              2000,
              'Engineer',
              2000,
              'Creator',
              2000
            ]}
            speed={50}
            className='text-[#FFD700]'
            wrapper='span'
            repeat={Infinity}/>
          </motion.div>
          <p className='mb-8 max-w-lg mx-auto lg:mx-0'>
            As a recent graduate with a BSc in Computer Games Development, I have gained extensive knowledge in programming languages such as C#, C++, Swift, and Xcode. In this portfolio, I aim to showcase my work and demonstrate my expertise as an iOS developer.
          </p>
          <div className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
          
          <a href="https://www.linkedin.com/in/naomileematthews/">
            <button className='btn btn-lg'>Contact Me</button>
            </a>
            
          </div>
          <div className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'>
            <a href='https://www.linkedin.com/in/naomileematthews/'>
              <FaLinkedinIn />
            </a>
            <a href='https://github.com/naomimatthews'>
              <FaGithub />
            </a>
            <a href='https://twitter.com/NaomiAvery02'>
              <FaTwitter/>
            </a>
          </div>
        </div>
          <div className=' hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px] '>
          <Slider slides={SliderData} className='rounded-full  
    my-8
    md:w-[800px]   
    md:p-2'/>
    
     
        </div>
      </div>
      </div>
    </section>;
};

export default Banner;
