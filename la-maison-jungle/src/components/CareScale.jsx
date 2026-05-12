// Lable de quantité d' arrosage ou d'éclairage
const quantityLabel = {
    1: 'peu',
    2: 'modérement',
    3: 'beaucoup',
    4: ''
}


// Reçoit une valeur scaleValue 1, 2, 3 ou 4 qui représente le niveau d'arrosage
const CareScale = ({scaleValue, careType}) => {
    // Tableau qui représente les 4 niveaux possibles
    const range = [1,2,3,];
// Vérifie le type de soin demandé.
// Si careType vaut "light", on affiche le soleil ☀️
// Sinon, on affiche la goutte d’eau 💦
const scaleType = careType === 'light' ? '☀️' : '💦';


/*const handleClick = () => {
    const quantityLabel = scaleValue > 2 ? 'beaucoup' : 'peu';
    const careLabel = careType === 'light' ? 'de lumière' : "d'arrosage";
    alert(`Cette plante requiert ${quantityLabel} ${careLabel}`);
};*/

return (

    

    // Conteneur principal des icônes
    <div onClick={() => {
                alert(`Cette plante a besoin de ${quantityLabel[scaleValue]} ${
                    careType === "light" ? "de la lumière" : "d'orrosage"
                }`)
            }}
        
    >
        {
            // Parcours du tableau "range"
            range.map((rangeElement) =>

                // Vérifie si la valeur du niveau est suffisante
                scaleValue >= rangeElement ? (

                    // Affiche une icône avec une clé unique
                    <span key={rangeElement.toString()}>
                        {scaleType}
                    </span>

                ) : null // Sinon n’affiche rien
            )
        }
    </div>
)
}

// Export du composant CareScale
export default CareScale;