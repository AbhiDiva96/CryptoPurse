'use client'
import { Wallet } from "@/components/ui/walletHome";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
       <Wallet />      
    </main>
  );
}
