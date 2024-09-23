import Link from 'next/link';
import ThemeChange from './ThemeChange';
// import { useEffect, useState } from 'react';
// import { useTheme } from 'next-themes';

export default function Header() {
  // const { theme, setTheme } = useTheme();
  // const [mounted, setMounted] = useState(false);

  // When mounted on client, now we can show the UI
  //   useEffect(() => setMounted(true), []);

  return (
    <header className="bg-white dark:bg-gray-800 shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div>
          <Link href="/" legacyBehavior>
            <a aria-label="Home">
              <img src="/logo.png" alt="Logo" className="h-8" />
            </a>
          </Link>
        </div>

        {/* Navigation and other options */}
        <nav className="flex items-center space-x-4">
          {/* Future Navigation Links */}
          {/* <Link href="/about" legacyBehavior>
            <a className="text-gray-800 dark:text-gray-200 hover:text-blue-500">关于</a>
          </Link>
          <Link href="/services" legacyBehavior>
            <a className="text-gray-800 dark:text-gray-200 hover:text-blue-500">服务</a>
          </Link>
          <Link href="/contact" legacyBehavior>
            <a className="text-gray-800 dark:text-gray-200 hover:text-blue-500">联系</a>
          </Link> */}

          {/* Theme Switcher */}
          {/* <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="text-gray-800 dark:text-gray-200 hover:text-blue-500"
          >
            {mounted && (theme === 'dark' ? '切换到浅色主题' : '切换到深色主题')}
          </button> */}
          <ThemeChange />

          {/* Google Login */}
          {/* <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
            Google 登录
          </button> */}
        </nav>
      </div>
    </header>
  );
}