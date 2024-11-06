import React, { useState } from 'react'

export default function CreateRoutinesPage() {
    const [routineName, setRoutineName] = useState("Day 0:00 - 12:00");
    const [searchWorkout, setSearchWorkout] = useState("Push-ups");
    const [selectedItem, setSelectedItem] = useState(null);
    const [listItem] = useState([{
        name: "Push-ups",
        sets: 4,
        reps: 12,
    }, {
        name: "Diamonds Push-ups",
        sets: 4,
        reps: 12,
    }, {
        name: "Pike Push-ups",
        sets: 4,
        reps: 12,
    }, {
        name: "Decline Push-ups",
        sets: 4,
        reps: 12,
    }]);
    return (
        <div className='w-full'>
            <div class="w-full">
                <div className='text-center text-3xl'>Create Routines</div>
                <div className="p-8">
                    <div class="px-2 mb-4 flex gap-2 items-center w-full bg-[#B9B9B9]">
                        <label class="block text-gray-700 text-sm font-bold text-nowrap px-2" for="Unnamed Routine">Unnamed Routine:</label>
                        <input class=" text-black bg-transparent appearance-none rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" id="routineName" type="text" value={routineName} onChange={e => setRoutineName(e.target.value)} />
                    </div>
                    <div class="px-2 mb-4 flex gap-2 items-center w-full bg-[#B9B9B9]">
                        <label class="block text-gray-700 text-sm font-bold text-nowrap px-2" for="Unnamed Routine">Search Workout:</label>
                        <input class=" text-black bg-transparent border-borderColor border-b-4 appearance-none rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" id="routineName" type="text" value={searchWorkout} onChange={e => setSearchWorkout(e.target.value)} />
                        <svg width="30" height="30" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.378 0.0582229C9.141 0.0582229 0 9.19922 0 20.4362C0 31.6733 9.141 40.8143 20.378 40.8143C23.8132 40.8143 27.1901 39.9991 30.043 38.4271C30.2715 38.7021 30.5249 38.9555 30.7999 39.184L36.6222 45.0063C37.1598 45.6112 37.8154 46.0999 38.5487 46.4423C39.282 46.7847 40.0776 46.9736 40.8865 46.9974C41.6955 47.0213 42.5008 46.8795 43.2529 46.5808C44.0051 46.2821 44.6883 45.8329 45.2606 45.2606C45.8329 44.6883 46.2821 44.0051 46.5808 43.253C46.8795 42.5008 47.0212 41.6955 46.9974 40.8865C46.9736 40.0776 46.7847 39.282 46.4423 38.5487C46.0999 37.8154 45.6112 37.1598 45.0063 36.6222L39.184 30.7999C38.9004 30.5162 38.5882 30.2626 38.2524 30.043C39.8245 27.1901 40.8143 23.8714 40.8143 20.378C40.8143 9.141 31.6733 0 20.4362 0L20.378 0.0582229ZM20.378 5.88051C28.471 5.88051 34.9337 12.3433 34.9337 20.4362C34.9337 24.2789 33.5364 27.8305 31.091 30.4506C31.0328 30.5088 30.9746 30.567 30.9164 30.6252C30.6414 30.8538 30.388 31.1071 30.1595 31.3821C27.5977 33.7111 24.1043 35.0502 20.3198 35.0502C12.2268 35.0502 5.76407 28.5874 5.76407 20.4945C5.76407 12.4015 12.2268 5.93874 20.3198 5.93874L20.378 5.88051Z" fill="#494F55" />
                        </svg>
                    </div>
                </div>
                <div className="px-8 text-xl">
                    {
                        selectedItem ? <div className='flex gap-7 justify-between'>
                            <div className='flex gap-7'>
                                <div> {selectedItem.name}</div>
                                <div> Sets :{selectedItem.sets}</div>
                                <div> Reps :{selectedItem.reps}</div>
                            </div>
                            <div className='flex gap-4'>
                                <svg width="25" height="25" viewBox="0 0 42 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18 0C14.7 0 12 2.7 12 6H6C2.7 6 0 8.7 0 12H42C42 8.7 39.3 6 36 6H30C30 2.7 27.3 0 24 0H18ZM6 18V46.86C6 47.52 6.48 48 7.14 48H34.92C35.58 48 36.06 47.52 36.06 46.86V18H30.06V39C30.06 40.68 28.74 42 27.06 42C25.38 42 24.06 40.68 24.06 39V18H18.06V39C18.06 40.68 16.74 42 15.06 42C13.38 42 12.06 40.68 12.06 39V18H6.06H6Z" fill="#494F55" />
                                </svg>

                                <svg width="25" height="25" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M23.5126 0C10.5219 0 0 10.74 0 24C0 37.26 10.5219 48 23.5126 48C36.5033 48 47.0251 37.26 47.0251 24C47.0251 10.74 36.5033 0 23.5126 0ZM35.2689 10.68L39.5011 15L20.5735 34.32L10.4631 24L14.6954 19.68L20.5735 25.68L35.2689 10.68Z" fill="#494F55" />
                                </svg>
                            </div>
                        </div> : listItem.map((item, index) => <div key={index} className='flex gap-2 p-2' onClick={() => {
                            setSelectedItem(item)
                        }}>
                            <svg width="30" height="30" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="25" width="10" height="60" fill="#494F55" />
                                <rect y="25" width="60" height="10" fill="#494F55" />
                            </svg>
                            {item.name}
                        </div>)
                    }
                </div>
            </div>
        </div>
    )
}
