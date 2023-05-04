import styles from '../styles/about.module.css';

const About = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>About Us</h1>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed blandit
        tristique nisi, sed eleifend dolor ultricies sed. Vestibulum eu feugiat
        tellus, sed rutrum ipsum. Nulla facilisi. Nullam vehicula velit vitae
        iaculis rhoncus. Sed nec massa vel mauris vestibulum luctus. Fusce in
        metus sed arcu semper vehicula. Ut elementum elit sit amet libero
        ullamcorper, eu molestie urna facilisis.
      </p>
      <button className={styles.button}>Learn More</button>
    </div>
  );
};

export default About;