import ConversionResult from "./ConversionResult"
import ConverterIconSubmit from "./ConverterIconSubmit"
import CurrencyExchangeForm from "./CurrencyExchangeForm"
import "../styles/ConverterContainer.css"

const ConverterContainer = () => {
    return(
        <div className="container">
            <CurrencyExchangeForm />
            <ConverterIconSubmit />
            <ConversionResult />
        </div>
    )
}

export default ConverterContainer