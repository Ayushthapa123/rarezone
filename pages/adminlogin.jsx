import React, { useEffect, useState,useRef,useContext } from 'react'
import { getDocs,doc,ref,onValue,getDatabase,collection,db} from '../resources/firebase'

import Link from 'next/link'
import { useRouter } from 'next/router'
import {AuthContext} from "../contexts/AuthContext";

import styles from '../scss/adminlogin.module.scss'




const Login = () => {

  const [currentUser,setCurrentUser]=useContext(AuthContext);


  const [admin, setAdmin]=useState();
  const [password,setPassword]=useState('')

  const emailRef = useRef()
  const passwordRef = useRef()
  const router = useRouter();

  async function getData() {
  const querySnapshot = await getDocs(collection(db, "admins"));
  querySnapshot.forEach((doc) => {
  
    setAdmin(doc.data().email);
    setPassword(doc.data().password);
  });

  }
  




async function handleSubmit(e) {
  e.preventDefault();
 

 if(emailRef.current.value==admin && passwordRef.current.value==password) {
  setCurrentUser(emailRef.current.value);
  router.push('/superadmin');
 }else {
   console.log('Wrong password or email')
 }

}


useEffect(() => { 
  getData();

},[]);


  return( 
  <>
  <div className={styles.login}>
  <form onSubmit={handleSubmit}>
    <h1>Admin Log In</h1>
    <input type='email' ref={emailRef}/>
    <input type='password' ref={passwordRef}/>
    <button type='submit' >Submit</button>
  </form>
  </div>
</>
  )



}


export default Login;