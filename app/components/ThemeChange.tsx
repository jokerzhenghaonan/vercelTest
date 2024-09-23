"use client";
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';


export default function ThemeChange() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);


  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="text-gray-800 dark:text-gray-200 hover:text-blue-500"
    >
      {mounted && (theme === 'dark' ? '切换到浅色主题' : '切换到深色主题')}
    </button>
  );
}