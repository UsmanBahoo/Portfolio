import React from 'react';

function Project() {
  const projects = [
    {
      title: 'Frontend Development',
      period: 'Jun 2022 - Present',
      icon: '/assets/React.Svg',
      position: 'left',
      technologies: 'React.js, Redux, Formik with Yup',
      points: [
        'Advanced skills in React.js for building dynamic web applications.',
        'Expertise in Redux for efficient state management.',
        'Experience with Formik and Yup for seamless form handling and validation.',
        'Applied Flux architecture to enhance data flow and maintainability.',
        'Implemented advanced architectural patterns for scalable applications.',
        'These are just a few of the many libraries.',
      ],
    },
    {
      title: 'Backend Development',
      period: 'Jan 2021 - May 2022',
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
      title: 'UI/UX Design',
      period: 'Aug 2020 - Dec 2021',
      icon: '/assets/Figma.svg',
      position: 'left',
      technologies: 'Figma, Adobe XD, Tailwind CSS',
      points: [
        'Created wireframes and prototypes using Figma.',
        'Designed responsive layouts with Tailwind CSS.',
        'Conducted user testing to refine interfaces.',
        'Collaborated with developers to ensure pixel-perfect implementation.',
        'Applied accessibility standards (WCAG) in designs.',
        'Streamlined design workflows with Adobe XD.',
      ],
    },
    {
      title: 'DevOps',
      period: 'Mar 2019 - Jul 2020',
      icon: '/assets/Docker.Svg',
      position: 'right',
      technologies: 'Docker, Kubernetes, AWS',
      points: [
        'Containerized applications using Docker for portability.',
        'Managed Kubernetes clusters for orchestration.',
        'Deployed applications on AWS EC2 and S3.',
        'Automated CI/CD pipelines with Jenkins.',
        'Monitored performance using Prometheus and Grafana.',
        'Ensured high availability with load balancers.',
      ],
    },
  ];

  return (
    <section className='bg-gray-900 py-12' id='project'>
      <div className="container mx-auto px-4 relative">
        {/* Timeline vertical line */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-full w-1 bg-white z-0"></div>

        {projects.map((proj, idx) => (
          <div
            key={idx}
            className={`relative mb-12 flex flex-col md:flex-row items-center md:items-start ${
              proj.position === 'left' ? 'md:justify-start' : 'md:justify-end'
            }`}
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
          </div>
        ))}
      </div>
    </section>
  );
}

export default Project;
