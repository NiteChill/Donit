import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import dotsVertical from '../../assets/img/dots-vertical.svg';
import dotsVerticalLight from '../../assets/img/dots-vertical-light.svg';

export default function EachTodo({logo, name}) {
  const [img, setImg] = useState(dotsVerticalLight); //str.replace(/\s/g, '')
  return (
    <NavLink
      to={`/${name.replace(/ /g,"_")}`}
      className='d-flex-row pt-10 pr-15 pb-10 pl-15 mb-5 w-full ai-center jc-space-between hover-b-white500 bora-10 cursor-pointer'
    >
      <div className='d-flex-row'>
        <img
          src={logo}
          alt='logo'
          className='w-16 h-16 mr-10 user-select-none'
        />
        <p className='ff-primary fs-14 fw-400 c-black500'>{name}</p>
      </div>
      <img
        src={img}
        alt='3 dots'
        className='w-16 h-16 user-select-none'
        onMouseOver={() => setImg(dotsVertical)}
        onMouseLeave={() => setImg(dotsVerticalLight)}
      />
    </NavLink>
  );
}
