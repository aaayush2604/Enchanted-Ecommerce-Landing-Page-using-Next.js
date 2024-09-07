import MaxWrapper from "./MaxWrapper"
import Link from 'next/link'
import { buttonVariants } from "./ui/button";
import { ArrowRightIcon } from "lucide-react";

const Navbar=()=>{
    const user=undefined;
    const isAdmin=false;
    return <nav className="sticky z-[100] h-14 inset-x-0 top-0 w-full border-b border-great-200 bg-white/75 backdrop-blur-lg transition-all">
        <MaxWrapper>
            <div className="flex h-14 items-center justify-between border-b border-zinc-200">
                <Link href='/' className="flex z-40 font-semibold text-2xl items-end text-end"><span className="text-[var(--secondary-color)] flex items-end font-playwrite mb-1">En</span>chanted</Link>
                <div className="h-full flex items-center space-x-4">
                    {user?(
                        <>
                            <Link href='/api/auth/logout' className={buttonVariants({
                                size:'sm',
                                variant:'ghost'
                            })}>
                                Sign Out
                            </Link>
                            {isAdmin?<Link href='/api/auth/logout' className={buttonVariants({
                                size:'sm',
                                variant:'ghost'
                            })}>
                                Dashboard
                            </Link>:null
                            }
                            <Link href='/shoppingpage' className={buttonVariants({
                                size:'sm',
                                className:'hidden sm:flex items-center gap-1'
                            })}>
                                Start Shopping
                                <ArrowRightIcon className="ml-1.5 h-5 w-5"/>
                            </Link>
                        </>
                    ):(<>
                        <Link href='/api/auth/registert' className={buttonVariants({
                                size:'sm',
                                variant:'ghost'
                            })}>
                                Sign Up
                            </Link>
                            <Link href='/login' className={buttonVariants({
                                size:'sm',
                                variant:'ghost'
                            })}>
                                Login
                            </Link>
                            <div className="h-8 w-px bg-zinc-200 hidden sm:block"></div>
                            <div className=" bg-black hover:bg-white text-white hover:text-black"><Link href='/shoppingpage' className={buttonVariants({
                                size:'sm',
                                className:'hidden sm:flex items-center gap-1 '
                            }) }>
                                Start Shopping
                                <ArrowRightIcon className="ml-1.5 h-5 w-5"/>
                            </Link></div>
                    </>)}
                </div>
            </div>
        </MaxWrapper>
    </nav>
}

export default Navbar