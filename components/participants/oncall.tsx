import React from 'react';

export function PartcipantOnCall() {
  return (
    <div className="flex flex-row items-center justify-between py-4 pl-4">
      <div className="flex flex-row items-center space-x-8 ">
        <div className="flex flex-row space-x-2 items-center">
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
            className="feather feather-users"
          >
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
          </svg>
          <p className='text-sm'>Invited to the call: </p>
          <p className="py-1 px-3 bg-primary-bg-green text-primary-green text-lg rounded-xl">
            6
          </p>
        </div>

        <div className="flex flex-row space-x-2 items-center">
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
            className="feather feather-user-minus"
          >
            <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
            <circle cx="8.5" cy="7" r="4"></circle>
            <line x1="23" y1="11" x2="17" y2="11"></line>
          </svg>
          <p className='text-sm'>Absent people: </p>
          <p className="py-1 px-3 bg-secondary-bg-orange text-secondary-orange text-lg rounded-xl">
            2
          </p>
        </div>
      </div>
      <div className="flex flex-row space-x-2 items-center cursor-pointer">
        <div className='py-2 px-2 bg-primary-green rounded-xl'>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#fff"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-plus"
          >
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
        </div>

        <p className=" text-primary-green font-semibold text-sm mt-1">
          Add user to the call
        </p>
      </div>
    </div>
  );
}
