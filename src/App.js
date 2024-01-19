import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { dummyMyTripPlan } from './api/data_myTripPlan.js'
import { dummyMagazine } from './api/dummyMegazine.js';
import { dummyRecoCourse } from './api/data_recommendCourse.js';

import './App.css';
import Home from './pages/Home.js';

export const MTLDataContext = React.createContext();
export const RecoCourseDataContext = React.createContext();
export const MagazineDataContext = React.createContext();

function App() {
    return (
        <MTLDataContext.Provider value={dummyMyTripPlan}>
            <MagazineDataContext.Provider value={dummyMagazine}>
                <RecoCourseDataContext.Provider value={dummyRecoCourse}>
                    <BrowserRouter>
                        <div className="App">
                            <Routes>
                                <Route path='/' element={<Home />} />
                            </Routes>
                        </div>
                    </BrowserRouter>
                </RecoCourseDataContext.Provider>
            </MagazineDataContext.Provider>
        </MTLDataContext.Provider>
  );
}

export default App;
