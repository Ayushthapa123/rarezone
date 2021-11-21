import React from 'react'
import Allnav from '../../components/Allnav'
import Footer from '../../components/Footer'
import styles from '../../scss/categories/bestoffers.module.scss';

export default function Index() {
    return (
        <>
          <Allnav/>
        <div className={styles.bestoffers}>
          
            <h2>Best Offers</h2>

<div className={styles.products}>

</div>


        </div>
        <Footer/>
        </>
    )
}
