import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
// J'importe le composant Banner.jsx  On récupère le composant Banner qui se trouve dans le dossier Components
import Banner from './components/Banner'

import Cart from'./components/Cart'
import ShoppingList from'./components/ShoppingList'

import logo  from './assets/fleurs-logo.jpg';
import styles from "./styles/Banner.module.css"

//App est le composant principal de l'application
function App() {
  const title = "Bienvenu à la Maison Jungle"

  /**
   *  Lorsque j'appelle le composant Banner j' y insére deux enfants <h1> et <img>
   *  Ces enfants sont récupéres dans Banner.jsx à l'aide de propos {children}
   */
  //  Retourne le composant Banner 
  // on affiche le composant Banner importé plus haut
  return (
    <>
      <Banner >
        <img src={logo} alt="Logo La maison jungle" className={styles.logo}/>
        <h1 className={styles.title}> {title} </h1>
      </Banner>

      <Cart />
      <ShoppingList />

    </>
  )
}

// Ce fichier met à disposition le composant App pour que d'autres fichiers puissent l'utiliser
export default App
