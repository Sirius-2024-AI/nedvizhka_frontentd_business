import React from 'react'

export const Formochka = () => {
  return (
    <section className="register py-24 bg-white bg-opacity-15 rounded-3xl mx-6 max-w-[1026px]">
            <div className="container mx-auto text-center">
                <form className='flex flex-col space-y-4 mx-5 '>
                    <input type="text" placeholder="Как вас зовут?" className="bg-white grow w-full my-2 md:my-4 mx-auto bg-opacity-15 placeholder-white placeholder-opacity-30 text-white text-opacity-30 rounded-3xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                    <div className='flex flex-col ml-0'>
                      <div className='flex flex-col grow md:flex-row md:gap-2'>
                        <input type="tel" placeholder="Номер телефона" className="bg-white grow w-full my-2 md:my-4 mx-auto bg-opacity-15 placeholder-white placeholder-opacity-30 text-white text-opacity-30 rounded-3xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                        <input type="email" placeholder="Электронная почта" className="bg-white grow w-full my-2 md:my-4 mx-auto bg-opacity-15 placeholder-white placeholder-opacity-30 text-white text-opacity-30 rounded-3xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                      </div>
                      <div className='flex flex-col grow md:flex-row md:gap-2'>
                        <input type="text" placeholder="Какую компанию представляете?" className="bg-white grow w-full bg-opacity-15 placeholder-white placeholder-opacity-30 text-white text-opacity-30 my-2 md:my-4 mx-auto rounded-3xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                        <input type="text" placeholder="Укажите URL сайта компании" className="bg-white grow w-full bg-opacity-15 placeholder-white placeholder-opacity-30 text-white text-opacity-30 my-2 md:my-4 mx-auto rounded-3xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                      </div>
                    </div>
                    <div className='flex flex-row mx-4'>
                    <div>
                      <div className="flex items-center">
                          <input type="checkbox" id="checkbox1" className="w-4 h-4 focus:ring-blue-500 rounded"/>
                          <label  className="ml-2">Даю согласие на обработку персональных данных</label>
                      </div>
                      <div className="flex items-center">
                          <input type="checkbox" id="checkbox2" className="w-4 h-4 focus:ring-blue-500 rounded"/>
                          <label className="ml-2">Подтверждаю получение рекламных и иных сообщений</label>
                      </div>
                    </div>
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-6 rounded-3xl h-1/2">Получить доступ</button>
                    </div>
                </form>
            </div>
      </section>
  )
}
