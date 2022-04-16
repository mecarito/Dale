import React from 'react';

export default function Chat() {
  return (
    <div className=" bg-controls-bg rounded-lg pt-6">
      <div className="mx-6 py-2 flex flex-row justify-between items-center">
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
    </div>
  );
}
