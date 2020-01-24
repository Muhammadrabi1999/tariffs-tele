import React from 'react'

export default function Tele(props) {
    return (
        
        <article> 
                <h2>{props.title}</h2>
                <h3>{props.price}р/месяц</h3>
                <p>{props.tariffs_plan}</p>
                <p>{props.minuts} мин.</p>
                <p>{props.tariff_description}</p>
                <p>{props.internet} ГБ интернета</p>

         </article>
         
    )
}
