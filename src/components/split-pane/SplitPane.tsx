import styles from './SplitPane.module.css';

const SplitPane = (props: any) => {
  return (

    <div className={styles['split-pane']}>
      { props.left ? props.left : null }
      { props.right ? props.right : null }
    </div>
  );
}

export default SplitPane;