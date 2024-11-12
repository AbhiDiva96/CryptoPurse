'use client';

import { useEffect, useState } from 'react';
import { generateMnemonic } from 'bip39';
import { useRouter } from 'next/navigation';

export default function Mnemonic() {
  const [mnemonic, setMnemonic] = useState('');
  const router = useRouter();

  useEffect(() => {
    const localStoredMnemonics = localStorage.getItem('mnemonic');
    if (localStoredMnemonics) {
      setMnemonic(localStoredMnemonics);
    }
  }, []);

  const handleGenerateMnemonic = () => {
    const mn = generateMnemonic();
    setMnemonic(mn);
    localStorage.setItem('mnemonic', mn);
  };

  const mnemonicWords = mnemonic.split(' ');

  return (
    <div className="h-screen flex flex-col">
      <div className="flex-1 flex flex-col justify-center items-center bg-gradient-to-br from-cyan-500 to-blue-500 dark:from-zinc-900 dark:to-slate-800 p-8">
      
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg w-full max-w-4xl p-10">
        <div className="flex justify-center border-b border-gray-200 dark:border-gray-700 pb-5 mb-6">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 text-center">
            Secret Recovery Phrase
          </h2>
        </div>
        <div className="mb-6">
          {mnemonic ? (
            <div className="grid grid-cols-4 gap-4">
              {mnemonicWords.map((word, index) => (
                <div
                  key={index}
                  className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-md py-3 px-5 text-center"
                >
                  {word}
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center">
              <p className="text-gray-600 dark:text-gray-400">
                Click the button below to generate a new seed phrase.
              </p>
            </div>
          )}
        </div>
        <div className="flex justify-between border-t border-gray-200 dark:border-gray-700 pt-4">
          <button
            onClick={handleGenerateMnemonic}
            className="px-6 py-3 rounded-xl text-white bg-gradient-to-r from-blue-500 to-violet-500 hover:from-blue-600 hover:to-violet-600 transition-colors"
          >
            Create Seed Phrase
          </button>
          <button
          
            onClick={() => router.push('/singup')}
            className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-3 rounded font-medium"
          >
            
            Next
          </button>
        </div>
      </div>
    </div>
    </div>
  );
}
