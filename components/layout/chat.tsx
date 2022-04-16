import React from 'react';

export default function Chat() {
  return (
    <div className=" bg-controls-bg rounded-lg py-6 px-6 ">
      <div className="py-2 flex flex-row justify-between items-center">
        <h1 className=" text-dark-blue text-2xl capitalize">Group Chat</h1>
        <div className="flex flex-row space-x-4">
          <button className=" py-3 px-6 text-primary-green bg-button-bg font-semibold rounded-xl">
            Messages
          </button>
          <button className=" py-3 px-6 text-button-text hover:text-primary-green hover:bg-button-bg hover:font-semibold rounded-xl">
            Participants
          </button>
        </div>
      </div>

      <div className='mt-10 py-2 px-4 flex flex-row items-center bg-white rounded-xl'>
        <input type="text" className=' outline-none w-full' placeholder='write your message'/>
        <button className='p-3 bg-primary-green rounded-xl'>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="#fff"
            stroke="#fff"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-send"
          >
            <line x1="22" y1="2" x2="11" y2="13"></line>
            <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
          </svg>
        </button>
      </div>
    </div>
  );
}
