import React from 'react';
import Link from 'next/link';


import {FaShoppingCart} from 'react-icons/fa'
import {FaUserCircle} from 'react-icons/fa'
import {FcMenu} from 'react-icons/fc'



export default function Nav() {

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
<a href='/'><img src='/logo.png' alt='logo'/></a>
             </div>
             <div className='search'>
<select>
    <option>All</option>
        <option value='mens-fashion'>Men's Fashion</option>
        <option value='womens-fashion'>Women's Fashion</option>
        <option value='sports'>Sports</option>
        <option value='electronics'>Electronics</option>
        <option value='gifts'>Gifts</option>
        <option value='books'>Books</option>
</select>


<input type='text'/>
<button type='search'>Search</button>

             </div>
             <div className='user'>
<a href='#'><span><FaUserCircle/></span>Sign In</a>
<div className='loginsignup'>
 <Link href='#' className='li'><a>Log In</a></Link>
 <p>New Customer?</p>
 <Link href='#' className='su'><a>Sign Up</a></Link>
</div>
             </div>
             <div className='cart'>
<Link href='#'><a><span><FaShoppingCart/><sup><sup>(0 Items)</sup></sup></span></a></Link>
             </div>
            </div>
<div className='sidebar-container' id='sbc'>
<div className='sidebar'>
    <div className='cross' onClick={Toggle}>X</div>
    <div className='sidebarlogin'>
        <div><a href='#'>Log In</a></div>
        <div><a href='#'>Sign Up</a></div>
    </div>
    <div className='sidebarcategories'>
     
       <p> <a href='/mens-fashion'>Men's Fashion</a></p><hr/>
        <p><a href='/womens-fashion'>Women's Fashion</a></p><hr/>
        <p><a href='/electronics'>Electronics</a></p><hr/>
        <p><a href='/sports'>Sports</a></p><hr/>
        <p><a href='/books'>Books</a></p><hr/>
        <p><a href='/gifts'>Gifts</a></p><hr/>
        <p><a href='/bestoffers'>Best Offer</a></p><hr/>
    </div>
</div>
</div>




        </div>
    )
}
