import './default.scss';

import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className='App' ref={App}>
      <Header />
      <Navbar />
    </div>
  );
}

export default App;
