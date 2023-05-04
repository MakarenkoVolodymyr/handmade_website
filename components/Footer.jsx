import React from 'react';
import { AiFillInstagram, AiOutlineTwitter} from 'react-icons/ai';

import styles from '../styles/footer.module.css';

const Footer = () => {
  return (
    <div className={styles.footer__container}>
      <p>2023 Inilium Handmade</p>
      <p className={styles.footer__icons}>
        <a target="_blank" href="https://instagram.com/inilium.shop?igshid=ZDdkNTZiNTM=" rel="noopener noreferrer">
          <AiFillInstagram />
        </a>
        <AiOutlineTwitter />
      </p>
    </div>
  )
}

export default Footer