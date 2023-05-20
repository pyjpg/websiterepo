import React from 'react';
import CountUp from 'react-countup';
import {useInView} from 'react-intersection-observer'
import Img from '../assets/profile.jpg'
import {motion} from 'framer-motion'
import { fadeIn } from '../variants';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <div className="section" id="about" ref={ref}>
      <div className="container mx-auto flex lg:flex">
  <div className="lg:w-1/2">
    <h2 className="h2 text-accent">About Me</h2>
    <h3 className="h3 mb-4">
      A curious Front-End Developer who enjoys
    </h3>
    <p className="mb-4 mb-md-5 mb-lg-6">Hi! I'm Naomi, a Front-End Developer based in Staffordshire, Stoke-on-Trent. I am currently designing and developing my own beautiful iOS apps.</p>
    <p className="mb-4 mb-md-5 mb-lg-6"> Previously, I was a graduate student at Staffordshire University in the Computer Games Development department, spending my time designing, building and marketing super cool video games for PC, VR and iPhones. I love creating, I've created content for years, on Instagram, Twitch, Youtube, Tiktok all kinds of different social media apps. I take pride in everything I create and develop, ensuring all my work is fun, captivating and functional. </p>
    <p className="mb-4 mb-md-5 mb-lg-6">Whilst I'm not creating games or apps, I love to dance and travel and my favourite animals are cats and bunnies, I really love cats and bunnies...</p>

    <div className="flex gap-x-6 lg:gap-x-10 mb-12">
      <div>
        <div>
          <div className="text-[40px] font-tertiary text-gradient mb-2">
            {inView ? <CountUp start={0} end={435} duration={3} /> : null}
          </div>
          <div className="font-primary text-sm tracking-[2px]">
            Hours of Experience
          </div>
        </div>
      </div>
      <div>
        <div>
          <div className="text-[40px] font-tertiary text-gradient mb-2">
            {inView ? (
              <CountUp start={0} end={18.12503} duration={3} />
            ) : null}
          </div>
          <div className="font-primary text-sm tracking-[2px]">
            Days of Experience
          </div>
        </div>
      </div>
      <div>
        <div>
          <div className="text-[40px] font-tertiary text-gradient mb-2">
            {inView ? <CountUp start={0} end={6} duration={3} /> : null}
          </div>
          <div className="font-primary text-sm tracking-[2px]">
            Projects Completed
          </div>
        </div>
      </div>
    </div>
    <div className="flex gap-x-8 items-center">
      <a href="https://www.linkedin.com/in/naomileematthews/">
        <button className="btn btn-lg">Contact Me</button>
      </a>
      <a href="#work" className="text-gradient btn-link">
        My Portfolio
      </a>
    </div>
  </div>
  <div className="lg:w-1/2 relative overflow-hidden w-[500px] h-[700px] py-16">
  <img
    className="group-hover:scale-125 transition-all duration-500  absolute top-0 bottom-0 left-0 right-0 border-4 border-white"
    src={Img}
    alt=""
    width="500px"
    style={{ objectFit: "cover", transform: "translateX(30px)", margin: "70px auto 0"}}
  />
</div>


</div>
</div>


  );
};

export default About;
