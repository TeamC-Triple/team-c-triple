import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import dummyMagazine from './api/dummyMegazine.js';
import dummyRecoCourse from './api/data_recommendCourse.js';
import dummyTouristSpots from './api/data_TouristSpots.js';

import './App.css';
import Home from './pages/Home.js';
 


export const RecoCourseDataContext = React.createContext();
export const SpotsDataContext = React.createContext();
export const MagazineDataContext = React.createContext();

function App() {
    return (
      <MagazineDataContext.Provider value={dummyMagazine}>
        <RecoCourseDataContext.Provider value={dummyRecoCourse}>
            <SpotsDataContext.Provider value={dummyTouristSpots}>
                <BrowserRouter>
                    <div className="App">
                        <Routes>
                            <Route path='/' element={<Home />} />
                        </Routes>
                    </div>
                </BrowserRouter>
            </SpotsDataContext.Provider>
        </RecoCourseDataContext.Provider>
      </MagazineDataContext.Provider>
  );
}

export default App;
