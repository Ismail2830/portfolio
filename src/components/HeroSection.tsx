"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "./ui/button";

const roles = ["Designer", "Developer"]; // Replace with your roles

export default function HeroSection() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 3000); // Change every 3 seconds
    return () => clearInterval(interval);
  }, []);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/ismailResume.pdf"; // Use the path relative to the `public` folder
    link.download = "ismailResume.pdf"; // Optional: specify a custom download filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
        {/* Left Text Section */}
        <div className="md:w-1/2 text-left space-y-6">
          <h1
            className="text-9xl font-bold text-gray-900"
            style={{ fontFamily: "'Roboto', sans-serif" }}
          >
            Hey, I'm
            <motion.span
              className="inline-block ml-2"
              style={{ display: "inline-block" }}
              animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }} // Waving animation
              transition={{ duration: 2, repeat: Infinity }}
            >
              👋
            </motion.span>{" "}
            <span className="text-blue-600">ISMAIL</span>
          </h1>
          <AnimatePresence mode="wait">
            <motion.div
              key={roles[currentRoleIndex]}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-semibold text-gray-600"
            >
              I am a {roles[currentRoleIndex]}
            </motion.div>
          </AnimatePresence>
          <Button
            onClick={handleDownload}
            className="px-6 py-3 rounded-lg border-2 border-blue-600 text-blue-600 bg-transparent hover:bg-blue-600 hover:text-white transition"
          >
            Download My Resume
          </Button>
        </div>

        {/* Right Image Section */}
        <motion.div
          className="md:w-1/2 mt-10 md:mt-0 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }} // Starting state
          animate={{ opacity: 1, scale: 1 }} // Final state
          transition={{ duration: 0.8, ease: "easeOut" }} // Animation timing
        >
          <Image
            src="/my pic.png" // Replace with your image path
            alt="Ismail"
            width={400}
            height={400}
            className="rounded-full shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
}
