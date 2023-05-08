import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import styles from '../../styles/Shop/footerBanner.module.css';
import { urlFor } from '../../lib/client';

const FooterBanner = () => {
  const footerBanner = {
    smallText: 'NEW ARRIVALS',
    midText: 'DISCOVER THE LATEST',
    largeText1: 'Wireless Headphones',
    largeText2: 'with Noise Cancellation',
    discount: '50% OFF',
    saleTime: 'Limited time only',
    image: '/../../public/render.png',
    product: 'wireless-headphones',
    buttonText: 'SHOP NOW',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  };

  return (
    <div className={styles.footer__banner__container}>
      <div className={styles.banner__desc}>
        <div className={styles.left}>
          <p>{footerBanner.discount}</p>
          <h3>{footerBanner.largeText1}</h3>
          <h3>{footerBanner.largeText2}</h3>
          <p>{footerBanner.saleTime}</p>
        </div>
        <div className={styles.right}>
          <p>{footerBanner.smallText}</p>
          <h3>{footerBanner.midText}</h3>
          <p>{footerBanner.desc}</p>
          <Link href=''>
          <button type="button">{footerBanner.buttonText}</button>
        </Link>
      </div>
      <div className={styles.image__container}>
        <Image src={urlFor(footerBanner.image)} alt="Product" className={styles.footer__banner__image} width={500} height={500} />
      </div>
    </div>
</div >
);
};

export default FooterBanner;