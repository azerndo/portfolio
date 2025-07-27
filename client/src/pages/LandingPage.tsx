import React from 'react';
import { motion } from 'framer-motion';
import myImage from '../assets/my-pic.png';
import figma from '../assets/figma.png';
import canva from '../assets/canva.png';
import css from '../assets/css.png';
import html from '../assets/html.png';
import javascript from '../assets/javascript.png';
import tailwind from '../assets/tailwind.png';
import typescript from '../assets/typescript.png';
import premierpro from '../assets/premierpro.png';
import photoshop from '../assets/photoshop.png';
import indesign from '../assets/indesign.png';
import reactJS from '../assets/reactJS.png';
import npm from '../assets/npm.png';
import afterEffect from '../assets/aftereffects.png';
import ContactFooter from '../components/ContactFooter';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
};

const LandingPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen w-full bg-lime-600 overflow-hidden">
      <motion.div   
        className="flex flex-col items-center justify-center w-full max-w-6xl mx-auto flex-grow"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.p 
          className='text-xl md:text-3xl font-semibold -mb-10 mt-20 text-center text-lime-950'
          variants={itemVariants}
        >
          Hello, <span className='md:hidden text-lime-800'>I'm Dyan Azana</span> Welcome to my
        </motion.p>
        <motion.h1 
          className='text-7xl md:text-8xl lg:text-[200px] changa-one-regular text-center leading-none mt-8 md:mt-0 text-lime-950'
          variants={itemVariants}
        >
          PORTFOLIO
        </motion.h1>
        
        {/* Mobile Skills List - Left Aligned */}
        <div className="absolute top-[40%] left-4 w-auto md:hidden z-50">
          <motion.ul 
            className="space-y-3"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ staggerChildren: 0.1, delayChildren: 0.3 }}
          >
            {['UI/UX Designer', 'Web & Mobile Dev', 'Graphic Designer', '2D Animator'].map((skill, index) => (
              <motion.li
                key={index}
                className="text-base font-medium text-lime-900 bg-white/30 backdrop-blur-sm p-3 pr-6 rounded-lg border-r border-t border-b border-white/30 w-auto"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {skill}
              </motion.li>
            ))}
          </motion.ul>
        </div>
        
        <motion.div 
          className="relative -mt-10 md:-mt-20 w-full max-w-2xl ml-50 md:ml-0"
          variants={itemVariants}
        >
          <div className="relative">
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-lime-600/80 to-transparent z-10 rounded-b-lg" />
            <img 
              src={myImage} 
              alt="my-image" 
              className="w-full h-auto rounded-lg relative z-0"
            />
          </div>
          
          {/* Floating text box */}
          <motion.div 
            className="hidden md:block absolute -right-4 md:-right-50 md:top-1/2 top-10 -translate-y-1/2 w-64 md:w-md bg-white/30 backdrop-blur-sm p-6 rounded-xl shadow-xl z-50 border border-white/30 text-end"
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            whileHover={{ y: -5 }}
          >
            <h1 className="text-2xl font-bold text-lime-700 mb-3">I'M DYAN AZAÑA</h1>
            <p className="text-lime-950 text-base leading-relaxed">
              A passionate UI/UX Researcher and Designer, Web & Mobile Developer, and Graphic Designer.
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
      {/* portofolio content */}
      <motion.div
        className='bg-white w-full mx-auto rounded-t-[50px] p-10 z-50 drop-shadow-lg'
      >
        <motion.div
          className='flex flex-col items-center justify-center w-full max-w-6xl mx-auto'
        >
          <h1 className='changa-one-regular text-3xl text-lime-700'>Software Skills</h1>
          <div className="grid grid-cols-2 md:grid-cols-7 gap-8 mt-10">
            {[
              { src: figma, alt: 'Figma' },
              { src: canva, alt: 'Canva' },
              { src: html, alt: 'HTML5' },
              { src: css, alt: 'CSS3' },
              { src: javascript, alt: 'JavaScript' },
              { src: typescript, alt: 'TypeScript' },
              { src: reactJS, alt: 'ReactJS & Native' },
              { src: npm, alt: 'NPM' },
              { src: tailwind, alt: 'Tailwind CSS' },
              { src: photoshop, alt: 'Photoshop' },
              { src: indesign, alt: 'InDesign' },
              { src: premierpro, alt: 'Premiere Pro' },
              { src: afterEffect, alt: 'After Effects' },
            ].map((item, index) => (
              <motion.div 
                key={item.alt}
                className="flex flex-col items-center p-4 hover:bg-lime-100 rounded-lg transition-all duration-500 ease-in-out cursor-default"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <img 
                  src={item.src} 
                  alt={item.alt} 
                  className="w-20 h-20 object-contain mb-2"
                />
                <span className="text-gray-700 font-medium mt-2">{item.alt}</span>
              </motion.div>
            ))}
          </div>

          {/* Experience Section */}
          <motion.div
            className='mt-20 w-full'
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h1 className='changa-one-regular text-3xl text-lime-700 text-center mb-10'>Professional Experience</h1>
            
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-lime-300"></div>
              
              {/* Experience Items */}
              <div className="space-y-12">
                {/* LGU San Jacinto */}
                <motion.div
                  className="relative flex items-start md:justify-between md:items-center w-full"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-lime-600 rounded-full border-4 border-white shadow-lg z-10"></div>
                  <div className="ml-16 md:ml-0 md:w-5/12 md:text-right md:pr-8">
                    <div className="bg-lime-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                      <h3 className="text-xl font-bold text-lime-700">LGU San Jacinto</h3>
                      <p className="text-gray-600 text-sm mb-3">May 2024 - May 2025 • Contract • Remote</p>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-lime-600">Front End Lead</h4>
                          <p className="text-gray-700 text-sm mt-2">Led front-end development of web and mobile applications using React.js and React Native, ensuring seamless user experience and optimal performance.</p>
                          <div className="flex flex-wrap gap-2 mt-2">
                            <span className="px-2 py-1 bg-lime-200 text-lime-800 text-xs rounded">Front-End Development</span>
                            <span className="px-2 py-1 bg-lime-200 text-lime-800 text-xs rounded">Team Management</span>
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold text-lime-600">Product Designer</h4>
                          <p className="text-gray-700 text-sm mt-2">Designed mobile and web applications with complete UI/UX process from conceptualization to execution.</p>
                          <div className="flex flex-wrap gap-2 mt-2">
                            <span className="px-2 py-1 bg-lime-200 text-lime-800 text-xs rounded">UI/UX Design</span>
                            <span className="px-2 py-1 bg-lime-200 text-lime-800 text-xs rounded">User Research</span>
                            <span className="px-2 py-1 bg-lime-200 text-lime-800 text-xs rounded">Prototyping</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:block w-2/12"></div>
                  <div className="hidden md:block w-5/12"></div>
                </motion.div>

                {/* MusMedia */}
                <motion.div
                  className="relative flex items-start md:justify-between md:items-center w-full"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-lime-600 rounded-full border-4 border-white shadow-lg z-10"></div>
                  <div className="hidden md:block w-5/12"></div>
                  <div className="hidden md:block w-2/12"></div>
                  <div className="ml-16 md:ml-0 md:w-5/12 md:pl-8">
                    <div className="bg-lime-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                      <h3 className="text-xl font-bold text-lime-700">MusMedia</h3>
                      <p className="text-gray-600 text-sm mb-3">Nov 2024 - Mar 2025 • Contract • Hybrid</p>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-lime-600">UI Designer & Frontend Developer</h4>
                          <p className="text-gray-700 text-sm mt-2">Dual role focusing on user interface design and frontend development with modern technologies.</p>
                          <div className="flex flex-wrap gap-2 mt-2">
                            <span className="px-2 py-1 bg-lime-200 text-lime-800 text-xs rounded">React.js</span>
                            <span className="px-2 py-1 bg-lime-200 text-lime-800 text-xs rounded">React Native</span>
                            <span className="px-2 py-1 bg-lime-200 text-lime-800 text-xs rounded">UI/UX Design</span>
                            <span className="px-2 py-1 bg-lime-200 text-lime-800 text-xs rounded">Adobe Suite</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Uppend */}
                <motion.div
                  className="relative flex items-start md:justify-between md:items-center w-full"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-lime-600 rounded-full border-4 border-white shadow-lg z-10"></div>
                  <div className="ml-16 md:ml-0 md:w-5/12 md:text-right md:pr-8">
                    <div className="bg-lime-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                      <h3 className="text-xl font-bold text-lime-700">Uppend</h3>
                      <p className="text-gray-600 text-sm mb-3">Jan 2024 - Present • Full-time • Hybrid</p>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-lime-600">Chief Marketing Officer</h4>
                          <p className="text-gray-700 text-sm mt-2">Leading marketing strategies and brand development initiatives.</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-lime-600">Product Designer & Frontend Developer</h4>
                          <p className="text-gray-700 text-sm mt-2">Comprehensive product design and development using modern frameworks and design tools.</p>
                          <div className="flex flex-wrap gap-2 mt-2">
                            <span className="px-2 py-1 bg-lime-200 text-lime-800 text-xs rounded">UX Research</span>
                            <span className="px-2 py-1 bg-lime-200 text-lime-800 text-xs rounded">React Native</span>
                            <span className="px-2 py-1 bg-lime-200 text-lime-800 text-xs rounded">Framer</span>
                            <span className="px-2 py-1 bg-lime-200 text-lime-800 text-xs rounded">Bootstrap</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:block w-2/12"></div>
                  <div className="hidden md:block w-5/12"></div>
                </motion.div>

                {/* GDG Campus Bicol University */}
                <motion.div
                  className="relative flex items-start md:justify-between md:items-center w-full"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-lime-600 rounded-full border-4 border-white shadow-lg z-10"></div>
                  <div className="hidden md:block w-5/12"></div>
                  <div className="hidden md:block w-2/12"></div>
                  <div className="ml-16 md:ml-0 md:w-5/12 md:pl-8">
                    <div className="bg-lime-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                      <h3 className="text-xl font-bold text-lime-700">Google Developer Groups on Campus Bicol University</h3>
                      <p className="text-gray-600 text-sm mb-3">Aug 2023 - May 2024 • On-site</p>
                      <div>
                        <h4 className="font-semibold text-lime-600">Creatives and Branding Lead</h4>
                        <p className="text-gray-700 text-sm mt-2">Led creative initiatives and brand development for campus developer community.</p>
                        <div className="flex flex-wrap gap-2 mt-2">
                          <span className="px-2 py-1 bg-lime-200 text-lime-800 text-xs rounded">Graphic Design</span>
                          <span className="px-2 py-1 bg-lime-200 text-lime-800 text-xs rounded">Team Management</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* The Bicol Universitarian */}
                <motion.div
                  className="relative flex items-start md:justify-between md:items-center w-full"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-lime-600 rounded-full border-4 border-white shadow-lg z-10"></div>
                  <div className="ml-16 md:ml-0 md:w-5/12 md:text-right md:pr-8">
                    <div className="bg-lime-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                      <h3 className="text-xl font-bold text-lime-700">The Bicol Universitarian</h3>
                      <p className="text-gray-600 text-sm mb-3">2022 - Present • Part-time</p>
                      <div>
                        <h4 className="font-semibold text-lime-600">Layout Artist</h4>
                        <p className="text-gray-700 text-sm mt-2">Creating visual layouts and artistic content for university publication.</p>
                        <div className="flex flex-wrap gap-2 mt-2">
                          <span className="px-2 py-1 bg-lime-200 text-lime-800 text-xs rounded">Layout Design</span>
                          <span className="px-2 py-1 bg-lime-200 text-lime-800 text-xs rounded">Visual Arts</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:block w-2/12"></div>
                  <div className="hidden md:block w-5/12"></div>
                </motion.div>

                {/* Freelance */}
                <motion.div
                  className="relative flex items-start md:justify-between md:items-center w-full"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-lime-600 rounded-full border-4 border-white shadow-lg z-10"></div>
                  <div className="hidden md:block w-5/12"></div>
                  <div className="hidden md:block w-2/12"></div>
                  <div className="ml-16 md:ml-0 md:w-5/12 md:pl-8">
                    <div className="bg-lime-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                      <h3 className="text-xl font-bold text-lime-700">Freelance</h3>
                      <p className="text-gray-600 text-sm mb-3">2019 - Present • Remote</p>
                      <div>
                        <h4 className="font-semibold text-lime-600">Graphic Designer</h4>
                        <p className="text-gray-700 text-sm mt-2">Providing comprehensive graphic design services across various media and platforms.</p>
                        <div className="flex flex-wrap gap-2 mt-2">
                          <span className="px-2 py-1 bg-lime-200 text-lime-800 text-xs rounded">Adobe Photoshop</span>
                          <span className="px-2 py-1 bg-lime-200 text-lime-800 text-xs rounded">Adobe Illustrator</span>
                          <span className="px-2 py-1 bg-lime-200 text-lime-800 text-xs rounded">Video Editing</span>
                          <span className="px-2 py-1 bg-lime-200 text-lime-800 text-xs rounded">Canva</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
      {/* Add Contact Footer */}
      <ContactFooter />
    </div>
  );
};

export default LandingPage;