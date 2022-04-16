import React, { useState, useLayoutEffect } from 'react';
import { PartcipantOnCall } from '../participants/oncall';
import ControlsView from './controlsView';

export default function Main() {
  useLayoutEffect(() => {
    async function fetchMedia() {
      const constraints = { audio: true, video: { width: 1000, height: 600 } };
      const mediaStream = await navigator.mediaDevices.getUserMedia(
        constraints
      );
      const video = document.querySelector('video');
      if (video) {
        video.muted = true;
        video.srcObject = mediaStream;
        video.onloadedmetadata = () => video?.play();
      }
    }
    fetchMedia();
  });

  return (
    <div className="p-8 font-normal-text"  style={{ width: 1050 }}>
      <h1 className="mb-5 text-dark-blue text-2xl font-semibold ">
        Overview of new real estate proposals
      </h1>
      <div className="mt-5 mb-2 bg-gray-100 border-[1px]"></div>
      <PartcipantOnCall />
      <div className='relative border-[1px] border-gray-200 rounded-2xl' style={{ width: 1000, height: 600 }}>
        <video className=" rounded-2xl " width={1000} height={600}>
          Sorry, your browser does not support video
        </video>
        <div className="absolute top-0">
          <ControlsView />
        </div>
      </div>
    </div>
  );
}
