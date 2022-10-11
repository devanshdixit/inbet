import classNames from "classnames";
import React, { useState } from "react";
import { ThemeContext } from "../../utils/ThemeContext";
import Toggle from "../ThemeToggle";
import Link from "next/link";
import Image from "next/image";
import { useAuth } from "../Firebase/authContext";
import UserIcon from "./user";

export default function Header() {
    const auth = useAuth();
    const [showMenu, setShowMenu] = useState(false);
    const { theme } = React.useContext(ThemeContext);

    return (
        <header>
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link href="/">
                        <div className="flex items-center hover:cursor-pointer">
                            <span className="mr-3 h-6 w-9 sm:h-9">
                                {theme === 'dark' ?
                                    <Image src="/logow.png" width="100%" height={`100%`} alt="Flowbite Logo" /> :
                                    <Image src="/logob.png" width="100%" height={`100%`} alt="Flowbite Logo" />
                                }
                            </span>
                            <span className="self-center text-xl font-semibold whitespace-nowrap text-black dark:text-white">Inbet</span>
                        </div>
                    </Link>
                    {auth.loading ? <></> : <div className="flex items-center lg:order-2 sm:mt-2">
                        <Toggle />
                        {auth.user ?  <Link href="/dashboard"><div className="border-2 p-2 hover:cursor-pointer rounded-full dark:border-gray-200 border-black">
                           <UserIcon className="w-5 h-5 text-black dark:text-white" />
                        </div></Link> :
                            <Link href="/login"><div className="text-gray-800 border-[1px] border-gray-600 hover:cursor-pointer dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">Log in</div></Link>
                        }
                       
                        {!auth.user && <Link href="/getstarted"><div className="text-white hover:cursor-pointer bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">Get started</div></Link>}
                        <button onClick={(e) => {
                            e.preventDefault();
                            setShowMenu(!showMenu);
                        }} data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                            <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </button>
                    </div>}
                </div>
            </nav>
        </header>
    )
}