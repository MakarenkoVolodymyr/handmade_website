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
          We specialize in creating unique handmade crafts. With attention to detail and passion for craftsmanship,
          we bring your ideas to life. Discover personalized gifts, home decor items, and accessories crafted with care. Experience the artistry of handmade goods at our workshop.
          </p>
        </div>
        <div className={styles.hero__image}>
          <Image src="/../public/company_img.jpg" alt="Welcome to our Company" className={styles.image} width={800} height={600}/>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.left__block}>
          <h2 className={styles.subtitle}>Our Company</h2>
          <p className={styles.left__block__text}>
          We specialize in creating unique handmade crafts. With attention to detail and passion for craftsmanship,
          we bring your ideas to life. Discover personalized gifts, home decor items, and accessories crafted with care. Experience the artistry of handmade goods at our workshop.
          </p>
        </div>
        <div className={styles.right__block}>
          <Image src="/../public/sub_company_img.jpg" alt="Our Company" className={styles.image} width={600} height={400} />
        </div>
      </div>

      <div className={styles.container}>
      <div className={styles.left__block}>
          <Image src="/../public/material_img.jpg" alt="Our Material" className={styles.image} width={600} height={400} />
        </div>
        <div className={styles.right__block}>
          <h2 className={styles.subtitle}>Our Material</h2>
          <p className={styles.right__block__text}>
          At our workshop, we pride ourselves on the quality and selection of materials we use. From natural fibers to sustainably sourced wood,
          we handpick each material to ensure its beauty, durability, 
          and environmental responsibility. Experience the tactile pleasure and timeless elegance of our carefully chosen materials in every handmade creation.
          </p>
        </div>
        
      </div>

      <div className={styles.container}>
        <div className={styles.left__block}>
          <h2 className={styles.subtitle}>Our Product</h2>
          <p className={styles.left__block__text}>
          Our passion for craftsmanship is infused into every product we create. Each item is meticulously handcrafted with precision and attention to detail,
           resulting in exquisite pieces that stand the test of time. We believe in the power of handmade products, where skill, dedication, 
          and creativity merge to produce something truly exceptional. Discover the beauty and uniqueness of our handcrafted creations and elevate your style with our unparalleled products.
          </p>
        </div>
        <div className={styles.right__block}>
          <Image src="/../public/product_img.jpg" alt="Our Product" className={styles.image} width={600} height={400} />
        </div>
      </div>

      <div className={styles.bottom__banner}>
        <div className={styles.bottom__content}>
          <h1 className={styles.bottom__title}>Handmade Rolled Flowers Shadow Box</h1>
          <p className={styles.bottom__description}>
          Get ready to explore our curated collection of exquisite handcrafted products.
          </p>
          <Link href="/shop" className={styles.btn}>
              Shop Now
          </Link>
        </div>
        <div className={styles.hero__image}>
          <Image src="/../public/shop_img.webp" alt="Handmade Rolled Flowers Shadow Box" className={styles.image} width={800} height={600} />
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