import React from 'react'

export default function Admission() {
    return (
        <div>
            <h2>Admission</h2>
        </div>
    )
}











// import React, { useState } from 'react'
// import styles from './sass/admission.module.scss'
// import db from '../../resources/firebase'
// import { useAuth } from "../../contexts/AuthContext";


// export default function Admission() {

//     const {currentUser } = useAuth();

//     const [name,setName]=useState('');
//     const [gtype,setGtype]=useState('');
//     const [phone,setPhone]=useState('');
//     const [email,setEmail]=useState('');
//     const [address,setAddress]=useState('');
//     const [idproofimg,setIdproofimg]=useState(null);
//     const [photo,setPhoto]=useState(null);
//     const [date,setDate]=useState('')

//     const [pname, setPname]=useState('');
//     const [pcontact,setPcontact]=useState('');
//     const [lpname,setLpname]=useState('')
//     const [lpcontact,setLpcontact]=useState('');

//     const [workplace, setWorkplace]=useState('');
//     const [worklocation, setWorklocation]=useState('');

//     const [monthlyfee, setMonthlyfee]=useState();
//     const [admissionfee,setAdmissionfee]=useState()
//     const [deposit,setDeposit]=useState();
//     const [roomno, setRoomno]=useState();
//     const [paid,setPaid]=useState([{amount:'',date:'',gateway:'',reference:''}])

//     const [loader, setLoader]=useState(false);
//     const [error, setError]=useState('');
    
//     const types=['image/png', 'image/jpeg'];

    





//     const studentidImgHandler=(e)=> {
//         let selectedFile=e.target.files[0];
//         if(selectedFile && types.includes(selectedFile.type)) {
//     setIdproofimg(selectedFile);
//     setError('')
//         }else {
//     setIdproofimg(null);
//     setError('please select a valid image type png or jpeg or jpg');
//         }
//     }

//     const studentPhotoHandler=(e)=> {
//         let selectedFile=e.target.files[0];
//         if(selectedFile && types.includes(selectedFile.type)) {
//     setPhoto(selectedFile);
//     setError('')
//         }else {
//     setPhoto(null);
//     setError('please select a valid image type png or jpeg or jpg');
//         }
//     }






//     const handleSubmit=(e)=> {
//         e.preventDefault();
//         setLoader(true);
        
     
//         const uploadTask = storage.ref(`studentid-images/${phone + idproofimg.name}`).put(idproofimg);
//         const uploadTask2 = storage.ref(`student-images/${phone + photo.name}`).put(photo);
//         uploadTask.on('state_changed', snapshot => {
//             const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
//             // console.log(progress);
//         }, err => setError(err.message)
//             , () => {
//                 storage.ref('studentid-images').child(phone + idproofimg.name).getDownloadURL().then(url => {  
                    
                    

//         uploadTask2.on('state_changed', snapshot => {
//             const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
//                         // console.log(progress);
//                     }, err => setError(err.message)
//                         , () => {
//                             storage.ref('student-images').child(phone + photo.name).getDownloadURL().then(url2 => {  
                        
    
    
    
//         db.collection('students')
//     .add({
//         name:name,
//         gtype:gtype,
//         phone:phone,
//         email:email,
//         address:address,
//         pname:pname,
//         pcontact:pcontact,
//         lpname:lpname,
//         lpcontact:lpcontact,
//         workplace:workplace,
//         worklocation:worklocation,
//         monthlyfee:monthlyfee,
//         admissionfee:admissionfee,
//         deposit,
//         roomno,
//         date,
//         paid,




//         idproofimg:url,
//         photo:url2,
//         searchq:[name,phone,email],
//         hemail:currentUser.email,
//         active:true,
    
    
    
//     })
//     .then(()=> {
//         alert('Student have been added successfully')
//         setLoader(false);
//         document.getElementById('file').value = '';
    
//     }).catch((error)=> {
//         alert(error.message);
//         setLoader(false);
//     })
    
    
//     })
    
//     })


// })
    
// })

    
    
//     }





//     return (
//         <div className={styles.admission}>
//             <h2>Student Admission form</h2><hr/>

// <div className='admissionform'>
//  <form onSubmit={handleSubmit}>



//     <div>
// <label htmlFor='name'>Student's Name*:</label><br/>
//     <input type='text'  id='name' className='sub' name='name' minLength='2' maxLength='50'
//     value={String(name)} required
//     onChange={(e)=> setName(e.target.value.toLowerCase(e.target.value))}
//     /><br/>
// </div>
// <div>
// <label htmlFor='email'>Email*:</label><br/>
// <input type='email' id='email'  name='email'
//     value={email} 
//     onChange={(e)=> setEmail(e.target.value)} required
//     /><br/>
// </div>
// <div>
//     <label htmlFor='gtype'>Gender*:</label><br/>
//     <select name='gtype'  value={gtype}  id='gtype'
//     onChange={(e)=> setGtype(e.target.value)} required>
//          <option> select</option>
//         <option value='boy'>Male</option>
//         <option value='girl'>Female</option>
//     </select><br/>
//     </div>

//     <div>
// <label htmlFor='name'>Student's Address*:</label><br/>
//     <input type='text'  id='address' className='sub' name='address'
//     value={address} required
//     onChange={(e)=> setAddress(e.target.value)}
//     /><br/>
// </div>
// <div>
// <label htmlFor='phone'>Phone no*:</label><br/>
// <input type='text' id='phone' name='phone'
//     value={phone} required
//     onChange={(e)=> setPhone(e.target.value)}
//     /><br/>
// </div>






// <div>
// <label htmlFor='pname'>Parent Name*:</label><br/>
// <input type='text' id='pname' name='pname'
//     value={pname} required
//     onChange={(e)=> setPname(e.target.value)}
//     /><br/>
// </div>
// <div>
// <label htmlFor='pcontact'>Parent Contact info*:</label><br/>
// <input type='text' id='pcontact' name='pcontact'
//     value={pcontact} required
//     onChange={(e)=> setPcontact(e.target.value)}
//     /><br/>
// </div>
// <div>
// <label htmlFor='lpname'>Local parent's Name*:</label><br/>
// <input type='text' id='lparent' name='lpname'
//     value={lpname} required
//     onChange={(e)=> setLpname(e.target.value)}
//     /><br/>
// </div>
// <div>
// <label htmlFor='lpcontact'>Local parent's Contact*:</label><br/>
// <input type='text' id='lpcontact' name='lpcontact'
//     value={lpcontact} required
//     onChange={(e)=> setLpcontact(e.target.value)}
//     /><br/>
// </div>





// <div>
// <label htmlFor='workplace'>Work Place*:</label><br/>
// <input type='text' id='workplace' name='workplace'
//     value={workplace} required
//     onChange={(e)=> setWorkplace(e.target.value)}
//     /><br/>
// </div>

// <div>
// <label htmlFor='worklocation'>Work Location*:</label><br/>
// <input type='text' id='worklocation' name='worklocation'
//     value={worklocation} required
//     onChange={(e)=> setWorklocation(e.target.value)}
//     /><br/>
// </div>




// <div>
// <label htmlFor='monthlyfee'>Monthly Fee*:</label><br/>
// <input type='number' id='monthlyfee' name='monthlyfee'
//     value={monthlyfee} required
//     onChange={(e)=> setMonthlyfee(e.target.value)}
//     /><br/>
// </div>
// <div>
// <label htmlFor='admissionfee'>Admission Fee*:</label><br/>
// <input type='number' id='admissionfee' name='admissionfee'
//     value={admissionfee} required
//     onChange={(e)=> setAdmissionfee(e.target.value)}
//     /><br/>
// </div>
// <div>
// <label htmlFor='deposit'>Deposit*:</label><br/>
// <input type='number' id='deposit' name='deposit'
//     value={deposit} required
//     onChange={(e)=> setDeposit(e.target.value)}
//     /><br/>
// </div>
// <div>
// <label htmlFor='roomno'>Room no:*:</label><br/>
// <input type='number' id='roomno' name='roomno'
//     value={roomno} required
//     onChange={(e)=> setRoomno(e.target.value)}
//     /><br/>
// </div>

// <div>
// <label htmlFor='date'>Admission Date:*:</label><br/>
// <input type='date' id='date' name='date'
//     value={date} required
//     onChange={(e)=> setDate(e.target.value)}
//     /><br/>
// </div>

// <section className={styles.hostelimage}>
// <label htmlFor='idimage'>IDENTITY IMAGE* (jpg or png only)</label> <br/>
// <input type='file' id='file'  onChange={studentidImgHandler}  />
// <br/>
// </section>

// <section className={styles.hostelimage}>
// <label htmlFor='photo'>Student's Photo* (jpg or png only)</label> <br/>
// <input type='file' id='photo'  onChange={studentPhotoHandler}  />
// <br/>
// </section>





// <button type='submit'>Submit</button>
//     </form>
// </div>







//         </div>
//     )
// }
