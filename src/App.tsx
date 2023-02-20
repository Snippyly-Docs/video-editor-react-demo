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
import Controls from "./components/controls/Controls";
import FileExplorer from "./components/file-explorer/FileExplorer";
import Stage from "./components/stage/Stage";

import { 
  SnippylyPresence,
  SnippylyCommentTool,
  SnippylySidebarButton,
  SnippylyRecorderTool,
  SnippylyTagTool,
  SnippylyHuddleTool
} from "@snippyly/react";


const App = () => {

  /**
   * Snippyly Code Example
   * Initializes the Snippyly SDK.
   */
  const { client } = useSnippylyClient();

  useEffect(() => {

    if (!client) return;

    const user = generateUserData();
    client.identify(user);
    client.setDocumentId('video_project_id');

  }, [client]);

  return (
    <div className={styles['app-container']}>
      <Layout
        topbar={
          <div className={styles['topbar']}>
            <Breadcrumbs />
            {/**
             * Snippyly Code Example
             * Feature: Presence
             * Feature: Comments -- Step #2
             * Feature: Comments Sidebar -- Step #2
             * Feature: Recorder -- Step #2
             * Feature: Tags -- Step #2
             * Feature: Huddle -- Step #2
             */}
            <div className={styles['presence-container']}>
              <SnippylyCommentTool />
              <SnippylyTagTool />
              <SnippylyRecorderTool type="all" />
              <SnippylyHuddleTool type="all" />
              <SnippylySidebarButton />
              <SnippylyPresence />
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