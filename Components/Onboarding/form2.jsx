export default function Form2({ onClick }) {
    return (
        <div className="w-full">
            <div className="justify-center items-center flex mb-8 lg:hidden ">
                <a href="https://flowbite.com" className="flex items-center font-bold text-3xl dark:text-white text-black">
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
            <h1 className="dark:text-white text-black mb-6 leading-3 font-extrabold text-2xl">Account details</h1>
            <form action="#">
                  <div className="grid grid-cols-2 gap-5 my-6">
                      <div>
                          <label for="full-name" className="dark:text-white text-black text-sm mb-2 font-medium block">Full Name</label>
                          <input type="text" name="full-name" id="full-name" className="p-[0.625rem] autofill:bg-[#E8F0FE] appearance-none w-full rounded-lg text-sm text-[#111827] block bg-[#F9FAFB] border-[#D1D5DB] border-[1px] dark:text-white dark:bg-[#374151] dark:border-[#4B5563] focus:ring-primary-600 focus:border-primary-600" placeholder="Bonnie" required=""/>
                      </div>
                      <div>
                          <label for="email" className="dark:text-white text-black text-sm mb-2 font-medium block">Your email</label>
                          <input type="email" name="email" id="email" className="p-[0.625rem] autofill:bg-[#E8F0FE] autofill:text-black w-full rounded-lg text-sm text-[#111827] bg-[#F9FAFB] border-[#D1D5DB] border-[1px] dark:text-white dark:bg-[#374151] dark:border-[#4B5563] focus:ring-primary-600 focus:border-primary-600" placeholder="name@company.com" required=""/>
                      </div>
                      <div>
                          <label for="password" className="dark:text-white text-black text-sm mb-2 font-medium block">Password</label>
                          <input type="password" name="password" id="password" placeholder="••••••••" className="p-[0.625rem] autofill:bg-[#E8F0FE] appearance-none w-full rounded-lg text-sm text-[#111827] bg-[#F9FAFB] border-[#D1D5DB] border-[1px] dark:text-white dark:bg-[#374151] dark:border-[#4B5563] focus:ring-primary-600 focus:border-primary-600" required=""/>
                      </div>
                      <div>
                          <label for="confirm-password" className=" dark:text-white text-black text-sm mb-2 font-medium block">Confirm password</label>
                          <input type="password" name="confirm-password" id="confirm-password" placeholder="••••••••" className="p-[0.625rem] autofill:bg-[#E8F0FE] appearance-none w-full rounded-lg text-sm text-[#111827] bg-[#F9FAFB] border-[#D1D5DB] border-[1px] dark:text-white dark:bg-[#374151] dark:border-[#4B5563] focus:ring-primary-600 focus:border-primary-600" required=""/>
                      </div>
                      <div>
                          <label for="country" className="dark:text-white text-black text-sm mb-2 font-medium block">Country</label>
                          <select id="country" className="p-[0.625rem] autofill:bg-[#E8F0FE] appearance-none w-full rounded-lg text-sm text-[#111827] block bg-[#F9FAFB] sel border-[#D1D5DB] border-[1px] dark:text-white dark:bg-[#374151] dark:border-[#4B5563]  focus:ring-primary-600 focus:border-primary-600">
                              <option selected="">Choose your country</option>
                              <option value="IN">India</option>
                              <option value="USA">United States</option>
                              <option value="UK">United Kingdom</option>
                              <option value="CA">Canada</option>
                              <option value="FR">France</option>
                              <option value="DE">Germany</option>
                              <option value="ES">Spain</option>
                              <option value="JP">Japan</option>
                              <option value="AUS">Australia</option>
                          </select>
                      </div>
                      <div>
                          <label for="phone-number" className="dark:text-white text-black text-sm mb-2 font-medium block">Phone</label>
                          <input type="number" name="phone-number" id="phone-number" className=" p-[0.625rem] autofill:bg-[#E8F0FE] appearance-none w-full rounded-lg text-sm text-[#111827] bg-[#F9FAFB] border-[#D1D5DB] border-[1px] dark:text-white dark:bg-[#374151] dark:border-[#4B5563] focus:ring-primary-600 focus:border-primary-600 block" placeholder="+123 567 890" required=""/>
                      </div>
                  </div>
                  <div className="mb-6">
                      <div class="flex items-start">
                          <div className="h-6 flex items-center">
                            <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" required=""/>
                          </div>
                          <div class="ml-3 text-sm">
                            <label for="terms" className="font-light text-[#6B7280] dark:text-[#D1D5DB]">By signing up, you are creating a Flowbite account, and you agree to Flowbite’s <a class="_A6LflweZRUwrcL6M2Tk text-primary-600 dark:text-primary-500 _5zvlMLkN1qETxEl3IhT" href="#">Terms of Use</a> and <a class="_A6LflweZRUwrcL6M2Tk text-primary-600 dark:text-primary-500 _5zvlMLkN1qETxEl3IhT" href="#">Privacy Policy</a>.</label>
                          </div>
                      </div>
                      <div class="flex items-start mt-3">
                          <div className="h-5 flex items-center">
                            <input id="newsletter" aria-describedby="newsletter" type="checkbox" className="text-blue-600 bg-gray-100 w-4 h-4 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" required=""/>
                          </div>
                          <div class="ml-3 text-sm">
                            <label for="newsletter" className="font-light text-[#6B7280] dark:text-[#D1D5DB]">Email me about product updates and resources.</label>
                          </div>
                      </div>
                  </div>
                  <div className="flex">   
                      <div onClick={(e)=>{
                        e.preventDefault();
                        onClick("Initial");
                    }} className="sm:py-3 py-2 text-[#111827] hover:text-primary-600 dark:text-[#9CA3AF] dark:bg-[#1F2937] font-medium text-sm text-center bg-white border-[1px] rounded-lg items-center w-full border-[#E5E7EB] dark:border-[#4B5563] focus:ring-2 dark:focus:ring-offset-gray-800 dark:hover:bg-[#374151] hover:bg-gray-100">Prev: Personal Info</div>
                      <button onClick={(e)=>{
                        e.preventDefault();
                        onClick("Third");
                    }}  type="submit" className="bg-primary-600 hover:bg-primary-700 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 w-full rounded-lg items-center ml-3 font-medium text-center px-5 text-sm">Next: Account Info</button>
                  </div>
              </form>
        </div>
    )

}