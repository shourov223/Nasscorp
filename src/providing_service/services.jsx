import React from 'react'
import play_btn from '../assets/play_btn.svg'
import play_img from '../assets/play.jpg'
import icons from '../assets/services_one.svg'
import icons_two from '../assets/bost.svg'

const Services = () => {
    return (
        <>
            <section className='pb-[100px]'>
                <div className="container">
                    <div className='text-center pt-[100px]'>
                        <h2 className='text-[40px] font-bold max-w-[480px] mx-auto pb-[15px] text-center'>We are providing best business service.</h2>
                        <p className='max-w-[510px] mx-auto text-center'>Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics </p>
                    </div>
                    <div className='flex flex-col lg:flex-row justify-between gap-[30px] pt-[100px]'>
                        <div className='w-[360px] sm:w-[600px] h-[442px] mx-auto relative '>
                            <img className='object-cover w-full h-full' src={play_img} alt={play_img} />
                            <div className='absolute top-[50%] left-[50%] bottom-[50%] size-[50px] bg-[#00A0C1] flex items-center justify-center rounded-full'>
                                <img src={play_btn} alt={play_btn} />
                            </div>
                        </div>
                        <div className='sm:flex md:pl-[40px] lg:pl-0'>
                            <div>
                                <h2 className='font-bold text-[40px] pb-[10px] max-w-[330px]'>Most trusted in our field</h2>
                                <p className='text-[14px] pb-[50px] max-w-[330px]'>Most calendars are designed for teams. Slate
                                    is designed for freelancers who want a
                                    simple way to plan their schedule.</p>
                            </div>
                            <div>
                                <div className='flex gap-[45px] pb-[30px]'>
                                    <div>
                                        <img src={icons} alt="icons" />
                                    </div>
                                    <div>
                                        <h4 className='text-[16px] font-bold pb-1.5 max-w-[286px]'>the quick fox jumps over the lazy dog</h4>
                                        <p className='text-[#737373] text-[14px] font-semibold'>Things on a very small scale ...</p>
                                    </div>
                                </div>
                                <div className='flex gap-[45px]'>
                                    <div>
                                        <img src={icons_two} alt="icons" />
                                    </div>
                                    <div>
                                        <h4 className='text-[16px] font-bold pb-1.5 max-w-[286px]'>the quick fox jumps over the lazy dog</h4>
                                        <p className='text-[#737373] text-[14px] font-semibold'>Things on a very small scale ...</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Services