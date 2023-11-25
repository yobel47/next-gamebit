import React from 'react'
import { useRouter, usePathname } from 'next/navigation'

function BottomNav() {
    const pathname = usePathname()
    const router = useRouter()

    return (
        <div className="fixed bottom-0 left-0 z-50 w-full h-16 md:h-20 bg-white border-t border-gray-200 shadow-xl">
            <div className="grid h-full max-w-lg grid-cols-3 mx-auto">
                <button type="button" className="inline-flex flex-col items-center justify-center px-5 group" onClick={() => router.push('/')}>
                    <svg className='!w-8 !h-8 lg:!w-9 lg:!h-9' viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 13.5H15V19.5H18V10.5L12 6L6 10.5V19.5H9V13.5ZM4 21.5V9.5L12 3.5L20 9.5V21.5H4Z" fill={`${pathname == '/' ? "#CB1F59" : "#6B7078"}`} />
                    </svg>
                    <span className={`text-[#6B7078] sm:-mt-1 text-sm sm:text-base md:text-lg font-normal md:font-semibold ${pathname == '/' && "!text-[#CB1F59] !font-semibold"}`}>Home</span>
                </button>
                <button type="button" className="inline-flex flex-col items-center justify-center px-5 group" onClick={() => router.push('transactions')}>
                    <svg className='!w-8 !h-8 lg:!w-9 lg:!h-9' viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="Text Field / Outlined/mdi:list-box-outline">
                            <path id="Vector" d="M11 15.5H17V17.5H11V15.5ZM9 7.5H7V9.5H9V7.5ZM11 13.5H17V11.5H11V13.5ZM11 9.5H17V7.5H11V9.5ZM9 11.5H7V13.5H9V11.5ZM21 5.5V19.5C21 20.6 20.1 21.5 19 21.5H5C3.9 21.5 3 20.6 3 19.5V5.5C3 4.4 3.9 3.5 5 3.5H19C20.1 3.5 21 4.4 21 5.5ZM19 5.5H5V19.5H19V5.5ZM9 15.5H7V17.5H9V15.5Z" fill={`${pathname == '/transactions' ? "#CB1F59" : "#6B7078"}`} />
                        </g>
                    </svg>
                    <span className={`text-[#6B7078] sm:-mt-1 text-sm sm:text-base md:text-lg font-normal md:font-semibold ${pathname == '/transactions' && "!text-[#CB1F59] !font-semibold"}`}>Transactions</span>
                </button>
                <button type="button" className="inline-flex flex-col items-center justify-center px-5 group" onClick={() => router.push('account')}>
                    <svg className='!w-8 !h-8 lg:!w-9 lg:!h-9' viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="Text Field / Outlined/mdi:account-circle-outline">
                            <path id="Vector" d="M12 2.5C10.6868 2.5 9.38642 2.75866 8.17317 3.2612C6.95991 3.76375 5.85752 4.50035 4.92893 5.42893C3.05357 7.3043 2 9.84784 2 12.5C2 15.1522 3.05357 17.6957 4.92893 19.5711C5.85752 20.4997 6.95991 21.2362 8.17317 21.7388C9.38642 22.2413 10.6868 22.5 12 22.5C14.6522 22.5 17.1957 21.4464 19.0711 19.5711C20.9464 17.6957 22 15.1522 22 12.5C22 11.1868 21.7413 9.88642 21.2388 8.67317C20.7362 7.45991 19.9997 6.35752 19.0711 5.42893C18.1425 4.50035 17.0401 3.76375 15.8268 3.2612C14.6136 2.75866 13.3132 2.5 12 2.5ZM7.07 18.78C7.5 17.88 10.12 17 12 17C13.88 17 16.5 17.88 16.93 18.78C15.5294 19.896 13.7909 20.5026 12 20.5C10.14 20.5 8.43 19.86 7.07 18.78ZM18.36 17.33C16.93 15.59 13.46 15 12 15C10.54 15 7.07 15.59 5.64 17.33C4.57618 15.9446 3.99967 14.2467 4 12.5C4 8.09 7.59 4.5 12 4.5C16.41 4.5 20 8.09 20 12.5C20 14.32 19.38 16 18.36 17.33ZM12 6.5C10.06 6.5 8.5 8.06 8.5 10C8.5 11.94 10.06 13.5 12 13.5C13.94 13.5 15.5 11.94 15.5 10C15.5 8.06 13.94 6.5 12 6.5ZM12 11.5C11.6022 11.5 11.2206 11.342 10.9393 11.0607C10.658 10.7794 10.5 10.3978 10.5 10C10.5 9.60218 10.658 9.22064 10.9393 8.93934C11.2206 8.65804 11.6022 8.5 12 8.5C12.3978 8.5 12.7794 8.65804 13.0607 8.93934C13.342 9.22064 13.5 9.60218 13.5 10C13.5 10.3978 13.342 10.7794 13.0607 11.0607C12.7794 11.342 12.3978 11.5 12 11.5Z" fill={`${pathname == '/account' ? "#CB1F59" : "#6B7078"}`} />
                        </g>
                    </svg>
                    <span className={`text-[#6B7078] sm:-mt-1 text-sm sm:text-base md:text-lg font-normal md:font-semibold ${pathname == '/account' && "!text-[#CB1F59] !font-semibold"}`}>Account</span>
                </button>
            </div>
        </div>
    )
}

export default BottomNav