export default function Form3({ onClick }) {
    return (
        <div className="w-full">
            <div className="justify-center items-center flex mb-8 lg:hidden ">
                <a href="/" className="flex items-center font-bold text-3xl dark:text-white text-black">
                    <img src="https://flowbite.com/docs/images/logo.svg" className="mr-2 h-8 w-8" alt="Flowbite Logo" />
                    Flowbite
                </a>
            </div>
            <ol className="sm:font-[500] text-[#9BA3AF] lg:mb-12 mb-6 justify-start sm:justify-center sm:text-base text-sm text-center items-center flex">
                <li className="items-center text-primary-500 flex" onClick={(e) => {
                    e.preventDefault();
                    onClick("Initial");
                }}>
                    <div className="sm:block flex items-center">
                        <svg className="w-4 h-4 sm:h-6 sm:mb-2 mr-2 sm:w-6 ml-auto sm:mr-auto" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                        Personal <span className="sm:inline-flex hidden">Info</span>
                    </div>
                    <div className="sm:bg-[#555658] sm:after:content-[''] after:content-['/'] mx-2 sm:mx-8 sm:w-12 sm:h-[1px]" />
                </li>
                <li className="items-center text-primary-500 flex" onClick={(e) => {
                    e.preventDefault();
                    onClick("Initial");
                }}>
                    <div className="sm:block flex items-center">
                        <svg className="w-4 h-4 sm:h-6 sm:mb-2 mr-2 sm:w-6 ml-auto sm:mr-auto" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                        Account <span className="sm:inline-flex hidden">Info</span>
                    </div>
                    <div className="sm:bg-[#555658] sm:after:content-[''] after:content-['/'] mx-2 sm:mx-8 sm:w-12 sm:h-[1px]" />
                </li>
                <li className="sm:block flex items-center">
                    <div className="sm:mb-2 mb-0 sm:mr-0 mr-2 sm:mx-auto mx-0 ">3</div>
                    Confirmation
                </li>
            </ol>
            <h1 className="dark:text-white text-black mb-6 leading-3 font-extrabold text-2xl">Verify your email address</h1>
            <p className="text-gray-600 font-light">We emailed you a six-digit code to <span className="text-[#111827] font-medium">name@company.com</span>. Enter the code below to confirm your email address.</p>
            <form>
                    <div className="my-4 sm:my-6 flex">
                        <div>
                            <label for="code-1" class="BWabIWdbZ5qWNbPXxuBc">First code</label>
                            <input type="text" maxlength="1" onkeyup="focusNextInput(this, 'code-1', 'code-2')" id="code-1" class="text-2xl text-center bg-white border-[1px] rounded-lg block sm:text-4xl py-3 sm:py-4 w-12 h-12 sm:w-16 sm:h-16  text-[#111827] font-extrabold  focus:ring-primary-500 focus:border-primary-500 _t2wg7hRcyKsNN8CSSeU _BIVSYBXQUqEf_ltPrSk _DJ2tfp6E9c_teMKVD3z a0Ed69aMSu0vgf4oysz0 dark:focus:ring-primary-500 dark:focus:border-primary-500" required=""/>
                        </div>
                        <div>
                            <label for="code-2" class="BWabIWdbZ5qWNbPXxuBc">Second code</label>
                            <input type="text" maxlength="1" onkeyup="focusNextInput(this, 'code-1', 'code-3')" id="code-2" class="text-2xl text-center bg-white border-[1px] rounded-lg block sm:text-4xl py-3 sm:py-4 w-12 h-12 sm:w-16 sm:h-16 ml-4 text-[#111827] font-extrabold  focus:ring-primary-500 focus:border-primary-500 _t2wg7hRcyKsNN8CSSeU _BIVSYBXQUqEf_ltPrSk _DJ2tfp6E9c_teMKVD3z a0Ed69aMSu0vgf4oysz0 dark:focus:ring-primary-500 dark:focus:border-primary-500" required=""/>
                        </div>
                        <div>
                            <label for="code-3" class="BWabIWdbZ5qWNbPXxuBc">Third code</label>
                            <input type="text" maxlength="1" onkeyup="focusNextInput(this, 'code-2', 'code-4')" id="code-3" class="text-2xl text-center bg-white border-[1px] rounded-lg block sm:text-4xl py-3 sm:py-4 w-12 h-12 sm:w-16 sm:h-16 ml-4 text-[#111827] font-extrabold  focus:ring-primary-500 focus:border-primary-500 _t2wg7hRcyKsNN8CSSeU _BIVSYBXQUqEf_ltPrSk _DJ2tfp6E9c_teMKVD3z a0Ed69aMSu0vgf4oysz0 dark:focus:ring-primary-500 dark:focus:border-primary-500" required=""/>
                        </div>
                        <div>
                            <label for="code-4" class="BWabIWdbZ5qWNbPXxuBc">Fourth code</label>
                            <input type="text" maxlength="1" onkeyup="focusNextInput(this, 'code-3', 'code-5')" id="code-4" class="text-2xl text-center bg-white border-[1px] rounded-lg block sm:text-4xl py-3 sm:py-4 w-12 h-12 sm:w-16 sm:h-16 ml-4 text-[#111827] font-extrabold  focus:ring-primary-500 focus:border-primary-500 _t2wg7hRcyKsNN8CSSeU _BIVSYBXQUqEf_ltPrSk _DJ2tfp6E9c_teMKVD3z a0Ed69aMSu0vgf4oysz0 dark:focus:ring-primary-500 dark:focus:border-primary-500" required=""/>
                        </div>
                        <div>
                            <label for="code-5" class="BWabIWdbZ5qWNbPXxuBc">Fivth code</label>
                            <input type="text" maxlength="1" onkeyup="focusNextInput(this, 'code-4', 'code-6')" id="code-5" class="text-2xl text-center bg-white border-[1px] rounded-lg block sm:text-4xl py-3 sm:py-4 w-12 h-12 sm:w-16 sm:h-16 ml-4 text-[#111827] font-extrabold  focus:ring-primary-500 focus:border-primary-500 _t2wg7hRcyKsNN8CSSeU _BIVSYBXQUqEf_ltPrSk _DJ2tfp6E9c_teMKVD3z a0Ed69aMSu0vgf4oysz0 dark:focus:ring-primary-500 dark:focus:border-primary-500" required=""/>
                        </div>
                        <div>
                            <label for="code-6" class="BWabIWdbZ5qWNbPXxuBc">Sixth code</label>
                            <input type="text" maxlength="1" onkeyup="focusNextInput(this, 'code-5', 'code-6')" id="code-6" class="text-2xl text-center bg-white border-[1px] rounded-lg block sm:text-4xl py-3 sm:py-4 w-12 h-12 sm:w-16 sm:h-16 ml-4 text-[#111827] font-extrabold  focus:ring-primary-500 focus:border-primary-500 _t2wg7hRcyKsNN8CSSeU _BIVSYBXQUqEf_ltPrSk _DJ2tfp6E9c_teMKVD3z a0Ed69aMSu0vgf4oysz0 dark:focus:ring-primary-500 dark:focus:border-primary-500" required=""/>
                        </div>
                    </div>
                    <p className="sm:mb-6 mb-4 text-[#6B7280] text-sm p-4 bg-gray-50 rounded-lg">Make sure to keep this window open while check your inbox.</p>
                    <div className="flex">
                        <div  onClick={(e)=>{
                        e.preventDefault();
                        onClick("Second");
                    }} className="sm:py-3 py-2 hover:cursor-pointer text-[#111827] hover:text-primary-600 dark:text-[#9CA3AF] dark:bg-[#1F2937] font-medium text-sm text-center bg-white border-[1px] rounded-lg items-center w-full border-[#E5E7EB] dark:border-[#4B5563] focus:ring-2 dark:focus:ring-offset-gray-800 dark:hover:bg-[#374151] hover:bg-gray-100">Prev: Account Info</div>
                        <div onClick={(e)=>{
                        e.preventDefault();
                        onClick("Final");
                    }} className="bg-primary-600 hover:cursor-pointer py-3 hover:bg-primary-700 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 w-full rounded-lg items-center ml-3 font-medium text-center px-5 text-sm">Verify account</div>
                    </div>
                </form>
        </div>
    )
}