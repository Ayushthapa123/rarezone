import React, {useContext} from 'react';
import Link from 'next/link';

import { CartContext } from '../contexts/CartContext';


import {FaShoppingCart} from 'react-icons/fa'
import {FaUserCircle} from 'react-icons/fa'
import {FcMenu} from 'react-icons/fc'



export default function Nav() {

    const [currentCart,setCurrentCart]=useContext(CartContext);


const Toggle=()=> {
    let x=document.querySelector('.sidebar-container');
    x.classList.toggle('showsidebar');
}





    return (
        <div className='navbar'>




 <div  className='nav'>

<div className='toggler' onClick={Toggle}>
  <span> <FcMenu/></span>  
</div>

             <div className='logo'>
<Link href='/'><a ><img src='/logo.png' alt='logo'/></a></Link>
             </div>
             <div className='search'>
<select>
    <option>All</option>
        <option value='mensfashion'>Mens Fashion</option>
        <option value='womensfashion'>Womens Fashion</option>
        <option value='sports'>Sports</option>
        <option value='electronics'>Electronics</option>
        <option value='gifts'>Gifts</option>
        <option value='books'>Books</option>
</select>


<input type='text'/>
<button type='search'>Search</button>

             </div>
             <div className='user'>
<Link href='#'><a ><span><FaUserCircle/></span>Sign In</a></Link>
<div className='loginsignup'>
 <Link href='#' className='li'><a>Log In</a></Link>
 <p>New Customer?</p>
 <Link href='#' className='su'><a>Sign Up</a></Link>
</div>
             </div>
             <div className='cart'>
<Link href='/cart'><a><span><FaShoppingCart/><sup><sup>({currentCart.length} Items)</sup></sup></span></a></Link>
             </div>
            </div>
<div className='sidebar-container' id='sbc'>
<div className='sidebar'>
    <div className='cross' onClick={Toggle}>X</div>
    <div className='sidebarlogin'>
        <div><Link href='#'><a >Log In</a></Link></div>
        <div><Link href='#'><a >Sign Up</a></Link></div>
    </div>
    <div className='sidebarcategories'>
     
       <p> <Link href='/mensfashion'><a >Mens Fashion</a></Link></p><hr/>
        <p><Link href='/womensfashion'><a >Womens Fashion</a></Link></p><hr/>
        <p><Link href='/electronics'><a >Electronics</a></Link></p><hr/>
        <p><Link href='/sports'><a >Sports</a></Link></p><hr/>
        <p><Link href='/books'><a >Books</a></Link></p><hr/>
        <p><Link href='/gifts'><a >Gifts</a></Link></p><hr/>
        <p><Link href='/bestoffers'><a >Best Offer</a></Link></p><hr/>
    </div>
</div>
</div>




        </div>
    )
}
