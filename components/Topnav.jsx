import React from 'react'
import Link from 'next/link'
import {AiFillFacebook} from 'react-icons/ai';
import {AiFillYoutube} from 'react-icons/ai';
import {AiFillInstagram} from 'react-icons/ai';




export default function Topnav() {
    return (
        <div>
        <div className='topnav'>
            
            <div className='left-topnav'>
            <span><Link href='#'><a ><AiFillFacebook/></a></Link></span> 
            <span><Link href='#'><a ><AiFillYoutube/></a></Link></span>
             <span><Link href='#'><a ><AiFillInstagram/></a></Link></span>
             <span>|</span>
             <span>Call Us +977-9846793894</span>
           
            </div>
            <div className='right-topnav'>
                <Link href='#'><a >Login</a></Link>
                <Link href='#'><a >/Signup</a></Link>
            </div>
        
        </div>
        </div>
    )
}
