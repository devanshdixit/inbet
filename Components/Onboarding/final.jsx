export default function Final({ onClick }) {
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
                <li className="items-center text-primary-500 flex">
                    <div className="sm:block flex items-center">
                        <svg className="w-4 h-4 sm:h-6 sm:mb-2 mr-2 sm:w-6 ml-auto sm:mr-auto" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                        Confirmation
                    </div>
                </li>
            </ol>
            <svg className="h-12 w-12 text-green-400 mb-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
            <h1 className="dark:text-white text-black mb-6 leading-3 font-extrabold text-2xl">Verified</h1>
            <p className="text-gray-600 font-light mb-4 sm:mb-6">You have successfully verified your account.</p>
            <div onClick={(e) => {
                e.preventDefault();
                onClick("Second");
            }} className="bg-primary-600 hover:cursor-pointer py-3 hover:bg-primary-700 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 w-full rounded-lg items-center ml-3 font-medium text-center px-5 text-sm">Log in to your Account</div>
        </div>
    )
}