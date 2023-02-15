import styles from './Breadcrumbs.module.css';

const Breadcrumbs = () => {

  return (
    <div className={styles['breadcrumb-container']}>
      <a>Main comp</a>
      <span>&gt;</span>
      <a className={styles['active']}>Composition</a>
    </div>
  );
};

export default Breadcrumbs;