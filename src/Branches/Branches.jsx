import React, { useState } from 'react'
import map from '../assets/map.svg'
import Form_img from '../assets/form_img.jpg'
import downArrow from '../assets/downArrow.svg'

const Branches = () => {
    const [shomenue, setShowMenue] = useState(false)
    function result() {
        setShowMenue(!shomenue)
    }
    return (
        <>
            <section className='bg-[#252B42] pt-[100px] h-[807px]'>
                <div className="container">
                    <div className='flex flex-col gap-[30px] justify-between pb-[120px]'>
                        <div className='max-w-[476px]'>
                            <h2 className='text-white font-bold text-[40px] leading-[57px]'>We Have Branches All Over The World</h2>
                            <p className='text-[14px] font-medium leading-[20px] text-white pt-[15px]'>The gradual accumulation of information about atomic and
                                small-scale behaviour during the first quarter of the 20th
                                century, which gave some indications about how small things
                                do behave, produced an increasing confusion which was
                                Heisenberg, and Born.</p>
                        </div>
                        <div>
                            <img src={map} alt={map} />
                        </div>
                    </div>
                    <div className='flex items-center justify-center'>
                        <div className='h-[644px] w-[364px]'>
                            <img className='object-cover w-full h-full' src={Form_img} alt={Form_img} />
                        </div>
                        <div className='px-[50px] py-[40px] bg-white max-w-[688px] h-[644px]'>
                            <h2 className='text-[#252B42] text-[40px] font-bold pb-[40px]'>Get A Free Quote Here</h2>

                            <p className='text-[14px] font-semibold text-[#252B42]'>Name*</p>
                            <input type="text" placeholder='Full Name' className='w-[311px] md:w-[585px] h-[50px] py-[11px] px-[21px] mb-[10px] border border-[#737373] rounded-[5px]' />

                            <p className='text-[14px] font-semibold text-[#252B42]'>Email*</p>
                            <input type="text" placeholder='example@gmail.com' className='w-[585px] h-[50px] py-[11px] px-[21px] mb-[10px] border border-[#737373] rounded-[5px]' />

                            <p>Department *</p>
                            <div className='w-[585px] border border-[#737373] rounded-[5px] px-[21px] py-[11px] h-[50px] mb-1.5 flex justify-between items-center'>
                                <input type="text" placeholder='Please Select' className='outline-0' />
                                <button className='cursor-pointer' onClick={result}>
                                    <img src={downArrow} alt={downArrow} />
                                </button>
                                {shomenue && <div className='relative'>
                                    <ul className='bg-white border w-[585px] absolute right-[-22px] top-[24px]'>
                                        <li>Department_one</li>
                                        <li>Department_two</li>
                                        <li>Department_three</li>
                                    </ul>
                                </div>
                                }
                            </div>
                            <p className='text-[14px] font-semibold text-[#252B42]'>Time*</p>
                            <input type="text" placeholder='4:00 Available' className='w-[585px] h-[50px] py-[11px] px-[21px] mb-[10px] border border-[#737373] rounded-[5px]' />

                            <button className='px-[225px] py-[15px] bg-[#FFA62B] text-white text-[14px] font-bold rounded-[5px] cursor-pointer mt-[40px]'>Book Appointment</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Branches