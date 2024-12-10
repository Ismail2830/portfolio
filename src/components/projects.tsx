"use client";

import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "Personal Portfolio",
    image: "/project 5.png",
    description:
      "Complete Jira clone with workspaces, projects, tasks, Kanban boards, etc.",
    technologies: "Next.js, Tailwind, Framer Motion",
    link: "https://personal-portfolio-murex-eight-99.vercel.app/",
  },
  {
    title: "Saas Writing Portfolio",
    image: "/project6.png",
    description:
      "Complete Jira clone with workspaces, projects, tasks, Kanban boards, etc.",
    technologies: "Next.js, Tailwind, Prisma",
    link: "https://saas-writing-portfolio.vercel.app/",
  },
  {
    title: "Jira Clone",
    image: "/project4.png",
    description:
      "Complete Jira clone with workspaces, projects, tasks, Kanban boards, etc.",
    technologies: "Next.js, Tailwind, Prisma",
    link: "https://github.com/Ismail2830/jira-clone",
  },
  {
    title: "Messenger Clone",
    image: "/project1.png",
    description:
      "Real-time Messenger clone with Next.js, React, Tailwind, Prisma, MongoDB.",
    technologies: "Next.js, Tailwind, MongoDB",
    link: "https://github.com/Ismail2830/messanger-clone",
  },
  {
    title: "Learning Management System",
    image: "/project2.png",
    description:
      "Responsive platform for the learning management system.",
    technologies: "Next.js, TypeScript, MySQL",
    link: "https://github.com/Ismail2830/lms-platform",
  },
  {
    title: "Authentication with NextJS",
    image: "/project3.png",
    description:
      "Add advanced authentication to your Next.js application.",
    technologies: "Next.js, NextAuth",
    link: "https://github.com/Ismail2830/Next-auth",
  },
];

const Projects = () => {
  return (
    <section className="py-16 px-6 bg-white">
      <h2
        className="text-4xl font-bold text-center mb-8"
        style={{ fontFamily: "'Sour Gummy', cursive" }}
      >
        Featured Projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="border rounded-lg overflow-hidden shadow-lg bg-white"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <Image
              src={project.image}
              alt={project.title}
              width={400}
              height={250}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3
                className="text-xl font-semibold mb-2"
                style={{ fontFamily: "'Sour Gummy', cursive" }}
              >
                {project.title}
              </h3>
              <p className="text-blue-600 text-sm italic mb-2">
                {project.technologies}
              </p>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <Link href={project.link} target="_blank">
                <button className="w-full px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition">
                  View Project
                </button>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
