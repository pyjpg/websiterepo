import React from 'react';
import { BsArrowUpRight } from 'react-icons/bs';
import {motion} from 'framer-motion'
import { fadeIn } from '../variants';

const services = [
  {
    name: 'UI/UX Design',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    link: 'Learn more',
  },
  {
    name: 'Software Developer',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    link: 'Learn more',
  },
  {
    name: 'iOS Developer',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    link: 'Learn more',
  }
]

const Services = () => {
  return (
    <section className='section' id='services'>
      <div className="container mx-auto">
        <div className='flex flex-col lg:flex-row'>
          {/* text */}
        <motion.div
         variants={fadeIn('right', 0.3)}
         initial='hidden'
         whileInView={'show'}
         viewport={{ once: false, amount: 0.3 }}       
        className='flex-1  lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0 max-h-[620px] max-w-[420px] 
    
    rounded-half  
    my-8
    md:w-[800px]   
    md:p-2'>
          <h2 className='h2 text-accent mb-6'>What I Do.</h2>
          <h3 className='h3 max-w-[455px] mb-16'>

            I'm a Software Developer specialising in Mobile Development and Front-End
          </h3>
          <a href='#work'>
          <button className='btn btn-sm'>See my work</button>
          </a>
        </motion.div>
          {/* services */}
        <motion.div
        variants={fadeIn('left', 0.5)}
        initial='hidden'
        whileInView={'show'}
        viewport={{ once: false, amount: 0.3 }}  
        className='flex-1'>
          <div>
            {services.map((service, index)=> {
              const {name, description, link} = service;
              return (
                <div className='border-b border-white/20 h-[201px] mb-[48px] flex' key={index}> 
                  <div className='max-w-[556px]'>
                    <h4 className='text-[30px] tracking-wider font-primary font-semibold mb-5'>{name}</h4>
                    <p className='font-secondary leading-tight'>{description}</p>
                  </div>
                    <div className='flex flex-col flex-1 items-end '>
                      <a href='#' className='btn w-8 h-6 mb-[42px] flex justify-center'>
                        <BsArrowUpRight />
                      </a>
                      <a href='#' className='text-gradient text-sm'>{link}</a>
                    </div>
              </div>
              );
              
            })}
          </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
