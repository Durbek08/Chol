import React from 'react'
import img2 from './img/hero.png'

export default function Hero() {
  return (
   <div className="py-[129px] bg-[#202020] ">
        <div className="max-w-[1480px] px-5 mx-auto max-lg:flex-col-reverse flex gap-[142px] text-start">
            <div className="">
                <h1 className=" font-bold text-4xl md:leading-[70px] md:text-left  md:text-[64px] text-center max-w-[600px] mb-6 text-[#DEDEDE]">Hi, I am Your Name A Product Designer based in City.</h1>
                <p className="font-semibold text-[#959595] max-w-[500px] mb-[64px] text-2xl">I help businesses and companies reach  their goals by designing user-centric digital products & interactive experiences.</p>
                <button className="flex gap-4 items-center  lg:mr-auto py-5 bg-[#9D9D9D] px-[101px] rounded-md font-semibold text-lg text-[#FFFFFF]">   
                    <svg width="23" height="18" viewBox="0 0 23 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.6429 1H2.35715C1.72597 1 1.21429 1.51167 1.21429 2.14286V15.8571C1.21429 16.4883 1.72597 17 2.35715 17H20.6429C21.274 17 21.7857 16.4883 21.7857 15.8571V2.14286C21.7857 1.51167 21.274 1 20.6429 1Z" stroke="white" stroke-width="2" stroke-linecap="round"/>
                    <path d="M1.21429 2.71436L11.5 9.00007L21.7857 2.71436" stroke="white" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                    <p className="">hi@yourname.com</p>
                </button>
            </div>
            <img src={img2} alt="" className=" object-cover  lg:mx-auto" />
        </div>
   </div>
  )
}
