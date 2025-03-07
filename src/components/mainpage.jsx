import { DarkThemeToggle, Flowbite } from "flowbite-react";
import React from 'react'

const MainPage = () => {
  return (
    <>
        <Flowbite>
            <div className='grid grid-cols-2 justify-items-start pb-3'>
                <h1 className='text-xl font-bold dark:text-white'>Social Media Dashboard</h1>
                <div className="justify-self-end">
                    <DarkThemeToggle />
                </div>
                <h2 className='text-md text-gray-500 font-bold'>Total Followers: 23,004</h2>
            </div>

            {/* Tabs start */}
            <div className='grid lg:grid-cols-4 gap-5 text-black dark:text-white'>
                <div className='bg-sky-600 pt-1.5 rounded-lg '>
                    <div className='p-4 bg-gray-200 hover:bg-gray-300 hover:dark:bg-gray-700 dark:bg-gray-800 rounded-b-lg'>
                        <div className='flex justify-center gap-2'>
                            <img src="/assets/icon-facebook.svg" alt="iconFB" className="size-6" />
                            <h2>@nathanf</h2>
                        </div>
                        <div className='grid grid-cols-1 gap-3'>
                            <h1 className='font-bold text-7xl pt-5'>1987</h1>
                            <h3 className='text-xl text-gray-500 tracking-widest'>FOLLOWERS</h3>
                            <h4 className='pb-4 text-md font-bold text-green-500'>▲ 12 Today</h4>
                        </div>
                    </div>
                </div>

                <div className='bg-sky-400 pt-1.5 rounded-lg'>
                    <div className='p-4 bg-gray-200 hover:bg-gray-300 hover:dark:bg-gray-700 dark:bg-gray-800 rounded-b-lg'>
                        <div className='flex justify-center gap-2'>
                            <img src="/assets/icon-twitter.svg" alt="iconTW" className="size-6" />
                            <h2>@nathanf</h2>
                        </div>
                        <div className='grid grid-cols-1 gap-3'>
                            <h1 className='font-bold text-7xl pt-5'>1044</h1>
                            <h3 className='text-xl text-gray-500 tracking-widest'>FOLLOWERS</h3>
                            <h4 className='pb-4 text-md font-bold text-green-500'>▲ 99 Today</h4>
                        </div>
                    </div>
                </div>

                <div className='bg-gradient-to-r from-yellow-200 via-red-300 to-pink-700 pt-1.5 rounded-lg'>
                    <div className='p-4 bg-gray-200 hover:bg-gray-300 hover:dark:bg-gray-700 dark:bg-gray-800 rounded-b-lg'>
                        <div className='flex justify-center gap-2'>
                            <img src="/assets/icon-instagram.svg" alt="iconIG" className="size-6" />
                            <h2>@realnathanf</h2>
                        </div>
                        <div className='grid grid-cols-1 gap-3'>
                            <h1 className='font-bold text-7xl pt-5'>11k</h1>
                            <h3 className='text-xl text-gray-500 tracking-widest'>FOLLOWERS</h3>
                            <h4 className='pb-4 text-md font-bold text-green-500'>▲ 1099 Today</h4>
                        </div>
                    </div>
                </div>

                <div className='bg-red-600 pt-1.5 rounded-lg'>
                    <div className='p-4 bg-gray-200 hover:bg-gray-300 hover:dark:bg-gray-700 dark:bg-gray-800 rounded-b-lg'>
                        <div className='flex justify-center gap-2'>
                            <img src="/assets/icon-youtube.svg" alt="iconYT" className="size-6" />
                            <h2>@Nathan F.</h2>
                        </div>
                        <div className='grid grid-cols-1 gap-3'>
                            <h1 className='font-bold text-7xl pt-5'>8239</h1>
                            <h3 className='text-xl text-gray-500 tracking-widest'>SUBSCRIBERS</h3>
                            <h4 className='pb-4 text-md font-bold text-red-500'>▼ 144 Today</h4>
                        </div>
                    </div>
                </div>
            </div>


            <div className='grid grid-cols-2 justify-items-start pt-10 pb-5'>
                <h1 className='text-xl font-bold dark:text-white'>Overview - Today</h1>
            </div>

            {/* Overview boxes */}
            <div className='grid lg:grid-cols-4 gap-5 text-black dark:text-white'>
                {/* box1 */}
                <div className='p-6 bg-gray-200 hover:bg-gray-300 hover:dark:bg-gray-700 dark:bg-gray-800 rounded-lg'>
                    <div className='flex justify-between'>
                        <div>
                            <h3>Page Views</h3>
                        </div>
                        <img src="/assets/icon-facebook.svg" alt="iconFB" className="size-6" />
                    </div>
                    <div className='flex justify-between pt-5'>
                        <div>
                            <h2 className="text-3xl font-bold">87</h2>
                        </div>
                        <div>
                            <h4 className='pb-4 text-md font-bold text-green-500'>▲ 3%</h4>
                        </div>
                    </div>
                </div>

                {/* box2 */}
                <div className='p-6 bg-gray-200 hover:bg-gray-300 hover:dark:bg-gray-700 dark:bg-gray-800 rounded-lg'>
                    <div className='flex justify-between'>
                        <div>
                            <h3>Likes</h3>
                        </div>
                        <img src="/assets/icon-facebook.svg" alt="iconFB" className="size-6" />
                    </div>
                    <div className='flex justify-between pt-5'>
                        <div>
                            <h2 className="text-3xl font-bold">52</h2>
                        </div>
                        <div>
                            <h4 className='pb-4 text-md font-bold text-red-500'>▼ 2%</h4>
                        </div>
                    </div>
                </div>
                {/* box3 */}

                <div className='p-6 bg-gray-200 hover:bg-gray-300 hover:dark:bg-gray-700 dark:bg-gray-800 rounded-lg'>
                    <div className='flex justify-between'>
                        <div>
                            <h3>Likes</h3>
                        </div>
                        <img src="/assets/icon-instagram.svg" alt="iconIG" className="size-6" />
                    </div>
                    <div className='flex justify-between pt-5'>
                        <div>
                            <h2 className="text-3xl font-bold">5462</h2>
                        </div>
                        <div>
                            <h4 className='pb-4 text-md font-bold text-green-500'>▲ 2257%</h4>
                        </div>
                    </div>
                </div>
                {/* box4 */}
                
                <div className='p-6 bg-gray-200 hover:bg-gray-300 hover:dark:bg-gray-700 dark:bg-gray-800 rounded-lg'>
                    <div className='flex justify-between'>
                        <div>
                            <h3>Profile Views</h3>
                        </div>
                        <img src="/assets/icon-instagram.svg" alt="iconIG" className="size-6" />
                    </div>
                    <div className='flex justify-between pt-5'>
                        <div>
                            <h2 className="text-3xl font-bold">52k</h2>
                        </div>
                        <div>
                            <h4 className='pb-4 text-md font-bold text-green-500'>▲ 1375%</h4>
                        </div>
                    </div>
                </div>
                {/* box5 */}

                <div className='p-6 bg-gray-200 hover:bg-gray-300 hover:dark:bg-gray-700 dark:bg-gray-800 rounded-lg'>
                    <div className='flex justify-between'>
                        <div>
                            <h3>Page Views</h3>
                        </div>
                        <img src="/assets/icon-twitter.svg" alt="iconTW" className="size-6" />
                    </div>
                    <div className='flex justify-between pt-5'>
                        <div>
                            <h2 className="text-3xl font-bold">117</h2>
                        </div>
                        <div>
                            <h4 className='pb-4 text-md font-bold text-green-500'>▲ 303%</h4>
                        </div>
                    </div>
                </div>
                {/* box6 */}

                <div className='p-6 bg-gray-200 hover:bg-gray-300 hover:dark:bg-gray-700 dark:bg-gray-800 rounded-lg'>
                    <div className='flex justify-between'>
                        <div>
                            <h3>Likes</h3>
                        </div>
                        <img src="/assets/icon-facebook.svg" alt="iconFB" className="size-6" />
                    </div>
                    <div className='flex justify-between pt-5'>
                        <div>
                            <h2 className="text-3xl font-bold">507</h2>
                        </div>
                        <div>
                            <h4 className='pb-4 text-md font-bold text-green-500'>▲ 553%</h4>
                        </div>
                    </div>
                </div>
                {/* box7 */}

                <div className='p-6 bg-gray-200 hover:bg-gray-300 hover:dark:bg-gray-700 dark:bg-gray-800 rounded-lg'>
                    <div className='flex justify-between'>
                        <div>
                            <h3>Page Views</h3>
                        </div>
                        <img src="/assets/icon-youtube.svg" alt="iconYT" className="size-6" />
                    </div>
                    <div className='flex justify-between pt-5'>
                        <div>
                            <h2 className="text-3xl font-bold">87</h2>
                        </div>
                        <div>
                            <h4 className='pb-4 text-md font-bold text-red-500'>▼ 19%</h4>
                        </div>
                    </div>
                </div>
                {/* box8 */}

                <div className='p-6 bg-gray-200 hover:bg-gray-300 hover:dark:bg-gray-700 dark:bg-gray-800 rounded-lg'>
                    <div className='flex justify-between'>
                        <div>
                            <h3>Page Views</h3>
                        </div>
                        <img src="/assets/icon-youtube.svg" alt="iconYT" className="size-6" />
                    </div>
                    <div className='flex justify-between pt-5'>
                        <div>
                            <h2 className="text-3xl font-bold">87</h2>
                        </div>
                        <div>
                            <h4 className='pb-4 text-md font-bold text-red-500'>▼ 12%</h4>
                        </div>
                    </div>
                </div>




            </div>
        </Flowbite>
    </>
  )
}

export default MainPage
