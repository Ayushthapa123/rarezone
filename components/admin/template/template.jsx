import React from 'react'
import Link from 'next/link'
import Aleft from '../Aleft'



import Dashboard from '../Dashboard'

import Admission from '../../admin/admission';

// admin.css
import {AiOutlineMenu} from 'react-icons/ai'
import {MdUpdate} from 'react-icons/md'



export default function Template(props) {


    const toggle=()=> {
        let screenwidth=screen.width;
        let x=document.querySelector('.admin');
        x.classList.toggle('toggle')

        if(screenwidth<800){
            let y=document.querySelector('.aleft');
            y.classList.toggle('mtoggle');
        }
      
    }




    return (
        <div>
<section className='adminpanel'>


<div className='admin' id='admin'>


<div className='aleft'>

<div className='container'>

 <Aleft/>

</div>
</div>




<div className='aright'>



<div className='adnav'>
<div>
<span className='admintoggle' onClick={toggle}><AiOutlineMenu/></span>

 </div>

</div>





<div className='rightcontainer'>

<div className='views'>
{props.children}
 </div>

<div className='views' id='dash'>

<Dashboard/>
</div>


<div className='views' id='admission'>
<Admission/>
</div>







</div>

</div>





</div>

</section>


       
        </div>
    )
}