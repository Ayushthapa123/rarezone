import React, { useState } from 'react'
import styles from './sass/students.module.scss'
import firebase from '../../resources/firebase'
import {useAuth} from '../../contexts/AuthContext'


import Search from './Search2';


export default function Students() {


const [students,setStudents]=useState([]);
const [loading,setLoading]=useState(false);
const items=[];



    const db=firebase.firestore();
    const {currentUser}=useAuth();


 const showStudents=()=> {
    setLoading(true);
    let ref=db.collection('students').where("hemail","==",currentUser.email).where("active","==",true);
     ref.onSnapshot((querySnapshot)=> {
   
        querySnapshot.forEach((doc)=> {
          items.push(doc.data());
        });
        setStudents(items);
        setLoading(false);
      })    
console.log(students)
}


    return (
        <div className={styles.students}>
            <h2>All Students:</h2><hr/>
       
            <button onClick={showStudents}>Show Students</button>



{students.map((students)=>(
  <div key={students.email}>
<h2>{students.name}</h2>
<h3>{students.phone}</h3>

    </div>
))}


<div>
  <Search/>
</div>

        </div>
    )
}
