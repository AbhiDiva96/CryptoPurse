'use client'
import React, { useState } from "react";
import ContentCopyOutlinedIcon from "@mui/icons-material/ContentCopyOutlined";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";

interface CardProps {
  balance: string;
  publicKey: string;
  privateKey: string;
}

export const WalletCard: React.FC<CardProps> = ({ balance, publicKey, privateKey }) => {
  const [showPrivateKey, setShowPrivateKey] = useState(false);

  const shortPublicKey = `${publicKey.slice(0, 8)}...${publicKey.slice(-8)}`;
  const shortPrivateKey = `${privateKey.slice(0, 8)}...${privateKey.slice(-8)}`;

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
      .then(() => {
        alert("Copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy to clipboard:", err);
        alert("Failed to copy to clipboard");
      });
  };

  const toggleModal = () => {
    setShowPrivateKey(!showPrivateKey);
  };

  return (
    <div className="w-full max-w-lg mx-auto">
      <div className="bg-white dark:bg-zinc-900/90 border border-gray-200 dark:border-zinc-800/50 rounded-2xl shadow-xl dark:shadow-2xl shadow-gray-200/50 dark:shadow-black/50 backdrop-blur-xl overflow-hidden">
        <div className="p-8">
          <div className="pb-16">
            <p className="flex justify-center bg-gradient-to-r from-cyan-500 to-blue-500 dark:bg-zinc-800 text-white dark:text-zinc-200 font-bold text-2xl rounded p-3">
              {balance}
            </p>
            <p className="text-gray-500 dark:text-gray-400">Available Balance</p>
          </div>

          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">Public Key</p>
            <div className="flex justify-between w-full h-full bg-gray-100 dark:bg-zinc-800 rounded p-3 gap-3">
              <div className="text-gray-800 dark:text-gray-200 max-w-[300px] overflow-hidden text-ellipsis">{shortPublicKey}</div>
              <div onClick={() => copyToClipboard(publicKey)} className="cursor-pointer">
                <ContentCopyOutlinedIcon className="text-gray-600 dark:text-gray-400" />
              </div>
            </div>
          </div>

          <div className="mt-6">
            <p className="text-sm text-gray-500 dark:text-gray-400">Private Key</p>
            <div className="flex justify-between w-full h-full bg-gray-100 dark:bg-zinc-800 rounded p-3 gap-3">
              <div className="text-gray-800 dark:text-gray-200 max-w-[300px] overflow-hidden text-ellipsis">
                {showPrivateKey ? privateKey : shortPrivateKey}
              </div>
              <button onClick={toggleModal} className="text-gray-600 dark:text-gray-400">
                {showPrivateKey ? <RemoveRedEyeOutlinedIcon /> : <RemoveRedEyeOutlinedIcon />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {showPrivateKey && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="fixed inset-0 bg-black dark:bg-zinc-900 opacity-50" onClick={toggleModal}></div>
          <div className="bg-white dark:bg-zinc-900/90 p-8 w-full max-w-md rounded-2xl shadow-xl dark:shadow-2xl shadow-gray-200/50 dark:shadow-black/50 backdrop-blur-xl overflow-hidden z-50">
            <h2 className="text-lg font-bold mb-4 text-gray-800 dark:text-gray-200">Private Key</h2>
            <p className="mb-4 text-gray-600 dark:text-gray-400">{privateKey}</p>
            <button
              className="mt-2 p-2 border rounded bg-red-500 text-white hover:bg-red-700 dark:bg-red-700 dark:text-white dark:hover:bg-red-600"
              onClick={toggleModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};