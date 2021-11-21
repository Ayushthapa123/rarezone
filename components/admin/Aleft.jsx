import React,{useContext} from 'react'
import styles from './sass/aleft.module.scss'
import Link from 'next/link';

import {MdDashboard} from 'react-icons/md'
import {AiTwotoneHome} from 'react-icons/ai'
import {FaQuestionCircle,FaCalculator} from 'react-icons/fa'
import {AiFillDollarCircle} from 'react-icons/ai'
import {FiLogOut} from 'react-icons/fi'
import {HiUserGroup} from 'react-icons/hi';
import {GrUserWorker} from 'react-icons/gr';
import {RiUserAddFill} from 'react-icons/ri';
import {RiHotelFill} from 'react-icons/ri'
import {FaRegRegistered} from 'react-icons/fa';
import {FaAddressBook} from 'react-icons/fa'


import { AuthContext } from '../../contexts/AuthContext';


export default function Aleft() {

    const [currentUser,setCurrentUser]=useContext(AuthContext);


function logout() {
    setCurrentUser(null)
}



    return (
        <div className={styles.aleft}>

<div>
    <h3>RZ STORE</h3>
    <hr/>
</div>


<div className={styles.links}>
<div className={styles.link}>
<Link href='/superadmin'><div><span > </span> Dashboard</div></Link>
</div>

<div  className={styles.link}>
<Link href='/superadmin/addproduct'><div><span >  </span> Addproduct</div></Link>
</div>
<div className={styles.link}>
<Link href='' ><div><span >  </span> Best Offer</div></Link>
</div>
<div className={styles.link}>
<Link href=''><div><span >  </span> Men's Fashion</div></Link>
</div>
<div className={styles.link}>
<Link href=''><div><span >  </span> Women's Fashion</div></Link>
</div>
<div className={styles.link}>
<Link href=''><div><span >  </span> Electronics</div></Link>
</div>
<div className={styles.link}>
<Link href=''><div><span >  </span> Sports</div></Link>
</div>
<div className={styles.link}>
<Link href='#'><div><span > </span> Books</div></Link>
</div>

<div className={styles.link}>
<Link href=''><div><span > </span> Gifts</div></Link>
</div>
<div className={styles.link}>
<Link href='#' ><div  onClick={logout}><span > <FiLogOut/> </span> Logout</div></Link>
</div>


</div>
            
        </div>
    )
}
