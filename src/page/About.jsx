import React from "react";
import { motion as Motion } from "framer-motion";

export default function About() {
  return (
  <div id="about" className="overflow-x-hidden">
      <section className="bg-gray-900 dark:bg-gray-900 ">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-10 max-w-screen-xl">
          <Motion.h1
            className="text-4xl font-bold text-center text-sky-600 py-10"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            About
          </Motion.h1>
          <div className="justify-center items-center flex flex-col md:flex-row gap-8 md:gap-16">
            <Motion.div
              className="text-center max-w-2xl md:max-w-3xl lg:max-w-4xl"
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Motion.p
                className="text-xl text-white leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 }}
              >
                Hi! I'm <span className="text-sky-400 font-semibold">Usman Bahoo</span>, a Full Stack Developer with hands-on
                experience in <strong className="text-emerald-400">MERN Stack</strong> (MongoDB, Express.js,
                React.js, Node.js).
              </Motion.p>
              <Motion.p
                className="text-xl text-white mt-6 leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <strong className="text-red-400">PHP Laravel</strong> for building
                dynamic and scalable web applications. <span> I also work with <strong className="text-blue-400">SQL</strong> databases and have
                professional experience in </span>
              </Motion.p>
              <Motion.p
                className="text-xl text-white mt-6 leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.3 }}
              >
                I also have professional experience in <strong className="text-green-400">Shopify</strong> development, delivering customized e-commerce solutions.
              </Motion.p>
              <Motion.p
                className="text-xl text-white mt-6 leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.4 }}
              >
                I also work with <strong className="text-purple-400">WordPress</strong> development, creating custom themes, plugins, and comprehensive CMS solutions for diverse business needs.
              </Motion.p>
              <Motion.p
                className="text-xl text-white mt-6 leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.5 }}
              >
                I enjoy solving real-world problems with clean code and scalable
                architectures. Whether it's developing from scratch or improving
                existing systems, I bring full commitment to every project I
                work on. 
              </Motion.p>
            </Motion.div>
          </div>
          <Motion.div
            className="flex justify-center items-center mt-10 md:flex-row flex-col gap-20"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
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
            <Motion.div
              class="flip-card"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
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
            </Motion.div>
            <Motion.div
              class="flip-card"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <div className="flex justify-center items-center">
                    <img
                      src="\assets\Node.gif"
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
            </Motion.div>
          </Motion.div>

          <Motion.div
            className="flex justify-center items-center mt-10 md:flex-row flex-col gap-20"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Motion.div
              class="flip-card"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <div className="flex justify-center items-center">
                    <img
                      src="/assets/Shopify.gif"
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
            </Motion.div>

            <Motion.div
              class="flip-card"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <div className="flex justify-center items-center">
                    <img
                      src="/assets/Wordpress.gif"
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
            </Motion.div>

            <Motion.div
              class="flip-card"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <div className="flex justify-center items-center">
                    <img
                      src="/assets/Php.gif"
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
            </Motion.div>
          </Motion.div>
        </div>
      </section>
    </div>
  );
}
