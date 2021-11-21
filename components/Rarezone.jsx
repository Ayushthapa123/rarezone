import React from 'react'
import Link from 'next/link';
import styles from './scss/rarezone.module.scss';

export default function Rarezone() {
    return (
        <div className={styles.rarezone}>
            <div className={styles.specialproduct}>


<img src='/laptop.jpg' alt='special product'/>
<div className={styles.des}>
 
    <h2>MacBook Pro</h2>
    <h3>Supercharged for Pros</h3>
   <Link href='#'>
       <a>
       <button>Book Now</button>
       </a>
       </Link>



</div>


            </div>




            <div className={styles.rareproducts}>
<h2>Rare Products</h2>
            </div>
        </div>
    )
}
