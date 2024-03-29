import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { VeltProvider, VeltCursor } from '@veltdev/react';

const rootContainer = document.getElementById('root');
const root = createRoot(rootContainer as HTMLElement);
root.render(
  <>
    {/**
     * Velt Code Example
     * Feature: Live Cursors
     */}
    <VeltProvider apiKey="WDMgKshFEsPTqvBjUcH3">
      <VeltCursor />
      <App />
    </VeltProvider>
  </>
);