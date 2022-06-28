import React from 'react';
import UserButton from './UserButton';

const TopMenu = () => {
  return (<nav className='navbar topmenu p-0 m-0'>
    <div className='text-white'>
      <div className='d-md-flex d-none'>
        <div className='weblogo ms-5'>
          Web Logo
        </div>
      </div>
    </div>
    <div className='h-100'>
      <UserButton />
    </div>
  </nav>);
};

export default TopMenu;
