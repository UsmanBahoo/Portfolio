import React from 'react';
// eslint-disable-next-line
import { motion } from 'framer-motion';

function Project() {
  return (
  <section className='bg-gray-900 dark:bg-gray-900 overflow-x-hidden'>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 max-w-screen-xl">
        <h1 className="text-4xl font-bold text-center text-sky-600 py-10">
          Projects
        </h1>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {/* Food Delivery */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, type: 'spring', bounce: 0.2 }}
            viewport={{ once: true }}
            className="bg-gray-900 dark:bg-gray-900 shadow-xl rounded-xl p-3 sm:p-4"
          >
            <a href="https://foodmern.vercel.app/" target="_blank" rel="noopener noreferrer">
              <img src="/assets/Food.png" alt="Food Delivery App Screenshot" className="w-full h-48 rounded mb-4 cursor-pointer hover:opacity-80 transition-opacity" />
            </a>
            <h3 className="text-xl font-bold mt-2 text-white flex justify-between">Food Delivery  <span>Mern Stack</span></h3>
            <p className="text-gray-400">A React + Express.js + MongoDB + Node.js-based food delivery system with categories, JWT authentication and Bcrypt password hashing.</p>
            <p className="mt-1 text-sm text-purple-500">MongoDB • Express.js • Node.js • React • TailwindCss</p>
            <a href="https://foodmern.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-blue-600 mt-4 inline-block">View Food Delivery →</a>
          </motion.div>

          {/* Chat Application */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, type: 'spring', bounce: 0.2, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-gray-900 dark:bg-gray-900 shadow-xl rounded-xl p-4"
          >
            <a href="https://camern.vercel.app/" target="_blank" rel="noopener noreferrer">
              <img src="/assets/Chat.png" alt="Chat Application Screenshot" className="w-full h-48 rounded mb-4 cursor-pointer hover:opacity-80 transition-opacity" />
            </a>
            <h3 className="text-xl font-bold mt-2 text-white flex justify-between">Chat Application <span>Mern Stack</span></h3>
            <p className="text-gray-400">A real-time chat web application built with React and Socket.io featuring instant messaging, user authentication, and responsive design.</p>
            <p className="mt-1 text-sm text-purple-500">React • Node.js • Socket.io • MongoDB • Express</p>
            <a href="https://camern.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-blue-600 mt-4 inline-block">View Chat Web Application →</a>
          </motion.div>

          {/* KeunePakistan */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, type: 'spring', bounce: 0.2, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gray-900 dark:bg-gray-900 shadow-xl rounded-xl p-4"
          >
            <a href="https://www.keunepakistan.com/" target="_blank" rel="noopener noreferrer">
              <img src="/assets/Keune.png" alt="Keune Pakistan Store Screenshot" className="w-full h-48 rounded mb-4 cursor-pointer hover:opacity-80 transition-opacity" />
            </a>
            <h3 className="text-xl font-bold mt-2 text-white flex justify-between">KeunePakistan <span>Shopify Store</span></h3>
            <p className="text-gray-400">A premium Shopify store for Keune professional hair care products featuring product catalogs and brand showcase.</p>
            <p className="mt-1 text-sm text-purple-500">Shopify • Liquid • Html • CSS • JavaScript </p>
            <a href="https://www.keunepakistan.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 mt-4 inline-block">View Keunepakistan Store →</a>
          </motion.div>


          {/* Salon Designer */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, type: 'spring', bounce: 0.2, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-gray-900 dark:bg-gray-900 shadow-xl rounded-xl p-4"
          >
            <a href="https://salondziners.com/" target="_blank" rel="noopener noreferrer">
              <img src="/assets/Salondziners.png" alt="Salon Dziners Store Screenshot" className="w-full h-48 rounded mb-4 cursor-pointer hover:opacity-80 transition-opacity" />
            </a>
            <h3 className="text-xl font-bold mt-2 text-white flex justify-between">Salon Designer  <span>Shopify Store</span></h3>
            <p className="text-gray-400">A sophisticated Shopify e-commerce store for salon and beauty products with custom design and optimized experience.</p>
            <p className="mt-1 text-sm text-purple-500">Shopify • Liquid • HTML • CSS • JavaScript</p>
            <a href="https://salondziners.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 mt-4 inline-block">View Salon Designer Store →</a>
          </motion.div>

          {/* Focuspc */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, type: 'spring', bounce: 0.2, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-gray-900 dark:bg-gray-900 shadow-xl rounded-xl p-4"
          >
            <a href="https://focuspc.co.uk/" target="_blank" rel="noopener noreferrer">
              <img src="/assets/Focuspc.png" alt="WordPress Website Screenshot" className="w-full h-48 rounded mb-4 cursor-pointer hover:opacity-80 transition-opacity" />
            </a>
            <h3 className="text-xl font-bold mt-2 text-white flex justify-between">Focuspc <span>WordPress Website</span></h3>
            <p className="text-gray-400">A custom WordPress website for gaming PC business with responsive design and optimized performance.</p>
            <p className="mt-1 text-sm text-purple-500">WordPress • HTML • CSS • JavaScript • Responsive Design</p>
            <a href="https://focuspc.co.uk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 mt-4 inline-block">View Focuspc Website →</a>
          </motion.div>

          {/* Eexor */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, type: 'spring', bounce: 0.2, delay: 0.5 }}
            viewport={{ once: true }}
            className="bg-gray-900 dark:bg-gray-900 shadow-xl rounded-xl p-4"
          >
            <a href="https://eexor.pk/" target="_blank" rel="noopener noreferrer">
              <img src="/assets/Eexdr.png" alt="WordPress Website Screenshot" className="w-full h-48 rounded mb-4 cursor-pointer hover:opacity-80 transition-opacity" />
            </a>
            <h3 className="text-xl font-bold mt-2 text-white flex justify-between">Eexor <span>WordPress Website</span></h3>
            <p className="text-gray-400">A modern WordPress business website for Eexor, featuring service pages and SEO optimization with contact forms.</p>
            <p className="mt-1 text-sm text-purple-500">WordPress • HTML • CSS • JavaScript • Responsive Design</p>
            <a href="https://eexor.pk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 mt-4 inline-block">View Eexor Website →</a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Project;
