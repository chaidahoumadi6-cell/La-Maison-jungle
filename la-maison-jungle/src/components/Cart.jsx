/**
 * Le composant Cart représente le panier de courses.
 * Le composant Cart sera réutilisé dans le composant App.
 */
// J'importe le fichier  appliqué le composant

// Import du fichier CSS module pour styliser le panier
import styles from '../styles/Cart.module.css'

// Déclaration du composant Cart
const Cart = () => {

    // Définition des prix des produits
    const monstera = 8
    const lierre = 12
    const bouquet = 9

    // Retour du composant JSX
    return(

        // Conteneur principal du panier avec une classe CSS
        <div className={styles.cart}>

            {/* Titre du panier */}
            <h2>Votre panier</h2>

            {/* Liste des produits sans puces */}
            <ul style={{ listStyle: 'none'}}>

                {/* Produit Monstera avec son prix */}
                <li>Monstera : {monstera} €</li>

                {/* Produit Lierre avec son prix */}
                <li>Lierre : {lierre} €</li>

                {/* Produit Bouquet avec son prix */}
                <li>Bouquet de fleurs : {bouquet} €</li>
            </ul>

            {/* Calcul et affichage du total */}
            <p>Total : {monstera + lierre + bouquet} €</p>
        </div>
    )
}

// Export du composant pour l’utiliser dans d’autres fichiers
export default Cart