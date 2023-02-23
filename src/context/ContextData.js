import { createContext } from "react";
import { useState, useEffect } from "react";

import { svg } from '../datas/svg';

export function ContextData() {
  const [userArray, setUserArray] = useState('');


  useEffect(() => {
    const storage = JSON.parse(localStorage.getItem('userArray'));
    if (storage && storage.length !== '') {
      setUserArray(storage);
    } else {
      setUserArray([
        {
          name: 'My first todo',
          logo: svg.twoRectangles,
        },
        {
          name: 'My second todo',
          logo: svg.twoRectangles,
        },
        {
          name: 'hello',
          logo: svg.twoRectangles,
        },
        {
          name: 'mom',
          logo: svg.twoRectangles,
        },
        {
          name: 'lullll',
          logo: svg.twoRectangles,
        },
      ]);
    }
  }, []);

  const MyContext = createContext([userArray, setUserArray]);
  return MyContext;
}