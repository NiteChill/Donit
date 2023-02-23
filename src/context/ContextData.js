import { createContext } from 'react';
import { useState, useEffect } from 'react';

import { svg } from '../datas/svg';

export function ContextData() {
  const [userArray, setUserArray] = useState('');

  const storage = JSON.parse(localStorage.getItem('userArray'));
  useEffect(() => {
    console.log(storage);
    if (storage) {
      setUserArray(storage);
      console.log('nice');
    } else {
      setUserArray([
        {
          id: 0,
          name: 'My first todo',
          logo: svg.twoRectangles,
        },
      ]);
    }
    // eslint-disable-next-line
  }, []);

  const MyContext = createContext([userArray, setUserArray]);
  return MyContext;
}
