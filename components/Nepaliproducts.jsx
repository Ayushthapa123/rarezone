import React from 'react'
import Link from 'next/link'
import styles from './scss/nepaliproducts.module.scss';

export default function Nepaliproducts() {
    return (
        <div className={styles.nepaliproducts}>
            <h2>Nepali Products <Link href='#'><a><button>View All</button></a></Link></h2><hr/>
        </div>
    )
}
