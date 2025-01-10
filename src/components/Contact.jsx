import React from "react";
import imghero from "../assets/images/imghero.png";

export default function Contact() {
  return (
    <section
      data-aos="fade-up"
      data-aos-delay="300"
      className="min-h-screen overflow-hidden justify-center flex items-center p-6 mt-10 relative"
    >
      <article className="shadow-lg rounded-lg flex flex-col md:flex-row max-w-4xl w-full relative">
        <aside className="w-full md:w-1/2 relative">
          <div
            className="absolute z-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[350px]
            sm:w-[400px] h-[300px] sm:h-[#400px] rounded-full bg-gradient-to-r from-[#97284d] via-[#f56c6c] to-[#3a55a5] 
            shadow-[0_0_70px_rgba(100,149,237,0.7)]"
          ></div>
          <img
            src={imghero}
            alt="Contact illustration"
            className="h-[300px] sm:h-[400px] md:h-[450px] w-[300px] sm:w-[480px] object-cover rounded-t-lg md:rounded-r-lg relative"
          />
        </aside>

        {/*Contact Form*/}
        <section className="p-8 w-full md:w-1/2">
          <header className="mb-6">
            <h2 className="text-4xl font-bold text-center text-white">
              Contact Me
            </h2>
          </header>
          <form className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-gray-300 font-medium mb-2"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Your name"
                className="w-full px-4 py-2 text-white bg-gray-900 rounded-lg focus:outline-none"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-gray-300 font-medium mb-2"
              >
                E-mail
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your e-mail"
                className="w-full px-4 py-2 text-white bg-gray-900 rounded-lg focus:outline-none"
              />
            </div>
            <div>
              <label
                htmlFor="Message"
                className="block text-gray-300 font-medium mb-2"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                placeholder="Your message"
                className="w-full px-4 py-2 text-white bg-gray-900 rounded-lg focus:outline-none"
              ></textarea>
            </div>
            <button
              className="w-full text-white border-2 py-2 px-6 focus:outline-none hover:bg-[#1d3c91] 
            hover:shadow-[0_0_40px_rgba(100,149,237,0.7)] rounded-full text-lg"
            >
              Send Message
            </button>
          </form>
        </section>
      </article>
    </section>
  );
}
