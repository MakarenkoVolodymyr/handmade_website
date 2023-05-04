import React from 'react';
import Link from 'next/link';

//import img from '../../public/render.png';

import styles from '../../styles/Shop/heroBanner.module.css';

const HeroBanner = () => {
  const heroBanner = {
    smallText: 'New Arrivals',
    midText: 'Discover the Latest',
    largeText1: 'Wireless Headphones',
    largeText2: 'with Noise Cancellation',
    image: '',
    product: 'wireless-headphones',
    buttonText: 'Shop Now',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  }

  return (
    <div className={styles.hero__banner__container}>
      <div>
        <p className={styles.beats__solo}>{heroBanner.smallText}</p>
        <h3>{heroBanner.midText}</h3>
        <h1>
          {heroBanner.largeText1}<br />
          {heroBanner.largeText2}
        </h1>
        <img src={heroBanner.image} alt="headphones" className={styles.hero__banner__image} />

        <div>
          <Link href={`/product/${heroBanner.product}`}>
            <button type="button">{heroBanner.buttonText}</button>
          </Link>
          <div className={styles.desc}>
            <h5>Description</h5>
            <p>{heroBanner.desc}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner;