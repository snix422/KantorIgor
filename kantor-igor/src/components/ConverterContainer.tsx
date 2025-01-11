import ConversionResult from "./ConversionResult"
import ConverterIconSubmit from "./ConverterIconSubmit"
import CurrencyExchangeForm from "./CurrencyExchangeForm"
import "../styles/ConverterContainer.css"
import { useEffect, useState } from "react"
import ConversionResultScore from "./ConversionResultScore"

const ConverterContainer = () => {
    const [resultCurrency,setResultCurrency] = useState<string>("")
    const [currencies, setCurrencies] = useState<any>([])
    const [amountExchange, setAmountExchange] = useState<string>("");
    const [convertedAmount, setConvertedAmount] = useState<any>(null)
            
    const fetchCurrencies = async () => {
        try {
                const response = await fetch("https://api.nbp.pl/api/exchangerates/tables/A/?format=json")
                const data = await response.json();
        
                const rates = data[0].rates.map((rate:any)=> ({
                    code:rate.code,
                    name:rate.currency,
                    mid:rate.mid
                }))
        
                setCurrencies(rates)
                    console.log(data);
        } catch (error) {
                console.log("Błąd podczas pobierania danych z NBP",error)
        }
    }

    const calculateExchange = () => {
        if(amountExchange && resultCurrency){
            const selectCurrency = currencies.find((c:any) => c.name == resultCurrency);

            if(selectCurrency){
                const result = (Number(amountExchange)/selectCurrency.mid).toFixed(2);
                console.log(result)
                setConvertedAmount(result);
            }

        }
        
    }
        
    useEffect(()=>{
        fetchCurrencies();
    },[])

   console.log(currencies,'currencies')

    return(
        <div className="container">
            <div className="exchange-inputs">
            <CurrencyExchangeForm amountExchange={amountExchange} setAmountExchange={setAmountExchange}  />
            <ConverterIconSubmit calculateExchange={calculateExchange} />
            <ConversionResult currencies={currencies} resultCurrency={resultCurrency} setResultCurrency={setResultCurrency} />
            </div>
            <ConversionResultScore result={convertedAmount} />
        </div>
    )
}

export default ConverterContainer