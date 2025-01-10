import React from "react";
import imghero from "../assets/images/imghero.png";
import react from "../assets/images/react.png";
import nodejs from "../assets/images/nodejs.png";
import tailwindcss from "../assets/images/tailwindcss.png";

const skillsData = [
  {
    id: 1,
    image: react,
    title: "React JS",
    description: "Lorem ipsum dolor sit amet.",
  },
  {
    id: 2,
    image: tailwindcss,
    title: "Tailwind CSS",
    description: "Lorem ipsum dolor sit amet.",
  },
  {
    id: 3,
    image: react,
    title: "React Native",
    description: "Lorem ipsum dolor sit amet.",
  },
  {
    id: 4,
    image: nodejs,
    title: "Node JS",
    description: "Lorem ipsum dolor sit amet.",
  },
];
const skillsDataOthers = [
  {
    id: 1,
    title: "Programming and Markup Languages",
    description: "• JavaScript\n• HTML5\n• CSS\n• TypeScript (in progress)",
  },
  {
    id: 2,
    title: "Frameworks and Libraries",
    description:
      "• React JS\n• React Native (in progress)\n• Sass\n• RWD\n• Tailwind CSS\n• Node.js\n• MongoDB\n• Express.js\n• Supabase\n",
  },
  {
    id: 3,

    title: "Development Tools",
    description:
      "• GitHub\n• Git\n• Webstorm\n• Visual Studio Code\n• Trello\n• Webpack\n• Babel\n• npm\n• Figma\n",
  },
  {
    id: 4,

    title: "Others",
    description: "• JSON\n• Rest API\n• Prince2\n• Scrum\n",
  },
];

const SkillBox = ({ image, title, description }) => (
  <article className="bg-gray-800 p-4 sm:p-6 rounded-lg shadow-lg text-center hover:bg-blue-700 transition-all duration-300">
    <figure className="flex justify-center mb-4">
      <img src={image} alt={title} className="w-16 h-16 sm:w-20 sm:h-20" />
    </figure>
    <header>
      <h3 className="text-lg sm:text-xl font-semibold mb-2">{title}</h3>
    </header>
    <p className="text-gray-400 text-sm sm:text-base">{description}</p>
  </article>
);
const SkillBoxOthers = ({ title, description }) => (
  <article className="bg-gray-800 p-4 sm:p-6 rounded-lg shadow-lg text-center hover:bg-blue-700 transition-all duration-300">
    <header>
      <h3 className="text-lg sm:text-xl font-semibold mb-2">{title}</h3>
    </header>
    <p className="text-gray-400 text-sm sm:text-base">{description}</p>
  </article>
);

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative min-h-screen overflow-hidden flex flex-col items-center text-white px-4 py-10"
    >
      <div
        className="absolute z-0 w-72 h-36 sm:w-96 sm:h-44 bg-[#3c6df5] rounded-full blur-3xl opacity-50 top-20 sm:top-28 
      left-1/2 transform -translate-x-1/2"
      ></div>
      <img
        src={imghero}
        alt="Left picture"
        className="absolute z-20 left-2 top-2 sm:left-16 sm:top-16 transform -rotate-12 w-20 h-auto sm:w-32 opacity-70"
      />
      <div
        data-aos="fade-up"
        data-aos-delay="300"
        className="realtive z-20 text-center space-y-6 sm:space-y-10"
      >
        <header>
          <h1 className="text-3xl sm:text-4xl font-bold">
            My Experise <br /> and <span className="text-blue-400">Skills</span>
          </h1>
          <p className="text-gray-400 mt-2 sm:mt-4 text-sm sm:text-base">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum,
            aperiam eos nemo dicta commodi eveniet <br /> ipsa laudantium
            eligendi voluptates qui quo eaque laboriosam optio! Accusamus
            consequuntur quas totam placeat vero.
          </p>
        </header>
        <section
          data-aos="fade-up"
          data-aos-delay="500"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-4 sm:mr-8 sm:ml-8"
        >
          {skillsData.map((skill) => (
            <SkillBox
              key={skill.id}
              image={skill.image}
              title={skill.title}
              description={skill.description}
            />
          ))}
        </section>
        <section
          data-aos="fade-up"
          data-aos-delay="500"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-4 sm:mr-8 sm:ml-8"
        >
          {skillsDataOthers.map((skill) => (
            <SkillBoxOthers
              key={skill.id}
              title={skill.title}
              description={skill.description}
            />
          ))}
        </section>
      </div>
      <img
        src={imghero}
        alt="Right picture"
        className="absolute z-10 right-2 top-2 sm:right-16 sm:top-16 transform rotate-12 w-20 h-auto sm:w-32 opacity-70"
      />
    </section>
  );
}
