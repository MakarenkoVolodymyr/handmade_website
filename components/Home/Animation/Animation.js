import { useEffect, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { Element } from 'react-scroll';

import styles from '../../../styles/Home/animation.module.css';
import animationVideo from '../../../public/animation.mp4';

const Animation = () => {
  const [animationCompleted, setAnimationCompleted] = useState(false);
  const animationProps = useSpring({
    from: { opacity: 0, transform: 'translateY(50%)' },
    to: { opacity: 1, transform: 'translateY(0%)' },
    delay: 500,
    onRest: () => setAnimationCompleted(true),
  });

  useEffect(() => {
    setTimeout(() => {
      setAnimationCompleted(true);
    }, 3000);
  }, []);

  return (
    <Element name="home">
      <div className={styles.fullscreen__block}>
        <animated.h1 style={animationProps}>
          Welcome to our handmade workshop
        </animated.h1>
        <div className={styles.overlay}></div>
      </div>
      <div className={styles.video__block}>
        <video autoPlay muted loop className={styles.video}>
          <source src={animationVideo} type="video/mp4" />
        </video>
      </div>
    </Element>
  );
}

export default Animation;



/*
import { useEffect, useState } from 'react';
import { useSpring, animated } from 'react-spring';

import styles from '../../../styles/Home/animation.module.css';

export default function Animation() {
  const [animationCompleted, setAnimationCompleted] = useState(false);
  const animationProps = useSpring({
    from: { opacity: 0, transform: 'translateY(50%)' },
    to: { opacity: 1, transform: 'translateY(0%)' },
    delay: 500,
    onRest: () => setAnimationCompleted(true),
  });

  useEffect(() => {
    setTimeout(() => {
      setAnimationCompleted(true);
    }, 3000);
  }, []);

  return (
    <div className={styles.fullscreen__block}>
      <animated.h1 style={animationProps}>
        Welcome to our ecommerce site
      </animated.h1>
    </div>
  );
}


///////////////////////////////////////////
import { useEffect, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { Element } from 'react-scroll';

import styles from '../../../styles/Home/animation.module.css';
import animationVideo from '../../../public/animation.mp4';

const Animation = () => {
  const [animationCompleted, setAnimationCompleted] = useState(false);
  const animationProps = useSpring({
    from: { opacity: 0, transform: 'translateY(50%)' },
    to: { opacity: 1, transform: 'translateY(0%)' },
    delay: 500,
    onRest: () => setAnimationCompleted(true),
  });

  useEffect(() => {
    setTimeout(() => {
      setAnimationCompleted(true);
    }, 3000);
  }, []);

  return (
    <Element name="home">
      <div className={styles.fullscreen__block}>
        <animated.h1 style={animationProps}>
          Welcome to our ecommerce site
        </animated.h1>
        <video autoPlay muted loop className={styles.video}>
          <source src={animationVideo} type="video/mp4" />
        </video>
      </div>
    </Element>
  );
}

export default Animation;
*/