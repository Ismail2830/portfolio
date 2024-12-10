import React from "react";
import Image from "next/image";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const AboutMe = () => {
  return (
    <section className="bg-blue-900 text-white py-16">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
        {/* Left Section: Image */}
        <div className="lg:w-1/2 mb-8 lg:mb-0">
          <div className="relative w-80 h-80 lg:w-96 lg:h-96 mx-auto">
            <Image
              src="/my pic.png" // Replace with your image path
              alt="About Me Image"
              layout="fill"
              objectFit="cover"
              className="rounded-full"
            />
          </div>
        </div>

        {/* Right Section: Text */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h3 className="text-sm uppercase tracking-wide mb-2">
            About - Ismail
          </h3>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Get a website that will make a lasting impression on your audience!!!
          </h2>
          <p className="text-gray-300 mb-6">
            I am a skilled developer and designer, focused on creating impactful
            and responsive websites. With years of experience, I ensure
            high-quality design and functionality that resonates with your
            audience.
          </p>
          {/* Social Icons */}
          <div className="flex justify-center lg:justify-start space-x-4">
            <a
              href="https://www.facebook.com/ismail.rehail19/"
              className="hover:text-blue-300"
              aria-label="Facebook"
            >
              <Facebook className="w-6 h-6" />
            </a>
            <a
              href="https://x.com/IRehail"
              className="hover:text-blue-300"
              aria-label="Twitter"
            >
              <Twitter className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/ismail-ait-rehail-7564b4209/"
              className="hover:text-blue-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
