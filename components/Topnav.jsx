import React from 'react'
import {AiFillFacebook} from 'react-icons/ai';
import {AiFillYoutube} from 'react-icons/ai';
import {AiFillInstagram} from 'react-icons/ai';




export default function Topnav() {
    return (
        <div>
        <div className='topnav'>
            
            <div className='left-topnav'>
            <span><a href='#'><AiFillFacebook/></a></span> 
            <span><a href='#'><AiFillYoutube/></a></span>
             <span><a href='#'><AiFillInstagram/></a></span>
             <span>|</span>
             <span>Call Us +977-9846793894</span>
           
            </div>
            <div className='right-topnav'>
                <a href='#'>Login</a>
                <a href='#'>/Signup</a>
            </div>
        
        </div>
        </div>
    )
}
