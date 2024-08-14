import React from 'react'
import img1 from './img/Visual/1.png'
import img2 from './img/Visual/2.png'
import img3 from './img/Visual/3.png'
import img4 from './img/Visual/4.png'
import img5 from './img/Visual/5.png'
import img6 from './img/Visual/6.png'

export default function Visual() {
  return (
    <div className="md:pt-[120px] md:pb-[120px]  pt-14 pb-[100px] bg-[#202020] px-5">
        <div className="max-w-[1250px] mx-auto">
            <h4 className="font-bold md:text-[36px] md:leading-[49px] text-center text-[28px] leading-[38px] mb-[34px] text-[#DEDEDE] md:mb-[65px]">Visual Explorations</h4>
            
            <div className="md:grid md:grid-cols-3 flex flex-col md:gap-6 gap-20 items-center visual-cards ">
                <div className="md:w-[408px] w-full h-[200px] md:h-[408px] ">
                    <img className="w-full object-cover  h-[250px]  flex rounded md:w-[408px] md:h-[408px] " src={img1}  alt=""/>
                </div>

                <div className="md:w-[408px] w-full h-[200px] md:h-[408px] ">
                    <img className="w-full object-cover  h-[250px]  flex rounded md:w-[408px] md:h-[408px] " src={img2}  alt=""/>
                </div>

                <div className="md:w-[408px] w-full h-[200px] md:h-[408px] ">
                    <img className="w-full object-cover  h-[250px]  flex rounded md:w-[408px] md:h-[408px] " src={img3}  alt=""/>
                </div>

                <div className="md:w-[408px] w-full h-[200px] md:h-[408px] ">
                    <img className="w-full object-cover  h-[250px]  flex rounded md:w-[408px] md:h-[408px] " src={img4}  alt=""/>
                </div>

                <div className="md:w-[408px] w-full h-[200px] md:h-[408px] ">
                    <img className="w-full object-cover  h-[250px]  flex rounded md:w-[408px] md:h-[408px] " src={img5}  alt=""/>
                </div>

                <div className="md:w-[408px] w-full h-[200px] md:h-[408px] ">
                    <img className="w-full object-cover  h-[250px]  flex rounded md:w-[408px] md:h-[408px] " src={img6}  alt=""/>
                </div>
            </div>
        </div>
    </div>
  )
}

