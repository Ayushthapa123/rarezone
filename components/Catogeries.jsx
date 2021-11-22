import React from 'react'
import Link from 'next/link'
import styles from './scss/categories.module.scss';

export default function Catogeries() {
    return (
        <div className={styles.categories}>

            <div className='offer'>
            <Link href='/mensfashion'><a>
                <img src='/categories/men.jpg' alt='mens fashion'/>
                <h4>Mens Fashion</h4>
                </a>
                </Link>
            </div>
            <div className='offer'>
            <Link href='/womensfashion'><a>
                <img src='/categories/women.jpg' alt='womens fashion'/>
                <h4>Womens Fashion</h4>
                </a>
                </Link>
            </div>
            <div className='offer'>
            <Link href='/electronics'><a>
                <img src='/categories/electronic.jpg' alt='electronic'/>
                <h4>Electronics</h4>
                </a>
                </Link>
            </div>
            <div className='offer'>
            <Link href='/sports'><a>
                <img src='/categories/sport.jpg' alt='sports'/>
                <h4>Sports</h4>
                </a>
                </Link>
            </div>
            <div className='offer'>
            <Link href='/books'><a>
                <img src='/categories/books.jpg' alt='books'/>
                <h4>Books</h4>
                </a>
                </Link>
            </div>
            <div className='offer'>
            <Link href='/gifts'><a>
                <img src='/categories/gift.jpg' alt='gifts'/>
                <h4>Gifts</h4>
                </a>
                </Link>
            </div>
            
            <div className='offer'>
                <Link href='/offers'><a>
                <img src='/categories/sale.jpg' alt='offer'/>
                <h4>Best Offer</h4>
                </a>
                </Link>
            </div>
        </div>
    )
}
