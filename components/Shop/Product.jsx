import React from 'react';
import Link from 'next/link';

import { urlFor } from '../../lib/client';
import styles from '../../styles/Shop/product.module.css';

const Product = ({ product: { image, name, slug, price } }) => {
  return (
    <div>
      <Link href={`/product/${slug.current}`}>
        <div className={styles.product__card}>
          <img 
            src={urlFor(image && image[0])}
            width={250}
            height={250}
            className={styles.product__image}
          />
          <p className={styles.product__name}>{name}</p>
          <p className={styles.product__price}>${price}</p>
        </div>
      </Link>
    </div>
  )
}

export default Product;
