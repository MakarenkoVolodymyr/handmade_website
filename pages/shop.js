import React from 'react';

import { client } from '../lib/client';
import Product from '../components/Shop/Product';
import HeroBanner from '../components/Shop/HeroBanner';
import FooterBanner from '../components/Shop/FooterBanner';

import styles from '../styles/shop.module.css';

const Shop = ({ products }) => (
  <div className={styles.container}>
    <HeroBanner />
    <div className={styles.products__heading}>
      <h2>Best Seller Products</h2>
      <p>speaker There are many variations passages</p>
    </div>

    <div className={styles.products__container}>
      {products?.map((product) => <Product key={product._id} product={product} />)}
    </div>

    {/*<FooterBanner />*/}
  </div>
);

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  return {
    props: { products }
  }
}

export default Shop;