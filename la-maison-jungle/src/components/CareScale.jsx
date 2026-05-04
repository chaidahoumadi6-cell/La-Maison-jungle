// Reçoit une valeur scaleValue 1, 2, 3 ou 4 qui représente le niveau d'arrosage
const CareScale = ({scaleValue, careType}) => {
    // Tableau qui représente les 4 niveaux possibles
    const range = [1,2,3,4];
    const scaleType = careType === 'light' ? '☀️' : '💦';

    return (
        <div>
            {
                range.map((rangeElement) =>
                    scaleValue >= rangeElement ? (<span key={rangeElement.toString()}> {scaleType} </span>) : null

                )
            }
        </div>
    )
}

export default CareScale;