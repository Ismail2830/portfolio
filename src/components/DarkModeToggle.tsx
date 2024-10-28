"use client"
// components/DarkModeToggle.js
import { useEffect, useState } from 'react';
import { Button } from './ui/button';

export default function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check the user's system preference and set initial state
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.classList.add('dark');
      setDarkMode(true);
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <Button
    onClick={toggleDarkMode}
    className="p-2 border rounded-md focus:outline-none"
    aria-label="Toggle Dark Mode"
  >
    {darkMode ? '🌙' : '☀️'}
  </Button>
  );
}