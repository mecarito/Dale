import React, { useState, useLayoutEffect } from 'react';
import { PartcipantOnCall } from '../participants/oncall';
import Chat from './chat';
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
    <div className='flex flex-row'>
      <div className="p-8 font-normal-text" style={{ width: 1050 }}>
        <div className="flex flex-row space-x-4 items-center mb-5">
          <div className=" bg-controls-bg p-2 rounded-xl cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#B5BAC9"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-chevron-left"
            >
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </div>
          <h1 className=" text-dark-blue text-2xl font-semibold mt-1 ">
            Overview of new real estate proposals
          </h1>
        </div>

        <div className="mt-5 mb-2 bg-gray-100 border-[1px]"></div>
        <PartcipantOnCall />
        <div
          className="relative border-[1px] border-gray-200 rounded-2xl"
          style={{ width: 1000, height: 600 }}
        >
          <video className=" rounded-2xl " width={1000} height={600}>
            Sorry, your browser does not support video
          </video>
          <div className="absolute top-0">
            <ControlsView />
          </div>
        </div>
      </div>
      <div className=' w-full py-4 mx-12 '>
        <Chat />
      </div>
    </div>
  );
}
