import Image from "next/image";
import Router from "next/router";
import React, { useState } from "react";
import { useAuth } from "../Components/Firebase/authContext";
import { getUser, setRedeem ,updateUser} from "../Components/Firebase/database";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Loader from "../Components/Loading";

export default function Redeem() {
    const {loading,user} = useAuth();
    const [inr, setInr] = useState(100);
    const [show, setShow] = useState(false);
    const [error, setError] = useState(false);
    const [userData,setUserData] = useState(user);
    const [loadingState, setLoadingState] = useState(false);

    React.useEffect(()=>{
        updateUserData();
    },[]);
    const updateUserData = async () => {
        const data = await getUser(user.uid);
        setUserData(data);
    }
    const handleClick = async () => {
        setLoadingState(true);
        await updateUserData();
        if (!loading || !loadingState) {
            setError(false);
            const a = userData?.token - inr;
            console.log('remianing',a);
            if (a <= 0) {
                setLoadingState(false);
                return setError(true);
            }
            if (inr <= 99) {
                setLoadingState(false);
                return setError(true);
            }
            if (userData.token >= 100) {
                console.log('reached');
                await setRedeem(user.uid, inr);
                await updateUser(user.uid, {
                    token: a
                })
                setLoadingState(false);
                setShow(true);
                Router.push('/dashboard');
            }
        }
    }
    return (
        <>
            <Header />
            <section class="bg-white dark:bg-gray-900">
                    <div class="items-center py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 min-h-[55vh]">
                {loadingState || loading ? <Loader /> :
                <>
                        {show && <div className="max-w-md text-center my-4 py-6 px-2 bg-blue-200 border border-primary-400 mx-auto rounded-lg">
                            <h3 className="text-primary-600">Requested Successfuly, The amount will be credited in 5-6 working days!</h3>
                        </div>}
                        {error && <div className="max-w-md text-center my-4 py-6 px-2 bg-red-200 border border-red-400 mx-auto rounded-lg">
                            <h3 className="text-red-600"></h3>
                        </div>}
                        <div className="border py-4 px-8 border-gray-200 dark:border-gray-700 shadow-xl bg-gray-800 max-w-md w-full mx-auto rounded-lg">
                            <h1 className="text-center mx-auto my-6 text-2xl">Redeem Tokens</h1>
                            <div className=" flex justify-center space-x-4">
                                <input onChange={(e) => {
                                    setInr(e.target.value);

                                }} value={inr} type="number" name="inbetToken" id="inbetToken" class="bg-gray-50 max-w-[120px] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Inr currency" required />
                                <span className="h-8 w-8"><Image src="/rupee.png" width="100%" height="100%" alt="" /></span>
                            </div>
                            <div onClick={(e) => {
                                e.preventDefault();
                                handleClick();
                            }} className="bg-primary-600 hover:cursor-pointer text-center mt-8 mb-3 py-2 rounded-lg">Redeem Now</div>
                        </div>
                        </>}
                    </div>
            </section>
            <Footer />
        </>
    )

}