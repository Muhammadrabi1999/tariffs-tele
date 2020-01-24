import React from 'react'
import Tele from './components/Prop/Tele'

export default function App() {           
    const tariffs = [
         {id: 1956, title: 'Мой онлайн+', price: 700, 'tariffs_plan': 'безлимит на Tele 2 России',minuts: 800, 'tariff_description': 'на остальные номера России', internet: 30,},         
         {id: 1993, title: 'Везде онлайн', price: 500, 'tariffs_plan': 'безлимит на Tele 2 России', minuts: 500 , 'tariff_description': 'на остальные номера России', internet: 40,}, 
         {id: 1999, title: 'Мой онлайн', price: 400, 'tariffs_plan': 'безлимит на Tele 2 России', minuts: 400 , 'tariff_description': 'на другие мобильные номера домашнего региона', internet: 15}
            
     ];
               
         
return (
        <div className="tele">
            <div className="month700"><Tele id={tariffs[0].id} title={tariffs[0].title} price={tariffs[0].price} tariffs_plan={tariffs[0].tariffs_plan} minuts={tariffs[0].minuts} tariff_description={tariffs[0].tariff_description} internet={tariffs[0].internet} /></div>
            <div className="month700"><Tele id={tariffs[1].id} title={tariffs[1].title} price={tariffs[1].price} tariffs_plan={tariffs[1].tariffs_plan} minuts={tariffs[1].minuts} tariff_description={tariffs[1].tariff_description} internet={tariffs[1].internet} /></div>
            <div className="month700"><Tele id={tariffs[2].id} title={tariffs[2].title} price={tariffs[2].price} tariffs_plan={tariffs[2].tariffs_plan} minuts={tariffs[2].minuts} tariff_description={tariffs[2].tariff_description} internet={tariffs[2].internet} /></div>
        </div>
)

}
