import React from 'react'
import Allnav from '../../components/Allnav'
import Footer from '../../components/Footer'
import styles from '../../scss/categories/womensfashion.module.scss';

export default function Index() {
    return (
        <>
          <Allnav/>
        <div className={styles.wfashion}>
          
            <h2>Womens Fashion</h2>

<div className={styles.products}>

</div>


        </div>
        <Footer/>
        </>
    )
}
