import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import dummyMagazine from './api/dummyMegazine.js';

import Home from './pages/Home.js';

export const MagazineDataContext = React.createContext();

function App() {
  return (
    <MagazineDataContext.Provider value={dummyMagazine}>
      <BrowserRouter>
          <div className="App">
              <Routes>
                  <Route path='/' element={<Home />} />
              </Routes>
          </div>
      </BrowserRouter>
    </MagazineDataContext.Provider>
  );
}

export default App;