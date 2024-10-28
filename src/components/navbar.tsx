"use client"
import DarkModeToggle from "./DarkModeToggle";

export default function Navbar() {

  return (
    <header className="fixed top-0 left-0 right-0 p-4 bg-white text-gray-900 dark:bg-black dark:text-white">
      <div className="container mx-auto flex justify-end items-center">
        <div className="flex items-center space-x-4">
          {/* Dark Mode Toggle */}
          <DarkModeToggle />
        </div>
      </div>
    </header>
  );
}