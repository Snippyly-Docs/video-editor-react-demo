import styles from './Layout.module.css';

const Layout = (props: any) => {
  return (
    <div className={styles['app-container']}>
      <div className={styles['topbar']}>
        { props.topbar ? props.topbar : null }
      </div>
      <div className={styles['main-window']}>
        { props.mainWindow ? props.mainWindow : null }
      </div>
      <div className={styles['bottom-pane']}>
        { props.bottomPane ? props.bottomPane : null }
      </div>
    </div>
  );
};

export default Layout;