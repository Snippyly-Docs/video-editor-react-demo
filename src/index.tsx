import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { 
  VeltProvider, 
  VeltCursor,
  VeltComments,
  VeltCommentsSidebar,
  VeltRecorderControlPanel,
  VeltRecorderNotes,
  VeltTags,
  VeltHuddle
} from '@veltdev/react';

const rootContainer = document.getElementById('root');
const root = createRoot(rootContainer as HTMLElement);
root.render(
  <>
    {/**
     * Velt Code Example
     * Feature: Live Cursors
     * Feature: Comments -- Step #1
     * Feature: Comments Sidebar -- Step #1
     * Feature: Recorder -- Step #1
     * Feature: Tags -- Step #1
     * Feature: Huddle -- Step #1
     */}
    <VeltProvider apiKey="WDMgKshFEsPTqvBjUcH3">
      <VeltCursor />
      <VeltComments />
      <VeltCommentsSidebar />
      <VeltRecorderControlPanel />
      <VeltRecorderNotes />
      <VeltTags />
      <VeltHuddle />
      <App />
    </VeltProvider>
  </>
);