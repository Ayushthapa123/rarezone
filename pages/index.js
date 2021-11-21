import Head from 'next/head'
import Image from 'next/image';

import Topnav from '../components/Topnav';
import Nav from '../components/Nav';
import Catogeries from '../components/Catogeries';
import Rarezone from '../components/Rarezone';
import Bestseller from '../components/Bestseller';
import Trendingnow from '../components/Trendingnow';
import Nepaliproducts from '../components/Nepaliproducts';
import Newarrivals from '../components/Newarrivals';
import Specialdiscount from '../components/Specialdiscount';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div >
      <Head>
        <title>RareZone Store Nepal</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.png" />
      </Head>


<section>


 <Topnav/> 
<Nav/>
<Catogeries/>
<Rarezone/>
<Bestseller/>
<Trendingnow/>
<Nepaliproducts/>
<Newarrivals/>
<Specialdiscount/>
<Footer/>
</section>


   
    </div>
  )
}
