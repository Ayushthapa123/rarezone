import React from 'react'
import Head from 'next/head'

import '../styles/globals.css';
import '../components/css/navbar.css';
import '../components/admin/template/css/template.css'


import {AuthProvider} from '../contexts/AuthContext'
import {CartProvider} from '../contexts/CartContext'



function MyApp({ Component, pageProps }) {
  return (
  <>
      <Head>
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
<CartProvider>
  <AuthProvider>
  <Component {...pageProps} />
  </AuthProvider>
</CartProvider>

  </>
  );
}

export default MyApp
