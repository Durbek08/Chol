import React from "react";
import GallaryImg2 from "./img/Gallary/3img.png";
import GallaryImg3 from "./img/Gallary/4img.png";
import GallaryImg4 from "./img/Gallary/5img.png";
import GallaryImg1 from "./img/Gallary/6img.png";

// import { Link } from "react-router-dom";

export default function Featured() {
  return (
    <div>
      <section className="md:pt-[157px] md:pb-[120px]  bg-[#202020] px-5">
        <div className="max-w-[1250px] mx-auto">
          <a
            href="#personalwork"
            className="text-[#DEDEDE] font-bold text-base leading-4 flex gap-6 items-center mb-20"
          >
            <span>
              <svg
                width="16"
                height="33"
                viewBox="0 0 16 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.29289 32.7071C7.68342 33.0976 8.31658 33.0976 8.70711 32.7071L15.0711 26.3431C15.4616 25.9526 15.4616 25.3195 15.0711 24.9289C14.6805 24.5384 14.0474 24.5384 13.6569 24.9289L8 30.5858L2.34315 24.9289C1.95262 24.5384 1.31946 24.5384 0.928933 24.9289C0.538409 25.3195 0.538409 25.9526 0.928933 26.3431L7.29289 32.7071ZM7 4.37114e-08L7 32L9 32L9 -4.37114e-08L7 4.37114e-08Z"
                  fill="#DEDEDE"
                />
              </svg>
            </span>
            Featured Work
          </a>
          <div className="md:grid md:grid-cols-2 grid-cols-1 gap-6 flex flex-col items-center justify-center">
            <div className="flex flex-col gap-5">
              <a
                href="/article"
                className="relative group rounded md:w-full md:h-[888px] gallery overflow-hidden w-[350px] h-[450px] "
              >
                <img
                  src={GallaryImg2}
                  alt="GallaryImg"
                  className="object-cover md:h-full flex mb-6 rounded md:w-full w-[350px] h-[450px]  "
                />
                  <span className=" flex group-hover:left-0 items-center justify-center text-[#DEDEDE] text-4xl rounded absolute left-[-100%]  top-0  md:h-full md:w-full w-[350px] h-[450px] bg-[#00000099] transition-all ">
                  InVersion
                </span>
              </a>
              <a
                href="/article"
                className="relative group rounded  md:w-full md:h-[888px] gallery overflow-hidden w-[350px] h-[450px] "
              >
                <img
                  src={GallaryImg3}
                  alt="GallaryImg"
                  className="object-cover md:h-full flex mb-6 rounded md:w-full w-[350px] h-[450px]  "
                />
                <span className=" flex group-hover:left-0 items-center justify-center text-[#DEDEDE] text-4xl rounded absolute left-[-100%]  top-0  md:h-full md:w-full w-[350px] h-[450px] bg-[#00000099] transition-all ">
                  InVersion
                </span>
              </a>
            </div>
            <div className=" md:pt-[138px] flex flex-col gap-5">
              <a
                href="/article"
            
                className="relative group rounded  md:w-full overflow-hidden md:h-[888px] gallery   w-[350px] h-[450px] "
              >
                <img
                  src={GallaryImg4}
                  alt="GallaryImg"
                  className="object-cover md:h-full flex mb-6 rounded md:w-full w-[350px] h-[450px]  "
                />
                <span className=" flex group-hover:left-0 items-center justify-center text-[#DEDEDE] text-4xl rounded absolute left-[-100%]  top-0  md:h-full md:w-full w-[350px] h-[450px] bg-[#00000099] transition-all ">
                  InVersion
                </span>
              </a>
              <a
                href="/article"
                className="relative group rounded  md:w-full overflow-hidden md:h-[888px] gallery   w-[350px] h-[450px] "
              >
                <img
                  src={GallaryImg1}
                  alt="GallaryImg"
                  className="object-cover md:h-full flex mb-6 rounded md:w-full w-[350px] h-[450px]  "
                />
                <span className=" flex group-hover:left-0 items-center justify-center text-[#DEDEDE] text-4xl rounded absolute left-[-100%]  top-0  md:h-full md:w-full w-[350px] h-[450px] bg-[#00000099] transition-all ">
                  InVersion
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
