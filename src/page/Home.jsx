import React, { useEffect, useState } from 'react';
import { useTheme } from '../context/useTheme';
import { Typewriter } from 'react-simple-typewriter';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

function Home() {
  const [leftVisible, setLeftVisible] = useState(false);
  const [rightVisible, setRightVisible] = useState(false);
  const { theme } = useTheme();
  const bgClass = theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-black';
  const textClass = theme === 'dark' ? 'text-white' : 'text-black';

  useEffect(() => {
    setTimeout(() => setLeftVisible(true), 100);
    setTimeout(() => setRightVisible(true), 400);
  }, []);
  return (
    <div id='home' className="overflow-x-hidden">
      <section className={bgClass}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 max-w-screen-xl">
          <div className="flex justify-between items-center md:flex-row flex-col">
            {/* Left Side */}
            <div className={`mt-24 transition-all duration-1000 ${leftVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-16'}`}> 
              <h1 className={`text-3xl font-medium ${textClass}`}>Hey! It's Me</h1>
              <h1 className="text-sky-600 text-6xl font-bold mt-2">USMAN BAHO</h1>
              <h1 className={`text-3xl mt-2 ${textClass}`}>
                I am
                <Typewriter
                  words={[' Mern Stack Developer']}
                  loop={true}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={2000}
                />
              </h1>
              {/* Social Icons */}
              <div className="flex mt-4 gap-2">
                <em className={`text-xl mt-2 not-italic ${textClass}`}>Follow me</em>
                <a href="https://github.com/UsmanBahoo">
                  <img src="/assets/github-142-svgrepo-com.svg" alt="Github" className="mt-2 rounded-full h-6 w-6 bg-white" />
                </a>
                <a href="https://www.linkedin.com/in/usman-bahoo-aa0926209/">
                  <img src="/assets/linkedin-svgrepo-com.svg" alt="Linkedin" className="mt-2 rounded-full h-6 w-6 bg-white" />
                </a>
                <a href="https://leetcode.com/">
                  <img src="/assets/leetcode.svg" alt="Leetcode" className="mt-2 rounded-full h-6 w-6 bg-white" />
                </a>
                <a href="https://www.codechef.com/dashboard">
                  <img src="/assets/cc-logo.svg" alt="CodeChef" className="mt-2 rounded-full h-6 w-6 bg-white" />
                </a>
              </div>
              {/* Buttons */}
              <div className={`${theme === 'dark' ? 'bg-gray-900' : 'bg-white'} flex items-center mt-4 gap-2 overflow-x-hidden overflow-y-hidden`} style={theme === 'light' ? { backgroundColor: '#fff', color: '#000' } : {}}>
                <a
                  href="mailto:usmanbahoo381@gmail.com"
                  className={`rgb-button sm:text-base text-center font-bold py-4 w-full rounded-full shadow-lg transform transition-transform duration-300 ${theme === 'dark' ? 'text-white' : 'text-black'}`}
                >
                  E-Mail
                </a>
                <label className="label">
                  <input type="checkbox" className="input" />
                  <span className="circle">
                    <svg
                      className="icon"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M12 19V5m0 14-4-4m4 4 4-4"
                      ></path>
                    </svg>
                    <div className="square"></div>
                  </span>
                  <p className={`title resume-title ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Resume</p>
                  <a href='/assets/USMAN BAHOO Mern Stack.pdf' className="title">Open</a>
                </label>
              </div>
            </div>
            {/* Right Side Image */}
            <div className={`mt-20 transition-all duration-1000 ${rightVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-16'}`}> 
              <img
                src="/assets/usman.jpg"
                alt="Usman Bahoo"
                className="rounded-full w-52 h-52 sm:w-72 sm:h-72 md:w-80 md:h-80 object-cover"
              />
            </div>
          </div>
          {/* Swiper Slider */}
          <div className="mt-20 flex justify-center items-center ">
            <Swiper
              modules={[Navigation, Autoplay]}
              spaceBetween={10}
              slidesPerView={5}
              navigation
              loop={true}
              autoplay={{ delay: 2500 }}
              breakpoints={{
                320: { slidesPerView: 2 },
                480: { slidesPerView: 3 },
                768: { slidesPerView: 4 },
                1024: { slidesPerView: 5 },
              }}
            >
              <SwiperSlide>
                <div className="flex justify-center items-center ">
                  <img src="/assets/MongoDB.svg" alt="MongoDB" className="w-[50px] h-[50px] " />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex justify-center items-center ">
                  <img src="/assets/Express.svg" alt="Express" className="w-[50px] h-[50px]" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex justify-center items-center ">
                  <img src="/assets/React.Svg" alt="React" className="w-[50px] h-[50px]" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex justify-center items-center ">
                  <img src="/assets/Next.svg" alt="Next.js" className="w-[50px] h-[50px]" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex justify-center items-center ">
                  <img src="/assets/Nodejs.Svg" alt="Node.js" className="w-[50px] h-[50px]" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex justify-center items-center ">
                  <img src="/assets/shopify.svg" alt="Shopify" className="w-[50px] h-[50px]" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex justify-center items-center ">
                  <img src="/assets/wordpress.svg" alt="WordPress" className="w-[50px] h-[50px]" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex justify-center items-center ">
                  <img src="/assets/woocommerce.svg" alt="WooCommerce" className="w-[50px] h-[50px]" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex justify-center items-center ">
                  <img src="/assets/Php.svg" alt="PHP" className="w-[50px] h-[50px]" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex justify-center items-center ">
                  <img src="/assets/laravel.svg" alt="Laravel" className="w-[50px] h-[50px]" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex justify-center items-center ">
                  <img src="/assets/database.svg" alt="SQL" className="w-[50px] h-[50px]" />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
