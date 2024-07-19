import React from 'react'
interface ImgProps {
    propsImage: string;
  }
  

const Third : React.FC<ImgProps> = ({ propsImage}) => {
  return (
    <section className="hidden md:block items-center py-24 rounded-3xl justify-between max-w-[1026px] bg-hero-pattern max-h-[285px] w-full" style={{backgroundSize: "cover"}}>
    <div className="container mx-auto flex flex-col items-center">
            <h3 className="text-3xl font-bold mb-6 font-mabry">Улучшайте клиентский опыт</h3>
            <p className="text-lg mx-8 mb-4 font-inter max-w-[630px]">Перейдите на новый уровень взаимодействия с клиентами с помощью функций API автоматизированного сервиса оценки недвижимости: моментальный расчет стоимости, анализ рыночных данных и генерация отчетов</p>
    </div>
</section>
  )
}
export default Third;
