'use client'
import Link from "next/link"
'use client'
import { Wallet2, Sun, Moon } from "lucide-react";
import React, { useEffect, useState } from 'react';

// Navbar Component
export const Navbar = () => {
    const [isDark, setIsDark] = useState(() => {
      if (typeof window !== 'undefined') {
        const savedTheme = localStorage.getItem('theme');
        return savedTheme ? savedTheme === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
      }
      return false;
    });

    useEffect(() => {
      if (typeof window !== 'undefined') {
        document.documentElement.classList.toggle('dark', isDark);
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
      }
    }, [isDark]);

    return (
      <nav className="sticky top-0 w-full z-50 bg-white/80 dark:bg-zinc-900/90 backdrop-blur-xl border-b border-gray-200 dark:border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a href="/" className="flex items-center space-x-3 text-gray-900 dark:text-zinc-100 transition-colors group">
              <div className="bg-gradient-to-r from-blue-500 to-violet-500 p-2 rounded-xl group-hover:scale-105 transition-transform">
                <Wallet2 className="h-5 w-5 text-white" />
              </div>
              <span className="font-bold text-xl tracking-tight">CryptoPurse</span>
            </a>
            <button 
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="h-5 w-5 text-zinc-100" /> : <Moon className="h-5 w-5 text-zinc-900" />}
            </button>
          </div>
        </div>
      </nav>
    );
};

