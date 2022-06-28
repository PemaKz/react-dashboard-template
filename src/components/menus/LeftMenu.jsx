import React, {useState} from 'react';
import {BiMenu, BiLogOutCircle, BiHome} from 'react-icons/bi';
import LeftMenuButton from './LeftMenuButton';

const LeftMenu = () => {
  const [menuShow, setMenuShow] = useState(false);
  const handleOpenMenu = () => {
    // eslint-disable-next-line max-len
    const widthpx = getComputedStyle(document.documentElement).getPropertyValue('--leftmenu-width');
    let width = parseInt(widthpx.split('px')[0]);
    if (menuShow) width = width / 3.5;
    if (!menuShow) width = width * 3.5;
    document.documentElement.style.setProperty('--leftmenu-width',
        width + 'px');
    menuShow ? setMenuShow(false) : setMenuShow(true);
  };

  return (<nav className={'navbar leftmenu flex-column p-0 \
  justify-content-start'}>
    <button onClick={handleOpenMenu}
      className='w-100 py-3 handlemenubutton'>
      <BiMenu size={32} />
    </button>

    <div className='d-flex flex-column mt-2
    justify-content-center w-100 text-white overflow-hidden'>
      <LeftMenuButton icon={<BiHome />} text="Home" />
      <hr className='lm-divider'/>
    </div>

    <div className='d-flex flex-column flex-grow-1 align-self-end
    justify-content-center w-100 text-white overflow-hidden'>
      <div className='flex-grow-1'/>
      <LeftMenuButton icon={<BiLogOutCircle />} text="Logout" />
    </div>
  </nav>);
};

export default LeftMenu;
