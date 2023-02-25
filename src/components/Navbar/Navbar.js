import { useEffect, useRef, useState, useContext } from 'react';

import EachTodo from '../EachTodo/EachTodo';

import { ContextData } from '../../context/ContextData';

export default function Navbar({ active }) {
  const MyContext = ContextData();
  const [userArray, setUserArray] = useContext(MyContext);

  const search = useRef(null);
  const [searchValue, setSearchValue] = useState('');
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    setUpdate(false);
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
          <span
            className='material-symbols-rounded mr-10 fs-20 cursor-pointer user-select-none'
            onClick={() => search.current.focus()}
          >
            search
          </span>
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
          <span
            className='material-symbols-rounded fs-18 cursor-pointer user-select-none c-white700 p-10 bora-10 hover-b-white500 hover-c-black500'
            onClick={() => {
              search.current.focus();
              setUserArray(() => {
                let temporaryArray = userArray;
                temporaryArray.push({
                  id: userArray.length,
                  name: 'Untitled',
                  logo: 'category',
                });
                return temporaryArray;
              });
              setUpdate(true);
            }}
          >
            add
          </span>
        )}
      </div>
    </nav>
  );
}
