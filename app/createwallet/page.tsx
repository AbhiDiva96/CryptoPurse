'use client'

import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import { derivePath } from 'ed25519-hd-key';
import { mnemonicToSeedSync } from "bip39";
import { Keypair } from "@solana/web3.js";
import { Wallet, HDNodeWallet } from "ethers";
import nacl from "tweetnacl";

import { WalletCard } from "@/components/ui/walletCard";
import { Navbar } from "@/components/ui/Navbar";

interface Wallet {
    balance: string;
    privateKey: string;
    publicKey: string;
}

interface EthWallet {
    ethBalance: string;
    ethPublicKey: string;
    ethPrivateKey: string;
}

interface CreateWalletProps {
    nemonic: string;
}

export default function CreateWallet({ nemonic }: CreateWalletProps) {
    const router = useRouter();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [solWallets, setSolWallets] = useState<Wallet[]>([]);
    const [ethWallets, setEthWallets] = useState<EthWallet[]>([]);

    // Load from localStorage if wallets exist
    useEffect(() => {
        const storedSolWallets = localStorage.getItem('solWallets');
        const storedEthWallets = localStorage.getItem('ethWallets');

        if (storedSolWallets) setSolWallets(JSON.parse(storedSolWallets));
        if (storedEthWallets) setEthWallets(JSON.parse(storedEthWallets));
    }, []);

    const createSolWallet = () => {
        try {
            const seed = mnemonicToSeedSync(nemonic);
            const path = `m/44'/501'/${currentIndex}'/0'`;
            const derivedSeed = derivePath(path, seed.toString('hex')).key;

            const secret = nacl.sign.keyPair.fromSeed(derivedSeed).secretKey;
            const keypair = Keypair.fromSecretKey(secret);

            const balance = "0 SOL";
            const newKeypair: Wallet = {
                balance,
                publicKey: keypair.publicKey.toString(),
                privateKey: Buffer.from(secret).toString('base64'),
            };

            // Update state and persist to localStorage
            setSolWallets(prev => {
                const updatedWallets = [...prev, newKeypair];
                localStorage.setItem('solWallets', JSON.stringify(updatedWallets));
                return updatedWallets;
            });
            setCurrentIndex(prev => prev + 1);
        } catch (error) {
            console.error("Failed to create Solana wallet:", error);
        }
    };

    const createEthWallet = () => {
        try {
            const seed = mnemonicToSeedSync(nemonic);
            const derivationPath = `m/44'/60'/${currentIndex}'/0/0`;
            const hdNode = HDNodeWallet.fromSeed(seed);
            const child = hdNode.derivePath(derivationPath);
            const privateKey = child.privateKey;
            const wallet = new Wallet(privateKey);

            const ethBalance = "0 ETH";
            const newEthWallet: EthWallet = {
                ethBalance,
                ethPublicKey: wallet.address,
                ethPrivateKey: Buffer.from(privateKey).toString('base64'),
            };

            // Update state and persist to localStorage
            setEthWallets(prev => {
                const updatedWallets = [...prev, newEthWallet];
                localStorage.setItem('ethWallets', JSON.stringify(updatedWallets));
                return updatedWallets;
            });
            setCurrentIndex(prev => prev + 1);
        } catch (error) {
            console.error("Failed to create Ethereum wallet:", error);
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('password');
        localStorage.removeItem('nemonic');
        localStorage.removeItem('solWallets');
        localStorage.removeItem('ethWallets');
        alert("Logged out of the wallet");
        router.push('/');
    };

    return (
        <div>
            {/* Logout button */}
            <div className="flex justify-end p-4">
                <div className="border-4 rounded-full p-1 cursor-pointer" onClick={handleLogout}>
                    <LogoutIcon />
                </div>
            </div>

            {/* Header Section */}
            <div className="flex justify-center flex-col place-items-center">
                <div className="text-center p-8">
                    <h2 className="text-4xl md:text-6xl font-bold">
                        Create Wallet
                    </h2>
                </div>
            </div>

            {/* Choose Wallet Section */}
            <div className="flex justify-center">
                <div className="flex flex-col items-center w-full max-w-4xl border border-slate-400 bg-zinc-800 p-4">
                    <h3 className="text-xl mb-4">Choose Wallet</h3>

                    <div className="grid grid-cols-2 gap-8">
                        {/* Solana Wallet */}
                        <button onClick={createSolWallet} className="bg-slate-900 border border-zinc-700 p-4 rounded cursor-pointer">
                            <div className="flex justify-center">
                                <AddCircleOutlineIcon />
                            </div>
                            <div className="text-center">
                                Solana Wallet
                            </div>
                        </button>

                        {/* Ethereum Wallet */}
                        <button onClick={createEthWallet} className="bg-slate-900 border border-zinc-700 p-4 rounded cursor-pointer">
                            <div className="flex justify-center">
                                <AddCircleIcon />
                            </div>
                            <div className="text-center">
                                Ethereum Wallet
                            </div>
                        </button>
                    </div>
                </div>
            </div>

            {/* Display Wallets Section */}
            <div className="pt-10 flex justify-center">
                <div className="w-full max-w-6xl p-4 grid grid-cols-1 md:grid-cols-2 gap-10">
                    {/* Solana Wallets */}
                    <div>
                        <h3 className="text-center mb-4">Solana Wallets</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {solWallets.map((wallet, index) => (
                                <WalletCard
                                    key={index}
                                    balance={wallet.balance}
                                    publicKey={wallet.publicKey}
                                    privateKey={wallet.privateKey}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Ethereum Wallets */}
                    <div>
                        <h3 className="text-center mb-4">Ethereum Wallets</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {ethWallets.map((wallet, index) => (
                                <WalletCard
                                    key={index}
                                    balance={wallet.ethBalance}
                                    publicKey={wallet.ethPublicKey}
                                    privateKey={wallet.ethPrivateKey}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
