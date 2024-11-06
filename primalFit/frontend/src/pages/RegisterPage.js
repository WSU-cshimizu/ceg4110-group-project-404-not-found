import React from 'react'
import PrimalFitImg from '../images/component/PrimalFitImg'

export default function RegisterPage() {
  return (
    <div className={"bg-[url('/src/images/BackgroundImage.png')] bg-cover bg-center h-screen flex items-center justify-center"}>
    <div className=''>
        <div className={"font-bold font-lg flex justify-center"}><PrimalFitImg /></div>
        <div class="max-w-sm p-6 bg-[#FFE4B6] border-8 border-borderColor rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className='text-center text-3xl'>Register an Account</div>
            <div class="p-8">
                <div class="mb-4 flex gap-2 items-center border-b-4 border-borderColorBottom">
                    <label class="block text-gray-700 text-sm font-bold" for="email">Email:</label>
                    <input class="bg-[#FFE4B6] text-black appearance-none rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline" id="email" type="email"/>
                </div>
                <div class="mb-6 flex gap-2 items-center border-b-4 border-borderColorBottom">
                    <label class="block text-gray-700 text-sm font-bold" for="password">Password:</label>
                    <input class="bg-[#FFE4B6] text-black appearance-none rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline" id="password" type="password"/>
                </div>
                <div class="mb-6 flex gap-2 items-center border-b-4 border-borderColorBottom">
                    <label class="block text-gray-700 text-sm font-bold text-nowrap" for="password">Re-Type Password:</label>
                    <input class="bg-[#FFE4B6] text-black appearance-none rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline" id="password" type="password"/>
                </div>
                <div class="flex items-center justify-center">
                    <button class="bg-[#494F5554] hover:bg-[#616b7554] text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                        Register
                    </button>
                </div>
            </div>
        </div>
    </div>

</div>
  )
}
