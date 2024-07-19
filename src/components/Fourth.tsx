import React from 'react'

interface Props {
  BtnImage: string;
}

export const Fourth : React.FC<Props> = ({ BtnImage}) => {
return (
    <div className="grid grid-cols-1  gap-8 max-w-[1026px] my-4 mx-5">
                    <div className="bg-white bg-opacity-15 rounded-3xl p-6 relative ">
                        <h3 className="text-4xl font-mabry font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-blue-500">документация</h3>
                        <h3 className="text-4xl font-mabry font-bold mb-4">для разработчиков</h3>
                        <p className='font-inter'>Интегрируете API системы автоматизированной оценки стоимости автомобилей в процесс оценки недвижимости, а мы сделаем его максимально удобным</p>
                        <button className='rounded-full mt-4 min-w-[54px] min-h-[54px] mx-auto bg-gradient-to-r from-cyan-300 to-blue-600 hover:bg-gradient-to-bl focus:ring-2 duration-300 ease-in-out focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800'>
                          <img loading="lazy"
                src={BtnImage}
                className="grow w-full"/>
                        </button>
                    </div>
                    <div className="bg-white bg-opacity-15 rounded-3xl p-6 relative">
                        <h3 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r font-mabry from-cyan-300 to-blue-500">FAQ</h3>
                        <p className='font-inter'>Оперативно находите ответы на ваши вопросы, используя наш обширный ресурс информации и поддерживающую команду специалистов, готовых помочь вам в любое время</p>
                        <button className='rounded-full mt-4 bg-gradient-to-r from-cyan-300 to-blue-600 hover:bg-gradient-to-bl focus:ring-2 duration-300 ease-in-out focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 min-w-[54px] min-h-[54px] mx-auto'>
                          <img loading="lazy"
                src={BtnImage}
                className="grow w-full"></img>
                        </button>
                    </div>
                </div>
  )
}
