import React from "react";
import imghero from "../assets/images/imghero.png";
import law from "../assets/images/law.png";
import developer from "../assets/images/developer.png";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen overflow-hidden flex items-center justify-center text-white px-4 sm:px-6"
    >
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
        <figure
          data-aos="fade-right"
          data-aos-delay="500"
          className="flex flex-wrap justify-center gap-4 relative"
        >
          <div
            className="h-[200px] sm:h-[300px] w-[300px] sm:w-[400px] lg:h-[300px] lg:w-[500px] bg-gradient-to-l 
         from-[#b3657d] via-[#5376d6] to-[#1c253f] absolute transform rotate-12 z-0 right-5 -top-2 md:top-10 rounded-full"
          ></div>
          <img
            src={developer}
            alt="about picture 1"
            className="absolute -top-2 left-5 sm:left-10 transform -translate-y-12 z-20 w-24 h-24 
          sm:w-32 sm:h-32 rounded-3xl shadow-lg"
          />
          <img
            src={imghero}
            alt="about picture 2"
            className="relative z-10 h-44 sm:w-40 sm:h-40 md:w-72 md:h-96 rounded-3xl shadow-lg"
          />
          <img
            src={law}
            alt="about picture"
            className="absolute bottom-0 right-5 sm:right-10 transform translate-y-12 z-10 w-20 h-20 sm:w-32 sm:h-32
          rounded-3xl shadow-lg"
          />
        </figure>

        <article
          data-aos="fade-left"
          data-aos-delay="500"
          className="text-center lg:text-left relative"
        >
          <div className="absolute z-0 w-40 h-40 sm:w-60 sm:h-60 bg-[#82a6f5] rounded-full blur-3xl opacity-50 -top-5 left-10"></div>
          <header>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
              About Me
            </h1>
          </header>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 leading-relaxed">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi
            nam, dolore dolorum, sapiente exercitationem odio rerum ab numquam
            maxime deleniti error. Ratione, est sed! Incidunt odit
            necessitatibus dolorum consectetur quas!
          </p>
          <footer>
            <button
              className="inline-flex text-white border-2 py-2 px-4 sm:px-6 focus:ouline-none hover:bg-[#1d3c91] 
            hover:shadow-[0_0_40px_rgba(100,149,237,0.7)] rounded-full text-sm sm:text-lg"
            >
              Learn More
            </button>
          </footer>
        </article>
      </div>
    </section>
  );
}
