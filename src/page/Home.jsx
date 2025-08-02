import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

// You can also import assets if placed in /src/assets like this:
// import githubIcon from '../assets/github.svg'

function Home() {
  return (
    <div id='home'>
      <section className="bg-gray-900 dark:bg-gray-900">
        <div className="container mx-auto px-8 py-8">
          <div className="flex justify-between items-center md:flex-row flex-col">
            {/* Left Side */}
            <div className="mt-24">
              <h1 className="text-white text-3xl font-medium">Hey! It's Me</h1>
              <h1 className="text-sky-600 text-6xl font-bold mt-2">USMAN BAHO</h1>
              <h1 className="text-white text-3xl mt-2">
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
                <em className="text-white text-xl mt-2 not-italic">Follow me</em>
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
              <div className="bg-gray-900 flex items-center mt-4 gap-2 overflow-x-hidden overflow-y-hidden">
                <a
                  href="mailto:usmanbahoo381@gmail.com"
                  className="rgb-button sm:text-base text-white text-center font-bold py-4 w-full rounded-full shadow-lg transform transition-transform duration-300"
                >
                  E-Mail
                </a>
                <label class="label">
                  <input type="checkbox" class="input" />
                  <span class="circle"
                    ><svg
                      class="icon"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="M12 19V5m0 14-4-4m4 4 4-4"
                      ></path>
                    </svg>
                    <div class="square"></div>
                  </span>
                  <p class="title resume-title">Resume</p>
                  <a href='/assets/USMAN BAHOO Mern Stack.pdf' class="title">Open</a>
                </label>
              </div>
            </div>

            {/* Right Side Image */}
            <div className="mt-20">
              <img
                src="/assets/usman.jpg"
                alt="Usman Bahoo"
                className="rounded-full w-40 h-40 sm:w-60 sm:h-60 md:w-80 md:h-80 object-cover"
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
                    320: { slidesPerView: 2,  },   
                    480: { slidesPerView: 3,  },
                    768: { slidesPerView: 4, },
                    1024: { slidesPerView: 5,  },
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
