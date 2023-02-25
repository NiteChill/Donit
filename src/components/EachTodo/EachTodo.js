import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

import ContextMenu from '../ContextMenu/ContextMenu';

export default function EachTodo({
  id,
  name,
  logo,
  active,
  userArray,
  setUserArray,
}) {
  const [menu, setMenu] = useState(false);

  const navigate = useNavigate();

  return (
    <>
      <div className='pos-relative w-full'>
        <div
          className={`d-flex-row mb-5 w-full ai-center jc-space-between hover-b-white500 bora-10 cursor-pointer ${
            name.replace(/ /g, '_')+id === active && 'b-white500'
          }`}
        >
          <NavLink
            to={`/${name.replace(/ /g, '_') + id}`}
            className='d-flex-row pt-10 pr-15 pb-10 pl-15 ai-center'
            style={{ flex: '1' }}
          >
            <span className='material-symbols-rounded fs-18 mr-10 user-select-none'>{logo}</span>
            <p className='ff-primary fs-14 fw-400 c-black500'>{name}</p>
          </NavLink>
          <div className='d-flex-row pt-10 pr-15 pb-10 pl-15 ai-center'>
            <span
              className='material-symbols-rounded fs-22 user-select-none hover-c-black500 c-white700'
              onClick={() => {
                setMenu(true);
              }}
            >
              more_vert
            </span>
          </div>
        </div>
        {menu && (
          <ContextMenu
            open={() => {
              setMenu(false);
              navigate(`/${name.replace(/ /g, '_')}`);
            }}
            kill={() => {
              setMenu(false);
              setUserArray(userArray.filter((todo) => todo.id !== id));
            }}
          />
        )}
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
