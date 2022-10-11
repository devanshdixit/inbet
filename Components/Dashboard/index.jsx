import classNames from "classnames";
import Image from "next/image";
import Router from "next/router";
import React from "react";
import { useAuth } from "../Firebase/authContext";

export default function Dashboard() {
    const [show, setShow] = React.useState(false);
    const {loading,user,signout} = useAuth();
    React.useEffect(()=>{
    if (!user) {
        Router.push('/');
    }
    },[])
    return (
        <div className="py-44 bg-white dark:bg-gray-900">
            {loading ? <h1 className="text-black dark:text-white text-center">Loding...</h1> :
                <div class="dark:bg-white bg-gray-800 relative shadow rounded-xl w-5/6 md:w-4/6  lg:w-3/6 xl:w-2/6 mx-auto">
                    <div class="flex justify-center">
                        <img src={user.photoUrl} alt="" class="rounded-full mx-auto absolute -top-20 w-32 h-32 shadow-md border-4 border-white transition duration-200 transform hover:scale-110" />
                    </div>
                    <div class="mt-16">
                        <h1 class="font-bold text-center text-3xl text-white dark:text-gray-900">{user.name}</h1>
                        <p class="text-center text-sm text-gray-400 font-medium">{user.email}</p>
                        <p>
                            <span>
                            </span>
                        </p>
                        <div class="my-5 px-6">
                            <div class="text-gray-200 rounded-lg text-center font-medium items-center leading-6 px-6 py-3 bg-gray-900 hover:bg-black hover:text-white flex justify-center">
                                <div className="bg-white rounded-full h-[30px] w-[30px] p-1"><Image src='/logob.png' width="100%" height="100%" /></div>
                                <span className="mx-2">-</span>
                                <span class="font-bold">100</span>
                            </div>
                        </div>
                        {/* <div class="flex justify-between items-center my-5 px-6">
                            <div onClick={() => setShow(false)} className={classNames(!show ? "dark:text-gray-900 text-white bg-gray-900 dark:bg-gray-100" : "text-gray-500", "hover:cursor-pointer  rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3 ")}>Profile</div>
                            <div onClick={() => setShow(true)} className={classNames(show ? "dark:text-gray-900 text-white bg-gray-900 dark:bg-gray-100" : "text-gray-500", "hover:cursor-pointer rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3")}>Payments</div>
                        </div> */}
                        <div className="w-full mt-12">
                            <h3 class="font-medium text-white dark:text-gray-900 text-left px-6">Profile</h3>
                            <div class="mt-5 w-full flex flex-col items-center overflow-hidden text-sm">
                                <a href="#" class=" border-t border-gray-900 dark:border-gray-100 text-gray-200 dark:text-gray-600 py-4 pl-6 pr-3 w-full block hover:bg-gray-900 dark:hover:bg-gray-100 transition duration-150">
                                    <img src="https://avatars0.githubusercontent.com/u/35900628?v=4" alt="" class="rounded-full h-6 shadow-md inline-block mr-2" />
                                    Edit Profile
                                    {/* <span class="text-gray-400 dark:text-gray-500 text-xs mx-2">42 min ago</span> */}
                                </a>
                                <a href="#" class=" border-t border-gray-900 dark:border-gray-100 text-gray-200 dark:text-gray-600 py-4 pl-6 pr-3 w-full block hover:bg-gray-900 dark:hover:bg-gray-100 transition duration-150">
                                    <img src="https://avatars0.githubusercontent.com/u/35900628?v=4" alt="" class="rounded-full h-6 shadow-md inline-block mr-2" />
                                    Logout
                                    {/* <span class="text-gray-400 dark:text-gray-500 text-xs mx-2">42 min ago</span> */}
                                </a>
                            </div>
                        </div>
                        <div class="w-full py-6">
                            <h3 class="font-medium text-white dark:text-gray-900 text-left px-6">Tokens</h3>
                            <div class="mt-5 w-full flex flex-col items-center overflow-hidden text-sm">
                                <a href="#" class=" border-t border-gray-900 dark:border-gray-100 text-gray-200 dark:text-gray-600 py-4 pl-6 pr-3 w-full block hover:bg-gray-900 dark:hover:bg-gray-100 transition duration-150">
                                    <img src="https://avatars0.githubusercontent.com/u/35900628?v=4" alt="" class="rounded-full h-6 shadow-md inline-block mr-2" />
                                    Buy Inbet Tokens
                                    {/* <span class="text-gray-400 dark:text-gray-500 text-xs mx-2">42 min ago</span> */}
                                </a>

                                <a href="#" class="w-full border-t border-gray-900 dark:border-gray-100 text-gray-200 dark:text-gray-600 py-4 pl-6 pr-3 w-full block hover:bg-gray-900 dark:hover:bg-gray-100 transition duration-150">
                                    <img src="https://avatars0.githubusercontent.com/u/35900628?v=4" alt="" class="rounded-full h-6 shadow-md inline-block mr-2" />
                                    Redeem Tokens
                                    {/* <span class="text-gray-400 dark:text-gray-500 text-xs mx-2">49 min ago</span> */}
                                </a>
                            </div>
                        </div>
                        <div className="pb-6  flex flex-row-reverse mx-4">
                            <button onClick={(e)=>{
                                e.preventDefault();
                                signout();
                                Router.push('/')
                            }} className="bg-red-600  px-4 py-2 text-base rounded-md">logout</button>
                        </div>
                    </div>
                </div>}
        </div>
    )
}