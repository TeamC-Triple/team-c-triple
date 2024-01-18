import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import { dummyRecoCourse } from './api/data_recommendCourse.js';
import { dummyTravelog } from './api/data_Travelog.js';

import Home from './pages/Home.js';
import MainFeed from './pages/MainFeed.js';
 
export const RecoCourseDataContext = React.createContext();
export const TravelogContext = React.createContext();

function App() {
    return (
    <RecoCourseDataContext.Provider value={dummyRecoCourse}>
        <TravelogContext.Provider value={dummyTravelog} >
            <BrowserRouter>
                <div className="App">
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/mainfeed' element={<MainFeed />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </TravelogContext.Provider>
    </RecoCourseDataContext.Provider>
  );
}

export default App;
