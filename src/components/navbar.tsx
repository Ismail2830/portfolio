"use client";

import { useEffect, useState } from "react";
import { Button } from "./ui/button";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  // Change Navbar color on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 p-4 z-50 transition-all ${
        scrolled
          ? "bg-white text-blue-950 shadow-md"
          : "bg-blue-950 text-white"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Left Section: Name */}
        <h1
          className="text-2xl font-semibold"
          style={{ fontFamily: "'Sour Gummy', cursive" }}
        >
          Ismail :)
        </h1>

        {/* Center Section: Links */}
        <nav>
          <ul className="flex space-x-6">
            <li>
              <a
                href="#services"
                className="hover:text-blue-500 transition-colors"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="hover:text-blue-500 transition-colors"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#about-me"
                className="hover:text-blue-500 transition-colors"
              >
                About Me
              </a>
            </li>
          </ul>
        </nav>

        {/* Right Section: Button */}
        <Button
          asChild
          className={`px-6 py-2 rounded-lg border-2 transition-all ${
            scrolled
              ? "text-blue-950 border-blue-950 bg-transparent hover:bg-blue-500 hover:text-white"
              : "text-white border-white bg-transparent hover:bg-white hover:text-blue-900"
          }`}
        >
          <a href="#footer">
          Hire Me
          </a>
        </Button>
      </div>
    </header>
  );
}
