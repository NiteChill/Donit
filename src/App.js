import { Outlet, useParams } from 'react-router-dom';
// import { useEffect, useState } from 'react';

import './default.scss';

import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';

function App() {
  const { name } = useParams();

  // localStorage.setItem(
  //   'userArray',
  //   JSON.stringify([
  //     {
  //       name: 'My first todo',
  //       logo: '',
  //     },
  //   ])
  // );
  
  return (
    <div className='App'>
      <Header />
      <div className='d-flex-row w-full h-full'>
        <Navbar
          active={name}
        />
        <Outlet />
      </div>
    </div>
  );
}

export default App;
