import styles from '../styles/about.module.css';

const About = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>About Us</h1>
      <p className={styles.text}>
      We specialize in creating unique handmade crafts. With attention to detail and passion for craftsmanship,
          we bring your ideas to life. Discover personalized gifts, home decor items, and accessories crafted with care. Experience the artistry of handmade goods at our workshop.
      </p>
      <button className={styles.button}>Learn More</button>
    </div>
  );
};

export default About;