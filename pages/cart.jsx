import React from 'react'
import Head from 'next/head';

import Nav from '../components/Nav';
import Footer from '../components/Footer';

import styles from '../scss/cart.module.scss';

export default function Cart() {
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
    <div className={styles.titles}>
        <div>Products</div>
        <div>Quantity</div>
        <div>Price</div>
    </div>
<hr/>




</div>
            </div>
            <Footer/>
        </div>
    )
}
