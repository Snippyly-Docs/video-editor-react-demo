import styles from './Stage.module.css';

import Draggable from 'react-draggable';

const Stage = () => {
  return (
    <div className={styles['stage']}>
      <div className={styles['track']}>
        <Draggable
          axis="x"
          defaultPosition={{ x: 150, y: 0 }}
          scale={1}
          grid={[15, 0]}
          bounds={'parent'}
        >
          <div className={styles['video']} /></Draggable>
      </div>
      <div className={styles['track']}>
        <Draggable
          axis="x"
          defaultPosition={{ x: 250, y: 0 }}
          scale={1}
          grid={[15, 0]}
          bounds={'parent'}>
          <div className={styles['audio']}>
            <div className={styles['audio-overlay']} />
          </div>
        </Draggable>
      </div>
      <div className={styles['track']}></div>
    </div>
  );
}

export default Stage;