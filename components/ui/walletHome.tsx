'use client'


import Link from "next/link"
import { useEffect } from "react";
import { useRouter } from "next/navigation";

 
export const Wallet = () => {

  const router = useRouter();
  
  useEffect(() => {

  if(typeof window !== 'undefined'){
    const passwordExits = localStorage.getItem('password') ? true : false;

         if(passwordExits){
            router.push('/signin')
            
         }
        }
    }, [router])

 
    return <div>

          <div className="relative z-[-1] place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
        <div className="relative drop-shadow-[0_0_0.3rem_#ffffff70] invert"/>
         <div className="flex justify-center ">
           <h2 className="text-3xl md:text-6xl font-sans font-bold antialiased hover:subpixel-antialiased">
            Introducing CryptoPurse
           </h2>
            
           </div>
       
      </div>

      <div className="py-6 sm:py-20 flex justify-center sm:px-60">
           <p className="flex justify-center text-md font-serif tracking-wider text-center">
             CryptoPurse is Your Personal cryptoCurrency wallet. create your wallet.<br />
             CryptoPurse introduced to for the transcation of cryptoCurrency with feature of sending and receiving cryptoCurrency. 
            </p>
            </div>


      <div className=" flex justify-center p-8 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4  w-fit max-w-5xl items-center justify-between font-mono text-sm ">
            <Link href={'/mnemonic'}>
             <div className="  backdrop-blur-2xl backdrop-blur-2xl border-neutral-800 bg-zinc-800/30 from-inherit static  rounded-xl border bg-gray-200 p-4 ">
             <p className=" backdrop-blur-2xl">
                      Create Wallet
                       <code className="font-mono font-bold"></code>
                    </p>
             </div>
             </Link>

             
             <div className="flex justify-center w-full backdrop-blur-2xl backdrop-blur-2xl border-neutral-800 bg-zinc-800/30 from-inherit static w-auto  rounded-xl border bg-gray-200 p-4 ">
             <p className="flex justify-center backdrop-blur-2xl">
                      Import Wallet
                       <code className="font-mono font-bold"></code>
                    </p>
             </div>
             

             </div>
      </div>

    </div>

 

}