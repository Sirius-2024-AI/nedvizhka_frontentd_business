import React from "react";

const RegistrationForm: React.FC = () => {
  return (
    <form className="flex flex-col px-9 py-10 mt-9 w-full bg-white bg-opacity-10 max-w-[1026px] rounded-[30px] ">
      <label htmlFor="name" className="sr-only">
        Как к вам обращаться?
      </label>
      <input
        id="name"
        type="text"
        placeholder="Как к вам обращаться?"
        className="justify-center items-start px-6 py-4 text-lg rounded-3xl bg-white bg-opacity-10 text-white text-opacity-20"
      />
      <div className="flex gap-5 mt-6 text-lg max-md:flex-wrap max-md:max-w-full">
        <label htmlFor="phone" className="sr-only">
          Номер телефона
        </label>
        <input
          id="phone"
          type="tel"
          placeholder="Номер телефона"
          className="grow justify-center items-start px-6 py-4 rounded-3xl bg-white bg-opacity-10 text-white text-opacity-20 w-fit max-md:px-5 max-md:max-w-full"
        />
        <label htmlFor="email" className="sr-only">
          Электронная почта
        </label>
        <input
          id="email"
          type="email"
          placeholder="Электронная почта"
          className="grow justify-center items-start px-6 py-4 rounded-3xl bg-white bg-opacity-10 text-white text-opacity-20 w-fit max-md:px-5 max-md:max-w-full"
        />
      </div>
      <div className="flex gap-5 mt-6 text-lg text-white text-opacity-20 max-md:flex-wrap max-md:max-w-full">
        <label htmlFor="company" className="sr-only">
          Какую компанию вы представляете?
        </label>
        <input
          id="company"
          type="text"
          placeholder="Какую компанию вы представляете?"
          className="grow justify-center items-start px-6 py-4 rounded-3xl bg-white bg-opacity-10 w-fit max-md:px-5 max-md:max-w-full"
        />
        <label htmlFor="url" className="sr-only">
          Укажите URL вашей компании
        </label>
        <input
          id="url"
          type="url"
          placeholder="Укажите URL вашей компании"
          className="grow justify-center items-start px-6 py-4 rounded-3xl bg-white bg-opacity-10 w-fit max-md:px-5 max-md:max-w-full"
        />
      </div>
      <div className="flex gap-0 mt-6 text-white max-md:flex-wrap max-md:max-w-full">
        <div className="flex flex-col grow shrink-0 my-auto text-base basis-1/2 w-full max-md:w-full">
          <div className="flex gap-3 max-md:flex-wrap">
            <input
              type="checkbox"
              id="consent"
              className="shrink-0 self-start aspect-square w-[15px]"
            />
            <label htmlFor="consent" className="flex-auto max-md:max-w-full">
              Даю согласие на обработку персональных данных
            </label>
          </div>
          <div className="flex gap-3 mt-1.5 max-md:flex-wrap">
            <input
              type="checkbox"
              id="marketing"
              className="shrink-0 self-start rounded border-2 border-white border-solid h-[15px] w-[15px]"
            />
            <label htmlFor="marketing" className="flex-auto max-md:max-w-full">
              Подтверждаю получение рекламных и иных сообщений
            </label>
          </div>
        </div>
        <button
          type="submit"
          className="grow justify-center items-center px-16 py-4 text-lg text-center rounded-3xl w-fit max-md:w-full basis-1/2 bg-gradient-to-r from-[#0DB6B6] to-50% to-[#5454F1]"
        >
          Получить доступ
        </button>
      </div>
    </form>
  );
};

export default RegistrationForm;
