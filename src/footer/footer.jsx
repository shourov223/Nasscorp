import React from 'react'
import fb from '../assets/facebook.svg'
import insta from '../assets/insta.svg'
import twitter from '../assets/twitter.svg'
import yt from '../assets/youtube.svg'

const Footer = () => {
    return (
        <>
            <footer className='py-[80px]'>
                <div className="container">
                    <div className='flex flex-col sm:flex-row gap-[100px] items-center justify-center'>
                        <div>
                            <h4 className='text-[24px] font-bold leading-[32px] pb-[25px]'>Get In Touch</h4>
                            <p className='text-[#737373] text-[14px] font-medium'>the quick fox jumps over the
                                lazy dog</p>
                            <ul className='flex gap-[20px] items-center pt-[25px]'>
                                <li>
                                    <img src={fb} alt={fb} />
                                </li>
                                <li>
                                    <img src={insta} alt={insta} />
                                </li>
                                <li>
                                    <img src={twitter} alt={twitter} />
                                </li>
                                <li>
                                    <img src={yt} alt={yt} />
                                </li>
                            </ul>
                        </div>
                        <ul>
                            <li><a className='text-[24px] font-bold leading-[32px] pb-[20px]' href="#">Company info</a></li>
                            <li><a className='text-[14px] font-semibold text-[#737373]' href="#">About Us</a></li>
                            <li><a className='text-[14px] font-semibold text-[#737373]' href="#">Carrier</a></li>
                            <li><a className='text-[14px] font-semibold text-[#737373]' href="#">We are hiring</a></li>
                            <li><a className='text-[14px] font-semibold text-[#737373]' href="#">Blog</a></li>
                        </ul>
                        <ul>
                            <li><a className='text-[24px] font-bold leading-[32px] pb-[20px]' href="#">Features</a></li>
                            <li><a className='text-[14px] font-semibold text-[#737373]' href="#">Business Marketing</a></li>
                            <li><a className='text-[14px] font-semibold text-[#737373]' href="#">User Analytic</a></li>
                            <li><a className='text-[14px] font-semibold text-[#737373]' href="#">Live Chat</a></li>
                            <li><a className='text-[14px] font-semibold text-[#737373]' href="#">Unlimited Support</a></li>
                        </ul>
                        <ul>
                            <li><a className='text-[24px] font-bold leading-[32px] pb-[20px]' href="#">Resources</a></li>
                            <li><a className='text-[14px] font-semibold text-[#737373]' href="#">IOS & Android</a></li>
                            <li><a className='text-[14px] font-semibold text-[#737373]' href="#">Watch a Demo</a></li>
                            <li><a className='text-[14px] font-semibold text-[#737373]' href="#">Customers</a></li>
                            <li><a className='text-[14px] font-semibold text-[#737373]' href="#">API</a></li>
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer