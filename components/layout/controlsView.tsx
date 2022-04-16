import React from 'react';
import { Video, Mic, FullScreen, Settings, Call } from '../controls';

export default function ControlsView() {
  return (
    <div className="flex flex-row items-center space-x-4">
      <Video />
      <Mic />
      <FullScreen />
      <Settings />
      <Call />
    </div>
  );
}
