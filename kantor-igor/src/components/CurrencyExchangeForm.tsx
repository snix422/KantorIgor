import { useState } from "react"
import "../styles/CurrencyExchangeForm.css"

const CurrencyExchangeForm = () => {
    const [amountExchange, setAmountExchange] = useState<string>("");
    const [currencyTitle, setCurrencyTitle] = useState<string>("")
    const currencies = [{
        name:"Euro"
    },{
        name:"Dolar"
    },{
        name:"Złoty Polski"
    }]

    console.log(amountExchange);
    console.log(currencyTitle);
    return(
        <div className="exchange-form">
            <input value={amountExchange} onChange={(e:any)=>setAmountExchange(e.target.value)} placeholder="Wpisz kwotę" />
            <select value={currencyTitle} onChange={(e:any)=>setCurrencyTitle(e.target.value)}>
                {currencies.map((i:any)=>{
                    return(
                        <option value={i.name}>{i.name}</option>
                    )
                })}
            </select>
        </div>
    )
}

export default CurrencyExchangeForm