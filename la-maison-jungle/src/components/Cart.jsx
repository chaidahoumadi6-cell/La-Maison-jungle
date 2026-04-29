/**
 * Le composant Cart représente le panier de courses.
 * Le composant Cart sera réutilisé dans le composant App.
 */
import styles from '../styles/Cart.module.css'

const Cart = () => {
    const monstera = 8
    const lierre = 12
    const bouquet = 9

    return(
        <div className={styles.cart}>
            <h2>Votre panier</h2>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li>Monstera : {monstera} €</li>
                <li>Lierre : {lierre} €</li>
                <li>Bouquet de fleurs : {bouquet} €</li>
            </ul>
            <p>Total : {monstera + lierre + bouquet} €</p>
        </div>
    )
}

export default Cart