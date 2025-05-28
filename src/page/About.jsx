import React from 'react';

export default function About() {
  return (
    <div id='about'>
      <section className="bg-gray-900 dark:bg-gray-900 ">
        <div className='container mx-auto px-8 py-8'>
            <h1 className="text-4xl font-bold text-center text-sky-600 py-10">About</h1>
          <div className=' justify-center items-center flex flex-col md:flex-row'>
              <div className='text-center '>
                <p className='text-xl text-purple-300'>I'm a skilled software developer with experience in JavaScript, and expertise in frameworks like 
                  <em className='font-bold not-italic'> React, Node.js, Express.js and MongoDB.</em>
                   I'm a quick learner and collaborate closely with clients to create <em className='font-bold not-italic'> efficient, scalable, and user-friendly</em> solutions that solve real-world problems. Let's work together to bring your ideas to life!</p>
              </div>
          </div>
          <div className='flex justify-center items-center mt-10 md:flex-row flex-col gap-20'>
            <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <div className='flex justify-center items-center md:flex-row flex-col'>
                  <img src="\assets\responsive.Svg.gif" alt="" loading='lazy' className='w-[100px] h-[100px]' />
                  </div>
                  <p className='text-xl font-bold text-white text-centerc mt-10'>RESPONSIVE DESIGN</p>
                  
                </div>
                <div class="flip-card-back">
                  <p className='text-md text-white text-center'>An approach that makes websites visually appealing and functional across all devices — mobiles, tablets, and desktops.
                    It enhances user experience by adapting layout and content automatically.
                    Implemented using flexible grids, media queries, and scalable components</p>
                  
                </div>
              </div>
            </div>
            <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <div className='flex justify-center items-center'>
                  <img src="\assets\react-23c4d31a.gif" alt="" loading='lazy' className='w-[100px] h-[100px]' />
                  </div>
                  <p className='text-xl font-bold text-white text-center mt-10'>FRONT-END DEVELOPMENT</p>
                  
                </div>
                <div class="flip-card-back">
                  <p className='text-md text-white text-center'>It involves building dynamic and interactive user interfaces using React.js.
                  React enables reusable components, efficient state management, and a virtual DOM for fast rendering.
                  The focus is on creating responsive, user-friendly, and performant web applications.</p>
                </div>
              </div>
            </div>
            <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <div className='flex justify-center items-center'>
                  <img src="\assets\fullstack-36c09759.gif" alt="" loading='lazy' className='w-[100px] h-[100px]' />
                  </div>
                  <p className='text-xl font-bold text-white text-center mt-10 '>BACK-END DEVELOPMENT</p>
                  
                </div>
                <div class="flip-card-back">
                  <p className='text-md text-white text-center'>A powerful full-stack JavaScript framework combining MongoDB, Express.js, React.js, and Node.js.
                    It allows developers to build scalable, high-performance web applications using a unified language across the entire stack.
                    MERN streamlines development by offering an integrated ecosystem for both client-side and server-side programming.</p>
                </div>
              </div>
            </div>
          </div>
          </div>
         </section>
    </div>
  );
}
