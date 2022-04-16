import React from 'react';

export function MeetingTime() {
  return (
    <div className=" bg-controls-bg py-2 px-4 flex flex-row items-center space-x-3 rounded-lg">
      <div className="bg-white p-1 rounded-full items-center flex ">
        <div className=" bg-secondary-orange w-2 h-2 rounded-full justify-center"></div>
      </div>
      <p className=' text-base'>03:15</p>
    </div>
  );
}
