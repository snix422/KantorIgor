
interface ConversionResultProps {
    currencies:any,
    resultCurrency:any,
    setResultCurrency:any
}

const ConversionResult : React.FC<ConversionResultProps> = ({currencies,resultCurrency,setResultCurrency}) => {
    
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