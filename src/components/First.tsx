import React from 'react'

interface FirstProps {
    FirstImage: string;
  }
  const First : React.FC<FirstProps> = ({ FirstImage}) => {
  return (
    <section className="py-24 font-marby items-center px-12">
    <div className="container mx-auto flex flex-col w-full items-center max-w-[1026px]">
        <div>  
            <h1 className="font-bold text-5xl font-mabry">готовое решение для автоматизации</h1>
            <h1 className="font-bold mb-6 font-mabry text-5xl bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-blue-500">оценки недвижимости</h1>
            <h2 className='text-base max-w-[590px] font-inter mb-8'>Сервис на базе AI собственной разработки поможет генерировать отчеты моментально и без дополнительных издержек на сотрудников оценки недвижимости</h2>
            <button className="mt-8 text-white bg-gradient-to-r from-cyan-300 to-blue-600 hover:bg-gradient-to-bl focus:ring-2 duration-300 ease-in-out focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-full text-xl px-5 py-2.5 text-center me-2 mb-2 font-inter" >Подключить API</button>
        </div>
        <div className='md:max-w-[316px]'>
        <img
                loading="lazy"
                src={FirstImage}
                className="grow w-full aspect-[0.68] max-md:mt-10 rounded-3xl"
                alt="Недвижимость"
              />
        </div>
        </div>
    </section>
  )
}
export default First;