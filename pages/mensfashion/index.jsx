import React from 'react'
import Allnav from '../../components/Allnav'
import Footer from '../../components/Footer'
import styles from '../../scss/categories/mensfashion.module.scss';

export default function Index() {
    return (
        <>
          <Allnav/>
        <div className={styles.mfashion}>
          
            <h2>Mens Fashion</h2>

<div className={styles.products}>

</div>


        </div>
        <Footer/>
        </>
    )
}
