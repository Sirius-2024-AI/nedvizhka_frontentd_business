import React from 'react';

import Header from './components/Header.tsx'
import First from './components/First.tsx';
import MobileHeader from "./components/MobileHeader.tsx"
import { Second } from './components/Second.tsx';
import Footer from './components/Footer.tsx';
import Third from './components/Third.tsx';
import { Fourth } from './components/Fourth.tsx';
import { Formochka } from './components/Formochka.tsx';

function App() {
    return ( 
        
        <div className='flex flex-col items-center pt-11 bg-black text-white '>

            <Header logo="https://cdn.builder.io/api/v1/image/assets/TEMP/dbab6af55a4d44db6a43069e06e169dde27aeb951a576c1520d2855568e6fc8a?apiKey=325f674200924c05a4b34be8928260b3&" />
            <First FirstImage='https://c.pxhere.com/photos/8e/40/photo-49739.jpg!d'/>
            <h2 className="font-bold mt-8 ml-0 bg-clip-text text-transparent bg-gradient-to-r font-mabry from-cyan-300 to-blue-500 text-6xl">готовый API</h2>
            <h2 className="text-6xl font-bold font-mabry ml-0">для вашего</h2>
            <h2 className="text-6xl font-bold font-mabry ml-0">бизнеса</h2>
            <Second/>
            <Third propsImage="https://img3.fonwall.ru/o/dh/sunset-city-cityscape-night-ljcx.jpeg?auto=compress&amp;fit=resize&amp;w=1200&amp;display=large"/>
            <h2 className="mt-8 font-bold bg-clip-text text-transparent font-mabry bg-gradient-to-r from-cyan-300 to-blue-500 text-6xl ">широкий набор</h2>
            <h2 className="text-6xl font-bold font-mabry mb-8 md: mx-5">инструментов</h2>
            <Fourth ButtonImage="https://png.klev.club/uploads/posts/2024-04/png-klev-club-w1t6-p-strelka-znak-png-2.png"/>
            <h2 className="font-bold mt-8 font-mabry bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-blue-500 text-4xl md:text-6xl ">зарегистрируйтесь</h2>
            <h2 className="text-4xl md:text-6xl font-bold font-mabry mb-8 md: mx-5">и получите доступ</h2>
            <Formochka/>
            <Footer logo="https://cdn.builder.io/api/v1/image/assets/TEMP/511411a769bc234fcb6fa56062e640b3f4cc9b46d9d461ceeaa3f456815f5575?apiKey=325f674200924c05a4b34be8928260b3&"
        GPB="https://cdn.builder.io/api/v1/image/assets/TEMP/ad3defb8de78b5229a7fd9c7a87c6cb76eadba71d7904670cf7433d1d5e060d0?apiKey=325f674200924c05a4b34be8928260b3&"
        Sirius="https://cdn.builder.io/api/v1/image/assets/TEMP/d5defe64a92574d10ab3c2bb7cb21a91912e64d5dee1af9bd94b0ee1168bfe7f?apiKey=325f674200924c05a4b34be8928260b3&"/>
        </div>
    );
    }   
 
export default App;
