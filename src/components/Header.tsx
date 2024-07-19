import React from "react";
interface HeaderProps {
    logo: string;
  }
  

  const Header: React.FC<HeaderProps> = ({ logo }) => {

    return (
        <header className="flex flex-col gap-5 justify-center px-12 py-4 w-full text-lg text-white bg-white bg-opacity-15 max-w-[1050px] rounded-[100px] max-md:px-5 max-md:max-w-full font-inter">
          <nav className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
            <img
            loading="lazy"
            src={logo}
            className="shrink-0 self-stretch my-auto max-w-full aspect-[7.14] w-[207px]"
            alt="Logo"
          />
            </div>
            <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
              <a
                href="#"
                className="justify-center text-base font-mabry hover:text-blue-500 transition-colors ease-in-out duration-300 self-stretch px-px py-1 my-auto"
              >
                Подключить API
              </a>
            </div>
            <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
              <a
                href="#"
                className="justify-center text-base  hover:text-blue-500 transition-colors ease-in-out duration-300 self-stretch px-px py-1 my-auto"
              >
                Документация
              </a>
            </div>
            <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
              <a
                href="#"
                className="justify-center text-base  hover:text-blue-500 transition-colors ease-in-out duration-300 self-stretch px-px py-1 my-auto"
              >
                FAQ
              </a>
            </div>
            <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
              <a
                href="#"
                className="justify-center text-base  hover:text-blue-500 transition-colors ease-in-out duration-300 self-stretch px-px py-1 my-auto"
              >
                Для физических лиц
              </a>
            </div>
          </nav>
        </header>
      );
    };

export default Header;