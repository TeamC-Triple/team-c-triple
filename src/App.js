import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import { dummyMagazine } from './api/dummyMegazine.js';
import { dummyRecoCourse } from './api/data_recommendCourse.js';
import { dummyTouristSpots } from './api/data_TouristSpots.js';
import { dummyTravelog } from './api/data_Travelog.js';

import './App.css';
import Home from './pages/Home.js';
import MainFeed from './pages/MainFeed.js';
 
export const RecoCourseDataContext = React.createContext();
export const TravelogContext = React.createContext();
export const SpotsDataContext = React.createContext();
export const MagazineDataContext = React.createContext();

function App() {
    return (
      <MagazineDataContext.Provider value={dummyMagazine}>
        <RecoCourseDataContext.Provider value={dummyRecoCourse}>
            <SpotsDataContext.Provider value={dummyTouristSpots}>
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
            </SpotsDataContext.Provider>
        </RecoCourseDataContext.Provider>
      </MagazineDataContext.Provider>
  );
}

export default App;
