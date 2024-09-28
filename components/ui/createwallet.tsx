import React from 'react';

interface WalletCardProps {
  balance: string;
  publicKey: string;
  privateKey: string;
}

export const WalletCard: React.FC<WalletCardProps> = ({ balance, publicKey, privateKey }) => {
  return (
    <div className="border border-zinc-600 bg-slate-900 p-4 rounded-lg shadow-md">
      <div className="flex justify-between pb-2">
        <h4 className="text-lg font-semibold">Wallet Info</h4>
      </div>
      <div className="pb-2">
        <strong>Balance:</strong> {balance}
      </div>
      <div className="pb-2 break-words">
        <strong>Public Key:</strong> {publicKey}
      </div>
      <div className="pb-2 break-words">
        <strong>Private Key:</strong> {privateKey}
      </div>
    </div>
  );
};
