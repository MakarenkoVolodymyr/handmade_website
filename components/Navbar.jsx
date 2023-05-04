
import React from 'react';
import Link from 'next/link';
import { useState, useCallback, useEffect } from 'react';

import { Cart } from './';
import { useStateContext} from '../context/StateContext';

import Animation from './Home/Animation/Animation';
import { AiOutlineShopping, AiOutlineMenu, AiFillCaretUp } from 'react-icons/ai';
import { IconContext } from 'react-icons/lib';
import cn from 'classnames'
import styles from '../styles/navbar.module.css';


const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleMenu = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen, setIsOpen]);

  return (
    <>
    <nav className={styles.navbar}>
      <Link className={styles.navbar__brand} href="/">
        Inilium Handmade
      </Link>
      <button className={styles.navbar__icon} onClick={handleToggleMenu}>
      <IconContext.Provider
          value={{ color: 'white', size: '30px' }}
        >
          {isOpen ?  <AiFillCaretUp /> : <AiOutlineMenu /> }
      </IconContext.Provider>
      </button>
      <ul className={cn(styles.navbar__nav,`${isOpen ?  styles.navbar__nav__open: '' }`)}>
        <li className={styles.nav__item} onClick={handleToggleMenu}>
          <Link className={styles.nav__link} href="/">
            Home
          </Link>
        </li>
        <li className={styles.nav__item} onClick={handleToggleMenu}>
          <Link className={styles.nav__link} href="/shop">
            Shop
          </Link>
        </li>
        <li className={styles.nav__item} onClick={handleToggleMenu}>
          <Link className={styles.nav__link} href="/about">
              About
          </Link>
        </li>
        <li className={styles.nav__item} onClick={handleToggleMenu}>
          <Link className={styles.nav__link} href="/contact">
           Contact
          </Link>
        </li>
      </ul>

      <button type="button" className={styles.cart__icon} onClick={() => setShowCart(true)}>
      <IconContext.Provider
          value={{ color: 'white', size: '30px' }}
        >
          <AiOutlineShopping />
        </IconContext.Provider>
        <span className={styles.cart__item}>{totalQuantities}</span>
      </button>
      
      {showCart && <Cart />}
    </nav>
    </>
  )
}

export default Navbar
