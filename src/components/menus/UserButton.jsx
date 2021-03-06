import {Dropdown} from 'react-bootstrap';
import React from 'react';
import {BiDisc} from 'react-icons/bi';
import {NavLink} from 'react-router-dom';
import Arrow from '../Arrow';

const UserButton = () => {
  return (<Dropdown className='mt-1'>
    <Dropdown.Toggle className={'userbutton text-white me-2 d-flex h-100 p-2 \
    align-items-center'}>
      <div className={'useravatar me-2 d-flex \
    justify-content-center align-items-center'}>
        <div className='imgcontainer'
          style={{backgroundImage: 'url(https://i.pinimg.com/736x/c5/ed/df/c5eddf377fff4be5ab21dec3ea7a163c.jpg)'}}/>
        <div className='userexperience'></div>
      </div>
      <div className=''>
        <p className='p-0 m-0 username'>Test User</p>
        <div className='online-text d-flex align-items-center'>
          <BiDisc />
          Online
        </div>
      </div>
      <Arrow className="ms-2 mt-1" rotation={180} size={12} />
    </Dropdown.Toggle>

    <Dropdown.Menu className='text-center'>
      <NavLink to="/settings" className="dropdown-item">Settings</NavLink>
      <Dropdown.Item>Discconect</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>);
};

export default UserButton;
