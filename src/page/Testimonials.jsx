import React from "react";
import { useTheme } from '../context/useTheme';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
  {
    name: "Leon Lee",
    country: "India",
    text: "I really am comfortable with collaborating and coding with Barry. His ingenious ideas give me a lot of ideas solving a problem multiple ways.",
    image: "https://i.pravatar.cc/40?img=5",
    linkedin: "https://linkedin.com",
  },
  {
    name: "Jane Doe",
    country: "USA",
    text: "Working with Barry was truly a great experience. His dedication and focus brought life to our projects.",
    image: "https://i.pravatar.cc/40?img=20",
    linkedin: "https://linkedin.com",
  },
  {
    name: "Ali Khan",
    country: "Pakistan",
    text: "Barry's problem-solving skills and teamwork have helped us scale efficiently and effectively.",
    image: "https://i.pravatar.cc/40?img=11",
    linkedin: "https://linkedin.com",
  },
  {
    name: "Sophia Lee",
    country: "Singapore",
    text: "I enjoyed the collaboration with Barry. He is technically sound and always eager to improve.",
    image: "https://i.pravatar.cc/40?img=26",
    linkedin: "https://linkedin.com",
  },
  {
    name: "Carlos Reyes",
    country: "Mexico",
    text: "His attention to detail and consistency made our work smoother and more professional.",
    image: "https://i.pravatar.cc/40?img=28",
    linkedin: "https://linkedin.com",
  },
  {
    name: "Fatima Zahra",
    country: "Morocco",
    text: "Barry's contributions were essential. He helped me see problems from multiple angles.",
    image: "https://i.pravatar.cc/40?img=31",
    linkedin: "https://linkedin.com",
  },
];

function Testimonials() {
  const { theme } = useTheme();
  const cardBg = theme === 'dark' ? 'bg-[#0D1117]' : 'bg-gray-100';
  const textClass = theme === 'dark' ? 'text-white' : 'text-black';
  return (
    <section className={theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-black'} id="testimonials">
      <div className="container mx-auto max-w-screen-xl px-2 sm:px-4 md:px-8 py-6 md:py-8">
        <h1 className="text-4xl font-bold text-center text-sky-600 py-2">
          Testimonials
        </h1>
        <p className="text-xs font-bold text-sky-400 mt-2 text-center">
          What our happy users say!
        </p>
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 1000, disableOnInteraction: false }}
          loop={true} 
          spaceBetween={20}
          breakpoints={{
             320: { slidesPerView: 1, spaceBetween: 8 },
            375: { slidesPerView: 1, spaceBetween: 10 },
            425: { slidesPerView: 1, spaceBetween: 12 },
            768: { slidesPerView: 2, spaceBetween: 15 },
            1024: { slidesPerView: 3, spaceBetween: 20 },
          }}
          className="mt-8"
        >
          {testimonials.map((t, index) => (
            <SwiperSlide key={index}>
              <div className={`rounded-xl shadow-md min-h-[320px] sm:min-h-[360px] flex flex-col justify-between ${cardBg} p-5`}>
                <div className="flex justify-between items-start mb-4">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 512 512"
                    className="text-sky-500"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"></path>
                  </svg>
                  <img
                    src={t.image}
                    alt="User Avatar"
                    className="w-10 h-10 rounded-full object-cover"
                  />
                </div>
                <p className={`text-lg mb-6 ${textClass} line-clamp-3`}>{t.text}</p>
                <div className="flex justify-between items-center">
                  <p className={`text-sm font-semibold ${textClass}`}>
                    {t.name}{" "}
                    <span className="text-sky-500 font-normal text-sm">
                      ({t.country})
                    </span>
                  </p>
                  <a
                    href={t.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sky-500"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.49 8.09H4.5V24H.49V8.09zm7.71 0h3.83v2.17h.05c.53-1 1.82-2.17 3.75-2.17 4.01 0 4.75 2.64 4.75 6.08V24h-4v-7.84c0-1.87-.03-4.28-2.61-4.28-2.61 0-3.01 2.03-3.01 4.13V24h-4V8.09z" />
                    </svg>
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}


// Hide Swiper pagination bullets
const style = document.createElement('style');
style.innerHTML = `.swiper-pagination { display: none !important; }`;
document.head.appendChild(style);

export default Testimonials;
