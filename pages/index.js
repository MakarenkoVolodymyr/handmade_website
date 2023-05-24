import Link from 'next/link';
import Image from 'next/image';

import Animation from '@/components/Home/Animation/Animation';

import styles from '../styles/index.module.css';

const Home = () => {
  return (
    <>
    <Animation />
    <div className={styles.wrapper}>
      <div className={styles.hero}>
        <div className={styles.hero__content}>
          <h1 className={styles.title}>Welcome to our Company</h1>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id risus a lectus
            dictum faucibus. Fusce vel dui accumsan, vestibulum lacus vel, accumsan nisi.
          </p>
        </div>
        <div className={styles.hero__image}>
          <Image src="/../public/untitled1.png" alt="Welcome to our Company" className={styles.image} width={800} height={600}/>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.left__block}>
          <h2 className={styles.subtitle}>Our Company</h2>
          <p className={styles.left__block__text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id risus a lectus
            dictum faucibus. Fusce vel dui accumsan, vestibulum lacus vel, accumsan nisi. Sed
            suscipit ligula in tellus vulputate, ac blandit mi sagittis. Aenean eu pharetra nibh.
            Integer volutpat eros quis lorem vestibulum iaculis.
          </p>
        </div>
        <div className={styles.right__block}>
          <Image src="/../public/untitled1.png" alt="Our Company" className={styles.image} width={600} height={400} />
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.right__block}>
          <h2 className={styles.subtitle}>Our Material</h2>
          <p className={styles.right__block__text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id risus a lectus
            dictum faucibus. Fusce vel dui accumsan, vestibulum lacus vel, accumsan nisi. Sed
            suscipit ligula in tellus vulputate, ac blandit mi sagittis. Aenean eu pharetra nibh.
            Integer volutpat eros quis lorem vestibulum iaculis.
          </p>
        </div>
        <div className={styles.left__block}>
          <Image src="/../public/untitled1.png" alt="Our Material" className={styles.image} width={600} height={400} />
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.left__block}>
          <h2 className={styles.subtitle}>Our Product</h2>
          <p className={styles.left__block__text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id risus a lectus
            dictum faucibus. Fusce vel dui accumsan, vestibulum lacus vel, accumsan nisi. Sed
            suscipit ligula in tellus vulputate, ac blandit mi sagittis. Aenean eu pharetra nibh.
            Integer volutpat eros quis lorem vestibulum iaculis.
          </p>
        </div>
        <div className={styles.right__block}>
          <Image src="/../public/untitled1.png" alt="Our Product" className={styles.image} width={600} height={400} />
        </div>
      </div>

      <div className={styles.bottom__banner}>
        <div className={styles.bottom__content}>
          <h1 className={styles.bottom__title}>Handmade Rolled Flowers Shadow Box</h1>
          <p className={styles.bottom__description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id risus a lectus
              dictum faucibus.
          </p>
          <Link href="/shop" className={styles.btn}>
              Shop Now
          </Link>
        </div>
        <div className={styles.hero__image}>
          <Image src="/../public/untitled1.png" alt="Handmade Rolled Flowers Shadow Box" className={styles.image} width={800} height={600} />
        </div>
      </div>
    </div>
    
    </>
  );
};

export default Home;


/*
const Home = () => {
  return (
    <>
    <Animation />
    <div className={styles.hero}>
        <div className={styles.hero__content}>
          <h1 className={styles.title}>Handmade Rolled Flowers Shadow Box</h1>
          <p className={styles.description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id risus a lectus
              dictum faucibus.
          </p>
          <Link href="/shop" className={styles.btn}>
              Shop Now
          </Link>
        </div>
        <div className={styles.hero__image}>
          <Image src="/../public/untitled1.png" alt="Handmade Rolled Flowers Shadow Box" width={800} height={600} />
        </div>
      </div>
    </>
  );
};
*/