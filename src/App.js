import { Outlet } from 'react-router-dom';

import './default.scss';

import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className='App'>
      <Header />
      <div className='d-flex-row w-full h-full'>
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
}

export default App;
