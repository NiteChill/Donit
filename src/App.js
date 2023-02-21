import { Outlet, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import './default.scss';

import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';

import { svg } from './datas/svg';

function App() {
  const [userArray, setUserArray] = useState('');
  const { name } = useParams();

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
      localStorage.setItem('userArray', JSON.stringify(userArray));
    }
  }, []);
  return (
    <div className='App'>
      <Header />
      <div className='d-flex-row w-full h-full'>
        <Navbar todo={userArray} active={name} />
        <Outlet />
      </div>
    </div>
  );
}

export default App;
