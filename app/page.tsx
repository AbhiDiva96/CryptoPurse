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
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    
      
       <Wallet />


      
    </main>
  );
}
