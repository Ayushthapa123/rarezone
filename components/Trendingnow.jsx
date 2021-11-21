import React from 'react'
import Link from 'next/link';

import styles from './scss/trendingnow.module.scss';

export default function Trendingnow() {
    return (
        <div className={styles.trendingnow}>
            <h2>Trending Now  <Link href='#'><a><button>View All</button></a></Link></h2>
           
            <hr/>
           
        </div>
    )
}
