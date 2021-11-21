import React from 'react'
import Allnav from '../../components/Allnav'
import Footer from '../../components/Footer'
import styles from '../../scss/categories/books.module.scss';

export default function Index() {
    return (
        <>
          <Allnav/>
        <div className={styles.books}>
          
            <h2>Books</h2>

<div className={styles.products}>

</div>


        </div>
        <Footer/>
        </>
    )
}
