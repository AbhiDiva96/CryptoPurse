'use client';
import { useRouter } from "next/navigation";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { derivePath } from 'ed25519-hd-key';
import { mnemonicToSeedSync } from "bip39";
import { Keypair, PublicKey } from "@solana/web3.js";
import { Wallet, HDNodeWallet } from "ethers";
import nacl from "tweetnacl";
import React, { useState } from "react";
import { WalletCard } from "@/components/ui/walletCard";

interface wallet {
    balance: string;
    privateKey: string;
    publicKey: string;
}

interface ethWallet {
    ethBalance: string;
    ethPublicKey: string;
    ethPrivateKey: string
}

export default function CreateWallet({ nemonic }: any) {
    const router = useRouter();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [solwallets, setSolWallets] = useState<wallet[]>([]);
    const [ethWallets, setEthWallets] = useState<ethWallet[]>([]);

    const createSolWallet = () => {
        const seed = mnemonicToSeedSync(nemonic);
        const path = `m/44'/501'/${currentIndex}'/0'`;
        const derivedSeed = derivePath(path, seed.toString('hex')).key;
        const secret = nacl.sign.keyPair.fromSeed(derivedSeed).secretKey;
        const keypair = Keypair.fromSecretKey(secret);
        const balance = "0 sol";

        const newKeypairs: wallet = {
            balance,
            publicKey: keypair.publicKey.toString(),
            privateKey: Buffer.from(secret).toString('base64')
        };

        console.log(newKeypairs);
        setSolWallets([...solwallets, newKeypairs]);
        setCurrentIndex(currentIndex + 1);

        if (typeof window !== "undefined") {
            localStorage.setItem('keypairs', JSON.stringify(newKeypairs));
        }
    };

    const createEthWallet = () => {
        const seed = mnemonicToSeedSync(nemonic);
        const derivationPath = `m/44/60/${currentIndex}'/0'`;
        const hdNode = HDNodeWallet.fromSeed(seed);
        const child = hdNode.derivePath(derivationPath);
        const privateKey = child.privateKey;
        const wallet = new Wallet(privateKey);
        const privateKeyBase64 = Buffer.from(privateKey).toString('base64');
        const ethBalance = "0 ETH";

        const newKeypairss: ethWallet = {
            ethBalance,
            ethPublicKey: wallet.address,
            ethPrivateKey: privateKeyBase64,
        };

        console.log(newKeypairss);
        setEthWallets([...ethWallets, newKeypairss]);
        setCurrentIndex(currentIndex + 1);

        if (typeof window !== "undefined") {
            localStorage.setItem('keypairs', JSON.stringify(newKeypairss));
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white dark:from-zinc-900 dark:to-black">
            <div className="w-full max-w-6xl mx-auto p-8 rounded-2xl bg-white dark:bg-zinc-900/90 border border-gray-200 dark:border-zinc-800/50 shadow-xl dark:shadow-2xl shadow-gray-200/50 dark:shadow-black/50 backdrop-blur-xl overflow-hidden">
                <div className="flex justify-center p-8">
                    <h2 className="text-4xl md:text-6xl pb-4 font-sans font-bold antialiased hover:subpixel-antialiased text-gray-800 dark:text-gray-200">
                        Create Wallet
                    </h2>
                </div>
    
                <div className="flex justify-center">
                    <div className="flex justify-center h-48 w-auto sm:w-full p-4 rounded-2xl bg-gray-100 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-800/50">
                        <div className="grid grid-rows-2 gap-4">
                            <div className="flex justify-center text-gray-800 dark:text-gray-200">
                                Choose Wallet
                            </div>
                            <div className="flex justify-center grid grid-cols-2 gap-8">
                                <button onClick={createSolWallet}>
                                    <div className="bg-slate-900 dark:bg-zinc-700 border border-zinc-700 p-4 rounded w-auto cursor-pointer">
                                        <div className="flex justify-center">
                                            <AddCircleOutlineIcon className="text-white dark:text-gray-200" />
                                        </div>
                                        <div className="text-white dark:text-gray-200">
                                            Solana Wallet
                                        </div>
                                    </div>
                                </button>
                                <button onClick={createEthWallet}>
                                    <div className="bg-slate-900 dark:bg-zinc-700 border border-zinc-700 p-4 rounded w-auto cursor-pointer">
                                        <div className="flex justify-center">
                                            <AddCircleIcon className="text-white dark:text-gray-200" />
                                        </div>
                                        <div className="text-white dark:text-gray-200">
                                            ETH Wallet
                                        </div>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
    
                <div className="pt-10">
                    <div className="flex justify-center relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white dark:before:from-zinc-900 before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
                        <div className="border border-zinc-700 flex justify-center h-full w-auto sm:w-full p-4 rounded-2xl">
                            <div className="relative drop-shadow-[0_0_0.3rem_#ffffff70] invert" />
                            <div className="flex justify-center p-8">
                                <div className="grid grid-cols-2 md:grid-cols-2 gap-10 ">
                                    <div className=" ">
                                        <div className="pb-4">
                                            <p className="flex justify-center border border-gray-200 dark:border-zinc-800/50 p-3 rounded-2xl bg-gray-100 dark:bg-zinc-800 text-gray-800 dark:text-gray-200">
                                                Sol walletCard
                                            </p>
                                        </div>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            {solwallets.map((solwallet, index) => (
                                                <WalletCard
                                                    key={index}
                                                    balance={solwallet.balance}
                                                    publicKey={solwallet.publicKey}
                                                    privateKey={solwallet.privateKey}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                    <div>
                                        <div className="pb-4">
                                            <p className="flex justify-center border border-gray-200 dark:border-zinc-800/50 p-3 rounded-2xl bg-gray-100 dark:bg-zinc-800 text-gray-800 dark:text-gray-200">
                                                Eth walletCard
                                            </p>
                                        </div>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            {ethWallets.map((ethwallet, index) => (
                                                <WalletCard
                                                    key={index}
                                                    balance={ethwallet.ethBalance}
                                                    publicKey={ethwallet.ethPublicKey}
                                                    privateKey={ethwallet.ethPrivateKey}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}