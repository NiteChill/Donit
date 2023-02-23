import { useEffect, useRef, useState, useContext } from 'react';

import glass from '../../assets/img/glass.svg';
import plus from '../../assets/img/plus.svg';
import plusLight from '../../assets/img/plus-light.svg';
import { svg } from '../../datas/svg';

import EachTodo from '../EachTodo/EachTodo';

import { ContextData } from '../../context/ContextData';

export default function Navbar({ active }) {
  const MyContext = ContextData();
  const [userArray, setUserArray] = useContext(MyContext);

  const search = useRef(null);
  const [searchValue, setSearchValue] = useState('');
  const [img, setImg] = useState(plusLight);
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    setUpdate(false);
    setImg(plusLight);
    localStorage.setItem('userArray', JSON.stringify(userArray));
  }, [update, userArray]);

  const [filteredUserArray, setFilteredUserArray] = useState(
    userArray &&
      userArray.filter((todo) =>
        todo.name.toLowerCase().startsWith(searchValue.toLowerCase())
      )
  );

  useEffect(() => {
    userArray && searchValue !== ''
      ? setFilteredUserArray(
          userArray.filter((todo) =>
            todo.name.toLowerCase().startsWith(searchValue.toLowerCase())
          )
        )
      : setFilteredUserArray(userArray);
  }, [searchValue, userArray]);

  return (
    <nav
      className='d-flex-column w-280 b-white400 border-right-2 border-white500 h-full'
      style={{ minWidth: '28rem' }}
    >
      <div className='d-flex-row ai-center pl-20 h-50 border-bottom-2 border-white500 fs-14 fw-400 ff-primary'>
        <p className='pr-15 border-right-2 border-white500 c-black500 user-select-none'>
          My todo
        </p>
        <div className='d-flex-row ai-center pt-10 pr-15 pb-10 pl-15'>
          <img
            src={glass}
            alt='glass'
            className='w-16 h-16 mr-10 cursor-pointer user-select-none'
            onClick={() => search.current.focus()}
          />
          <input
            type='text'
            name='search'
            placeholder='Search'
            className='c-black500 input-clear w-120 user-select-none'
            ref={search}
            onInput={(e) => setSearchValue(e.target.value)}
            onFocus={(e) => e.target.select()}
          />
        </div>
      </div>
      <div className='d-flex-column pt-15 pr-35 pb-15 pl-35 ai-center'>
        {filteredUserArray &&
          filteredUserArray.map((todo) => (
            <EachTodo
              id={todo.id}
              name={todo.name}
              logo={todo.logo}
              key={crypto.randomUUID()}
              active={active}
              userArray={userArray}
              setUserArray={setUserArray}
            />
          ))}
        {!update && (
          <div
            className='d-flex-column ai-center jc-center hover-b-white500 bora-10 w-fit-content p-10 cursor-pointer'
            onMouseOver={() => setImg(plus)}
            onMouseLeave={() => setImg(plusLight)}
            onClick={() => {
              setUserArray(() => {
                let temporaryArray = userArray;
                temporaryArray.push({
                  id: userArray.length,
                  name: 'Untitled',
                  logo: svg.twoRectangles,
                });
                return temporaryArray;
              });
              setUpdate(true);
            }}
          >
            <img
              src={img}
              alt='add todo'
              className='w-16 h-16 user-select-none'
            />
          </div>
        )}
      </div>
    </nav>
  );
}
