import React from "react";
import { motion as Motion } from "framer-motion";

function Skill() {
  return (
  <div id="skill" className="overflow-x-hidden">
      <section className="bg-gray-900 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 max-w-screen-xl">
          <h1 className="text-4xl font-bold text-center text-sky-600 py-10">
            Skill
          </h1>

          <Motion.div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6 justify-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {[
              ["html.png", "HTML"],
              ["css.png", "CSS"],
              ["Bootstrap.svg", "Bootstrap"],
              ["scss.png", "Sass"],
              ["tailwind.png", "Tailwind"],
              ["javascript.png", "JavaScript"],
              ["mongodb.png", "MongoDB"],
              ["expressjs.png", "Express"],
              ["reactjs.png", "React"],
              ["nodejs.png", "Node"],
              ["redux.png", "Redux"],
              ["Next.svg", "Next"],
              ["shopify.svg", "Shopify"],
              ["wordpress.svg", "WordPress"],
              ["woocommerce.svg", "WooCommerce"],
              ["Php.svg", "PHP"],
              ["laravel.svg", "Laravel"],
              ["database.svg", "SQL"],
              ["mongoose.png", "Mongoose"],
              ["material-ui.png", "Material UI"],
              ["git.png", "Git"],
              ["github.png", "GitHub"],
              
            ].map(([src, title]) => (
              <Motion.div
                className="flex flex-col items-center"
                key={title}
                whileHover={{ scale: 1.1 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <img
                  src={`/assets/${src}`}
                  alt={title}
                  className="w-[80px] h-[80px]"
                />
                <h1 className="text-xs text-center text-white mt-2">{title}</h1>
              </Motion.div>
            ))}
          </Motion.div>

          <h1 className="text-4xl font-bold text-center text-sky-600 py-10">
            Tools and Software
          </h1>

          <Motion.div
            className="flex flex-wrap justify-center gap-x-10 gap-y-10"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {[
              ["vscode.png", "VS Code"],
              ["ChatGPT.png", "ChatGPT"],
              ["chrome.png", "Chrome"],
              ["Impress.png", "Impress"],
              ["mongodbCompass.png", "Mongodb"],
              ["postman.png", "Postman"],
              
            ].map(([src, title]) => (
              <Motion.div
                className="sm:w-1/4 md:w-1/6 w-1/3 lg:w-1/12 flex flex-col items-center"
                key={title}
                whileHover={{ scale: 1.1 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <img
                  src={`/assets/${src}`}
                  alt={title}
                  className="w-[80px] h-[80px]"
                />
                <h1 className="text-xs text-center text-white mt-2">{title}</h1>
              </Motion.div>
            ))}
          </Motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section className='bg-gray-900 py-12' id='project'>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative max-w-screen-xl">
          {/* Timeline vertical line */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-full w-1 bg-white z-0"></div>

          {[ 
            {
              title: 'Frontend Development',
              period: 'July 2024 - Present',
              icon: '/assets/React.Svg',
              position: 'left',
              technologies: 'React.js, Redux-toolkit, Next.js, Tailwind CSS',
              points: [
                'Built dynamic React.js apps with functional components and hooks.',
                'Managed state using Redux-toolkit with actions and reducers.',
                'Built Next.js apps with SSR and static site generation.',
                'Designed responsive layouts using Tailwind CSS utilities.',
                'Created reusable React components with JavaScript.',
                'Optimized Next.js performance with image and code splitting.',
              ],
            },
            {
              title: 'Backend Development',
              period: 'Jan 2025 - Present',
              icon: '/assets/Nodejs.Svg',
              position: 'right',
              technologies: 'Node.js, Express, MongoDB',
              points: [
                'Built scalable RESTful APIs using Node.js and Express.',
                'Designed MongoDB schemas for efficient data storage.',
                'Implemented JWT-based authentication for secure endpoints.',
                'Optimized server performance with async/await patterns.',
                'Integrated middleware for request validation and logging.',
                'Experienced in microservices architecture.',
              ],
            },
            {
              title: 'Shopify Development',
              period: 'Sep 2024 - Present',
              icon: '/assets/shopify.svg',
              position: 'left',
              technologies: 'Shopify, Liquid, JavaScript, CSS',
              points: [
                'Developed custom Shopify themes using Liquid templating.',
                'Created responsive e-commerce stores with modern designs.',
                'Integrated third-party apps and payment gateways.',
                'Optimized store performance and loading speeds.',
                'Implemented custom checkout processes and cart functionality.',
                'Enhanced SEO and conversion rates for online stores.',
              ],
            },
            {
              title: 'WordPress WooCommerce',
              period: 'Sep 2024 - Present',
              icon: '/assets/wordpress.svg',
              position: 'right',
              technologies: 'WordPress, WooCommerce',
              points: [
                'Built custom WooCommerce stores with advanced functionality.',
                'Developed custom WordPress themes and plugins.',
                'Integrated payment gateways and shipping methods.',
                'Optimized database queries for better performance.',
                'Implemented custom product variations and attributes.',
                'Enhanced security with custom authentication systems.',
              ],
            },
            {
              title: 'PHP Laravel Development',
              period: 'Jul 2024 - Sep 2024',
              icon: '/assets/laravel.svg',
              position: 'left',
              technologies: 'Php, Laravel, MySQL, Eloquent ORM',
              points: [
                'Developed robust web applications using Laravel framework.',
                'Designed and optimized MySQL database schemas.',
                'Implemented RESTful APIs with Laravel Sanctum authentication.',
                'Used Eloquent ORM for efficient database operations.',
                'Created admin panels with role-based access control.',
                'Deployed applications with proper caching and optimization.',
              ],
            },
            {
              title: 'UI/UX Design',
              period: 'June 2023 - Present',
              icon: '/assets/Figma.svg',
              position: 'right',
              technologies: 'Figma',
              points: [
                'Created wireframes and prototypes using Figma.',
                'Designed responsive layouts with Tailwind CSS.',
                'Conducted user testing to refine interfaces.',
                'Collaborated with developers to ensure pixel-perfect implementation.',
                'Applied accessibility standards (WCAG) in designs.',
                'Streamlined design workflows with Adobe XD.',
              ],
            },
          ].map((proj, idx) => (
            <Motion.div
              key={idx}
              className={`relative mb-12 flex flex-col md:flex-row items-center md:items-start ${
                proj.position === 'left' ? 'md:justify-start' : 'md:justify-end'
              }`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
            >
              {/* Small screen icon above the card */}
              <div className="block md:hidden mb-4">
                <div className="w-12 h-12 mx-auto rounded-full bg-white flex items-center justify-center shadow-lg">
                  <img src={proj.icon} alt="icon" className="w-6 h-6" />
                </div>
              </div>

              {/* Left side card */}
              {proj.position === 'left' && (
                <div className="md:w-1/2 p-6 mt-10">
                  <div className="bg-[#0D1117] text-white p-6 rounded-lg shadow-lg">
                    <h1 className="text-2xl font-bold mb-2">{proj.title}</h1>
                    <h2 className="text-lg font-semibold mb-4">{proj.technologies}</h2>
                    <ul className="list-disc list-inside space-y-2 text-sm">
                      {proj.points.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {/* Timeline Dot and Icon for medium and up */}
              <div className="hidden md:flex z-10 absolute left-1/2 transform -translate-x-1/2 items-center mb-6 md:mb-0">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-lg mt-20">
                  <img src={proj.icon} alt="icon" className="w-6 h-6" />
                </div>
                <p
                  className={`text-sm text-gray-400 whitespace-nowrap mt-10 absolute top-1/2 transform -translate-y-1/2 ${
                    idx % 2 === 0 ? 'left-12' : 'right-12 text-right'
                  }`}
                >
                  {proj.period}
                </p>
              </div>

              {/* Right side card */}
              {proj.position === 'right' && (
                <div className="md:w-1/2 p-6 mt-10">
                  <div className="bg-[#0D1117] text-white p-6 rounded-lg shadow-lg">
                    <h1 className="text-2xl font-bold mb-2">{proj.title}</h1>
                    <h2 className="text-lg font-semibold mb-4">{proj.technologies}</h2>
                    <ul className="list-disc list-inside space-y-2 text-sm">
                      {proj.points.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </Motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Skill;
