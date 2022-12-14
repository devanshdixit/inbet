export default function Form1({onClick}) {
    return (
        <div className="w-full">
            <div className="justify-center items-center flex mb-8 lg:hidden ">
                <a href="https://flowbite.com" className="flex items-center font-bold text-3xl dark:text-white text-black">
                    <img src="https://flowbite.com/docs/images/logo.svg" className="mr-2 h-8 w-8" alt="Flowbite Logo" />
                    Flowbite
                </a>
            </div>
            <ol className="sm:font-[500] text-[#9BA3AF] lg:mb-12 mb-6 justify-start sm:justify-center sm:text-base text-sm text-center items-center flex">
                <li className="items-center flex">
                    <div className="sm:block flex items-center">
                        <div className="sm:mb-2 mb-0 sm:mr-0 mr-2 sm:mx-auto mx-0 ">1</div>
                        Personal <span className="sm:inline-flex hidden">Info</span>
                    </div>
                    <div className="sm:bg-[#555658] sm:after:content-[''] after:content-['/'] mx-2 sm:mx-8 sm:w-12 sm:h-[1px]" />
                </li>
                <li className="items-center flex">
                    <div className="sm:block flex items-center">
                        <div class="sm:mb-2 mb-0 sm:mr-0 mr-2 sm:mx-auto mx-0 ">2</div>
                        Account <span className="sm:inline-flex hidden">Info</span>
                    </div>
                    <div className="sm:bg-[#555658] sm:after:content-[''] after:content-['/'] mx-2 sm:mx-8 sm:w-12 sm:h-[1px]" />
                </li>
                <li className="sm:block flex items-center">
                    <div className="sm:mb-2 mb-0 sm:mr-0 mr-2 sm:mx-auto mx-0 ">3</div>
                    Confirmation
                </li>
            </ol>
            <h1 className="dark:text-white text-black mb-6 leading-3 font-extrabold text-2xl">Tell us about yourself</h1>
            <p className="text-[#9BA3AF] font-[300] text-lg mb-4">What is your profession?</p>
            <ul className="mb-6">
                <li>
                    <input type="radio" id="designer" name="profession" value="designer" className="hidden peer" required="" />
                    <label for="designer" className="dark:peer-checked:text-primary-500 peer-checked:border-primary-600 peer-checked:text-[#2563EB] p-5 border-2 rounded-lg justify-center items-center hover:cursor-pointer w-full inline-flex text-[#686868] dark:text-[#9CA3AF] bg-white dark:bg-[#1F2937] border-[#bbb9b9]  dark:border-[#374151]">
                        <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z" clip-rule="evenodd"></path></svg>
                        <span className="w-full">I`m a Designer</span>
                        <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </label>
                </li>
                <li className="mt-6">
                    <input type="radio" id="developer" name="profession" value="developer" className="hidden peer" />
                    <label for="developer" className="dark:peer-checked:text-primary-500 peer-checked:border-primary-600 peer-checked:text-primary-600 p-5 border-2 rounded-lg justify-center items-center hover:cursor-pointer w-full inline-flex text-[#686868] dark:text-[#9CA3AF] bg-white dark:bg-[#1F2937] border-[#bbb9b9]  dark:border-[#374151]">
                        <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        <span className="w-full">I???m a Developer</span>
                        <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </label>
                </li>
            </ul>
            <button onClick={(e)=>{
            e.preventDefault();
            onClick("Second");
            }} className="p-3 w-full rounded-lg text-sm bg-primary-600 hover:bg-primary-700 _FONMPVaCsLFJJGDaaIL qHIOIw8TObHgD3VvKa5x focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Next: Account Info</button>
            <p className="text-[#9BA3AF] font-[300] text-sm mt-4">Already have an account? <a href="#" className="text-base">login here.</a></p>
        </div>
    )

}