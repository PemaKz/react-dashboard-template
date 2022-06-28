import React, {useEffect} from 'react';
import TopMenu from './components/menus/TopMenu';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import LeftMenu from './components/menus/LeftMenu';
import WebFont from 'webfontloader';
import Home from './pages/Home';

function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Nunito Sans'],
      },
    });
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <TopMenu />
        <LeftMenu />
        <div className='content'>
          <Routes>
            <Route path='/' element={<Home/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
