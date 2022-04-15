import React, { useState, useEffect, useLayoutEffect } from 'react';

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
    <div className="p-8">
      <h1 className=' text-dark-blue text-2xl font-normal-text font-semibold '>Overview of new real estate proposals</h1>
      <video className="mt-6 rounded-2xl " width={1000} height={600}>
        Sorry, your browser does not support video
      </video>
    </div>
  );
}
