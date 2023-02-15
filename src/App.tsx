import { useEffect } from "react";
import { useSnippylyClient } from '@snippyly/react';
import { generateUserData } from './util/user';
import styles from './App.module.css';

import Layout from './components/layout/Layout';
import Breadcrumbs from './components/breadcrumbs/Breadcrumbs';
import Explorer from './components/explorer/Explorer';
import Preview from './components/preview/Preview';
import SplitPane from './components/split-pane/SplitPane';
import Timeline from "./components/timeline/Timeline";

import PlayIcon from './icons/play.svg';
import CameraIcon from './icons/camera.svg';


import Draggable from 'react-draggable';

const App = () => {

  const { client } = useSnippylyClient();

  useEffect(() => {

    if (!client) return;

    const user = generateUserData();
    client.identify(user);

  }, [client]);

  return (
    <div className={styles['app-container']}>
      <Layout
        topbar={<Breadcrumbs />}
        mainWindow={
          <SplitPane
            left={<Explorer />}
            right={<Preview />}
          />
        }
        bottomPane={
          <div className={styles['bottom-container']}>
            <div className={styles['control-bar']}>
              <div className={styles['play-controls']}>
                <div className={styles['play-button-container']}>
                  <img src={PlayIcon} />
                </div>
                <div className={styles['time-controls']}>
                  <div className={styles['speed-button']}>1x</div>
                  <div className={styles['current-time']}>00:39</div>
                </div>
              </div>
              <Timeline />
            </div>
            <div className={styles['interact-bar']}>
              <div className={styles['file-explorer']}>
                <div className={styles['file']}>
                  <img src={CameraIcon} />
                  <p className={styles['file-name']}>beep-boop.mp4</p>
                </div>
              </div>
              <div className={styles['stage']}>
                <div className={styles['track']}>
                  <Draggable
                    axis="x"
                    defaultPosition={{x: 150, y: 0}}
                    scale={1}
                    grid={[15, 0]}
                    bounds={'parent'}
                  >
                    <div className={styles['video']} /></Draggable>
                </div>
                <div className={styles['track']}>
                  <Draggable
                    axis="x"
                    defaultPosition={{x: 250, y: 0}}
                    scale={1}
                    grid={[15, 0]}
                    bounds={'parent'}>
                    <div className={styles['audio']}>
                      <div className={styles['audio-overlay']} />
                      <div className={`${styles['audio-overlay']} ${styles['offset']}`} />
                    </div>
                  </Draggable>
                </div>
                <div className={styles['track']}></div>
              </div>
            </div>
          </div>
        }
      />
    </div>
  );
};

export default App;