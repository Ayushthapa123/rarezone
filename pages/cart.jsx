import React,{useContext} from 'react'
import Head from 'next/head';

import { CartContext } from '../contexts/CartContext';

import Nav from '../components/Nav';
import Footer from '../components/Footer';

import styles from '../scss/cart.module.scss';

export default function Cart() {

    const [currentCart,setCurrentCart]=useContext(CartContext);

    return (
        <div>

<Head>
        <title>Cart</title>
        <link rel="icon" href="/favicon.png" />
</Head>

            <Nav/>
            <div className={styles.cart}>
<h1>My Cart</h1>

<div className={styles.products}>

{currentCart.map((p,index)=> (
    <div key={index}>
        <h2>{p.name}</h2>
        <h3>{p.price}</h3>
    </div>
))}

<hr/>




</div>
            </div>
            <Footer/>
        </div>
    )
}
