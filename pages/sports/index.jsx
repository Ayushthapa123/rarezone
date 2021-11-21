import React from 'react'
import Allnav from '../../components/Allnav'
import Footer from '../../components/Footer'
import styles from '../../scss/categories/sports.module.scss';

export default function Index() {
    return (
        <>
          <Allnav/>
        <div className={styles.sports}>
          
            <h2>Sports</h2>

<div className={styles.products}>

</div>


        </div>
        <Footer/>
        </>
    )
}
