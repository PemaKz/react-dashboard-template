import React from 'react';

const LeftMenuButton = ({icon, text}) => {
  console.log(icon, text);
  return (<button className='leftbutton d-flex'>
    <div className='btnicon'>
      <div className={'leftmbutton my-2 d-flex align-items-center \
      justify-content-center'}>
        {icon}
      </div>
    </div>
    <div className={'btntext d-flex align-items-center w-100 \
    justify-content-center align-items-center h-100'}>
      <p className='text-nowrap text-truncate p-0 m-0 bold-text'>
        {text}
      </p>
    </div>
  </button>);
};

export default LeftMenuButton;
