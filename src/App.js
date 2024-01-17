import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';

import './App.css';
import Home from './pages/Home.js';
import Home2 from './pages/Home2.js';
import dummyTouristSpots from './api/data_TouristSpots.js';
import dummyTravelog from './api/data_Travelog.js';

export const SpotsDataContext = React.createContext();
export const TravelogContext = React.createContext();

function App() {
  return (
    <SpotsDataContext.Provider value={dummyTouristSpots}>
        <TravelogContext.Provider value={dummyTravelog} >
            <BrowserRouter>
                <div className="App">
                    <Routes>
                        <Route path='/home2' element={<Home2 />} />
                        <Route path='/' element={<Home />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </TravelogContext.Provider>
    </SpotsDataContext.Provider>
  );
}

export default App;
