import React, { useState } from 'react';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div>
      <section className="bg-gray-900 dark:bg-gray-900">
        <div className='container mx-auto px-4 py-4'>
          <nav className="border-gray-200 dark:bg-gray-900">
            <div className="flex flex-wrap items-center justify-between">
              <a className="flex items-center space-x-3 rtl:space-x-reverse">
                <span className="self-center text-2xl font-semibold whitespace-nowrap text-sky-600">Mern Stack Developer</span>
              </a>

              {/* Toggle Button */}
              <button
                onClick={toggleMenu}
                type="button"
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              >
                <span className="sr-only">Open main menu</span>
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                </svg>
              </button>

              {/* Navigation Links */}
              <div className={`${isMenuOpen ? 'block' : 'hidden'} w-full md:block md:w-auto mt-4`} id="navbar-default">
                <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                  {['home', 'about', 'skill', 'project', 'testimonials', 'contact'].map((section) => (
                    <li key={section}>
                      <a
                        href={`#${section}`}
                        className="block py-2 px-3 text-sky-600 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                      >
                        {section.charAt(0).toUpperCase() + section.slice(1)}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </section>
    </div>
  );
}

export default Navbar;
