import React from "react";
import {BsMouse} from "react-icons/bs";
const Hero = () => {
  return (
    <>
      <section className="hero-image">
        <div className="w-1/2 flex flex-col items-center justify-center px-7  h-full">
          <h2 className="heading text-6xl leading-[1] rounded font-semibold backdrop-blur-sm text-[#000000]">
            Bringing You The Highest Quality Dental Care
          </h2>
          <div className="pe-96 py-5">
            <button className="backdrop-blur-sm py-3 px-9 bg-[#FF7F50] rounded-full hover:bg-[#FF6347] text-white">
              Make Appointment
            </button>
          </div>
          <div className="inline-block  place-content-center">
          <BsMouse className="ps-[40rem] mb-[-10rem] mt-[9rem] animate-bounce" size={40}/>
        </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
