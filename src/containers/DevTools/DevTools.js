import React from 'react';
import { createDevTools } from 'redux-devtools';
import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';

export default createDevTools(
  <DockMonitor
    toggleVisibilityKey="ctrl-h"
    changePositionKey="ctrl-q"
    defaultIsVisible={false}
    defaultSize={0.31}
    defaultPosition="right" /* can be ['left', 'top', 'right', 'bottom'] */
  >
    <LogMonitor theme="tomorrow" />
  </DockMonitor>
);
