import React, { useEffect, useReducer, useState } from 'react';
import styled from 'styled-components';
import { BrowserRouter, Route, Routes, Outlet } from 'react-router-dom';

import { dummyMyTripList } from './api/data_myTripList.js'
import { dummyMyTripPlan } from './api/data_myTripPlan.js'
import { dummyMagazine } from './api/dummyMegazine.js';
import { dummyRecoCourse } from './api/data_recommendCourse.js';
import { dummyTouristSpots } from './api/data_TouristSpots.js';
import { dummyTravelog } from './api/data_Travelog.js';

import './App.css';
import MainTravel from "./mainComp/MainTravel.js";
import Home from "./mainComp/Home.js";
import MainFeed from "./mainComp/MainFeed.js";
import Main from './pages/Main.js';
import Mypage from './pages/Mypage.js'
 
let newState = dummyMyTripPlan;

const reducer = (state, action) => {
    switch(action.type){
        case 'REMOVE' : {
            newState = state.filter((item)=> item.id !== action.targetID);
            break;
        }        
        default :
            return state;
    }
    return newState;
};

export const MTLDataContext = React.createContext();
export const RecoCourseDataContext = React.createContext();
export const TravelogContext = React.createContext();
export const SpotsDataContext = React.createContext();
export const MagazineDataContext = React.createContext();
export const MyTripListDataContext = React.createContext();

export const MyTripDispatchContext = React.createContext();


function App() {
    const [data, dispatch] = useReducer(reducer, dummyMyTripPlan);
    console.log(data);


    const onRemove = (targetID) => {
        dispatch({
            type : 'REMOVE',
            targetID
        });
    };

    return (
        <MyTripListDataContext.Provider value={dummyMyTripList}>    
            <MTLDataContext.Provider value={dummyMyTripPlan}>
                <MagazineDataContext.Provider value={dummyMagazine}>
                    <RecoCourseDataContext.Provider value={dummyRecoCourse}>
                        <SpotsDataContext.Provider value={dummyTouristSpots}>
                                <TravelogContext.Provider value={dummyTravelog} >
                                    <MyTripDispatchContext.Provider value={{onRemove}}>
                                        <BrowserRouter>
                                            <div className="App">
                                                <Routes>
                                                    <Route path='/' element={<Main />}>
                                                        <Route index element={<Home />} />
                                                        <Route path='/feed' element={<MainFeed />} />
                                                        <Route path='/travel' element={<MainTravel />} />
                                                    </Route>
                                                    <Route path='/mypage' element={<Mypage />}>
                                                    </Route>
                                                </Routes>
                                            </div>
                                        </BrowserRouter>
                                    </MyTripDispatchContext.Provider>    
                                </TravelogContext.Provider> 
                        </SpotsDataContext.Provider>
                    </RecoCourseDataContext.Provider>
                </MagazineDataContext.Provider>
            </MTLDataContext.Provider>
        </MyTripListDataContext.Provider>
  );
}

export default App;