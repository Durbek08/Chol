import React from 'react'

export default function Footer2() {
  return (
        <footer className=" md:pb-9 pb-16 bg-[#202020]  border-t md:pt-[50px] pt-12 border-[#696969]">
        <div className="max-w-[1250px] mx-auto">
            <div className="max-w-[1250px]  px-5 mx-auto md:flex justify-between md:gap-0 md:flex-row flex-col-reverse flex gap-6 items-center">
            <p class="font-bold text-base leading-[36px] text-[#959595] ">Made by <a href="https://t.me/donyorbekivich" class="text-[#dedede]">Durbek</a> — Copyright 2024</p>

            <ul class="flex gap-11 items-center">
            <li>
                <a href="https://www.instagram.com/doniyorbekivich_/" target="_blank" class="flex footer-link">
                <i class="fa-brands fa-instagram text-3xl text-[#959595]"></i>
                </a>
                </li>
            <li>
                <a href="https://t.me/donyorbekivich" target="_blank" class="flex footer-link"><i class="fa-brands fa-telegram text-3xl text-[#959595] flex"></i></a>
                </li>
                <li>
                <a href="#" target="_blank" class="flex footer-link">
                    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="22" viewBox="0 0 23 22" fill="none"><path d="M21.4432 0H1.20324C0.716492 0 0.323242 0.39325 0.323242 0.88V21.12C0.323242 21.6068 0.716492 22 1.20324 22H21.4432C21.93 22 22.3232 21.6068 22.3232 21.12V0.88C22.3232 0.39325 21.93 0 21.4432 0ZM6.84899 18.7468H3.58474V8.24725H6.84899V18.7468ZM5.21824 6.81175C4.84404 6.81175 4.47824 6.70079 4.1671 6.49289C3.85597 6.28499 3.61346 5.9895 3.47026 5.64379C3.32706 5.29807 3.28959 4.91765 3.3626 4.55064C3.4356 4.18363 3.6158 3.84651 3.8804 3.5819C4.145 3.3173 4.48212 3.13711 4.84913 3.0641C5.21614 2.9911 5.59656 3.02857 5.94228 3.17177C6.288 3.31497 6.58349 3.55747 6.79138 3.86861C6.99928 4.17975 7.11024 4.54555 7.11024 4.91975C7.10749 5.96475 6.26049 6.81175 5.21824 6.81175ZM19.07 18.7468H15.8085V13.64C15.8085 12.4218 15.7865 10.857 14.1117 10.857C12.415 10.857 12.1537 12.1825 12.1537 13.552V18.7468H8.89499V8.24725H12.0245V9.68275H12.0685C12.503 8.85775 13.5672 7.986 15.1567 7.986C18.4622 7.986 19.07 10.1612 19.07 12.9882V18.7468Z" fill="#959595"></path>
                    </svg>
                    </a>
                </li>
                <li>
                <a href="#" target="_blank" class="flex footer-link">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="22" viewBox="0 0 28 22" fill="none"><path d="M27.0334 2.7187C26.0511 3.15395 24.996 3.44804 23.8867 3.58096C25.0312 2.89608 25.8876 1.81817 26.2958 0.54834C25.2205 1.18708 24.0435 1.63669 22.8162 1.87761C21.9908 0.996369 20.8976 0.412267 19.7063 0.215991C18.515 0.0197149 17.2922 0.222246 16.2277 0.792141C15.1633 1.36204 14.3168 2.26741 13.8197 3.3677C13.3225 4.46798 13.2025 5.70162 13.4783 6.87709C11.2994 6.76768 9.16776 6.20133 7.22184 5.2148C5.27592 4.22826 3.55919 2.84358 2.18305 1.15063C1.71251 1.96231 1.44195 2.90339 1.44195 3.90563C1.44142 4.80789 1.66361 5.69632 2.0888 6.49211C2.51398 7.28789 3.12902 7.96643 3.87934 8.46751C3.00917 8.43982 2.15819 8.20469 1.39725 7.7817V7.85228C1.39716 9.11772 1.83489 10.3442 2.63616 11.3237C3.43743 12.3031 4.55288 12.9752 5.79326 13.2258C4.98603 13.4443 4.13971 13.4765 3.31822 13.3199C3.66818 14.4088 4.34987 15.3609 5.26786 16.0431C6.18585 16.7253 7.29418 17.1033 8.43769 17.1243C6.49652 18.6481 4.09918 19.4747 1.63134 19.4711C1.19419 19.4712 0.757404 19.4457 0.323242 19.3946C2.82825 21.0052 5.74425 21.86 8.72236 21.8567C18.8037 21.8567 24.3148 13.507 24.3148 6.26539C24.3148 6.03012 24.309 5.7925 24.2984 5.55723C25.3704 4.78198 26.2957 3.82199 27.031 2.72223L27.0334 2.7187Z" fill="#959595"></path></svg>
                    </a>
                    </li>
                    </ul>
            </div>
        </div>
    </footer>
  )
}
