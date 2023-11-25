import { useState } from 'react'
// Import Swiper React components
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/bundle';
import Head from 'next/head';
import BottomNav from '@/components/BottomNav';

export default function Home() {
    const [showHeader, setHeader] = useState(true)

    const [toggleState, setToggleState] = useState(1)

    const toggleTab = (index) => {
        setToggleState(index)
    };

    const getActiveClass = (index, className) => toggleState === index ? className : ""

    return (
        <main className="">
            <Head>
                <title>Homepage</title>
            </Head>

            {/* Card Header */}
            <div className={`bg-[#A21947] py-3 px-4 lg:py-4 lg:px-5 text-white bg-head-pattern bg-bottom bg-repeat-x flex justify-between transition-all ease-out duration-500  ${showHeader ? "block" : "hidden"} `}>
                <div>
                    <div className='font-semibold text-sm sm:text-base md:text-lg lg:text-xl'>Get instant cashback on your first purchase!</div>
                    <div className='font-normal text-xs sm:text-sm md:text-base lg:text-lg mt-1 flex'>The best way to top-up games
                        <svg className='w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7' width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.66699 11.3334L10.0003 8.00008L6.66699 4.66675V11.3334Z" fill="white" />
                        </svg>
                    </div>
                </div>
                <div className='items-center flex'>
                    <button onClick={() => setHeader(!showHeader)}>
                        <svg className='w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-9 lg:h-9' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" fill="white" />
                        </svg>
                    </button>
                </div>
            </div>
            <div className='mb-24 md:mb-28'>
                <div className='my-4 mx-4 lg:my-5 lg:mx-5'>
                    {/* Search bar */}
                    <div className=' w-100 flex  justify-between'>
                        <div className="border-[#AAADB2] border rounded-md px-5 py-3 flex gap-3 flex-0 items-center">
                            <img className='w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 ' src='/assets/svg/search.svg' />
                            <input className='text-ellipsis text-base sm:text-lg md:text-xl ' placeholder='Search any game, hero, and other'></input>
                        </div>
                        <div className='flex gap-3 items-center'>
                            <button className='relative' onClick={() => console.log("Redirect to notification")}>
                                <span className="absolute right-[1.6px] top-[1px] inline-flex items-center rounded-md bg-[#1FCB91] p-1 md:p-[0.35rem] text-gray-600 ring-1 ring-inset ring-gray-500/10"></span>
                                <img className='w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8' src='/assets/svg/notification.svg' />
                            </button>
                            <button onClick={() => console.log("Redirect to cart")}>
                                <img className='w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 ' src='/assets/svg/cart.svg' />
                            </button>
                        </div>
                    </div>

                    {/* Banner */}
                    <div className='my-4 '>
                        <Swiper
                            modules={[Navigation, Pagination]}
                            pagination={{
                                el: '.custom-pagination',
                                clickable: true,
                                renderBullet: (index, className) => {
                                    return '<span class="' + className + '  sm:!w-3 sm:!h-3 md:!w-3 md:!h-3 lg:!w-4 lg:!h-4"></span>';
                                },
                            }}
                            spaceBetween={50}
                            slidesPerView={1}
                            loop={true}
                        >
                            <SwiperSlide><img className="!w-full" src='/assets/img/banner.png'></img></SwiperSlide>
                            <SwiperSlide><img className="!w-full" src='/assets/img/banner.png'></img></SwiperSlide>
                            <SwiperSlide><img className="!w-full" src='/assets/img/banner.png'></img></SwiperSlide>
                            <SwiperSlide><img className="!w-full" src='/assets/img/banner.png'></img></SwiperSlide>
                            <SwiperSlide><img className="!w-full" src='/assets/img/banner.png'></img></SwiperSlide>
                            <SwiperSlide><img className="!w-full" src='/assets/img/banner.png'></img></SwiperSlide>
                        </Swiper>

                        <div className='flex justify-between mt-3'>
                            <div className="custom-pagination !w-auto"></div>
                            <button onClick={() => console.log("Redirect to all promotions")}>
                                <div className='font-bold text-[#CB1F59] text-base md:text-xl'>See all promotions</div>
                            </button>
                        </div>
                    </div>

                    {/* Menu */}
                    <div className='mt-8 mb-6'>
                        <div className='px-4 py-3 shadow-lg rounded-xl '>
                            <Swiper
                                modules={[Navigation, Scrollbar]}
                                scrollbar={{
                                    draggable: true,
                                    el: '.custom-scrollbar',
                                    dragSize: 30,
                                }}
                                spaceBetween={0}
                                slidesPerView={5}
                            >
                                <SwiperSlide>
                                    <div className='flex flex-col items-center text-center cursor-pointer' onClick={() => console.log('Redirect to Account')}>
                                        <img className='w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 ' src='/assets/svg/account.svg' />
                                        <div className='font-medium text-xs sm:text-sm md:text-base lg:text-lg mt-2 leading-3'>Account</div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='flex flex-col items-center text-center cursor-pointer' onClick={() => console.log('Redirect to Top Up')}>
                                        <img className='w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 ' src='/assets/svg/topup.svg' />
                                        <div className='font-medium text-xs sm:text-sm md:text-base lg:text-lg mt-2 leading-3'>Top Up</div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='flex flex-col items-center text-center cursor-pointer' onClick={() => console.log('Redirect to Game Coins')}>
                                        <img className='w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 ' src='/assets/svg/gamecoins.svg' />
                                        <div className='font-medium text-xs sm:text-sm md:text-base lg:text-lg mt-2 leading-3'>Game Coins</div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='flex flex-col items-center text-center cursor-pointer' onClick={() => console.log('Redirect to Mobile Balance')}>
                                        <img className='w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 ' src='/assets/svg/mobilebalance.svg' />
                                        <div className='font-medium text-xs sm:text-sm md:text-base lg:text-lg mt-2 leading-3'>Mobile Balance</div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='flex flex-col items-center text-center cursor-pointer' onClick={() => console.log('Redirect to Item')}>
                                        <img className='w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 ' src='/assets/svg/item.svg' />
                                        <div className='font-medium text-xs sm:text-sm md:text-base lg:text-lg mt-2 leading-3'>Item</div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='flex flex-col items-center text-center cursor-pointer' onClick={() => console.log('Redirect to Account')}>
                                        <img className='w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 ' src='/assets/svg/account.svg' />
                                        <div className='font-medium text-xs sm:text-sm md:text-base lg:text-lg mt-2 leading-3'>Account</div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='flex flex-col items-center text-center cursor-pointer' onClick={() => console.log('Redirect to Top Up')}>
                                        <img className='w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 ' src='/assets/svg/topup.svg' />
                                        <div className='font-medium text-xs sm:text-sm md:text-base lg:text-lg mt-2 leading-3'>Top Up</div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='flex flex-col items-center text-center cursor-pointer' onClick={() => console.log('Redirect to Game Coins')}>
                                        <img className='w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 ' src='/assets/svg/gamecoins.svg' />
                                        <div className='font-medium text-xs sm:text-sm md:text-base lg:text-lg mt-2 leading-3'>Game Coins</div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='flex flex-col items-center text-center cursor-pointer' onClick={() => console.log('Redirect to Mobile Balance')}>
                                        <img className='w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 ' src='/assets/svg/mobilebalance.svg' />
                                        <div className='font-medium text-xs sm:text-sm md:text-base lg:text-lg mt-2 leading-3'>Mobile Balance</div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='flex flex-col items-center text-center cursor-pointer' onClick={() => console.log('Redirect to Item')}>
                                        <img className='w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 ' src='/assets/svg/item.svg' />
                                        <div className='font-medium text-xs sm:text-sm md:text-base lg:text-lg mt-2 leading-3'>Item</div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                            <div className='flex justify-center w-full'>
                                <div className='relative mt-7 md:mb-2 w-1/3'>
                                    <div className="!h-1 md:!h-2 custom-scrollbar swiper-scrollbar"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Tab Games */}
                    <div className='mb-4'>
                        <div className='text-base sm:text-lg md:text-xl lg:text-2xl lg:mt-3 font-bold font-[#404751]'>Quick Buy</div>
                        <div className='my-2 md:my-4 '>
                            <div className="">
                                <ul className="flex gap-3 md:gap-5 border-b border-[#D5D6D8] -px-2">
                                    <li
                                        className={`pb-1 flex justify-center items-center relative cursor-pointer font-medium text-sm sm:text-base md:text-lg lg:text-xl ${getActiveClass(1, "text-[#cb1f59] !font-semibold border-b-2 border-[#cb1f59]")}`}
                                        onClick={() => toggleTab(1)}
                                    >
                                        Mobile Games
                                    </li>
                                    <li
                                        className={`pb-1 flex justify-center items-center relative cursor-pointer font-medium text-sm sm:text-base md:text-lg lg:text-xl ${getActiveClass(2, "text-[#cb1f59] !font-semibold border-b-2 border-[#cb1f59]")}`}
                                        onClick={() => toggleTab(2)}
                                    >
                                        PC Games
                                    </li>
                                    <li
                                        className={`pb-1 flex justify-center items-center relative cursor-pointer font-medium text-sm sm:text-base md:text-lg lg:text-xl ${getActiveClass(3, "text-[#cb1f59] !font-semibold border-b-2 border-[#cb1f59]")}`}
                                        onClick={() => toggleTab(3)}
                                    >
                                        Game Voucher
                                    </li>
                                </ul>
                                <div className="content-container">
                                    <div className={`hidden my-4 ${getActiveClass(1, "!flex flex-col")}`}>
                                        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 " >
                                            <button onClick={() => console.log("redirect to Genshin")}>
                                                <div className='p-2 bg-white shadow grid rounded-lg hover:shadow-xl'>
                                                    <img className="rounded place-self-center" src='/assets/img/1.png' />
                                                    <div className='text-xs sm:text-sm md:text-base lg:text-lg font-medium text-center mt-3'>Genshin Crystal</div>
                                                </div>
                                            </button>
                                            <button onClick={() => console.log("redirect to Honkai")}>
                                                <div className='p-2 bg-white shadow grid rounded-lg hover:shadow-xl'>
                                                    <img className="rounded place-self-center" src='/assets/img/2.png' />
                                                    <div className='text-xs sm:text-sm md:text-base lg:text-lg font-medium text-center mt-3'>Honkai : Star Rail</div>
                                                </div>
                                            </button>
                                            <button onClick={() => console.log("redirect to Mobile legend")}>
                                                <div className='p-2 bg-white shadow grid rounded-lg hover:shadow-xl'>
                                                    <img className="rounded place-self-center" src='/assets/img/3.png' />
                                                    <div className='text-xs sm:text-sm md:text-base lg:text-lg font-medium text-center mt-3'>Mobile Legends</div>
                                                </div>
                                            </button>
                                            <button onClick={() => console.log("redirect to Free fire")}>
                                                <div className='p-2 bg-white shadow grid rounded-lg hover:shadow-xl'>
                                                    <img className="rounded place-self-center" src='/assets/img/4.png' />
                                                    <div className='text-xs sm:text-sm md:text-base lg:text-lg font-medium text-center mt-3'>Free Fire</div>
                                                </div>
                                            </button>
                                            <button onClick={() => console.log("redirect to Bigo")}>
                                                <div className='p-2 bg-white shadow grid rounded-lg hover:shadow-xl'>
                                                    <img className="rounded place-self-center" src='/assets/img/5.png' />
                                                    <div className='text-xs sm:text-sm md:text-base lg:text-lg font-medium text-center mt-3'>Bigo Live</div>
                                                </div>
                                            </button>
                                            <button onClick={() => console.log("redirect to Eggy")}>
                                                <div className='p-2 bg-white shadow grid rounded-lg hover:shadow-xl'>
                                                    <img className="rounded place-self-center" src='/assets/img/6.png' />
                                                    <div className='text-xs sm:text-sm md:text-base lg:text-lg font-medium text-center mt-3'>Eggy Party</div>
                                                </div>
                                            </button>
                                            <button onClick={() => console.log("redirect to PUBGM")}>
                                                <div className='p-2 bg-white shadow grid rounded-lg hover:shadow-xl'>
                                                    <img className="rounded place-self-center" src='/assets/img/7.png' />
                                                    <div className='text-xs sm:text-sm md:text-base lg:text-lg font-medium text-center mt-3'>UC PUBGM - INDONESIA</div>
                                                </div>
                                            </button>
                                            <button onClick={() => console.log("redirect to Metal Slug")}>
                                                <div className='p-2 bg-white shadow grid rounded-lg hover:shadow-xl'>
                                                    <img className="rounded place-self-center" src='/assets/img/8.png' />
                                                    <div className='text-xs sm:text-sm md:text-base lg:text-lg font-medium text-center mt-3'>Metal Slug : Awakening</div>
                                                </div>
                                            </button>
                                            <button onClick={() => console.log("redirect to Free fire max")}>
                                                <div className='p-2 bg-white shadow grid rounded-lg hover:shadow-xl'>
                                                    <img className="rounded place-self-center" src='/assets/img/9.png' />
                                                    <div className='text-xs sm:text-sm md:text-base lg:text-lg font-medium text-center mt-3'>Free Fire Max</div>
                                                </div>
                                            </button>
                                        </div>
                                        <button className='mt-5 text-center text-base md:text-lg border border-[#CB1F59] text-[#CB1F59] w-full rounded-md px-4 py-2 font-semibold md:font-bold hover:text-white hover:bg-[#CB1F59] transition-all ease-in-out duration-200'>See More</button>

                                    </div>
                                    <div className={`hidden ${getActiveClass(2, "!flex flex-col")}`}>
                                        <div className='text-center font-bold p-6 pt-12 text-lg lg:text-xl text-[#CB1F59]'>Coming Soon ...</div>
                                    </div>
                                    <div className={`hidden ${getActiveClass(3, "!flex flex-col")}`}>
                                        <div className='text-center font-bold p-6 pt-12 text-lg lg:text-xl text-[#CB1F59]'>Coming Soon ...</div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>


            <BottomNav />

        </main >
    )
}
