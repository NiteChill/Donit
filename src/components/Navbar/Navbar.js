import { useEffect, useRef, useState } from 'react';

import glass from '../../assets/img/glass.svg';

export default function Navbar() {
  const search = useRef(null);
  const [searchValue, setSearchValue] = useState('');
  useEffect(() => {
    //console.log(searchValue);
  }, [searchValue]);
  return (
    <nav className='d-flex-column w-280 b-white400 border-right-2 border-white500 h-full'>
      <div className='d-flex-row ai-center pl-20 h-50 border-bottom-2 border-white500 fs-14 fw-400 ff-roboto'>
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
    </nav>
  );
}
