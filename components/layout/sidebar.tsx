import React from 'react';

export default function Sidebar() {
  return (
    <div className=" px-4">
      <div className="mt-8">
        <h3 className="text-4xl  font-semibold text-secondary-orange  text-center">
          Da<span className=" text-primary-green">le</span>
        </h3>
        <div className='flex flex-row justify-center'>
          <button className=" mt-12 bg-primary-bg-green p-4 rounded-lg ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="#31A389"
              stroke="#31A389"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-video"
            >
              <polygon points="23 7 16 12 23 17 23 7"></polygon>
              <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
