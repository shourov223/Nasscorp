import React from 'react'
import Happy_clients from '../assets/happy_client.svg'
import Case from '../assets/case_done.svg'
import Award from '../assets/award_wining.svg'
import WorldWide from '../assets/world_wide.svg'

const Card = () => {
    return (
        <div className='bg-white p-[20px] grid sm:grid-cols-2 lg:grid-cols-4 justify-center gap-[30px] absolute left-0 right-0 xl:top-[673px] sm:top-[530px] lg:top-[780px] shadow lg:max-w-[900px] xl:max-w-[1050px] mx-auto '>
            {
                [
                    {
                        id: 1,
                        icons : Happy_clients ,
                        number : "1.5k" ,
                        text : "HAPPY CUSTOMERS"
                    },
                    {
                        id: 2,
                        icons : Case ,
                        number : "3k" ,
                        text : "CASES DONE"
                    },
                    {
                        id: 3,
                        icons : Award ,
                        number : "45" ,
                        text : "AWARD WINNING"
                    },
                    {
                        id: 4,
                        icons : WorldWide ,
                        number : "12+" ,
                        text : "COUNTRIES WORLDWIDE"
                    },
                ].map((item) => {
                    return <Carditem number={item.number} text={item.text} icons={item.icons} />
                })
            }
        </div>
    )
}
const Carditem = ({number , text , icons}) => {
    return (
        <div>
            <div className='flex gap-[30px] items-center'>
                <div className='min-w-[40px]'>
                    <img src={icons} alt={Happy_clients} />
                </div>
                <div>
                    <h4>{number}</h4>
                    <p>{text}</p>
                </div>
            </div>
        </div>
    )
}


export default Card