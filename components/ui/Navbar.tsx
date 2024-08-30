import Link from "next/link"

export const Navbar = () => {


    return <div>
            <Link href={"/"}>
                <div className=" w-full max-w-50xl items-center justify-center font-mono font-bold text-md lg:flex">
                    <p className=" flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
                       CryptoPurse
                       <code className="font-mono font-bold"></code>
                    </p>
               </div>
               </Link> 
    </div>
}