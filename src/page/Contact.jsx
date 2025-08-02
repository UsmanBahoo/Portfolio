import React from 'react';

function Contact() {
  return (
    <div id="contact">
      <section className="bg-gray-900 dark:bg-gray-900">
        <div className="container mx-auto px-8 py-8">
            <h1 className="text-4xl font-bold text-center text-sky-600 py-10 underline decoration-sky-600 decoration-4 underline-offset-8">Get in Touch!</h1>
            <p className='text-xl font-normal text-sky-600 text-center'>I'm always excited to hear about new opportunities and collaborations. 
            <em className='block not-italic'>Don't hesitate to reach out and let's make something great</em> </p>

          <div className="flex justify-center items-center md:flex-row flex-col px-10 gap-10">
            <form action="https://fabform.io/f/xxxxx" method="post" className="max-w-md mt-20 p-6 bg-[#0D1117] border rounded-lg shadow-lg w-full">
                <h2 className="text-2xl font-bold mb-6 text-white text-center">Feedback Form</h2>
                    <div className="mb-4">
                        <label className="block text-white font-bold mb-2" for="name">
                    Name:
                    </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Enter your name"/>
                    </div>
                    <div className="mb-4">
                        <label className="block text-white font-bold mb-2" for="email">
                    Email:
                    </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Enter your email"/>
                    </div>
                    <div className="mb-4">
                        <label className="block text-white font-bold mb-2" for="feedback">
                    Feedback:
                    </label>
                        <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="feedback" rows="5" placeholder="Enter your feedback"></textarea>
                    </div>
                    <div className="text-center">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                        Submit
                    </button>
                    </div>
            </form>
            <div className="flex justify-center items-center">
                <img src="/assets/Contact.Svg" alt="image loading failed" className="max-w-sm w-full" />
            </div>
           </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
