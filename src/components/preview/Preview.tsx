import styles from './Preview.module.css';

import SplashImg from '../../icons/splash.svg';

const Preview = () => {
  return (

    <div className={styles['preview']}>
      <img src={SplashImg} />
    </div>
  );
};

export default Preview;