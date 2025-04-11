import React from 'react'

const Banner = () => {
    return (
        <>
            <div className='banner pt-[70px] lg:pt-[224px] pb-[157px]'>
                <div className="container lg:px-[160px]">
                    <div className='pb-10 px-10'>
                        <h1 className='text-center text-white lg:text-[58px] text-[40px] font-bold lg:font-extrabold '>Experts are here solve your business problem.</h1>
                    </div>
                    <div className='text-center pb-10 px-10'>
                        <p className='text-white text-[20px] font-medium lg:px-[160px]'>We know how large objects will act, but things on a small scale just do not act that way.</p>
                    </div>
                    <div className='flex flex-col sm:flex-row justify-center items-center gap-[10px]'>
                        <button className='hover:bg-[#FFA62B] border hover:border-none transition-all transition-[300ms] py-[10px] px-9 rounded-full text-white text-[14px] font-bold'>Get Quote Now</button>
                        <button className='hover:bg-[#FFA62B] border hover:border-none transition-all transition-[300ms] py-[10px] px-9 rounded-full text-white text-[14px] font-bold'>Learn More</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner