import React from 'react';
import { Video, Mic, FullScreen, Settings, Call } from '../controls';
import { MeetingTime } from '../controls/time';

export default function ControlsView() {
  return (
    <div className="rounded-2xl pt-4" style={{ width: 1000, height: 600 }}>
      <div className='flex flex-row justify-center mb-16'>
        <MeetingTime />
      </div>
      <div className="flex flex-row items-center space-x-6 justify-center pt-96">
        <FullScreen />
        <Mic />
        <Call />
        <Video />
        <Settings />
      </div>
    </div>
  );
}
