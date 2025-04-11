import React, { useState } from 'react'
import logo from '../assets/logo.svg'
import search from '../assets/search.svg'
import icons_2 from '../assets/icons_two.svg'
import bars from '../assets/3_line.png'

const Navbar = () => {
    const [setmenue, showMenue] = useState(false)
    const handleClick = () => {
        showMenue(!setmenue)
    }
    return (
        <nav className= 'left-0 top-0 right-0 absolute p-5'>
            <div className='container'>
                <div className='flex justify-between'>
                    <div>
                        <img src={logo} alt="logo" />
                    </div>
                    <div className='flex items-center gap-8'>
                        <ul className='flex gap-[15px] items-center hidden sm:flex'>
                            <li><a className='text-white' href="#">Home</a></li>
                            <li><a className='text-white' href="#">Product</a></li>
                            <li><a className='text-white' href="#">Pricing</a></li>
                            <li><a className='text-white' href="#">Contact</a></li>
                        </ul>

                        <div className='flex items-center gap-2'>
                            <div>
                                <img src={search} alt="search" />
                            </div>
                            <div>
                                <img src={icons_2} alt="icons" />
                            </div>
                            <button className='sm:hidden ml-[10px]' onClick={handleClick}>
                                <img src={bars} alt="" />
                            </button>
                        </div>
                    </div>
                    {setmenue && <ul className='flex py-[83px] flex-col gap-[15px] items-center absolute w-full bg-amber-50 top-[60px] left-0'>
                        <li><a className='text-black' href="#">Home</a></li>
                        <li><a className='text-black' href="#">Product</a></li>
                        <li><a className='text-black' href="#">Pricing</a></li>
                        <li><a className='text-black' href="#">Contact</a></li>
                    </ul>}
                </div>
            </div>
        </nav>
    )
}

export default Navbar