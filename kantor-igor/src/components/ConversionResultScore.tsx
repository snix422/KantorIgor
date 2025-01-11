interface ConversionResultScoreProps {
    result:any
}

const ConversionResultScore : React.FC<ConversionResultScoreProps> = ({result}) => {
    return(
        <div>
            <h2>Wynik to: {result}</h2>
        </div>
    )
}

export default ConversionResultScore