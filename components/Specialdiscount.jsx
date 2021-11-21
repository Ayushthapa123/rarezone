import React from 'react'
import Link from 'next/link'
import styles from './scss/specialdiscount.module.scss';

export default function Specialdiscount() {
    return (
        <div className={styles.specialdiscount}>
            <h2>Special Discounts <Link href='#'><a><button>View All</button></a></Link></h2><hr/>
        </div>
    )
}
