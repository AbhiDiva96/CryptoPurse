'use client'

import { useState } from "react"
import { useRouter } from "next/navigation";

export default function Auth () {
    const [password, setPassword] = useState("");
    const [confirm, setConfirmpassword] = useState("");
    const [signupMessage, setSignupMessage] = useState('');

    const router = useRouter();

    function storePassword() {
        const PasswordStore = password;
        localStorage.setItem("password", PasswordStore);
    }

    const submit = () => {
        if (password === confirm) {
            storePassword();
            setSignupMessage('Password set successfully');
            router.push('/createwallet');
        } else {
            setSignupMessage('Passwords do not match');
        }
    }

    return (
        <div>
            <div className="flex justify-center relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
                <div className="relative drop-shadow-[0_0_0.3rem_#ffffff70] invert" />
                <div className="flex justify-center py-10">
                    <h2 className="text-3xl md:text-6xl font-sans font-bold antialiased hover:subpixel-antialiased">
                        Create Password
                    </h2>
                </div>
            </div>

            <div className={`py-2 text-center ${signupMessage === 'Password set successfully' ? 'text-green-500' : 'text-red-500'}`}>
                {signupMessage}
            </div>

            <div className="flex justify-center">
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    required
                    onChange={(e) => setPassword(e.target.value)}
                    className="border border-slate-500 w-[100vh] bg-zinc-800 rounded p-3 m-4"
                />
            </div>
            <div className="flex justify-center">
                <input
                    type="password"
                    placeholder="Confirm Password"
                    required
                    onChange={(e) => setConfirmpassword(e.target.value)}
                    className="border border-slate-500 w-[100vh] bg-zinc-800 rounded p-3 m-4"
                />
            </div>

            <div className="flex justify-center">
                <button
                    onClick={submit}
                    disabled={!password || !confirm}
                    className={`p-4 border border-slate-400 m-4 bg-zinc-900 ${(!password || !confirm) ? 'cursor-not-allowed opacity-50' : ''}`}
                >
                    Done
                </button>
            </div>
        </div>
    )
}