import styles from './Timeline.module.css';

import Draggable from 'react-draggable';

const Timeline = () => {

  return (
    <div className={styles['timeline']}>
      <Draggable
        axis="x"
        defaultPosition={{ x: 400, y: 0 }}
        scale={1}
        grid={[15, 0]}
        bounds={'parent'}>
        <div className={styles['cursor']}>
        <div className={styles['cursor-line']}></div></div>
      </Draggable>
      <div className={styles['timeline-division']}>
        <div className={styles['timestep']}>
          <p>0:10</p>
        </div>
        <div className={styles['subdivision']} />
        <div className={styles['subdivision']} />
      </div>
      <div className={styles['timeline-division']}>
        <div className={styles['timestep']}>
          <p>0:20</p>
        </div>
        <div className={styles['subdivision']} />
        <div className={styles['subdivision']} />
      </div>
      <div className={styles['timeline-division']}>
        <div className={styles['timestep']}>
          <p>0:30</p>
        </div>
        <div className={styles['subdivision']} />
        <div className={styles['subdivision']} />
      </div>
      <div className={styles['timeline-division']}>
        <div className={styles['timestep']}>
          <p>0:40</p>
        </div>
        <div className={styles['subdivision']} />
        <div className={styles['subdivision']} />
      </div>
      <div className={styles['timeline-division']}>
        <div className={styles['timestep']}>
          <p>0:50</p>
        </div>
        <div className={styles['subdivision']} />
        <div className={styles['subdivision']} />
      </div>
      <div className={styles['timeline-division']}>
        <div className={styles['timestep']}>
          <p>1:00</p>
        </div>
        <div className={styles['subdivision']} />
        <div className={styles['subdivision']} />
      </div>
      <div className={styles['timeline-division']}>
        <div className={styles['timestep']}>
          <p>1:10</p>
        </div>
        <div className={styles['subdivision']} />
        <div className={styles['subdivision']} />
      </div>
      <div className={styles['timeline-division']}>
        <div className={styles['timestep']}>
          <p>1:20</p>
        </div>
        <div className={styles['subdivision']} />
        <div className={styles['subdivision']} />
      </div>
      <div className={styles['timeline-division']}>
        <div className={styles['timestep']}>
          <p>1:30</p>
        </div>
        <div className={styles['subdivision']} />
        <div className={styles['subdivision']} />
      </div>
      <div className={styles['timeline-division']}>
        <div className={styles['timestep']}>
          <p>1:40</p>
        </div>
        <div className={styles['subdivision']} />
        <div className={styles['subdivision']} />
      </div>
      <div className={styles['timeline-division']}>
        <div className={styles['timestep']}>
          <p>1:50</p>
        </div>
        <div className={styles['subdivision']} />
        <div className={styles['subdivision']} />
      </div>
      <div className={styles['timeline-division']}>
        <div className={styles['timestep']}>
          <p>2:00</p>
        </div>
        <div className={styles['subdivision']} />
        <div className={styles['subdivision']} />
      </div>
      <div className={styles['timeline-division']}>
        <div className={styles['timestep']}>
          <p>2:10</p>
        </div>
        <div className={styles['subdivision']} />
        <div className={styles['subdivision']} />
      </div>
    </div>
  );
};

export default Timeline;