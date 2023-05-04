import Head from 'next/head';
import { FaInstagram, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

import styles from '../styles/contact.module.css';

const Contact = () => {
  return (
    <>
      <Head>
        <title>Contact Us</title>
      </Head>
      <div className={styles.contact__container}>
        <div className={styles.contact__info}>
          <h2>Contact Information</h2>
          <ul>
            <li>
              <FaPhoneAlt className={styles.icon} />
              <span>(123) 456-7890</span>
            </li>
            <li>
              <FaEnvelope className={styles.icon} />
              <span>contact@example.com</span>
            </li>
            <li>
              <FaInstagram className={styles.icon} />
              <span>inilium.shop</span>
            </li>
          </ul>
        </div>
        <div className={styles.contact__form}>
          <h2>Get in Touch</h2>
          <form>
            <div className={styles.form__group}>
              <input type="text" id="name" name="name" placeholder="Name" />
              <label htmlFor="name">Name</label>
            </div>
            <div className={styles.form__group}>
              <input type="email" id="email" name="email" placeholder="Email" />
              <label htmlFor="email">Email</label>
            </div>
            <div className={styles.form__group}>
              <textarea id="message" name="message" placeholder="Message"></textarea>
              <label htmlFor="message">Message</label>
            </div>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;

