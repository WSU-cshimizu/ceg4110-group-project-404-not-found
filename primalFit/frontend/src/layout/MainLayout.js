import React, { useState } from 'react'
import { Outlet } from "react-router-dom";
export default function MainLayout() {
    const [leftSideMenu, setLeftSideMenu] = useState(false);
    return (
        <div className='h-screen px-10 py-5 bg-mainBackgroundColor'>
            <div className='flex justify-between items-center'>
                <div onClick={() => {
                    setLeftSideMenu(!leftSideMenu)
                }}>
                    <svg width="40" height="40" viewBox="0 0 76 75" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="76" height="17" fill="#494F55" />
                        <rect y="58" width="76" height="17" fill="#494F55" />
                        <rect y="29" width="76" height="17" fill="#494F55" />
                    </svg>
                </div>


                <div>
                    <svg width="80" height="80" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M93 39.5C93 49.7173 84.7173 58 74.5 58C64.2827 58 56 49.7173 56 39.5C56 29.2827 64.2827 21 74.5 21C84.7173 21 93 29.2827 93 39.5Z" fill="#494F55" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M75 150C116.421 150 150 116.421 150 75C150 33.5786 116.421 0 75 0C33.5786 0 0 33.5786 0 75C0 116.421 33.5786 150 75 150ZM40 119.038C27.0509 108.732 18.75 92.8355 18.75 75C18.75 43.934 43.934 18.75 75 18.75C106.066 18.75 131.25 43.934 131.25 75C131.25 92.8355 122.949 108.732 110 119.038V93H109.923C108.723 73.4549 93.5459 58 75 58C56.4541 58 41.2772 73.4549 40.0765 93H40V119.038Z" fill="#494F55" />
                    </svg>

                </div>
            </div>
            <div className='flex'>{leftSideMenu && <div>
                <div class="px-8 rounded-lg">
                    <div class="flex items-center mb-4">
                        <div class="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9 4.125l3 3m3 0l3-3m-9-4.125l3-3m3 0l3 3" />
                            </svg>
                        </div>
                        <p class="ml-4 text-lg font-semibold">Nutrition</p>
                    </div>
                    <div class="flex items-center mb-4">
                        <div class="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9 4.125l3 3m3 0l3-3m-9-4.125l3-3m3 0l3 3" />
                            </svg>
                        </div>
                        <p class="ml-4 text-lg font-semibold">Routines</p>
                    </div>
                    <div class="flex items-center">
                        <div class="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                        <p class="ml-4 text-lg font-semibold">Food Search</p>
                    </div>
                </div>
            </div>}<div className='px-4 w-full'><Outlet /></div></div>
        </div>
    )
}
