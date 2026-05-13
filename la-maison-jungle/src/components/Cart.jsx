/**
 * Le composant Cart représente le panier de courses.
 * Le composant Cart sera réutilisé dans le composant App.
 */
// J'importe le fichier  appliqué le composant

// Import du fichier CSS module pour styliser le panier
import styles from '../styles/Cart.module.css'

import { useState } from 'react'

// Déclaration du composant Cart
const Cart = () => {

    // Définition des prix des produits
    const monsteraPrice = 8
    const lierre = 12
    const bouquet = 9
    const [cart, updateCart] = useState(0)
    const [open, setOpen] = useState(false)

    // Retour du composant JSX
    return open ? (

        // Conteneur principal du panier avec une classe CSS
        <div className={styles.cart}>

            <button className={styles.lmjCartToogleButton}onClick={() => setOpen(false)}> Fermer </button>

            {/* Titre du panier */}
            <h2>Votre panier</h2>
            <div>
                Monstera: {monsteraPrice} €
                <button className={styles.lmjCartddButton} onClick={() => updateCart(cart + 1)}> Ajouter</button>
            </div>
            {/* Liste des produits sans puces */}
            <ul style={{ listStyle: 'none'}}>

            </ul>

            {/* Calcul et affichage du total */}
            <p>Total : {monsteraPrice * cart} €</p>

            {/* Bouton pour vider le panier */}
            <button onClick={() => updateCart(0)}>Vider le panier</button>
        </div>
    ): (
        <div className={styles.lmjCartClosed}>
            <button className= {styles.lmjCartToogleButton}onClick={() => setOpen(true)}> Ouvrir le panier </button>
        </div>
       
    )
}

/* Produit Lierre avec son prix */
 /* Produit Monstera avec son prix */
                /*<li>Monstera : {monsteraPrice} €</li>

                /*<li>Lierre : {lierre} €</li>

                {/* Produit Bouquet avec son prix */
               /*<li>Bouquet de fleurs : {bouquet} €</li>
/*<p>Total : {monsteraPrice + lierre + bouquet + cart} €</p>*/
// Export du composant pour l’utiliser dans d’autres fichiers
export default Cart