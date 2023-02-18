import styles from './Controls.module.css';
import PlayIcon from '../../icons/play.svg';

const Controls = () => {

  return (
    <div className={styles['play-controls']}>
      <div className={styles['play-button-container']}>
        <img src={PlayIcon} />
      </div>
      <div className={styles['time-controls']}>
        <div className={styles['speed-button']}>1x</div>
        <div className={styles['current-time']}>00:39</div>
      </div>
    </div>
  );
}

export default Controls;