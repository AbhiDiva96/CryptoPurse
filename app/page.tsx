'use client'
import { Navbar } from "@/components/ui/Navbar";
import { Wallet } from "@/components/ui/walletHome";

// import { useEffect } from "react";
// import { useRouter } from "next/navigation";


export default function Home() {

  // const passwordExits = localStorage.getItem('password') ? true : false;
  // const router = useRouter();

//   useEffect(() => {
//     if(passwordExits){
//        router.push('/signin')
//     }
// }, [passwordExits, router])


return (
  <main className="flex min-h-screen w-full bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-zinc-900 dark:via-black dark:to-zinc-900 flex-col items-center justify-between p-4 sm:p-24">
    <Wallet />
  </main>
);
}
