import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import Form1 from "./form1";
import Form2 from "./form2";
import Form3 from "./form3";

export default function Onborading() {
    const router = useRouter();
    const [nextForm, setNextForm] = useState('Initial');
    return (
        <section class="bg-white dark:bg-gray-900 lg:py-0">
            <div class="flex">
                <div className="bg-primary-600 md:h-[100vh] p-12 max-w-md w-full hidden lg:block">
                    <div className="flex items-center mb-8 ">
                        <Link href="/">
                            <div className="flex hover:cursor-pointer items-center font-bold text-3xl text-white">
                                <img src="https://flowbite.com/docs/images/logo.svg" className="mr-2 h-8 w-8" alt="Flowbite Logo" />
                                Flowbite
                            </div>
                        </Link>
                        <div onClick={(e) => {
                            e.preventDefault();
                            router.back();
                        }} className="text-primary-100 mx-4 flex font-normal hover:cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" className="w-4 h-4 my-auto mr-2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                            </svg>
                            Go back
                        </div>
                    </div>
                    <div className="bg-primary-500 p-8 rounded-lg">
                        <h2 className="font-semibold text-2xl mb-1">Your selected plan</h2>
                        <p className="text-primary-100 text-xl font-[200] mb-4">30-day free trial</p>
                        <ul role="list" className="text-left">
                            <li className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" className="text-green-300 w-5 h-5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M2 12.75l6 6 14-11.5" />
                                </svg>
                                <span className="mx-3">Individual configuration</span>
                            </li>
                            <li className="flex items-center my-4">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" className="text-green-300 w-5 h-5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M2 12.75l6 6 14-11.5" />
                                </svg>
                                <span className="mx-3">No setup, or hidden fees</span>
                            </li>
                            <li className="flex items-center my-4">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" className="text-green-300 w-5 h-5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M2 12.75l6 6 14-11.5" />
                                </svg>
                                <span className="mx-3">Team size: 1 developer</span>
                            </li>
                            <li className="flex items-center my-4">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" className="text-green-300 w-5 h-5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M2 12.75l6 6 14-11.5" />
                                </svg>
                                <span className="mx-3">Premium support: 6 months</span>
                            </li>
                            <li className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" className="text-green-300 w-5 h-5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M2 12.75l6 6 14-11.5" />
                                </svg>
                                <span className="mx-3">Free updates: 6 months</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="px-8 w-full h-[100vh] sm:w-[42rem] mx-auto flex items-center">
                    {nextForm === 'Initial' ?
                        <Form1 onClick={(e)=> setNextForm(e)} /> : nextForm === 'Second' ? <Form2 onClick={(e)=> setNextForm(e)} /> : nextForm === 'Third' ? <Form3 onClick={(e)=>setNextForm(e)} /> :  <></>}
                </div>
            </div>
        </section>
    )
}