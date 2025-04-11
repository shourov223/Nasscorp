import React from 'react'
import star from '../assets/star.svg'
import blank_star from '../assets/blank_star.svg'
import persone_one from '../assets/person_one.jpg'


const Client = () => {
    return (
        <>
            <section className='py-[80px] bg-[#16697A]'>
                <div className="container">
                    <h2 className='max-w-[232px] md:max-w-[511px] mx-auto text-center text-[40px] font-bold text-white pb-[10px]'>What Clients Say</h2>
                    <p className='max-w-[262px] md:max-w-[511px] mx-auto text-center text-[14px] font-medium text-white pb-[50px]'>Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics </p>
                </div>
                <div className='flex flex-col xl:flex-row gap-[50px]'>
                {
                    [1,2,3].map(()=>{
                        return <Items/>
                    })
                }
                </div>
            </section>
        </>
    )
}
function Items(item) {
    return <>
        <div className='py-[30px] px-[60px] relative bg-white sm:w-[490px] mx-auto'>
            <h3 className='text-[24px] font-bold'>Regina Miles</h3>
            <h4 className='text-[14px] font-semibold text-[#737373] pb-[15px]'>Designer</h4>
            <ul className='flex gap-1 items-center pb-[15px]'>
                <li><img src={star} alt={star} /></li>
                <li><img src={star} alt={star} /></li>
                <li><img src={star} alt={star} /></li>
                <li><img src={star} alt={star} /></li>
                <li><img src={blank_star} alt={blank_star} /></li>
            </ul>
            <p>This proved to be impossible using the traditional
                concepts of space and time. Einstein developed a
                new view of time first and then space. This proved
                to be impossible using the traditional concepts of
                space and time. Einstein developed a new view
                of time first and then space.</p>
        </div>
    </>
}

export default Client