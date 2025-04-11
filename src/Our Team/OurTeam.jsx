import React from 'react'
import persone_two from '../assets/person_two.jpg'
import persone_three from '../assets/persone_three.jpg'
import person__four from '../assets/person_four.jpg'
import person__five from '../assets/person_five.jpg'

const OurTeam = () => {
  return (
    <>
    <section className='bg-[#f3f3f3] pt-[50px] pb-[80px]'>
        <div className="container">
            <h2 className='text-center text-[40px] font-bold pb-[10px]'>Meet Our Team</h2>
            <p  className='text-center max-w-[470px] mx-auto pb-[50px]'>Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics </p>
            <div className='flex flex-col sm:flex-row gap-[35px] items-center justify-center'>
                {
                    [
                        {
                            id : 1 ,
                            image : persone_two,
                            name : "CO Founder" ,
                            text : "Avie Beaton"
                        },
                        {
                            id : 2 ,
                            image : persone_three ,
                            name : "Consultant" ,
                            text : "Ben Jonson"
                        },
                        {
                            id : 3 ,
                            image : person__four ,
                            name : "Consultant" ,
                            text : "Rodney Stratton"
                        },
                        {
                            id : 4 ,
                            image : persone_three ,
                            name : "Consultant" ,
                            text : "Ben Jonson"
                        }
                    ].map((item)=>{
                        return <Items image={item.image} name={item.name} text={item.text} />
                    })
                }
            </div>
        </div>
    </section>
    </>
  )
}

function Items ({image , name , text}) {
    return <>
    <div className='bg-white p-[35px] w-[241px] flex flex-col justify-center items-center'>
        <div className='size-[70px] rounded-full overflow-hidden pb-1.5'>
            <img src={image} alt={persone_two} />
        </div>
        <p className='text-[14px] text-[#FFA62B] font-semibold pb-1.5'>{name}</p>
        <p className='text-[16px] font-bold pb-1.5'>{text}</p>
        <p className='text-center text-[14px] font-medium text-[#737373]'>the quick fox jumps over the lazy dog</p>
    </div>
    </>
}

export default OurTeam