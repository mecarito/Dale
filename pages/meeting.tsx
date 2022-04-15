import React from 'react';
import Sidebar from '../components/layout/sidebar';
import Main from '../components/layout/main';

export default function Meeting() {
  return (
    <div className="grid grid-flow-row grid-cols-12 h-screen">
      <div className='col-span-1'>
        <Sidebar />
      </div>
      <div className=' col-span-11 border-gray-200 border-l-[1px] '>
        <Main />
      </div>
    </div>
  );
}
