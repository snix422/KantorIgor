import { useState } from "react"

const ConversionResult = () => {
    const [resultCurrency,setResultCurrency] = useState<string>("")

    const currencies = [{
        name:"Euro"
    },{
        name:"Dolar"
    },{
        name:"Złoty Polski"
    }]

    console.log(resultCurrency)
    return(
        <div>
            <select value={resultCurrency} onChange={(e:any)=>setResultCurrency(e.target.value)}>
                {currencies.map((i:any)=>{
                    return(
                        <option value={i.name}>{i.name}</option>
                    )
                })}
            </select>
        </div>
    )
}

export default ConversionResult