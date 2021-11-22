import React, { useContext,useState } from 'react'
import { AuthContext } from '../../contexts/AuthContext'

import {db,storage,collection, addDoc,getStorage, ref,sRef, uploadBytes,updateDoc,doc, uploadBytesResumable, getDownloadURL } from '../../resources/firebase' 


import Template from '../../components/admin/template/template';
import styles from '../../scss/addproduct.module.scss'



export default function Addproduct() {

const [currentUser]=useContext(AuthContext);

const [name,setName]=useState('');
const [pid,setPid]=useState('');
const [actualprice,setActualprice]=useState('');
const [discountedprice,setDiscountedprice]=useState('')
const [discountrate,setDiscountrate]=useState('');
const [totalquantity,setTotalquantity]=useState('');
const [availablequantity,setAvailablequantity]=useState('');
const [category,setCategory]=useState('');
const [tags, setTags]=useState([]);
const [subtag,setSubtag]=useState('');
const [discountid,setDiscountid]=useState([])


const [slogan,setSlogan]=useState('');
const [story,setStory]=useState('');
const [description,setDescription]=useState('');
const [warrenty,setWarrenty]=useState('');

const [size,setSize]=useState([]);
const [colors,setColors]=useState([]);
const [newcolor,setNewcolor]=useState('')
const [generalfeatures,setGeneralfeatures]=useState([]);
const [ngf,setNgf]=useState('')
const [specialfeatures,setSpecialfeatures]=useState([]);
const [nsf,setNsf]=useState('')
const [searchq,setSearchq]=useState([]);
const [newsearchq,setNewsearchq]=useState('');

const [date,setDate]=useState('')
const [status,setStatus]=useState('')




const [loader, setLoader]=useState(false);
const [error, setError]=useState('');

const [docid,setDocid]=useState('')

      
const types=['image/png', 'image/jpeg'];
const [firstimage,setFirstimage]=useState(null);
const [secondimage,setSecondimage]=useState(null);
const [thirdimage,setThirdimage]=useState(null);
const [fourthimage,setFourthimage]=useState(null);



async function HandleSubmit(e) {
  e.preventDefault();


 
  const storageRef1 = sRef(storage, `images/${pid + firstimage.name}`);
  const storageRef2 = sRef(storage, `images/${pid + secondimage.name}`);
  const storageRef3 = sRef(storage, `images/${pid + thirdimage.name}`);
  const storageRef4 = sRef(storage, `images/${pid + fourthimage.name}`);


  const uploadTask1 = uploadBytesResumable(storageRef1, firstimage);
  const uploadTask2 = uploadBytesResumable(storageRef2, secondimage);
  const uploadTask3 = uploadBytesResumable(storageRef3, thirdimage);
  const uploadTask4 = uploadBytesResumable(storageRef4, fourthimage);
  

  uploadTask1.on('state_changed', 
  (snapshot) => {
    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

  }, 
  (error) => {
    // Handle unsuccessful uploads
  }, 
  () => {
    // Handle successful uploads on complete
  
    getDownloadURL(uploadTask1.snapshot.ref).then((downloadURL1) => {

      uploadTask2.on('state_changed', 
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    
      }, 
      (error) => {
        // Handle unsuccessful uploads
      }, 
      () => {
        // Handle successful uploads on complete
      
        getDownloadURL(uploadTask2.snapshot.ref).then((downloadURL2) => {

          uploadTask3.on('state_changed', 
          (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        
          }, 
          (error) => {
            // Handle unsuccessful uploads
          }, 
          () => {
            // Handle successful uploads on complete
          
            getDownloadURL(uploadTask3.snapshot.ref).then((downloadURL3) => {
              
              uploadTask4.on('state_changed', 
          (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        
          }, 
          (error) => {
            // Handle unsuccessful uploads
          }, 
          () => {
            // Handle successful uploads on complete
          
            getDownloadURL(uploadTask4.snapshot.ref).then((downloadURL4) => {
             
    
    
          

 

      const docRef = addDoc(collection(db, "products"), {
        name,
        actualprice,
        discountrate,
        discountedprice,
        pid,
        totalquantity,
        availablequantity,
        discountid,
        category,
        date,
        status,
        
       
        slogan,
        story,
        description,
        warrenty,
   
        size,
        colors,
        tags,
        subtag,
        generalfeatures,
        specialfeatures,
        searchq,
        firstimage:downloadURL1,
        secondimage:downloadURL2,
        thirdimage:downloadURL3,
        fourthimage:downloadURL4,
        
   
   
   
   
        docid,
        slug:name + pid,

   
       }).then((docRef)=> {
         const updateRef = doc(db, "products", docRef.id);
   
       updateDoc(updateRef, {
           docid:docRef.id,
       });
       
   
       })







    });
  }
);


});
}
);

});
}
);

});
}
);



  
 
}






const Addgeneralfeatures=(e)=> {
  e.preventDefault(); 
  let x=generalfeatures;
x.push(ngf);
setGeneralfeatures(x);
setNgf('');

}

const Addspecialfeatures=(e)=> {
  e.preventDefault(); 
  let x=specialfeatures;
x.push(nsf);
setSpecialfeatures(x);
setNsf('');

}



const Removegf=(e)=> {
  e.preventDefault(); 
  console.log('parent element',e.target.parentElement.id)

  setGeneralfeatures((generalfeatures)=> {
    return generalfeatures.filter((arr,index)=> {
      return index != e.target.parentElement.id;
    })
  })
}



const Removesf=(e)=> {
  e.preventDefault(); 
  console.log('parent element',e.target.parentElement.id)

  setSpecialfeatures((specialfeatures)=> {
    return specialfeatures.filter((arr,index)=> {
      return index+100 != e.target.parentElement.id;
    })
  })
}


const Addcolors=(e)=> {
  e.preventDefault(); 
  let x=colors;
x.push(newcolor);
setColors(x);
setNewcolor('');

}

const Removecolors=(e)=> {
  e.preventDefault(); 

  setColors((colors)=> {
    return colors.filter((arr,index)=> {
      return index+300 != e.target.parentElement.id;
    })
  })
}





const Addsearchq=(e)=> {
  e.preventDefault(); 



  if(searchq.length==0) {
    let x=searchq;
    x.push(name);
    x.push(pid);
    x.push(category)
    setSearchq(x);
  }
  let x=searchq;
x.push(newsearchq);
setSearchq(x);
setNewsearchq('');

}

const Removesq=(e)=> {
  e.preventDefault(); 

  setSearchq((searchq)=> {
    return searchq.filter((arr,index)=> {
      return index+200 != e.target.parentElement.id;
    })
  })
}




const addTags=(e)=> {

  let x = document.querySelectorAll('input[type="checkbox"]:checked'); 
  let items=[]

  x.forEach((x) => {
  items.push(x.value)
  });
 
  setTags(items);    
  

}

const FirstImgHandler=(e)=> {
  let selectedFile=e.target.files[0];
  if(selectedFile && types.includes(selectedFile.type)) {
setFirstimage(selectedFile);
setError('')
  }else {
setFirstimage(null);
setError('please select a valid image type png or jpeg or jpg');
  }
}

const SecondImgHandler=(e)=> {
  let selectedFile=e.target.files[0];
  if(selectedFile && types.includes(selectedFile.type)) {
setSecondimage(selectedFile);
setError('')
  }else {
setSecondimage(null);
setError('please select a valid image type png or jpeg or jpg');
  }
}

const ThirdImgHandler=(e)=> {
  let selectedFile=e.target.files[0];
  if(selectedFile && types.includes(selectedFile.type)) {
setThirdimage(selectedFile);
setError('')
  }else {
setThirdimage(null);
setError('please select a valid image type png or jpeg or jpg');
  }
}


const FourthImgHandler=(e)=> {
  let selectedFile=e.target.files[0];
  if(selectedFile && types.includes(selectedFile.type)) {
setFourthimage(selectedFile);
setError('')
  }else {
setFourthimage(null);
setError('please select a valid image type png or jpeg or jpg');
  }
}










      if(!currentUser)  {
        return(
        <>
        <h2>Please Login First</h2>
</>
        )
      }else {
      
          return (
            <>
<Template>



  <div className={styles.addproduct}>

<form onSubmit={HandleSubmit} className={styles.form}>
<section className={styles.container}>
<div>
    <label htmlFor='productname'>Product Name:</label><br/>
    <input type='text'   id='productname' name='name' value={name} required minLength='5' maxLength='50'
    onChange={(e)=> setName(e.target.value)}/>  <br/>
</div>

<div>
    <label htmlFor='dprice'>Discounted Price:</label><br/>
    <input type='number'   id='dprice' name='dprice' value={discountedprice} 
    onChange={(e)=> setDiscountedprice(e.target.value)}/>  <br/>
</div>

<div>
    <label htmlFor='aprice'>Actual Price:</label><br/>
    <input type='number'   id='aprice' name='aprice' value={actualprice} required 
    onChange={(e)=> setActualprice(e.target.value)}/>  <br/>
</div>

<div>
    <label htmlFor='drate'>Discount Rate:</label><br/>
    <input type='number'   id='drate' name='drate' value={discountrate} required 
    onChange={(e)=> setDiscountrate(e.target.value)}/>  <br/>
</div>
<div>
    <label htmlFor='pid'>Product Id:</label><br/>
    <input type='text'   id='pid' name='name' value={pid} required 
    onChange={(e)=> setPid(e.target.value)}/>  <br/>
</div>

<div>
    <label htmlFor='totalqty'>Total Quantity:</label><br/>
    <input type='number'   id='totalqty' name='totalqty' value={totalquantity} required 
    onChange={(e)=> setTotalquantity(e.target.value)}/>  <br/>
</div>

<div>
    <label htmlFor='aqty'>Available Quantity:</label><br/>
    <input type='number'   id='aqty' name='availablequantity' value={availablequantity} required 
    onChange={(e)=> setAvailablequantity(e.target.value)}/>  <br/>
</div>
<div>
    <label htmlFor='did'>Discount Id:</label><br/>
    <input type='text'   id='did' name='did' value={discountid} required 
    onChange={(e)=> setDiscountid(e.target.value)}/>  <br/>
</div>

<div>
    <label htmlFor='category'>Category*:</label><br/>
    <select name='category'  value={category}  id='category'
    onChange={(e)=> setCategory(e.target.value)} required>
         <option> select</option>
        <option value='mens-fashion'>Mens Fashion</option>
        <option value='womens-fashion'>Womens Fashion</option>
        <option value='sports'>Sports</option>
        <option value='electronics'>Electronics</option>
        <option value='gifts'>Gifts</option>
        <option value='books'>Books</option>
    </select><br/>
    </div>

    <div>
    <label htmlFor='status'>Status*:</label><br/>
    <select name='status'  value={status}  id='status'
    onChange={(e)=> setStatus(e.target.value)} required>
        <option value='Pending'>Pending</option>
        <option value='delivered'>Delivered</option>
        <option value='Out of Stock'>Out of Stock</option>
    </select><br/>
    </div>

<div>
    <label htmlFor='date'>Date:</label><br/>
    <input type='date'   id='date' name='date' value={date} required 
    onChange={(e)=> setDate(e.target.value)}/>  <br/>
</div>





</section>

<section className={styles.container2}>

<div>
<label htmlFor='slogan'>Slogan* </label> <br/>
<textarea type='text'  id='slogan'  name='slogan'  
onChange={(e)=> setSlogan(e.target.value)}/>  <br/>

</div>

<div>
<label htmlFor='story'>Story* </label> <br/>
<textarea type='text'  id='story'  name='story'  
onChange={(e)=> setStory(e.target.value)}/>  <br/>

</div>

<div>
<label htmlFor='description'>Description* </label> <br/>
<textarea type='text'  id='description'  name='description'  
onChange={(e)=> setDescription(e.target.value)}/>  <br/>

</div>

<div>
<label htmlFor='warrenty'>Warrenty* </label> <br/>
<textarea type='text'  id='slogan'  name='description'  
onChange={(e)=> setWarrenty(e.target.value)}/>  <br/>

</div>

  </section>




<section className={styles.generalfeatures}>
  <h2>General Features</h2>
  <input type='text' value={ngf} onChange={(e)=>setNgf(e.target.value)}/><button onClick={Addgeneralfeatures}>Add</button>

<div className={styles.showgf}>

{generalfeatures.map((gf,index)=> (
    <div key={index}>
        <li id={index}>{gf} <span onClick={(e)=>Removegf(e)}>X</span></li>
     </div>
))}

</div>
</section>





<section className={styles.specialfeatures}>
<h2>Special Features</h2>
  <input type='text' value={nsf} onChange={(e)=>setNsf(e.target.value)}/><button onClick={Addspecialfeatures}>Add</button>

<div className={styles.showsf}>

{specialfeatures.map((sf,index)=> (
    <div key={index}>
        <li id={index+100}>{sf} <span onClick={(e)=>Removesf(e)}>X</span></li>
     </div>
))}

</div>
  
</section>


<section className={styles.colors}>
<h2>Colors Available</h2>
  <input type='text' value={newcolor} onChange={(e)=>setNewcolor(e.target.value)}/><button onClick={Addcolors}>Add</button>

<div className={styles.showsf}>

{colors.map((color,index)=> (
    <div key={index}>
        <li id={index+300}>{color} <span onClick={(e)=>Removecolors(e)}>X</span></li>
     </div>
))}

</div>
  
</section>


<section className={styles.tags}>
<h2>Select tags</h2>

<div>
<input type='checkbox' value='New Arrival' className='services' onChange={(e)=> addTags()}/>
 <span>New Arrivals</span>
</div>
<div>
<input type='checkbox' value='Nepali Product' className='services' onChange={(e)=> addTags()}/>
 <span>Nepali Product</span>
</div>
<div>
<input type='checkbox' value='Best Seller' className='services' onChange={(e)=> addTags()}/>
 <span>Best Seller</span>
</div>
<div>
<input type='checkbox' value='Trending Now' className='services' onChange={(e)=> addTags()}/>
 <span>Trending Now</span>
</div>
<div>
<input type='checkbox' value='Special Discount' className='services' onChange={(e)=> addTags()}/>
 <span>Special Discount</span>
</div>
<div>
<input type='checkbox' value='Rare Products' className='services' onChange={(e)=> addTags()}/>
 <span>Rare Products</span>
</div>

</section>

<section>
    <label htmlFor='subtag'>Subtag*:</label><br/>
    <select name='subtag'  value={subtag}  id='subtag'
    onChange={(e)=> setSubtag(e.target.value)} >
         <option> select</option>
        <option value='Rare Product'>Rare Product</option>
        <option value='Offer'>Special Offer</option>
        <option value='Trending'>Trending</option>
        <option value='Nepali Product'>Nepali Product</option>
        <option value='New Arrival'>New Arrival</option>
        <option value=''>Nothing Special</option>
    </select><br/>
    </section>




<section className={styles.images}>
<h2>Select Images</h2>
<label htmlFor='image1'>First Image* (jpg or png only)</label> <br/>
<input type='file' id='image1'  onChange={FirstImgHandler}  />
<br/>

<label htmlFor='image2'>Second Image* (jpg or png only)</label> <br/>
<input type='file' id='image2'  onChange={SecondImgHandler}  />
<br/>

<label htmlFor='image3'>Third Image* (jpg or png only)</label> <br/>
<input type='file' id='image3'  onChange={ThirdImgHandler}  />
<br/>

<label htmlFor='image4'>Fourth Image* (jpg or png only)</label> <br/>
<input type='file' id='image4'  onChange={FourthImgHandler}  />
<br/>

</section>


<section className={styles.searchq}>
<h2>Add search Query</h2>

<input type='text' value={newsearchq} onChange={(e)=>setNewsearchq(e.target.value)}/><button onClick={Addsearchq}>Add</button>

<div>

{searchq.map((searchq,index)=> (
    <div key={index}>
        <li id={index+200}>{searchq} <span onClick={(e)=>Removesq(e)}>X</span></li>
     </div>
))}

</div>


</section>










<button type='submit'>submit</button>
</form>




















  </div>

</Template>
            </>
          )
      }
    }
      
      

