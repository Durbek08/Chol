import React from 'react'
import img1 from './img/Visual/2bolim.png'
import img2 from './img/Visual/2bolim2.png'

export default function Lorem() {
    return (
        <section class="bg-[#202020] md:pt-[100px] md:pb-[115px] pt-[99px] pb-[110px] bgImgPrototype">
            <div class="md:mb-[234px] mb-[226px] proimg">
                <div class="max-w-[1250px] mx-auto px-5 ">
                    <div class="flex   flex-col md:gap-[275px] gap-[226px]"><div class="flex md:justify-between md:flex-row  flex-col-reverse gap-16 mt-[234px]">
                   <img src={img1} alt="" className="flex bg-gray-500 w-full md:w-[506px] md:h-[763px] sm:h-[577px] object-cover prototypeImg" /><div class="md:w-[612px] w-full md:mt-auto md:mb-auto "><p class="text-[#a5a5a5] mb-3 font-bold text-base leading-4 uppercase">solution 1</p><h3 class="text-[#dedede] font-bold text-[32px] md:leading-[54px] leading-[44px] ">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h3></div></div>
                   <div class="flex md:justify-between md:flex-row flex-col gap-16">
                    <div class="md:w-[612px] mt-auto mb-auto ">
                        <p class="text-[#a5a5a5] mb-3 font-bold text-base leading-4 uppercase">solution 2</p>
                        <h3 class="text-[#dedede] font-bold text-[32px] md:leading-[54px] leading-[44px] ">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h3>
                        </div>
                         <img src={img2} alt="" className="flex bg-gray-500 md:w-[506px] md:h-[763px] w-full  sm:h-[577px] object-cover prototypeImg " />
                    </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
