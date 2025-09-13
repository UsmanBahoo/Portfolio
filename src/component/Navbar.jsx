import React, { useState } from 'react';
import { useTheme } from '../context/useTheme';
// eslint-disable-next-line
import { motion } from 'framer-motion';


function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div>
  <section className={theme === 'dark' ? 'bg-gray-900' : 'bg-white'}>
        <motion.div
          initial={{ opacity: 0, y: -60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, type: 'spring', bounce: 0.2 }}
          className='w-full px-4 py-4 lg:container lg:mx-auto lg:max-w-screen-xl'
        >
          <nav className={`w-full border-gray-200 ${theme === 'dark' ? 'dark:bg-gray-900' : 'bg-white'}`}>
            <div className="flex flex-wrap items-center justify-between w-full">

              <a className="flex items-center space-x-3 rtl:space-x-reverse">
                <span className="mt-3 self-center text-xl font-semibold whitespace-nowrap text-sky-600">Mern Stack Developer</span>
              </a>

              {/* Mobile Menu Toggle Button */}
              <button
                onClick={toggleMenu}
                type="button"
                className={`fixed top-6 right-4 z-50 p-2 w-10 h-10 flex items-center justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : 'translate-x-0'}`}
                aria-label={isMenuOpen ? 'Close main menu' : 'Open main menu'}
              >
                <span className="sr-only">{isMenuOpen ? 'Close main menu' : 'Open main menu'}</span>
                {isMenuOpen ? (
                  // X (close) icon
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  // Hamburger icon
                  <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                  </svg>
                )}
              </button>

              {/* Navigation Links and Theme Toggle for Large Screens */}
              <div className="flex items-center w-full">
                <div className={`${isMenuOpen ? 'block' : 'hidden'} w-full lg:block lg:w-auto mt-4 lg:mt-0`} id="navbar-default">
                  <ul className="font-medium flex flex-col p-4 lg:p-0 mt-4 border rounded-lg lg:flex-row lg:space-x-8 rtl:space-x-reverse lg:mt-0 lg:border-0 dark:bg-gray-800 lg:dark:bg-gray-900 dark:border-gray-700">
                    {['home', 'about', 'skill', 'project', 'testimonials', 'contact'].map((section) => (
                      <li key={section}>
                        <a
                          href={`#${section}`}
                          className="block py-2 px-3 text-md text-sky-600 rounded-sm group relative overflow-hidden hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-white lg:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent"
                        >
                          <span className="relative z-10">{section.charAt(0).toUpperCase() + section.slice(1)}</span>
                          <span className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 z-0"></span>
                        </a>
                      </li>
                    ))}
                    {/* Theme Toggle Button for Small Screens (inside menu) */}
                    <li className="block lg:hidden mt-2">
                      <button
                        onClick={toggleTheme}
                        className="ml-0 p-2 inline-flex cursor-pointer"
                        aria-label="Toggle theme"
                        title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                      >
                        {theme === 'dark' ? (
                          // Dark icon
                          <img src="/assets/dark.png" alt="Dark icon" className="h-8 w-20" />
                        ) : (
                          // Light icon
                          <img src="/assets/light.png" alt="Light icon" className="h-8 w-20" />
                        )}
                      </button>
                    </li>
                  </ul>
                </div>
                {/* Theme Toggle Button for Large Screens (after navbar) */}
                <button
                  onClick={toggleTheme}
                  className="ml-4 p-2 hidden lg:inline-flex cursor-pointer"
                  aria-label="Toggle theme"
                  title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                >
                  {theme === 'dark' ? (
                    // Dark icon
                    <img src="/assets/dark.png" alt="Dark icon" className="h-8 w-20" />
                  ) : (
                    // Light icon
                    <img src="/assets/light.png" alt="Light icon" className="h-8 w-20" />
                  )}
                </button>
              </div>
            </div>
          </nav>
        </motion.div>
      </section>
    </div>
  );
}

export default Navbar;
