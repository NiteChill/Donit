import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

import dotsVertical from '../../assets/img/dots-vertical.svg';
import dotsVerticalLight from '../../assets/img/dots-vertical-light.svg';

import ContextMenu from '../ContextMenu/ContextMenu';

export default function EachTodo({ logo, name, active }) {
  const [img, setImg] = useState(dotsVerticalLight);
  const [menu, setMenu] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      <div className='pos-relative w-full'>
        <div className={`d-flex-row mb-5 w-full ai-center jc-space-between hover-b-white500 bora-10 cursor-pointer ${name.replace(/ /g, '_') === active && 'b-white500'}`}>
          <NavLink
            to={`/${name.replace(/ /g, '_')}`}
            className='d-flex-row pt-10 pr-15 pb-10 pl-15 ai-center'
            style={{flex: '1'}}
          >
            <img
              src={logo}
              alt='logo'
              className='w-16 h-16 mr-10 user-select-none'
            />
            <p className='ff-primary fs-14 fw-400 c-black500'>{name}</p>
          </NavLink>
          <div className='d-flex-row pt-10 pr-15 pb-10 pl-15 ai-center'>
            <img
              src={img}
              alt='3 dots'
              className='w-16 h-16 user-select-none'
              onMouseOver={() => setImg(dotsVertical)}
              onMouseLeave={() => setImg(dotsVerticalLight)}
              onClick={(e) => {
                setMenu(true);
              }}
            />
          </div>
        </div>
        {menu && <ContextMenu open={() => {
          setMenu(false);
          navigate(`/${name.replace(/ /g, '_')}`);
        }} />}
      </div>
      {menu && (
        <div
          className='pos-absolute w-full h-full'
          style={{
            top: '0',
            right: '0',
            bot: '0',
            left: '0',
          }}
          onClick={() => setMenu(false)}
        ></div>
      )}
    </>
  );
}
