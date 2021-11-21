import React, { useEffect, useState,useRef, useContext } from 'react'
import { getDocs,doc,ref,onValue,getDatabase,collection,db} from '../../resources/firebase'


import Link from 'next/link'

import Template from '../../components/admin/template/template'
import Dash from '../../components/admin/Dashboard'

import Router, { useRouter } from 'next/router'

import { AuthContext } from "../../contexts/AuthContext";




const Admin = () => {

  const [currentUser,setCurrentuser] = useContext(AuthContext);

//   const emailRef = useRef()
//   const passwordRef = useRef()

//   async function getData() {
//   const querySnapshot = await getDocs(collection(db, "admins"));
//   querySnapshot.forEach((doc) => {
//     console.log(`${doc.id} => ${doc.data().email}`);
//   });

//   }
  
// getData();



// async function handleSubmit() {
//   await setAuth(emailRef.current.value);

// }

console.log('currentuser',currentUser);




if(!currentUser) {

  return( 
  <>
  <h2>Nothing Here </h2>
</>
  )
}

else {


    return (
      <Template>
<Dash/>
      </Template>
      
    )
}
}


export default Admin;