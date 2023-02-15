import { useEffect } from "react";
import { useSnippylyClient } from '@snippyly/react';
import { generateUserData } from './util/user';
import styles from './App.module.css';

import Layout from './components/layout/Layout';
import Breadcrumbs from './components/breadcrumbs/Breadcrumbs';
import Explorer from './components/explorer/Explorer';
import Preview from './components/preview/Preview';
import SplitPane from './components/split-pane/SplitPane';

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
          <></>
        }
      />
    </div>
  );
};

export default App;