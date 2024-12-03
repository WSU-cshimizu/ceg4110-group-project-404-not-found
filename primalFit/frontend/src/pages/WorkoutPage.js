import React from 'react'

export default function WorkoutPage() {
    return (<div class=" p-4 rounded-lg">
        <button class="text-blue-500 hover:underline">&lt; End Routine</button>
        <div class="flex flex-col items-center">
            <h2 class="text-lg font-semibold">Tuesday Leg Day</h2>
            <p class="text-sm">Military Squad</p>
        </div>
        <div class="bg-[#B9B9B9] h-64 flex justify-center items-center rounded-lg mb-4">
            <p class="text-center text-lg">VIDEO</p>
        </div>
        <div className='flex flex-col justify-center'>
            <div><p class="text-center mb-4">1:40</p></div>
           <div className='flex justify-center'> <button class="bg-[#B9B9B9] py-2 px-4 rounded-lg w-fit">Stop</button></div>
        </div>
        <div class="flex justify-between mt-4">
            <button class="text-blue-500 hover:underline"> &lt;&lt;Back</button>
            <button class="text-blue-500 hover:underline">Next &gt;&gt;</button>
        </div>
    </div>
    )
} 
