import Image from "next/image";
import Router from "next/router";
import { useState } from "react";
import { useAuth } from "../Firebase/authContext";
import { getUser, updateUser } from "../Firebase/database";
import Loader from "../Loading";

export default function BuyTokens() {
    const {user,loading} = useAuth();
    const initializeRazorpay = () => {
        return new Promise((resolve) => {
          const script = document.createElement("script");
          script.src = "https://checkout.razorpay.com/v1/checkout.js";
    
          script.onload = () => {
            resolve(true);
          };
          script.onerror = () => {
            resolve(false);
          };
    
          document.body.appendChild(script);
        });
      };
      const makePayment = async () => {
        const res = await initializeRazorpay();
    
        if (!res) {
          alert("Razorpay SDK Failed to load");
          return;
        }
    
        // Make API call to the serverless API
        const data = await fetch("/api/razorpay", { method: "POST",body:JSON.stringify({
            amount: inr
        })}).then((t) =>
          t.json()
        );
        console.log(data);
        var options = {
          key: process.env.NEXT_PUBLIC_RAZORPAY_KEY, // Enter the Key ID generated from the Dashboard
          name: "Inbet",
          currency: data.currency,
          amount: data.amount,
          order_id: data.id,
          description: "",
          image: "https://inbet.vercel.app/logob.png",
          handler: async function (response) {
            // Validate payment at server - using webhooks is a better idea.
            if (!response) {
                setShow(true);
            }
            const userData = await getUser(user?.uid);
            const payment = userData?.payment;
            const userToken = userData?.token ? userData?.token : 0;
            await updateUser(user.uid,{
                token: token + userToken,
                payment: [
                    ...payment,
                  {
                      id: response.razorpay_payment_id,
                      orderId: response.razorpay_order_id,
                      signature: response.razorpay_signature,
                  }
                ]
            });
            setLoadingState(false);
            Router.push("/dashboard");
          }
        };
    
        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
      };
      const [inr, setInr] = useState(250);
      const [token, setToken] = useState(500);
      const [show, setShow] = useState(false);
      const [error, setError] = useState(false);
      const [loadingState, setLoadingState] = useState(false);
    return (
        <section class="bg-white dark:bg-gray-900">
            <div class="items-center py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 min-h-[55vh]">
             {loading || loadingState ? <Loader />:
              <>
            {show && <div className="max-w-md text-center my-4 py-6 px-2 bg-red-200 border border-red-400 mx-auto rounded-lg">
                <h3 className="text-red-600">Payment failed, try again!</h3>
            </div>}
            {error && <div className="max-w-md text-center my-4 py-6 px-2 bg-red-200 border border-red-400 mx-auto rounded-lg">
                <h3 className="text-red-600">Minimum amount should be INR 250 or above </h3>
            </div>}
                <div className="border py-4 px-8 border-gray-200 dark:border-gray-700 shadow-xl bg-gray-800 max-w-md w-full mx-auto rounded-lg">
                    <h1 className="text-center mx-auto mt-4 text-2xl">Buy Tokens</h1>
                    <div className="pt-6 flex justify-center space-x-4">
                        <input onChange={(e)=>{
                            setToken(e.target.value);
                            setInr(e.target.value / 2);
                        }} value={token} type="number" name="inbetToken" id="inbetToken" class="bg-gray-50 max-w-[120px] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Inbet Tokens" required />
                        <span className="h-10 w-10"><Image src="/logob.png" width="100%" height="100%" alt="" /></span>
                    </div>
                    <div className="h-6 mx-auto my-6 w-6 rotate-90 dark:text-white text-black">
                        <svg version="1.0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64.000000 64.000000"  preserveAspectRatio="xMidYMid meet">  <g transform="translate(0.000000,64.000000) scale(0.100000,-0.100000)" fill="currentColor" stroke="none"> <path d="M429 609 c-10 -19 -6 -27 32 -65 l43 -44 -235 0 c-259 0 -278 -4 -265 -53 l6 -27 246 0 247 0 -42 -45 c-22 -24 -41 -47 -41 -50 0 -18 23 -45 38 -45 22 0 182 158 182 179 0 9 -35 51 -78 94 -82 81 -112 94 -133 56z"/> <path d="M84 280 c-44 -45 -81 -88 -82 -97 -3 -9 28 -48 74 -94 83 -83 114 -97 134 -58 13 23 7 33 -45 81 l-30 27 237 1 c201 0 239 2 252 16 9 8 16 21 16 28 0 33 -23 36 -263 36 l-240 0 42 45 c46 49 45 49 31 76 -19 34 -46 21 -126 -61z"/> </g> </svg> 
                    </div>
                    <div className=" flex justify-center space-x-4">
                        <input onChange={(e)=>{
                            setInr(e.target.value);
                            setToken(e.target.value * 2);
                        }} value={inr} type="number" name="inbetToken" id="inbetToken" class="bg-gray-50 max-w-[120px] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Inr currency" required />
                        <span className="h-8 w-8"><Image src="/rupee.png" width="100%" height="100%" alt="" /></span>
                    </div>
                    <div onClick={(e)=>{
                      e.preventDefault();
                      setError(false);
                      if(token < 500){
                        return setError(true);
                      }
                      if(inr < 250){
                        return setError(true);
                      }
                      setLoadingState(true);
                      makePayment();
                    }} className="bg-primary-600 hover:cursor-pointer text-center mt-8 mb-3 py-2 rounded-lg">Buy Now</div>
                </div>
                </>}
            </div>
        </section>
    )

}