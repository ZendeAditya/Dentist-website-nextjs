import Image from 'next/image';
import React from 'react'
const ServicesCard = ({link,text,classs}) => {
  return (
    <>
    <div className="bg-white w-40 h-40 rounded-md hover:bg-[#FF6347] duration-200">
    <div className="flex flex-col items-center py-10 gap-y-2 h-full">
    <Image
      src={link}
      className="w-10 h-10 scale-100"
      alt="Picture of the author"
    />

       <div className='block'>{text}</div>
        </div>
    </div>
    </>
  )
}

export default ServicesCard;