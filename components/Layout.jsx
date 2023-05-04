import React from 'react';
import Head from 'next/head';

import Navbar from './Navbar';
import Footer from './Footer';

import styles from '../styles/layout.module.css';

const Layout = ({ children }) => {


  return (
    <div>
      <Head>
        <title>Inilium Handmade</title>
      </Head>
      <header>
         <Navbar />
      </header>
      <main>
        {children}
      </main>
      <footer >
        <Footer />
      </footer>
    </div>
  )
}

export default Layout