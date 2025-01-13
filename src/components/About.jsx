import React, { useState } from "react";
import imghero from "../assets/images/imghero.png";
import law from "../assets/images/law.png";
import developer from "../assets/images/developer.png";

export default function About() {
  const [showMore, setShowMore] = useState(false);

  const toggleContent = () => {
    setShowMore((prevShowMore) => !prevShowMore);
  };
  return (
    <section
      id="about"
      className="min-h-screen overflow-hidden flex items-center justify-center text-white px-4 sm:px-6 pt-10"
    >
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
        <figure
          data-aos="fade-right"
          data-aos-delay="500"
          className="flex flex-wrap justify-center gap-4 relative"
        >
          <div
            className="h-[200px] sm:h-[300px] w-[300px] sm:w-[400px] lg:h-[300px] lg:w-[500px] bg-gradient-to-l 
         from-[#f14c4c] via-[#5376d6] to-[#1c253f] absolute transform rotate-12 z-0 right-5 -top-2 md:top-10 rounded-full"
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
          <div className="absolute z-0 w-40 h-40 sm:w-60 sm:h-60 bg-[#82a6f5] rounded-full blur-3xl opacity-50 top-5 left-10"></div>
          <header>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
              About Me
            </h1>
          </header>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 leading-relaxed ">
            I’m Kamil, a self-motivated and enthusiastic frontend developer with
            a strong passion for coding and design. My journey into web
            development began with a curiosity for how websites work and has
            since grown into a dedication to creating user-friendly and visually
            appealing digital solutions.
          </p>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 leading-relaxed">
            But before my journey into programming, I was a lawyer.
          </p>
          {showMore && (
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
                A Short Story About Me
              </h2>
              <ul className="list-disc list-inside text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 leading-relaxed">
                <li>
                  I completed my law studies in Poland, where I then completed
                  my legal training in Warsaw and became an attorney-at-law.
                </li>
                <li>
                  I worked at the Patent Office and then at a law firm, where I
                  specialized in intellectual property (including copyright
                  law), industrial property (including patents and trademarks)
                  and the law of new technologies.
                </li>
                <li>
                  Due to my interests, I completed postgraduate studies at the
                  Polish Academy of Sciences in the field of Law of New
                  Technologies.
                </li>
                <li>
                  Among other things, because of my love of France, in December
                  2022 I decided to move to Paris. After 10 months, I managed to
                  do it. Due to the change of residence, I decided to change my
                  profession and chose programming.
                </li>
              </ul>

              <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
                What I Do
              </h2>
              <ul className="list-disc list-inside text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 leading-relaxed">
                <li>
                  Building responsive websites using HTML, CSS, and JavaScript.
                </li>
                <li>
                  Creating visually appealing designs with attention to detail
                  and usability.
                </li>
                <li>
                  Continuously learning modern frameworks and tools like React
                  and Tailwind CSS.
                </li>
              </ul>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
                My Mission
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 leading-relaxed">
                I aim to combine creativity and functionality to deliver
                exceptional user experiences. My current focus is on mastering
                the fundamentals of frontend development while exploring the
                best practices of modern web design.
              </p>
              <h3 className="text-xl sm:text-2xl font-semibold mb-4">
                When I’m not coding, you can find me:
              </h3>
              <ul className="list-disc list-inside text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 leading-relaxed">
                <li>
                  Exploring new technologies and trends in web development.
                </li>
                <li>Participating in online coding challenges.</li>
                <li>Enjoying living in Paris.</li>
              </ul>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 leading-relaxed">
                I’m excited to grow as a developer and contribute to impactful
                projects. Let’s connect and create something great together!
              </p>
            </div>
          )}
          <footer>
            <button
              onClick={toggleContent}
              className="inline-flex text-white border-2 py-2 px-4 sm:px-6 focus:outline-none hover:bg-[#1d3c91] 
            hover:shadow-[0_0_40px_rgba(100,149,237,0.7)] rounded-full text-sm sm:text-lg"
            >
              {showMore ? "Show Less" : "Learn More"}
            </button>
          </footer>
        </article>
      </div>
    </section>
  );
}
