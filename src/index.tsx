import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { SnippylyProvider, SnippylyCursor } from '@snippyly/react';

const rootContainer = document.getElementById('root');
const root = createRoot(rootContainer as HTMLElement);
root.render(
  <>
    {/**
     * Snippyly Code Example
     * Feature: Live Cursors
     */}
    <SnippylyProvider apiKey="WDMgKshFEsPTqvBjUcH3">
      <SnippylyCursor />
      <App />
    </SnippylyProvider>
  </>
);