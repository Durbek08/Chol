import React from 'react'
import img1 from './img/Personal/1.png'
import img2 from './img/Personal/2.png'
import img3 from './img/Personal/3.png'

export default function Personal() {
  return (
    <div className="md:pt-[120px] md:pb-[120px]  pt-14 pb-[100px] bg-[#202020] px-5">
        <div className="max-w-[1250px] mx-auto">
        <h2 class="font-bold md:text-[36px] md:leading-[49px] text-center text-[28px] leading-[38px] mb-[34px] text-[#DEDEDE] md:mb-[65px]">Personal Projects</h2>

        <div className="md:grid md:grid-cols-3 flex flex-col md:gap-6 gap-6 items-center">
            <div className="w-full h-full  overflow-hidden rounded">
                <img src={img1} alt="" className="flex rounded box-card w-full md:h-full h-[400px]" />
            </div>

            <div className="w-full h-full  overflow-hidden rounded">
                <img src={img2} alt="" className="flex rounded box-card w-full md:h-full h-[400px]" />
            </div>

            <div className="w-full h-full  overflow-hidden rounded">
                <img src={img3} alt="" className="flex rounded box-card w-full md:h-full h-[400px]" />
            </div>
        </div>
        </div>
    </div>
  )
}
