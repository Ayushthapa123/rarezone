import React from 'react'
import Link from 'next/link';
import Image from 'next/image'

import styles from './scss/productcart.module.scss';
import next from 'next';

export default function ProductCart(props) {
    return (
        <div className={styles.cartcontainer}>
     

        <div className={styles.cart}>
        <Link href={props.category + '/' + props.slug}><a>
            <div className={styles.subtag}>
                <h3>Hello subtag</h3>
            </div>
            <div className={styles.image}>
           <Image src={props.image} alt='Product Img'  layout='fill' className={styles.img}/>
           </div>
           <div className={styles.des}>
<h3>{props.name}</h3>
<h4><span>Rs.222222</span>Rs.1111</h4>
</div>
</a>
        </Link>
        </div>
    
        </div>
    )
}
