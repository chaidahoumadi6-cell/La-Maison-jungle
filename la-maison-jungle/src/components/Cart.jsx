//Le composant cart représante le panier de courses 

//import App from "../App"

const Cart = () => {
    const montsera = 8
    const lierre = 12
    const bouquet = 9
    return (
        <div>
            <h2> Votre panier </h2>
            <ul>
                <li> Montsera : {montsera} € </li>
                <li> Lierre : {lierre} $ </li>
                <li> Bouquet de fleurs : {bouquet} € </li>
            </ul>
            <p> Total : {montsera + lierre + bouquet} € </p>
        </div>
        
    )
}

export default Cart