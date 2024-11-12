'use client'

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import LogoutIcon from "@mui/icons-material/Logout";
import Swal from 'sweetalert2';

export default function SingIn () {
    const [validPassword, setValidPassword] = useState('');
    const router = useRouter();

    const handleSubmit = () => {
        const storedPassword = localStorage.getItem('password');
        if (storedPassword === validPassword) {
            Swal.fire({
                icon: 'success',
                title: 'Password Matched',
                showConfirmButton: false,
                timer: 1500
            }).then(() => {
                router.push('/createwallet');
            });
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Wrong Credential',
                text: 'Please try again!',
            });
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('password');
        localStorage.removeItem('mnemonic');
        localStorage.removeItem('keypairs');
        Swal.fire({
            icon: 'success',
            title: 'Logged out of the wallet',
            showConfirmButton: false,
            timer: 1500
        }).then(() => {
            router.push('/');
        });
    };

    return (
        <div className="flex justify-center items-center min-h-screen py-10 bg-gray-100 dark:bg-gray-900">
            <div className="w-full max-w-md p-10 bg-white dark:bg-zinc-800 border border-slate-800 rounded-lg shadow-md">
                <div className="text-center mb-8">
                    <h2 className="text-4xl font-bold text-gray-800 dark:text-white">
                        Wallet
                    </h2>
                </div>
                <div className="mb-6">
                    <input
                        type="password"
                        value={validPassword}
                        onChange={(e) => setValidPassword(e.target.value)}
                        placeholder="Enter your Password"
                        className="w-full p-3 border border-gray-300 dark:border-slate-600 rounded-lg bg-gray-50 dark:bg-zinc-700 text-gray-900 dark:text-white focus:outline-none"
                    />
                </div>
                <div className="flex justify-center">
                    <button 
                        onClick={handleSubmit}
                        className="w-full py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition"
                    >
                        Unlock
                    </button>
                </div>
                <div className="flex justify-center mt-4">
                    <button 
                        onClick={handleLogout}
                        className="text-gray-500 hover:text-red-600 transition"
                    >
                        <LogoutIcon fontSize="large" />
                    </button>
                </div>
            </div>
        </div>
    );
}
