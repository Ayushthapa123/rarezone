
import React,{useState,useEffect} from 'react'
import Allnav from '../../components/Allnav'
import Footer from '../../components/Footer'
import Productdetailcart from '../../components/cards/scss/productdetailcart'
import {db,query,where,collection,getDocs} from '../../resources/firebase'
import Head from 'next/head'

import styles from '../../scss/categories/mensfashion.module.scss'


export const getStaticPaths = async () => {



    const q = query(collection(db, "products"),where('category','==', 'mensfashion'));
    const querySnapshot =  await getDocs(q);
 
  
        const paths = querySnapshot.docs.map(entry => ({
            params: {
              slug: entry.data().slug
            }
        
          }));
          return {
            paths,
            fallback:false
          }
        

}



export const getStaticProps = async (context) => {
    const { slug } = context.params;
    const q = query(collection(db, "products"), where("slug", "==",slug));
    const res= await getDocs(q);
    const article = res.docs.map(article => article.data());
  
    if (article.length) {
      return {
        props: {
          product: article[0]
        }
      }
    } else {
      return {
        props: {}
      }
    }
  }
  



export default function Post(props) {

    const { product } = props;

return (
<div className={styles.product}>
<Allnav/>
<Productdetailcart product={product}/>
        
<Footer/>      
</div>


)
}