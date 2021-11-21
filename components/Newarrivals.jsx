import React from 'react'
import Link from 'next/link'
import styles from './scss/newarrivals.module.scss';

export default function Newarrivals() {
    return (
        <div className={styles.newarrivals}>
            <h2>New Arrivals <Link href='#'><a><button>View All</button></a></Link></h2><hr/>
        </div>
    )
}
