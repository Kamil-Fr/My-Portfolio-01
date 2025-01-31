import React from "react";
import project1 from "../assets/images/project1.png";
import project2 from "../assets/images/project2.png";
import project3 from "../assets/images/project3.png";
import project4 from "../assets/images/project4.png";
import project5 from "../assets/images/project5.png";

const ProjectCard = ({ image, title, description, link }) => {
  return (
    <article className="relative max-w-sm bg-gray-800 rounded overflow-hidden shadow-lg group">
      <div className="absolute z-0 w-40 h-40 sm:w-60 sm:h-60 bg-[#3c7df5] rounded-full blur-3xl opacity-50 -top-5 left-10"></div>
      <div className="relative z-10">
        <figure className="relative">
          <img
            src={image}
            alt={title}
            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute h-[202px] inset-0 flex items-center justify-center bg-blue-500 bg-opacity-50 opacity-0
            group-hover:opacity-100 transition-opacity duration-300"
          >
            <button className="bg-white font-medium text-black py-2 px-4 rounded-3xl shadow hover:text-white hover:bg-[#2879d5]">
              Live Preview
            </button>
          </a>
        </figure>
        <div className="px-6 py-4">
          <header>
            <h3 className="text-white font-bold text-xl mb-2">{title}</h3>
          </header>
          <p className="text-gray-200 text-base">{description}</p>
        </div>
      </div>
    </article>
  );
};

export default function Projects() {
  const listProjects = [
    {
      image: project1,
      title: "Loan",
      description:
        "A landing page for a loan website inspired by a Renato Stefani Filgueiras layout.",
      link: "https://github.com/Kamil-Fr/Loans_landing_page",
    },
    {
      image: project2,
      title: "Give it to good hands",
      description:
        "A website for making in-kind donations to associations in need.",
      link: "https://kamil-fr.github.io/give_it_to_good_hands/",
    },
    {
      image: project3,
      title: "Paris",
      description: "A website that helps you plan a tourist trip to Paris.",
      link: "https://kamil-fr.github.io/paris/",
    },
    {
      image: project4,
      title: "Vidoo",
      description: "Video sharing app.",
      link: "https://github.com/Kamil-Fr/Vidoo",
    },
    {
      image: project5,
      title: "Pearlstore",
      description: "A landing page for an e-commerce website dedicated to selling exquisite pearls and luxury pearl-based products.",
      link: "https://kamil-fr.github.io/Pearlstore/",
    },
  ];
  return (
    <main id="projects" className="p-4">
      <section data-aos="fade-up" data-aos-delay="300">
        <div
          className="absolute z-0 w-40 h-40 sm:w-60 sm:h-60 bg-[#3c6df5]  rounded-full blur-3xl opacity-50 op-20 sm:top-15 
      left-1/2 transform -translate-x-1/2"
        ></div>

        <header className="text-center">
          <h1 className="text-3xl text-white sm:text-4xl font-bold mb-6">
            My <span className="text-blue-400">Projects</span>
          </h1>
          <p className="text-gray-400 mt-2 sm:mt-4 text-sm sm:text-base">
            A collection of projects I've worked on.
          </p>
        </header>
      </section>
      <section
        data-aos="fade-up"
        data-aos-delay="500"
        className="flex flex-wrap gap-4 justify-center mt-6"
      >
        {listProjects.map((project, index) => (
          <ProjectCard
            key={index}
            image={project.image}
            title={project.title}
            description={project.description}
            link={project.link}
          />
        ))}
      </section>
    </main>
  );
}
