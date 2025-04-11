import React from 'react'
import Arrow from '../assets/arrow.svg'
import service_one from '../assets/service_one.svg'
import service_two from '../assets/service_two.svg'
import service_three from '../assets/service_three.svg'
import service_four from '../assets/service_four.svg'



const Service = () => {
    return (
        <>
            <section className='pt-[300px] pb-[100px] lg:pt-[180px] bg-[#f3f3f3]'>
                <div className="container">
                    <div className='pl-[70px] sm:pl-[70px] grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 justify-center gap-[35px]'>
                        <div className='bg-white w-[238px] py-[35px] px-[40px] hover:bg-[#252B42] group transition-all'>

                            <svg width="49" height="48" viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_965_65)">
                                    <g clip-path="url(#clip1_965_65)">
                                        <path d="M43.5886 12.5255H38.519V7.45592C38.519 6.55955 38.1629 5.6999 37.5291 5.06608C36.8953 4.43225 36.0356 4.07617 35.1393 4.07617H14.8608C13.9644 4.07617 13.1048 4.43225 12.4709 5.06608C11.8371 5.6999 11.481 6.55955 11.481 7.45592V12.5255H6.41142C5.06687 12.5255 3.77739 13.0597 2.82665 14.0104C1.87592 14.9611 1.3418 16.2506 1.3418 17.5952V41.2534C1.3418 42.1497 1.69788 43.0094 2.3317 43.6432C2.96553 44.2771 3.82518 44.6331 4.72154 44.6331H45.2785C46.1749 44.6331 47.0345 44.2771 47.6683 43.6432C48.3022 43.0094 48.6582 42.1497 48.6582 41.2534V17.5952C48.6582 16.2506 48.1241 14.9611 47.1734 14.0104C46.2227 13.0597 44.9332 12.5255 43.5886 12.5255ZM14.8608 7.45592H35.1393V12.5255H14.8608V7.45592ZM45.2785 41.2534H4.72154V26.0445H18.2405V34.4939H31.7595V26.0445H45.2785V41.2534ZM21.6203 26.0445H28.3798V31.1141H21.6203V26.0445ZM4.72154 22.6648V17.5952C4.72154 17.147 4.89958 16.7172 5.2165 16.4002C5.53341 16.0833 5.96323 15.9053 6.41142 15.9053H43.5886C44.0368 15.9053 44.4666 16.0833 44.7836 16.4002C45.1005 16.7172 45.2785 17.147 45.2785 17.5952V22.6648H4.72154Z" fill="#00A0C1" className='group-hover:fill-white' />
                                    </g>
                                </g>
                                <defs>
                                    <clipPath id="clip0_965_65">
                                        <rect width="48" height="48" fill="white" transform="translate(0.5)" />
                                    </clipPath>
                                    <clipPath id="clip1_965_65">
                                        <rect width="48" height="40.7089" fill="white" transform="translate(1 4)" />
                                    </clipPath>
                                </defs>
                            </svg>

                            <p className='py-[20px] text-[16px] leading-[24px] text-[#252B42] group-hover:text-white'>Business Growing</p>
                            <p className='text-[14px] font-bold leading-[20px] pb-[20px] text-[#737373] group-hover:text-white '>the quick fox jumps over the lazy dog</p>
                            <button className='bg-transparent flex items-center gap-2 py-[10px] px-[30px] border border-[#00A0C1] rounded-full group-hover:text-[#FFA62B] group-hover:bg-white'>
                                more
                                <div className='group-hover:hidden'>
                                    <img src={Arrow} alt={Arrow} />
                                </div>
                            </button>
                        </div>

                        <div className='bg-white w-[238px] py-[35px] px-[40px] hover:bg-[#252B42] group transition-all'>


                            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_993_456)">
                                    <path opacity="0.15" d="M43.6503 13.75H4.35031C4.33231 13.75 4.32031 13.7619 4.32031 13.7796V19.1849C4.32031 22.7291 7.26031 25.6037 10.8783 25.6037C13.3203 25.6037 15.4503 24.2998 16.5843 22.3617C16.7583 22.0594 17.0883 21.8698 17.4423 21.8698C17.7963 21.8698 18.1203 22.0594 18.3003 22.3617C19.4283 24.2998 21.5583 25.6037 24.0003 25.6037C26.4483 25.6037 28.5843 24.2938 29.7063 22.3498C29.8803 22.0535 30.1983 21.8698 30.5403 21.8698H30.5763C30.9243 21.8698 31.2363 22.0535 31.4103 22.3498C32.5383 24.2938 34.6743 25.6037 37.1223 25.6037C40.7403 25.6037 43.6803 22.7291 43.6803 19.1849V13.7796C43.6803 13.7619 43.6683 13.75 43.6503 13.75Z" fill="#00A0C1" />
                                    <path d="M46.2 9.48885V1.89659C46.2 0.847537 45.342 0 44.28 0H3.72003C2.65804 0 1.80004 0.847537 1.80004 1.89659V9.48885C0.798037 9.54812 3.71756e-05 10.372 3.71756e-05 11.3795V19.1851C-0.00380525 20.6197 0.290253 22.0398 0.864037 23.3576C1.12204 23.9622 1.44004 24.5311 1.80004 25.0705V45.518C1.80004 46.5612 2.65804 47.4146 3.72003 47.4146H44.28C45.342 47.4146 46.2 46.5671 46.2 45.518V25.0705C46.5657 24.5298 46.879 23.9563 47.136 23.3576C47.706 22.036 48 20.6313 48 19.1851V11.3795C48 10.372 47.202 9.54812 46.2 9.48885ZM6.12003 4.26732H41.88V9.48293H6.12003V4.26732ZM27.84 43.1532H20.16V36.9834H27.84V43.1532ZM41.904 43.1532H31.68V35.0868C31.68 34.0378 30.822 33.1902 29.76 33.1902H18.24C17.178 33.1902 16.32 34.0378 16.32 35.0868V43.1532H6.12003V28.7985C6.29403 28.8814 6.47403 28.9644 6.66003 29.0355C7.99803 29.5927 9.42003 29.8712 10.884 29.8712C12.348 29.8712 13.764 29.5927 15.108 29.0355C15.936 28.6918 16.716 28.2532 17.43 27.7257C17.442 27.7198 17.454 27.7198 17.466 27.7257C18.1822 28.2554 18.9622 28.6954 19.788 29.0355C21.126 29.5927 22.548 29.8712 24.012 29.8712C25.476 29.8712 26.892 29.5927 28.236 29.0355C29.064 28.6918 29.844 28.2532 30.558 27.7257C30.57 27.7198 30.582 27.7198 30.594 27.7257C31.3102 28.2554 32.0902 28.6954 32.916 29.0355C34.254 29.5927 35.676 29.8712 37.14 29.8712C38.604 29.8712 40.02 29.5927 41.364 29.0355C41.544 28.9585 41.724 28.8814 41.904 28.7985V43.1532ZM43.68 19.1851C43.68 22.7294 40.74 25.6039 37.122 25.6039C34.674 25.6039 32.538 24.2941 31.41 22.3501C31.236 22.0537 30.924 21.87 30.576 21.87H30.54C30.198 21.87 29.88 22.0537 29.706 22.3501C29.1304 23.3417 28.2992 24.1652 27.297 24.7367C26.2948 25.3082 25.1572 25.6074 24 25.6039C21.558 25.6039 19.428 24.3 18.3 22.3619C18.12 22.0597 17.796 21.87 17.442 21.87C17.088 21.87 16.758 22.0597 16.584 22.3619C16.005 23.3498 15.1728 24.1695 14.1711 24.7387C13.1694 25.3078 12.0336 25.6062 10.878 25.6039C7.26003 25.6039 4.32003 22.7294 4.32003 19.1851V13.7799C4.32003 13.7621 4.33203 13.7502 4.35003 13.7502H43.65C43.668 13.7502 43.68 13.7621 43.68 13.7799V19.1851Z" fill="#00A0C1" className='group-hover:fill-white' />
                                </g>
                                <defs>
                                    <clipPath id="clip0_993_456">
                                        <rect width="48" height="47.4146" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>


                            <p className='py-[20px] text-[16px] leading-[24px] text-[#252B42] group-hover:text-white'>Digital Marketing</p>
                            <p className='text-[14px] font-bold leading-[20px] pb-[20px] text-[#737373] group-hover:text-white '>the quick fox jumps over the lazy dog</p>
                            <button className='bg-transparent flex items-center gap-2 py-[10px] px-[30px] border border-[#00A0C1] rounded-full group-hover:text-[#FFA62B] group-hover:bg-white'>
                                more
                                <div className='group-hover:hidden'>
                                    <img src={Arrow} alt={Arrow} />
                                </div>
                            </button>
                        </div>

                        <div className='bg-white w-[238px] py-[35px] px-[40px] hover:bg-[#252B42] group transition-all'>


                            <svg width="49" height="48" viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_965_89)">
                                    <path d="M44.1506 22.2819C43.5751 22.2861 43.005 22.3959 42.4678 22.6061L36.7275 17.8214C36.8687 17.2998 36.9692 16.7587 36.9692 16.1883C36.9692 12.81 34.3026 10.0947 30.9848 10.0947C27.667 10.0947 25.0003 12.81 25.0003 16.1883C25.0003 17.1536 25.2397 18.053 25.6275 18.8622L18.664 27.2421C18.3852 27.189 18.1025 27.1605 17.819 27.1568C17.3905 27.1568 16.9859 27.23 16.5934 27.3372L10.4581 21.09C10.5658 20.6927 10.6376 20.2808 10.6376 19.8445C10.6376 17.1438 8.50238 14.9696 5.85006 14.9696C3.19775 14.9696 1.0625 17.1438 1.0625 19.8445C1.0625 22.5452 3.19775 24.7194 5.85006 24.7194C6.27855 24.7194 6.6831 24.6463 7.07568 24.539L13.2109 30.7862C13.0959 31.1911 13.0355 31.6102 13.0314 32.0317C13.0314 34.7324 15.1667 36.9066 17.819 36.9066C20.4713 36.9066 22.6065 34.7324 22.6065 32.0317C22.6065 31.454 22.4916 30.9105 22.3121 30.3962L29.2852 22.0065C29.8286 22.1674 30.3911 22.2819 30.9848 22.2819C31.9295 22.2766 32.8593 22.0418 33.6969 21.597L39.4396 26.3817C39.3946 26.6377 39.369 26.8968 39.363 27.1568C39.363 29.8575 41.4983 32.0317 44.1506 32.0317C46.8029 32.0317 48.9381 29.8575 48.9381 27.1568C48.9381 24.4561 46.8029 22.2819 44.1506 22.2819Z" fill="#00A0C1" className='group-hover:fill-white' />
                                </g>
                                <defs>
                                    <clipPath id="clip0_965_89">
                                        <rect width="48" height="48" fill="white" transform="translate(0.5)" />
                                    </clipPath>
                                </defs>
                            </svg>


                            <p className='py-[20px] text-[16px] leading-[24px] text-[#252B42] group-hover:text-white'>National top 50 firms</p>
                            <p className='text-[14px] font-bold leading-[20px] pb-[20px] text-[#737373] group-hover:text-white '>the quick fox jumps over the lazy dog</p>
                            <button className='bg-transparent flex items-center gap-2 py-[10px] px-[30px] border border-[#00A0C1] rounded-full group-hover:text-[#FFA62B] group-hover:bg-white'>
                                more
                                <div className='group-hover:hidden'>
                                    <img src={Arrow} alt={Arrow} />
                                </div>
                            </button>

                        </div>

                        <div className='bg-white w-[238px] py-[35px] px-[40px] hover:bg-[#252B42] group transition-all'>


                            <svg width="49" height="48" viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_965_101)">
                                    <g clip-path="url(#clip1_965_101)">
                                        <path d="M30.1416 13.624H42.1395V17.0693H30.1416V13.624Z" fill="white" />
                                        <path d="M30.1416 22.2373H42.1395V25.6826H30.1416V22.2373Z" fill="white" />
                                        <path d="M30.1416 30.8506H42.1395V34.2959H30.1416V30.8506Z" fill="white" />
                                        <path d="M45.5674 5.01123H4.43187C3.52299 5.01214 2.65161 5.37542 2.00893 6.02135C1.36626 6.66727 1.00481 7.54307 1.00391 8.45655V39.4644C1.00481 40.3779 1.36626 41.2537 2.00893 41.8996C2.65161 42.5455 3.52299 42.9088 4.43187 42.9097H45.5674C46.4761 42.9084 47.3472 42.5449 47.9898 41.8991C48.6324 41.2533 48.994 40.3777 48.9953 39.4644V8.45655C48.9944 7.54307 48.633 6.66727 47.9903 6.02135C47.3477 5.37542 46.4763 5.01214 45.5674 5.01123ZM4.43187 8.45655H23.2856V39.4644H4.43187V8.45655ZM26.7136 39.4644V8.45655H45.5674L45.5708 39.4644H26.7136Z" fill="#00A0C1" className='group-hover:fill-white' />
                                    </g>
                                </g>
                                <defs>
                                    <clipPath id="clip0_965_101">
                                        <rect width="48" height="48" fill="#00A0C1" transform="translate(0.5)" />
                                    </clipPath>
                                    <clipPath id="clip1_965_101">
                                        <rect width="48" height="37.92" fill="#00A0C1" transform="translate(1 5)" />
                                    </clipPath>
                                </defs>
                            </svg>


                            <p className='py-[20px] text-[16px] leading-[24px] text-[#252B42] group-hover:text-white'>Business Growing</p>
                            <p className='text-[14px] font-bold leading-[20px] pb-[20px] text-[#737373] group-hover:text-white '>the quick fox jumps over the lazy dog</p>
                            <button className='bg-transparent flex items-center gap-2 py-[10px] px-[30px] border border-[#00A0C1] rounded-full group-hover:text-[#FFA62B] group-hover:bg-white'>
                                more
                                <div className='group-hover:hidden'>
                                    <img src={Arrow} alt={Arrow} />
                                </div>
                            </button>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}


export default Service