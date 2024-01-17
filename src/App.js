import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import { dummyRecoCourse } from './api/data_recommendCourse.js';

import Home from './pages/Home.js';
 

import dummyTouristSpots from './api/data_TouristSpots.js';

export const RecoCourseDataContext = React.createContext();
export const SpotsDataContext = React.createContext();

function App() {
  return (
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
  );
}

export default App;
