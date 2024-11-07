import React, { useEffect, useState } from 'react';
import { Wallet2, Sun, Moon } from "lucide-react";

// Navbar Component

// WalletHome Component
export const Wallet = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const passwordExists = localStorage.getItem('password') ? true : false;
      if (passwordExists) {
        window.location.href = '/signin';
      }
      setIsLoading(false);
    }
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white dark:from-zinc-900 dark:to-black">
      <div className="relative w-16 h-16">
        <div className="absolute top-0 left-0 w-full h-full rounded-full border-4 border-blue-500/30 dark:border-blue-400/20"></div>
        <div className="absolute top-0 left-0 w-full h-full rounded-full border-4 border-transparent border-t-blue-500 dark:border-t-blue-400 animate-spin"></div>
      </div>
    </div>
    );
  }

  return (
    <div className="w-full max-w-3xl mx-auto p-6 rounded-2xl bg-white dark:bg-zinc-900/90 border border-gray-200 dark:border-zinc-800/50 shadow-xl dark:shadow-2xl shadow-gray-200/50 dark:shadow-black/50 backdrop-blur-xl overflow-hidden">
      {/* Header Section with Gradient */}
      <div className="relative h-24 sm:h-32 bg-gradient-to-r from-blue-600 via-violet-600 to-purple-600 dark:from-blue-500 dark:via-violet-500 dark:to-purple-500 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iYSIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVHJhbnNmb3JtPSJyb3RhdGUoNDUpIj48cGF0aCBkPSJNLTEwIDMwaDYwdigyKUgtMTB6IiBmaWxsPSIjZmZmIiBvcGFjaXR5PSIuMiIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNhKSIvPjwvc3ZnPg==')] opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        <Wallet2 className="h-10 w-10 sm:h-12 sm:w-12 text-white mb-2 mx-auto relative z-10 animate-float" />
      </div>

      {/* Content Section */}
      <div className="px-4 sm:px-8 py-6 sm:py-8 space-y-6">
        {/* Title and Description */}
        <div className="text-center space-y-3 sm:space-y-4">
          <h1 className="text-2xl sm:text-4xl font-bold text-gray-900 dark:text-white bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-violet-600 dark:from-blue-400 dark:to-violet-400">
            Welcome to CryptoPurse
          </h1>
          <p className="text-sm sm:text-base text-gray-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Your secure gateway to the world of digital assets. Experience seamless 
            cryptocurrency management with bank-grade security and intuitive controls.
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-3 gap-4 py-6 border-y border-gray-100 dark:border-zinc-800">
          {[
            { color: "bg-green-500", text: "Enterprise Security" },
            { color: "bg-blue-500", text: "Multi-Currency" },
            { color: "bg-purple-500", text: "Fast Transactions" }
          ].map((feature, index) => (
            <div key={index} className="text-center space-y-2">
              <div className={`w-2 h-2 rounded-full ${feature.color} mx-auto`}></div>
              <span className="text-sm text-gray-600 dark:text-zinc-400">{feature.text}</span>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="space-y-4">
          <a href="/mnemonic" className="block">
            <button className="w-full px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-500 to-violet-500 hover:from-blue-600 hover:to-violet-600 text-white font-semibold transition-all duration-200 transform hover:scale-[1.02] hover:shadow-lg">
              Create Wallet
            </button>
          </a>
          
          <button className="w-full px-6 py-3.5 rounded-xl border border-gray-200 dark:border-zinc-700 bg-gray-50 dark:bg-zinc-800 hover:bg-gray-100 dark:hover:bg-zinc-700 text-gray-900 dark:text-white font-semibold transition-all duration-200 transform hover:scale-[1.02]">
            Import Wallet
          </button>
        </div>
      </div>
    </div>
  );
};
