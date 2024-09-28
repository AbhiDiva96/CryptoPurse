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

  const shortPublicKey = `${publicKey.slice(0, 6)}...${publicKey.slice(-6)}`;
  const shortPrivateKey = `${privateKey.slice(0, 6)}...${privateKey.slice(-6)}`;

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
      .then(() => {
        alert("Copied to clipboard!");
      })
      .catch((err) => {
        alert("Failed to copy to clipboard");
      });
  };

  const toggleModal = () => {
    setShowPrivateKey(!showPrivateKey);
  };

  return (
    <div className="flex justify-center">
      <div className="flex justify-center w-fit h-full border border-zinc-800 p-4 rounded-lg shadow-lg bg-gray-900">
        <div className="flex flex-col items-center">
          <div className="pb-4">
            <p className="bg-slate-800 p-4 font-bold text-2xl rounded-lg text-center">
              ${balance}
            </p>
            <p className="text-gray-400">Available Balance</p>
          </div>

          <div className="w-full mb-4">
            <p className="text-sm text-gray-400">Public Key</p>
            <div className="flex justify-between items-center border border-zinc-800 rounded p-2">
              <div className="text-white">{shortPublicKey}</div>
              <div onClick={() => copyToClipboard(publicKey)} className="cursor-pointer hover:text-green-400">
                <ContentCopyOutlinedIcon />
              </div>
            </div>
          </div>

          <div className="w-full">
            <p className="text-sm text-gray-400">Private Key</p>
            <div className="flex justify-between items-center border border-zinc-800 rounded p-2">
              <div className="text-white">{shortPrivateKey}</div>
              <button onClick={toggleModal} className="hover:text-blue-400">
                <RemoveRedEyeOutlinedIcon />
              </button>
            </div>
          </div>
        </div>
      </div>

      {showPrivateKey && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="fixed inset-0 bg-black opacity-50" onClick={toggleModal}></div>
          <div className="bg-slate-900 p-6 w-full max-w-sm rounded-lg shadow-lg z-50">
            <h2 className="text-lg font-bold mb-4 text-white">Private Key</h2>
            <p className="mb-4 text-gray-200">{privateKey}</p>
            <button
              className="mt-2 p-2 border rounded bg-red-500 text-white hover:bg-red-700"
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
