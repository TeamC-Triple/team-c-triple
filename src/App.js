import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import './App.css';

<<<<<<< HEAD
import dummyMagazine from './api/dummyMegazine.js';
=======
import { dummyRecoCourse } from './api/data_recommendCourse.js';
>>>>>>> cef0a3e1d179ffae05d73e11305be475a5fed219

import Home from './pages/Home.js';
 

export const RecoCourseDataContext = React.createContext();

export const MagazineDataContext = React.createContext();

function App() {
<<<<<<< HEAD
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
=======
    return (
    <RecoCourseDataContext.Provider value={dummyRecoCourse}>
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path='/' element={<Home />} />
                </Routes>
            </div>
        </BrowserRouter>
    </RecoCourseDataContext.Provider>
>>>>>>> cef0a3e1d179ffae05d73e11305be475a5fed219
  );
}

export default App;