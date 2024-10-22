import React, { useState } from "react";
import ContentCopyOutlinedIcon from "@mui/icons-material/ContentCopyOutlined";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import { ArrowLeft, Copy, Check, X } from 'lucide-react';

interface CardProps {
  balance: string;
  publicKey: string;
  privateKey: string;
}

export const WalletCard: React.FC<CardProps> = ({ balance, publicKey, privateKey }) => {
  const [showPrivateKey, setShowPrivateKey] = useState(false);
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const shortPublicKey = `${publicKey.slice(0, 6)}...${publicKey.slice(-6)}`;
  const shortPrivateKey = `${privateKey.slice(0, 6)}...${privateKey.slice(-6)}`;

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
        .then(() => {
          setCopiedText(text);
          setTimeout(() => setCopiedText(null), 2000);
        })
        .catch((err) => {
            alert("Failed to copy to clipboard");
        });
};
  const toggleModal = () => {
    setShowPrivateKey(!showPrivateKey);
  };

  return (
    <div>
      <div className="flex justify-center">
        <div className="flex justify-center w-fit h-full border border-zinc-800 p-2 rounded">
          <div className="relative flex place-items-center">
            <div>
              <div className="pb-16">
                <p className="flex justify-center bg-slate-800 p-2 font-bold text-xl rounded">
                  ${balance}
                </p>
                <p>Available Balance</p>
              </div>

              <div>
                <p className="text-sm">Public Key</p>
                <div className="flex justify-between w-full h-full border border-zinc-800 rounded p-1 gap-2">
                  <div>{shortPublicKey}</div>
                  <button onClick={()=>copyToClipboard(publicKey)}>
                    {copiedText ? (
                      <Check size={25} className='text-green-600' />
                    ) : (
                      <ContentCopyOutlinedIcon />
                    )}
                  </button>
                
                </div>
              </div>

              <div className="mt-4">
                <p className="text-sm">Private Key</p>
                <div className="flex justify-between w-full h-full border border-zinc-800 rounded p-1 gap-2">
                  <div>{shortPrivateKey}</div>
                  <button onClick={toggleModal}>
                    <RemoveRedEyeOutlinedIcon />
                  </button>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>

      {showPrivateKey && (
        <div className="fixed inset-0 flex items-center justify-center">
          <div className="fixed inset-0 bg-black opacity-50" onClick={toggleModal}></div>
          <div className="bg-slate-900 p-6 w-full rounded shadow-lg">
            <h2 className="text-lg font-bold mb-4">Private Key</h2>
            <p className="mb-4">{privateKey}</p>
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
