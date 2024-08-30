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
    <div>
      <div className="flex justify-center">
        <div className="flex justify-center w-fit h-full border border-zinc-800 p-2 rounded">
          <div className="relative z-[-1] flex place-items-center">
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
                  <div onClick={()=>copyToClipboard(publicKey)}>
                  
                    <ContentCopyOutlinedIcon/>
                 
                  </div>
                
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
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="fixed inset-0 bg-black opacity-50" onClick={toggleModal}></div>
          <div className="bg-slate-900 p-6 w-full rounded shadow-lg z-50">
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
