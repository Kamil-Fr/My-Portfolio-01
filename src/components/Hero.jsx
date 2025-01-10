import React from "react";
import Navbar from "./Navbar";
import imghero from "../assets/images/imghero.png";
import github from "../assets/images/github.png";
import instagram from "../assets/images/instagram.png";
import linkedin from "../assets/images/linkedin.png";
import CV_KORZENIOWSKI_Kamil from "../assets/CV_KORZENIOWSKI_Kamil.pdf";

export default function Hero() {
  return (
    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[660px] flex flex-col items-center">
      <div className="md:h-[550px] h-[550px] w-[450px] bg-gradient-to-r absolute from-[#1c253f] via-[#5376d6] to-[#f14c4c] transform rotate-45 z-0 right-2 top-28 rounded-3xl"></div>
      <Navbar />
      <main
        id="home"
        className="flex flex-col md:flex-row items-center justify-center w-full px-4 md:px-52 pb-4 md:pb-32 md:pt-32 pt-24 mt-14 md:mt-0 z-10"
      >
        <section
          className="flex-1 mr-28 ml-12 md:text-left mt-10 md:mt-0 relative"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <div className="absolute -z-10 w-60 h-60 bg-[#82a6f5] rounded-full blur-3xl opacity-50 -top-5 -left-12"></div>
          <header>
            <h1 className="text-4xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Kamil KORZENIOWSKI
            </h1>
            <h2 className="text-xl sm:text-4xl md:text2xl font-bold text-[#180f4a] md:text-[#6088f5] mb-2">
              Frontend Developer
            </h2>
          </header>
          <p className="text-base sm:text-lg md:text-lg text-gray-200 mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            minima eum, exercitationem consequatur, qui illum quae reiciendis
            dignissimos ut eaque beatae, necessitatibus ipsam corporis eos nihil
            enim doloribus!
          </p>
          <div className="flex items-center space-x-4 mb-6">
            <a href="#">
              <img src={instagram} alt="Instagram" className="w-11 h-11" />
            </a>
            <a href="#">
              <img src={linkedin} alt="LinkedIn" className="w-11 h-11" />
            </a>
            <a href="#">
              <img src={github} alt="GitHub" className="w-11 h-11" />
            </a>
          </div>
          <a href={CV_KORZENIOWSKI_Kamil} download>
            <button
              className="inline-flex text-white border-2 py-2 px-6 focus:outline-none hover:bg-[#1d3c91] 
            hover:shadow-[0_0_40px_rgba(100,149,237,0.7)] rounded-full text-lg"
            >
              Download CV
            </button>
          </a>
        </section>
        <figure
          data-aos="fade-up"
          data-aos-delay="500"
          className="flex-1 flex justify-center md:justify-end mt-0"
        >
          <img
            src={imghero}
            alt="Hero Image"
            className="h-[200px] sm:h-[400px] md:h-[485px] w-[200px] sm:w-[480px] object-cover rounded-lg"
          />
        </figure>
      </main>
    </div>
  );
}
