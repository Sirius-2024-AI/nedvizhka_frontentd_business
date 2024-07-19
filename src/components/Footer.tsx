import React from "react";

interface FooterProps {
  logo: string;
  GPB: string;
  Sirius: string;
}

const Footer: React.FC<FooterProps> = ({
  logo,
  GPB,
  Sirius,
}) => {
  return (
    <footer className="flex justify-center items-center self-stretch px-16 py-12 mt-32 w-full bg-gradient-to-t from-[#1919EF]">
      <div className="flex flex-col mt-9 w-full max-w-[1026px] max-md:max-w-full">
        <div className="justify-center max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow justify-center mr-auto text-lg font-medium text-white max-md:mt-10">
                <img
                  loading="lazy"
                  src={logo}
                  className="self-start aspect-[7.14] w-[296px]"
                  alt="Logo"
                />
                <div className="mt-3.5 mr-auto">
                  Федеральная территория «Сириус», Олимпийский пр-т, 40
                </div>
                <div className="mt-3.5 mr-auto">info@nedvizhka.tech</div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[67%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col gap-5 justify-center px-16 py-2 w-full text-lg font-medium text-white bg-white bg-opacity-20 rounded-[100px] max-md:px-5 max-md:mt-10">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                  <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                    <div className="justify-center py-1">
                      <a className="text-base  hover:text-blue-500 transition-colors ease-in-out duration-300" href="#evaluation">Перейти к оценке</a>
                    </div>
                  </div>
                  <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                    <div className="justify-center py-1">
                      <a className="text-base  hover:text-blue-500 transition-colors ease-in-out duration-300" href="#how-it-works">Как это работает?</a>
                    </div>
                  </div>
                  <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                    <div className="justify-center py-1">
                      <a className="text-base  hover:text-blue-500 transition-colors ease-in-out duration-300" href="/for-business">Для бизнеса</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-5 justify-between mt-24 w-full max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
          <div className="flex flex-col justify-end mr-auto text-lg font-medium text-white">
            <div>
              Автоматизированная система <br />
              оценки стоимости недвижимости <br />
            </div>
            <div className="mt-2">
              «Недвижка.tech» © 2024{" "}
              <span className="font-semibold">Все права защищены</span>
            </div>
          </div>
          <div className="flex gap-5 justify-center self-end mt-7 ml-auto max-md:flex-wrap max-md:max-w-full">
            <img
              loading="lazy"
              src={GPB}
              className="self-start mt-3 aspect-[7.14] w-[237px]"
              alt="GPB"
            />
            <img
              loading="lazy"
              src={Sirius}
              className="shrink-0 max-w-full aspect-[4.35] w-[200px]"
              alt="Sirius"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;