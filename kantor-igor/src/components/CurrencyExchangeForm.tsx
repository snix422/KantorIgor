import "../styles/CurrencyExchangeForm.css"

interface CurrencyExchangeFormProps {
    amountExchange:any,
    setAmountExchange:any
}

const CurrencyExchangeForm : React.FC<CurrencyExchangeFormProps> = ({amountExchange,setAmountExchange}) => {
   
    return(
        <div className="exchange-form">
            <input value={amountExchange} onChange={(e:any)=>setAmountExchange(e.target.value)} placeholder="Wpisz kwotę w PLN" />
            <span>PLN</span>
        </div>
    )
}

export default CurrencyExchangeForm