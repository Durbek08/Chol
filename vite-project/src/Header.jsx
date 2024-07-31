import React from 'react'
import img1 from './img/logo.svg'


export default function Header() {
  return (
    <div className='py-5 bg-[#2D2D2D]'>
      <div className="lg:max-w-[1480px] md:max-w-[768px]   px-5 mx-auto flex items-center justify-between">
       <a href="#" className=""> <img src={img1} alt="" /></a>
        <div className="max-sm:hidden flex gap-[56px]">
        <a href="#" className="text-lg fond-bold text-[#DEDEDE]">Home</a>
        <a href="#" className="text-lg fond-bold text-[#DEDEDE]">Work</a>
        <a href="#" className="text-lg fond-bold text-[#DEDEDE]">Contact</a>
        </div>
        
        <button className="sm:hidden">
          <svg width="23" height="18" viewBox="0 0 23 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 17H22M1 1H22H1ZM1 9H22H1Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>

      </div>


    </div>
  )
}
