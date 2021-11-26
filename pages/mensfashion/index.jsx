import React, { useEffect, useState } from 'react'
import Allnav from '../../components/Allnav'
import Footer from '../../components/Footer'

import ProductCart from '../../components/cards/productCart';

import styles from '../../scss/categories/mensfashion.module.scss';

import {db,collection, query, where, getDocs} from '../../resources/firebase'
import { isValidTimestamp } from '@firebase/util';


export default function Index() {


    const [data,setData]=useState([]);
    const items=[];

async function getData() {
    const q = query(collection(db, "products"), where("category", "==", "mensfashion"));



    const querySnapshot = await getDocs(q);

    
    querySnapshot.forEach((doc) => {
        items.push(doc.data());
    
    });

    setData(items);
 

}



useEffect(()=> {
getData();


},[])


    return (
        <>
          <Allnav/>
        <div className={styles.mfashion}>
          
            <h2>Mens Fashion</h2>

{ data &&<div className={styles.products}>

{data.map((d)=> ( 
    <div key={d.pid} >
<ProductCart name={d.name} price={d.actualprice} image={d.firstimage} category={d.category} slug={d.slug}/>
</div>
))}
</div>}


        </div>
        <Footer/>
        </>
    )
}
