import React from "react";

export default function About() {
  return (
    <div id="about">
      <section className="bg-gray-900 dark:bg-gray-900 ">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 max-w-screen-xl">
          <h1 className="text-4xl font-bold text-center text-sky-600 py-10">
            About
          </h1>
          <div className="justify-center items-center flex flex-col md:flex-row">
            <div className="text-center max-w-7xl">
              <p className="text-xl text-white leading-relaxed">
                Hi! I'm <span className="text-sky-400 font-semibold">Usman Bahoo</span>, a Full Stack Developer with hands-on
                experience in <strong className="text-emerald-400">MERN Stack</strong> (MongoDB, Express.js,
                React.js, Node.js).
              </p>

              <p className="text-xl text-white mt-6 leading-relaxed">
               <strong className="text-red-400">PHP Laravel</strong> for building
                dynamic and scalable web applications. <span> I also work with <strong className="text-blue-400">SQL</strong> databases and have
                professional experience in </span>
              </p>

              <p className="text-xl text-white mt-6 leading-relaxed">
                I also have professional experience in <strong className="text-green-400">Shopify</strong> development, delivering customized e-commerce solutions.
              </p>

              <p className="text-xl text-white mt-6 leading-relaxed">
                I also work with <strong className="text-purple-400">WordPress</strong> development, creating custom themes, plugins, and comprehensive CMS solutions for diverse business needs.
              </p>

              <p className="text-xl text-white mt-6 leading-relaxed">
                I enjoy solving real-world problems with clean code and scalable
                architectures. Whether it's developing from scratch or improving
                existing systems, I bring full commitment to every project I
                work on. 
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center mt-10 md:flex-row flex-col gap-20">
            <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <div className="flex justify-center items-center md:flex-row flex-col">
                    <img
                      src="\assets\responsive.Svg.gif"
                      alt=""
                      loading="lazy"
                      className="w-[100px] h-[100px]"
                    />
                  </div>
                  <p className="text-xl font-bold text-white text-centerc mt-10">
                    RESPONSIVE DESIGN
                  </p>
                </div>
                <div class="flip-card-back">
                  <p className="text-md text-white text-center">
                    An approach that makes websites visually appealing and
                    functional across all devices — mobiles, tablets, and
                    desktops. It enhances user experience by adapting layout and
                    content automatically. Implemented using flexible grids,
                    media queries, and scalable components
                  </p>
                </div>
              </div>
            </div>
            <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <div className="flex justify-center items-center">
                    <img
                      src="\assets\react-23c4d31a.gif"
                      alt=""
                      loading="lazy"
                      className="w-[100px] h-[100px]"
                    />
                  </div>
                  <p className="text-xl font-bold text-white text-center mt-10">
                    React.js & Next.js
                  </p>
                </div>
                <div class="flip-card-back">
                  <p className="text-md text-white text-center">
                    It involves building dynamic and interactive user interfaces
                    using React.js. React enables reusable components, efficient
                    state management, and a virtual DOM for fast rendering. The
                    focus is on creating responsive, user-friendly, and
                    performant web applications.
                  </p>
                </div>
              </div>
            </div>
            <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <div className="flex justify-center items-center">
                    <img
                      src="\assets\fullstack-36c09759.gif"
                      alt=""
                      loading="lazy"
                      className="w-[100px] h-[100px]"
                    />
                  </div>
                  <p className="text-xl font-bold text-white text-center mt-10 ">
                    Express.js & Node.js & MongoDB
                  </p>
                </div>
                <div class="flip-card-back">
                  <p className="text-md text-white text-center">
                    A powerful full-stack JavaScript framework combining
                    MongoDB, Express.js, React.js, and Node.js. It allows
                    developers to build scalable, high-performance web
                    applications using a unified language across the entire
                    stack. MERN streamlines development by offering an
                    integrated ecosystem for both client-side and server-side
                    programming.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center mt-10 md:flex-row flex-col gap-20">
            <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <div className="flex justify-center items-center">
                    <img
                      src="/assets/shopify.svg"
                      alt="Shopify"
                      loading="lazy"
                      className="w-[100px] h-[100px]"
                    />
                  </div>
                  <p className="text-xl font-bold text-white text-center mt-10">
                    Shopify Development
                  </p>
                </div>
                <div class="flip-card-back">
                  <p className="text-md text-white text-center">
                    Building custom e-commerce stores using Shopify platform
                    with Liquid templating. Creating responsive themes,
                    integrating payment gateways, and optimizing for
                    conversions. Developing custom apps and enhancing store
                    functionality for better user experience.
                  </p>
                </div>
              </div>
            </div>

            <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <div className="flex justify-center items-center">
                    <img
                      src="/assets/wordpress.svg"
                      alt="WordPress"
                      loading="lazy"
                      className="w-[100px] h-[100px]"
                    />
                  </div>
                  <p className="text-xl font-bold text-white text-center mt-10">
                    WordPress & WooCommerce
                  </p>
                </div>
                <div class="flip-card-back">
                  <p className="text-md text-white text-center">
                    Developing custom WordPress themes and WooCommerce stores
                    with advanced functionality. Creating custom plugins,
                    payment integrations, and optimizing database performance.
                    Building secure, scalable e-commerce solutions with custom
                    product variations.
                  </p>
                </div>
              </div>
            </div>

            <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <div className="flex justify-center items-center">
                    <img
                      src="/assets/Php.svg"
                      alt="PHP"
                      loading="lazy"
                      className="w-[100px] h-[100px]"
                    />
                  </div>
                  <p className="text-xl font-bold text-white text-center mt-10">
                    PHP & Laravel & SQL
                  </p>
                </div>
                <div class="flip-card-back">
                  <p className="text-md text-white text-center">
                    Building robust web applications using Laravel framework
                    with PHP and MySQL. Implementing RESTful APIs, Eloquent ORM
                    for database operations, and authentication systems.
                    Creating admin panels with role-based access control and
                    optimized database schemas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
         
      </section>
    </div>
  );
}
