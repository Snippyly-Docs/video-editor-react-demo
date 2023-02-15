import styles from './Explorer.module.css';


const Explorer = () => {

  return (
    <div className={styles['explorer']}>
      <div className={styles['explorer-content']}>
        <div className={styles['thumbnail']} />
        <div className={styles['thumbnail']} />
        <div className={styles['thumbnail']} />
        <div className={styles['thumbnail']} />
      </div>
    </div>
  );
};

export default Explorer;