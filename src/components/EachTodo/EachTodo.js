import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import plus from '../../assets/img/plus.svg';
import user from '../../assets/img/user.svg';
import dotsVertical from '../../assets/img/dots-vertical.svg';
import dotsVerticalLight from '../../assets/img/dots-vertical-light.svg';

export default function EachTodo() {
  const [img, setImg] = useState(dotsVerticalLight);
  return (
    <div className='d-flex-row pt-10 pr-15 pb-10 pl-15 mb-5 w-full ai-center jc-space-between hover-b-white500 bora-10 cursor-pointer'>
      <div className='d-flex-row'>
        <img src={user} alt='logo' className='w-16 h-16 mr-10' />
        <p className='ff-roboto fs-14 c-black500'>Personal</p>
      </div>
      <img
        src={img}
        alt='3 dots'
        className='w-16 h-16'
        onMouseOver={() => setImg(dotsVertical)}
        onMouseLeave={() => setImg(dotsVerticalLight)}
      />
    </div>
  );
}
