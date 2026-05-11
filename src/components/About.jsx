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
            I’m Kamil, a legal and technology professional working at the intersection of law, artificial intelligence and frontend development. My background combines expertise in intellectual property, AI regulation and compliance with hands-on experience in building modern web applications and collaborating with technical teams.
          </p>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 leading-relaxed">
            Before moving into technology-focused roles, I built my career as a lawyer specializing in intellectual property and regulatory matters. Today, I combine legal expertise with technical skills to contribute to projects related to AI compliance, legal tech and digital products.
          </p>
          {showMore && (
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
                A Short Story About Me
              </h2>
              <ul className="list-disc list-inside text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 leading-relaxed">
                <li>
                 I completed my law studies in Poland, followed by legal training in Warsaw, becoming an attorney-at-law specializing in intellectual property, new technologies and regulatory matters. I gained professional experience at the Patent Office of the Republic of Poland and later at a law firm, working on projects related to intellectual property, digital services, online businesses and technology law.
                </li>
                <li>
                My growing interest in emerging technologies and artificial intelligence led me to complete postgraduate studies in Law of New Technologies at the Polish Academy of Sciences. Over time, I expanded my professional focus beyond legal advisory into technology and product-oriented work.
                </li>
                <li>
                 Currently, I combine legal expertise with hands-on experience in frontend development, AI compliance and legal tech projects. I work at the intersection of law, AI and technology, contributing to projects related to AI governance, regulatory analysis and modern web applications.
                </li>
                <li>
                  After moving to Paris, I continued developing both my legal and technical competencies while working in international and multidisciplinary environments.
                </li>
              </ul>

              <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
                What I Do
              </h2>
              <ul className="list-disc list-inside text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 leading-relaxed">
                <li>
                  Develop modern frontend applications using React, TypeScript and JavaScript.
                </li>
                <li>
                  Creating visually appealing designs with attention to detail
                  and usability.
                </li>
                <li>
                  Translate legal and regulatory requirements into practical product solutions.
                </li>
                <li>
                  Contribute to AI compliance and legal tech projects.
                </li>
                <li>
                  Work on projects related to AI governance, accessibility (WCAG), data protection and digital products.
                </li>

              </ul>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
                My Focus
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 leading-relaxed">
                My current focus is on combining legal expertise with technology and product development. I am particularly interested in AI compliance, AI governance and legal tech, while further developing my skills in full-stack development, data analysis and modern web technologies.

I enjoy translating complex regulatory requirements into practical digital solutions and collaborating across legal, technical and product teams.
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
                I’m particularly interested in projects that combine artificial intelligence, regulation, product thinking and modern technologies to build practical and responsible digital solutions.
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
