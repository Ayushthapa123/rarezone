import React,{useEffect} from 'react'
import {useRouter} from 'next/router';
import Link from 'next/link'

export default function Notfound() {


    const router=useRouter();


useEffect(() => {
   setTimeout(()=> {
    router.push('/')
   },3000)
 
}, [])


    return (
        <div>
            <h3>page not found</h3>
<Link href='/'><a>Home Page</a></Link>
        </div>
    )
}