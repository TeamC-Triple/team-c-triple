import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import './App.css';

import { dummyRecoCourse } from './api/data_recommendCourse.js';

import Home from './pages/Home.js';
 

export const RecoCourseDataContext = React.createContext();

function App() {
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
  );
}

export default App;
