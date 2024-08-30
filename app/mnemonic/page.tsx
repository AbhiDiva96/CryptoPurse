'use client'

import { useEffect, useState } from "react"
import { generateMnemonic } from "bip39";
import Link from "next/link";

import { useRouter } from "next/navigation";

export default function Mnemonic() {

   const [mnemonic, setMnemonic] = useState("");
   const router = useRouter();

   useEffect(() => {
      const localStoredMnemonics = localStorage.getItem('mnemonic');
      if(localStoredMnemonics){
        setMnemonic(localStoredMnemonics);
      }
   },[]);

   const  StoreMnemonics = () => {
         const mn = generateMnemonic();
         setMnemonic(mn);
         localStorage.setItem('mnemonic', mn);
   }

   const mnemonicWords = mnemonic.split(' ');

    return <div >
            <div className="flex justify-center relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
        <div className="relative drop-shadow-[0_0_0.3rem_#ffffff70] invert"/>
         <div className="flex justify-center py-10">
           <h2 className="text-3xl md:text-6xl font-sans font-bold antialiased hover:subpixel-antialiased">
          
           Secret Recovery Phrase
        
           </h2>
           </div>
      </div>
         
          <div className="flex justify-center ">
          <button
                 onClick={StoreMnemonics}

                   className="  backdrop-blur-2xl w-[400px] backdrop-blur-2xl border-neutral-800 bg-zinc-800/30 from-inherit static  rounded-xl border bg-gray-200 p-4"
                 >
                    Create Seed Phrase
                </button>
          </div>

  <div className="flex justify-center">
  {mnemonic && (

    
       <div className="border border-zinc-900  rounded bg-slate-950 p-8 m-8">
          <div className="grid grid-cols-4 gap-4">
               { mnemonicWords.map((word, index) => (
                   <div key={index} className="text-center rounded-sm p-2 m-2"> 
                    {word}
                   </div>
                 ))}
          </div>
       </div>
       )}
    </div>

<div className="flex justify-center ">
          <button
                 onClick={() => router.push('/singup')}

                   className=" w-[200px] backdrop-blur-2xl backdrop-blur-2xl border-neutral-800 bg-zinc-800/30 from-inherit static  rounded-xl border bg-gray-200 p-4"
                 >
                    next
                </button>
          </div>
    </div>
}