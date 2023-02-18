import styles from './FileExplorer.module.css';

import CameraIcon from '../../icons/camera.svg';


const FileExplorer = () => {
  return (
    <div className={styles['file-explorer']}>
      <div className={styles['file']}>
        <img src={CameraIcon} />
        <p className={styles['file-name']}>beep-boop.mp4</p>
      </div>
    </div>
  );
}

export default FileExplorer;