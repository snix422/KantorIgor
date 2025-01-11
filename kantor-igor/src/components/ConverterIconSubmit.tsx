import arrowIcon from "../assets/right-arrow.png"

interface ConverterIconSubmitProps {
        calculateExchange:any
}

const ConverterIconSubmit : React.FC<ConverterIconSubmitProps> = ({calculateExchange}) => {
        return <img src={arrowIcon} alt="arrow-icon" onClick={()=>calculateExchange()} />
}

export default ConverterIconSubmit