import React from 'react'
import ServicesCard from './ServicesCard';
import cosmetic from "@/app/Assets/Services/cosmetic.png"
import teeth from "@/app/Assets/Services/teeth.png"
import child from "@/app/Assets/Services/child.png"
import pDentist from "@/app/Assets/Services/p-dentist.png"
import sleep from "@/app/Assets/Services/sleep.png"

const Services = () => {
    
  return (
    <>
    <div className='w-screen h-full bg-gray-400 py-4'>
       <div>
        <h1 className="heading text-6xl pt-10 text-center">
            Our Services
        </h1>
        <p className='text-center px-40 py-2'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt architecto ipsum laboriosam laudantium exercitationem reiciendis nostrum aut! Totam doloremque optio libero? Saepe non blanditiis velit assumenda placeat, ratione dicta magnam.
        </p>
       </div>
       <div className='flex items-center justify-around flex-wrap px-4 py-20'>
        <ServicesCard link={teeth} text="General Dentistry" classs=""/>
        <ServicesCard link={cosmetic} text="Cosmetic Dentistry" classs="pb-5"/>
        <ServicesCard link={child} text="General Dentistry"/>
        <ServicesCard link={pDentist} text="General Dentistry"/>
        <ServicesCard link={sleep} text="General Dentistry"/>
       </div>
    </div>
    </>
  )
}

export default Services;    