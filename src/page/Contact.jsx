import React from 'react';
import { useTheme } from '../context/useTheme';
// eslint-disable-next-line
import { motion } from 'framer-motion';

function Contact() {
  const { theme } = useTheme();
  return (
  <div id="contact" className="overflow-x-hidden">
      <section className={theme === 'dark' ? 'bg-gray-900' : 'bg-white'} style={theme === 'light' ? { backgroundColor: '#fff', color: '#000' } : {}}>
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: 'spring', bounce: 0.2 }}
          viewport={{ once: true }}
          className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 max-w-screen-xl"
        >
            <h1 className="text-4xl font-bold text-center text-sky-600 py-10 underline decoration-sky-600 decoration-4 underline-offset-8">Get in Touch!</h1>
            <p className='text-xl font-normal text-sky-600 text-center'>I'm always excited to hear about new opportunities and collaborations. 
            <em className='block not-italic'>Don't hesitate to reach out and let's make something great</em> </p>

          <div className="flex flex-col md:flex-row justify-center items-center px-2 sm:px-6 md:px-10 gap-6 md:gap-10">
      <form action="https://fabform.io/f/xxxxx" method="post" className={`max-w-md mt-10 md:mt-20 p-4 sm:p-6 border rounded-lg shadow-lg w-full ${theme === 'dark' ? 'bg-[#0D1117]' : 'bg-white'}`} style={theme === 'light' ? { backgroundColor: '#fff', color: '#000' } : {}}>
        <h2 className={`text-2xl font-bold mb-6 text-center ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Feedback Form</h2>
          <div className="mb-4">
            <label className={`block font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-black'}`} htmlFor="name">
          Name:
          </label>
            <input className={`shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline ${theme === 'dark' ? 'text-gray-700' : 'text-black'}`} id="name" type="text" placeholder="Enter your name"/>
          </div>
          <div className="mb-4">
            <label className={`block font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-black'}`} htmlFor="email">
          Email:
          </label>
            <input className={`shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline ${theme === 'dark' ? 'text-gray-700' : 'text-black'}`} id="email" type="email" placeholder="Enter your email"/>
          </div>
          <div className="mb-4">
            <label className={`block font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-black'}`} htmlFor="feedback">
          Feedback:
          </label>
            <textarea className={`shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline ${theme === 'dark' ? 'text-gray-700' : 'text-black'}`} id="feedback" rows="5" placeholder="Enter your feedback"></textarea>
          </div>
          <div className="text-center">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
            Submit
          </button>
          </div>
      </form>
      <div className="flex justify-center items-center mt-6 md:mt-0">
        <img src="/assets/Contact.Svg" alt="image loading failed" className="max-w-[220px] sm:max-w-sm w-full" />
      </div>
           </div>
        </motion.div>
      </section>
    </div>
  );
}

export default Contact;
