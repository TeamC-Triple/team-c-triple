import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import dummyMagazine from './api/dummyMegazine.js';
import { dummyRecoCourse } from './api/data_recommendCourse.js';
import { dummyMyTripList } from './api/data_myTripList.js';

import './App.css';
import Home from './pages/Home.js';

export const RecoCourseDataContext = React.createContext();
export const MagazineDataContext = React.createContext();
export const MyTripListDataContext = React.createContext();

function App() {
    return (
        <MyTripListDataContext.Provider value={dummyMyTripList}>
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
        </MyTripListDataContext.Provider>
  );
}

export default App;
