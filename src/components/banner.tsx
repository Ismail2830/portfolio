"use client"
// components/Banner.js
import Image from "next/image";
import { Button } from "./ui/button";
import { Github, Linkedin, Mail, MousePointer2, Twitter } from "lucide-react";

export default function Banner() {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '/ismailResume.pdf'; // Use the path relative to the `public` folder
        link.download = 'ismailResume.pdf'; // Optional: specify a custom download filename
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };
  return (
    <div className="relative flex flex-col items-center min-h-screen p-6 max-w-5xl mx-auto">
      {/* Sidebar for Contact Icons */}
      <div className="hidden fixed lg:flex flex-col items-center gap-y-6 left-12 top-1/2 transform -translate-y-1/2">
        <a href="https://www.linkedin.com/in/ismail-ait-rehail-7564b4209/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-700">
          <Linkedin size={24} />
        </a>
        <a href="https://x.com/IRehail" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-400">
          <Twitter size={24} />
        </a>
        <a href="https://github.com/Ismail2830" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black">
          <Github size={24} />
        </a>
        <a href="mailto:ismailaitrehail2830@gmail.com" className="text-gray-600 hover:text-yellow-600">
          <Mail size={24} />
        </a>
      </div>
      {/* Title Row */}
       {/* Top Row: Title and Subtitle */}
       <div className="text-center">
        <h1 className="text-8xl sm:text-5xl font-bold text-black dark:text-white">
          Salut,
        </h1>
        <p className="text-gray-500 mt-4 text-xl ">
        Je m'appelle Ismail Ait Rehail, je suis développeur Front End utilisant Nextjs basé au Maroc. Je conçois et code des choses magnifiquement simples, et j'aime ce que je fais.
        </p>
      </div>

      {/* Spacer for separation between title/subtitle and avatar */}
      <div className="mt-16">
        {/* Avatar Image */}
        <Image
          src="/ismail.jpeg" // Replace with your image path
          alt="Avatar"
          width={400}
          height={400}
          className="rounded-full object-cover"
        />
      </div>
      <div className="mt-12">
        <Button
            onClick={handleDownload}
        >
          
            Télécharger mon CV
            <MousePointer2 />
        </Button>
      </div>
        {/* Contact Icons (visible only on small screens, below avatar) */}
        <div className="flex lg:hidden flex-row gap-x-4 mt-8">
        <a href="https://www.linkedin.com/in/ismail-ait-rehail-7564b4209/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-700">
          <Linkedin size={24} />
        </a>
        <a href="https://x.com/IRehail" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-400">
          <Twitter size={24} />
        </a>
        <a href="https://github.com/Ismail2830" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black">
          <Github size={24} />
        </a>
        <a href="mailto:ismailaitrehail2830@gmail.com" className="text-gray-600 hover:text-yellow-600">
          <Mail size={24} />
        </a>
      </div>
    </div>
  );
}