import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar } from 'react-icons/ai';

import { client, urlFor } from '../../lib/client';
import { Product } from '../../components';
import { useStateContext } from '../../context/StateContext';

import cn from 'classnames'
import styles from '../../styles/[slug].module.css';

const ProductDetails = ({ product, products }) => {
  const { image, name, details, price } = product;
  const [index, setIndex] = useState(0);
  const { decQty, incQty, qty, onAdd, setShowCart } = useStateContext();

  const handleBuyNow = () => {
    onAdd(product, qty);

    setShowCart(true);
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.product__detail__container}>
        <div>
          <div className={styles.image__container}>
            <img src={urlFor(image && image[index])} className={styles.product__detail__image} />
          </div>
          <div className={styles.small__images__container}>
            {image?.map((item, i) => (
              <img 
                key={i}
                src={urlFor(item)}
                className={i === index ? cn(styles.small__image, styles.selected__image) : styles.small__image}
                onMouseEnter={() => setIndex(i)}
              />
            ))}
          </div>
        </div>

        <div className={styles.product__detail__desc}>
          <h1>{name}</h1>
          <div className={styles.reviews}>
            <div>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </div>
            <p>
              (20)
            </p>
          </div>
          <h4>Details: </h4>
          <p>{details}</p>
          <p className={styles.price}>${price}</p>
          <div className={styles.quantity}>
            <h3>Quantity:</h3>
            <p className={styles.quantity__desc}>
              <span className={styles.minus} onClick={decQty}><AiOutlineMinus /></span>
              <span className={styles.num}>{qty}</span>
              <span className={styles.plus} onClick={incQty}><AiOutlinePlus /></span>
            </p>
          </div>
          <div className={styles.buttons}>
            <button type="button" className={styles.add__to__cart} onClick={() => onAdd(product, qty)}>Add to Cart</button>
            <button type="button" className={styles.buy__now} onClick={handleBuyNow}>Buy Now</button>
          </div>
        </div>
      </div>

      <div className={styles.maylike__products__wrapper}>
          <h2>You may also like</h2>
          <div className={styles.marquee}>
            <div className={styles.maylike__products__container} track>
              {products.map((item) => (
                <Product key={item._id} product={item} />
              ))}
            </div>
          </div>
      </div>
    </div>
  )
}

export const getStaticPaths = async () => {
  const query = `*[_type == "product"] {
    slug {
      current
    }
  }
  `;

  const products = await client.fetch(query);

  const paths = products.map((product) => ({
    params: { 
      slug: product.slug.current
    }
  }));

  return {
    paths,
    fallback: 'blocking'
  }
}

export const getStaticProps = async ({ params: { slug }}) => {
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
  const productsQuery = '*[_type == "product"]'
  
  const product = await client.fetch(query);
  const products = await client.fetch(productsQuery);

  console.log(product);

  return {
    props: { products, product }
  }
}

export default ProductDetails