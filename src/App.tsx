import { useEffect } from "react";
import { useVeltClient } from '@veltdev/react';
import { generateUserData } from './util/user';
import styles from './App.module.css';

import Layout from './components/layout/Layout';
import Breadcrumbs from './components/breadcrumbs/Breadcrumbs';
import Explorer from './components/explorer/Explorer';
import Preview from './components/preview/Preview';
import SplitPane from './components/split-pane/SplitPane';
import Timeline from "./components/timeline/Timeline";
import Controls from "./components/controls/Controls";
import FileExplorer from "./components/file-explorer/FileExplorer";
import Stage from "./components/stage/Stage";

import { VeltPresence } from "@veltdev/react";


const App = () => {

  /**
   * Velt Code Example
   * Initializes the Velt SDK.
   */
  const { client } = useVeltClient();

  useEffect(() => {

    if (!client) return;

    const user = generateUserData();
    client.identify(user);
    client.setDocumentId('video_project_id');

  }, [client]);

  useEffect(() => {

    if (!client) return;

    client.getPresenceElement().getOnlineUsersOnCurrentDocument().subscribe((users: any) => {
      if (users === null) return;
      if (users.length === 0) {
        const isDataReset = window.sessionStorage.getItem('_snippyly_demo_reset');

        if (isDataReset === null) {
          console.log('reset data!!');
          fetch(
            "https://us-central1-snippyly-sdk-prod.cloudfunctions.net/resetDemoData",
            {
              headers: { "Content-Type": "application/json" },
              method: "POST",
              body: JSON.stringify({ documentId: 'video_project_id' }),
            }
          );
          window.sessionStorage.setItem('_snippyly_demo_reset', 'true');
        }
      }
    });

  }, [client]);

  return (
    <div className={styles['app-container']}>
      <Layout
        topbar={
          <div className={styles['topbar']}>
            <Breadcrumbs />
            {/**
             * Velt Code Example
             * Feature: Presence
             */}
            <div className={styles['presence-container']}>
              <VeltPresence />
            </div>
          </div>
        }
        mainWindow={
          <SplitPane
            left={<Explorer />}
            right={<Preview />}
          />
        }
        bottomPane={
          <div className={styles['bottom-container']}>
            <div className={styles['control-bar']}>
              <Controls />
              <Timeline />
            </div>
            <div className={styles['interact-bar']}>
              <FileExplorer />
              <Stage />
            </div>
          </div>
        }
      />
    </div>
  );
};

export default App;