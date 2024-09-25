'use client'
import { useState } from "react"
import { useRouter } from "next/navigation";
import LogoutIcon from "@mui/icons-material/Logout";

export default function SignIn() {
    const [validPassword, setValidPassword] = useState('');
    const [loginMessage, setLoginMessage] = useState('');

    const router = useRouter();

    const handleSubmit = () => {
        const storedPassword = localStorage.getItem('password');
        if (storedPassword === validPassword) {
            setLoginMessage("Logging in");
            router.push('/createwallet');
        } else {
            setLoginMessage("Wrong Credential");
        }
    }

    const handleLogout = () => {
        localStorage.removeItem('password');
        localStorage.removeItem('mneomic');
        localStorage.removeItem('keypairs');

        router.push('/');
    }

    return (
        <div>
            <div className="flex justify-center py-10">
                <div className="w-96 h-100 border border-slate-800 p-20 rounded">
                    <div>
                        <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
                            <div className="relative drop-shadow-[0_0_0.3rem_#ffffff70] invert" />
                            <div className="flex justify-center p-8">
                                <h2 className="text-4xl md:text-6xl pb-14 font-sans font-bold antialiased hover:subpixel-antialiased">
                                    Wallet
                                </h2>
                            </div>
                        </div>
                    </div>

                    <div className={`py-2 text-center ${loginMessage === "Logging in" ? 'text-green-500' : 'text-red-500'}`}>
                        {loginMessage}
                    </div>

                    <div className="">
                        <input
                            type="password"
                            value={validPassword}
                            onChange={(e) => setValidPassword(e.target.value)}
                            placeholder="Enter your Password"
                            className="border border-slate-500 bg-zinc-800 rounded p-2"
                        />
                    </div>

                    <div className="flex justify-center py-4">
                        <button
                            onClick={handleSubmit}
                            className="bg-black border border-zinc-400 p-2 w-full bg-white text-zinc-950 font-semibold rounded"
                        >
                            Unlock
                        </button>

                        <div className="flex justify-center pl-4">
                            <button onClick={handleLogout} className="border rounded p-2">
                                <LogoutIcon />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}