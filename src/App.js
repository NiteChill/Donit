import { Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';

import './default.scss';

import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';

import { svg } from './datas/svg';

function App() {
  const [userArray, setUserArray] = useState('')
  useEffect(() => {
    if (
      JSON.parse(localStorage.getItem('userArray')) &&
      JSON.parse(localStorage.getItem('userArray')).length !== 0
    ) {
      setUserArray(JSON.parse(localStorage.getItem('userArray')));
    } else {
      setUserArray([
        {
          name: 'My first todo',
          logo: svg.twoRectangles,
        },
      ]);
    }
    console.log(userArray);
  }, [])
    return (
      <div className='App'>
        <Header />
        <div className='d-flex-row w-full h-full'>
          <Navbar todo={userArray} />
          <Outlet />
        </div>
      </div>
    );
}

export default App;
