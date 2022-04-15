import React from 'react';

export default function Sidebar() {
  return (
    <div className=" px-4">
      <div className="mt-5">
        <h3 className="text-5xl  font-semibold text-secondary-orange font-logo text-center">
          Da<span className=" text-primary-green">le</span>
        </h3>
        <div className="space-x-3 mt-12 flex flex-row items-center hover:bg-primary-bg-green p-2 rounded-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#31A389"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-video"
          >
            <polygon points="23 7 16 12 23 17 23 7"></polygon>
            <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
          </svg>
          <p className=' mt-1 text-primary-green text-lg font-normal-text font-semibold'>Video</p>
        </div>
      </div>
    </div>
  );
}
