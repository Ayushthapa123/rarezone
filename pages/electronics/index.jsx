import React from 'react'
import Allnav from '../../components/Allnav'
import Footer from '../../components/Footer'
import styles from '../../scss/categories/electronics.module.scss';

export default function Index() {
    return (
        <>
          <Allnav/>
        <div className={styles.electronics}>
          
            <h2>Electronics</h2>

<div className={styles.products}>

</div>


        </div>
        <Footer/>
        </>
    )
}
