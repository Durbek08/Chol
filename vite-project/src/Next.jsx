import React from 'react'
import img1 from './img/Visual/next.png'
export default function Next() {
  return (
    <section className="bg-[#202020] md:pt-[110px] px-5 md:pb-[153px] pt-[111px] pb-[83px]">
        <div className="max-w-[1250px] mx-auto ">
          <p class="text-[#a5a5a5] mb-3 font-bold text-base leading-4 uppercase">Conclusion</p>
          <h3 class="text-[#dedede] font-bold text-[32px] md:leading-[54px]  leading-[44px] md:mb-[128px] mb-[109px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae aenean aliquet pellentesque lectus. Libero convallis velit, morbi nullam pellentesque quis. Massa nascetur in commodo posuere porttitor.</h3>
          <div class="md:mb-[244px]">
            <img src={img1} alt="" className="bg-gray-500 flex w-full mb-[140px] md:w-full md:h-full  h-[577px] concImg" />
            </div>
            <div class="text-center"><a class="text-[#DEDEDE] border-b-2 font-bold text-[32px] leading-[54px]  inline-block hover:text-[#a5a5a5] transition-all" href="#">Next Case</a></div>
            
        </div>
    </section>
  )
}
