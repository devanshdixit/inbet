import Image from "next/image";

export default function BuyTokens() {
    return (
        <section class="bg-white dark:bg-gray-900">
            <div class="items-center py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 min-h-[55vh]">
                <div className="border py-4 px-8 border-gray-200 dark:border-gray-700 shadow-xl bg-gray-800 max-w-md w-full mx-auto rounded-lg">
                    <h1 className="text-center mx-auto mt-4 text-2xl">Buy Tokens</h1>
                    <div className="pt-6 flex justify-center space-x-4">
                        <input type="number" name="inbetToken" id="inbetToken" class="bg-gray-50 max-w-[120px] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Inbet Tokens" required />
                        <span className="h-10 w-10"><Image src="/logob.png" width="100%" height="100%" alt="" /></span>
                    </div>
                    <div className="h-6 mx-auto my-6 w-6 rotate-90 dark:text-white text-black">
                        <svg version="1.0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64.000000 64.000000"  preserveAspectRatio="xMidYMid meet">  <g transform="translate(0.000000,64.000000) scale(0.100000,-0.100000)" fill="currentColor" stroke="none"> <path d="M429 609 c-10 -19 -6 -27 32 -65 l43 -44 -235 0 c-259 0 -278 -4 -265 -53 l6 -27 246 0 247 0 -42 -45 c-22 -24 -41 -47 -41 -50 0 -18 23 -45 38 -45 22 0 182 158 182 179 0 9 -35 51 -78 94 -82 81 -112 94 -133 56z"/> <path d="M84 280 c-44 -45 -81 -88 -82 -97 -3 -9 28 -48 74 -94 83 -83 114 -97 134 -58 13 23 7 33 -45 81 l-30 27 237 1 c201 0 239 2 252 16 9 8 16 21 16 28 0 33 -23 36 -263 36 l-240 0 42 45 c46 49 45 49 31 76 -19 34 -46 21 -126 -61z"/> </g> </svg> 
                    </div>
                    <div className=" flex justify-center space-x-4">
                        <input type="number" name="inbetToken" id="inbetToken" class="bg-gray-50 max-w-[120px] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Inr currency" required />
                        <span className="h-8 w-8"><Image src="/rupee.png" width="100%" height="100%" alt="" /></span>
                    </div>
                    <div className="bg-primary-600 text-center mt-8 mb-3 py-2 rounded-lg">Buy Now</div>
                </div>
            </div>
        </section>
    )

}