import React, { useState,useContext, useEffect } from 'react'
import Link from 'next/link'
import styles from '../scss/productdetailcart.module.scss';

import { CartContext } from '../../../contexts/CartContext';

import {AiOutlineRight} from 'react-icons/ai'
import {BsCart2} from 'react-icons/bs'
import {AiOutlineCreditCard} from 'react-icons/ai'
import { useRouter } from 'next/router';

export default function Productdetailcart(props) {
    const {product}=props;

    const [currentCart,setCurrentCart]=useContext(CartContext);

const router=useRouter();

    const [bigimg,setBigimg]=useState(product.firstimage);
    const [color,setColor]=useState('');
    const [size,setSize]=useState('');
    const [qty,setQty]=useState(1);
    const [note, setNote]=useState('');
    const [item, setItem]=useState();


const changeImg=(e)=> {
    e.preventDefault();
 setBigimg(e.target.currentSrc);

}

const AddToCart=()=> {


        const current=currentCart;
        current.push({
            name:product.name,
            color:color,
            quantity:qty,
            note:note,
            size:size,
            price:product.actualprice,

    });
        setCurrentCart(current);
    
  
        console.log('currentcart',currentCart);
        router.push(`/${product.category}/${product.slug}`);
    

}

useEffect(() => { 
  
  
  },[]);



    return (
<>
        <div className={styles.productdetails}>
            <h2><Link href={'/'+ product.category}>{product.category}</Link><span><AiOutlineRight/></span>{product.ptag}<span><AiOutlineRight/></span><Link href={'/' + product.category + '/' + product.slug}>{product.name}</Link></h2>
          
          
<div className={styles.product}>
    <div className={styles.image}>
         <div className={styles.smallimg}>
<div>
<img src={product.firstimage} alt='photo' loading='lazy' onClick={changeImg}/>
</div>
<div>
<img src={product.secondimage} alt='photo' loading='lazy' onClick={changeImg}/>
</div>
<div>
<img src={product.thirdimage} alt='photo' loading='lazy' onClick={changeImg}/>
</div>
<div>
<img src={product.fourthimage} alt='photo' loading='lazy' onClick={changeImg}/>
</div>
         </div>
        <div className={styles.bigimg} >
        <img src={bigimg} alt='photo' loading='lazy' id='bigimg'/>
         </div>

     </div>

<div className={styles.des}>


<h1>{product.name}</h1>
<div className={styles.subtag}><span>#{product.subtag} </span> <hr/>
</div>
<h5>{product.slogan}</h5>
<hr className={styles.hr}/>
<h3>Listed Price: Rs.{product.actualprice}</h3>
<hr className={styles.hr}/>
<h2>Price Now: Rs.{product.discountedprice}</h2>
<hr className={styles.hr}/>
<div className={styles.sizecolor}>

<label htmlFor='size'>Size*:</label>
    <select name='size'  id='size' value={size}  onChange={(e)=> setSize(e.target.value)}>
        <option>Select</option>
     {product.size.map((size,index)=> (
         <option value={size} key={index}>{size}</option>
     ) )}
    </select>
    <label htmlFor='color'>Color*:</label>
    <select name='color'  id='color' value={color}  onChange={(e)=> setColor(e.target.value)}>
        <option>Select</option>
        {product.colors.map((color,index)=> (
         <option value={color} key={index}>{color}</option>
     ) )}
      
    </select><br/>

    <label htmlFor='color'>Quantity*:</label>
 <input type='number'  placeholder='1' value={qty} 
    onChange={(e)=> setQty(e.target.value)}/>

</div>

<div className={styles.addtocart}>
    <textarea placeholder='Say Something' value={note} onChange={(e)=> setQty(e.target.value)}></textarea>
<button className={styles.button1} onClick={AddToCart}><span><BsCart2/></span> Add To Cart</button> 
<button className={styles.button2}><span><AiOutlineCreditCard/></span> Buy Now</button>
</div>


</div>

          </div>


<div className={styles.description}>
<h2>Product Details</h2>
{product.specialfeatures.map((sf,index)=> (
    <div key={index}>
        <li>{sf}</li>
     </div>
))}


<h2>Related Products</h2>
</div>

        </div>
</>

    )
}
