import React from 'react'

export const Second = () => {
  return (
    <section className="py-24 font-mabry">
            <div className="container mx-auto flex md:flex-row items-center">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-3">
                    <div className="bg-white bg-opacity-15 rounded-3xl p-6 mx-6">
                        <h3 className="text-3xl font-bold">точность</h3>
                        <h3 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-blue-500">90%</h3>
                        <p className='text-base font-inter'>Оценка базируется на анализе большого объема данных о продажах схожих объектов и других факторов</p>
                    </div>
                    <div className="bg-white bg-opacity-15 rounded-3xl p-6 mx-6">
                        <h3 className="text-3xl font-bold">работаем</h3>
                        <h3 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-blue-500">в правовом поле</h3>
                        <p className='text-base font-inter'>Оценка недвижимости — обязательный этап при ипотечном кредитовании. Система выдает электронный отчёт, соответствующий всем требованиям №135-ФЗ</p>
                    </div>
                    <div className="bg-white bg-opacity-15 rounded-3xl p-6 mx-6">
                        <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-blue-500">всегда</h3>
                        <h3 className="text-3xl font-bold mb-4">на связи</h3>
                        <p className='text-base font-inter'>Специалисты поддержки всегда на связи, чтобы быстро дать ответ на любой ваш вопрос</p>
                    </div>
                </div>
            </div>
        </section>
  )
}
