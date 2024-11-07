'use client';
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Auth() {
  const [password, setPassword] = useState("");
  const [confirm, setConfirmPassword] = useState("");
  const router = useRouter();

  function storePassword() {
    localStorage.setItem("password", password);
  }

  const submit = () => {
    if (!password || !confirm) {
      alert('Please fill in all inputs');
      return;
    }

    if (password === confirm) {
      storePassword();
      alert('Welcome to the wallet page');
      router.push('/createwallet');
    } else {
      alert('Passwords do not match');
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen py-20 bg-gray-100 dark:bg-gray-900 bg-gradient-to-br from-cyan-500 to-blue-500 dark:bg-none">
      <div className="w-full max-w-3xl p-16 bg-white dark:bg-zinc-800 border border-slate-800 rounded-2xl shadow-md">
        <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-8">
          Set Password
        </h2>
        <div className="mb-8">
          <input 
            type="password"
            placeholder="Password"
            value={password} 
            required
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-4 border border-gray-300 dark:border-slate-600 rounded-lg bg-gray-50 dark:bg-zinc-700 text-gray-900 dark:text-white focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-8">
          <input 
            type="password"
            placeholder="Confirm Password"
            value={confirm}
            required
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full p-4 border border-gray-300 dark:border-slate-600 rounded-lg bg-gray-50 dark:bg-zinc-700 text-gray-900 dark:text-white focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="flex justify-center">
          <button 
            onClick={submit}
            disabled={!password || !confirm}
            className={`w-full py-4 px-8 bg-blue-500 text-white font-semibold rounded-lg transition duration-200 hover:bg-blue-600 ${
              (!password || !confirm) ? 'cursor-not-allowed opacity-50' : ''
            }`}
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
}
