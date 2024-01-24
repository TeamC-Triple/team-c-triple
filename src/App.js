import React from 'react';
import { BrowserRouter, Route, Routes, Outlet, useNavigate } from 'react-router-dom';

import { dummyMyTripList } from './api/data_myTripList.js'
import { dummyMyTripPlan } from './api/data_myTripPlan.js'
import { dummyMagazine } from './api/dummyMegazine.js';
import { dummyRecoCourse } from './api/data_recommendCourse.js';
import { dummyTouristSpots } from './api/data_TouristSpots.js';
import { dummyTravelog } from './api/data_Travelog.js';

import './App.css';
import Header1 from "./common/Header1.js";
import MainTravel from "./mainComp/MainTravel.js";
import Home from "./mainComp/Home.js";
import MainFeed from "./mainComp/MainFeed.js";
import Footer1 from "./common/Footer1.js";
import HeaderIcon from "./common/HeaderIcon.js";
import BottomNavi from "./common/BottomNavi.js";
import MainSearch from './pages/MainSearch.js';
import Mypage from './pages/Mypage.js';

export const MTLDataContext = React.createContext();
export const RecoCourseDataContext = React.createContext();
export const TravelogContext = React.createContext();
export const SpotsDataContext = React.createContext();
export const MagazineDataContext = React.createContext();
export const MyTripListDataContext = React.createContext();


const Main = () => {
    const navigate = useNavigate();
    return (
        <div id='Main'>
            <Header1
                headTxt={'김이박님'}
                onClickHeadTxt={()=>(navigate('/mypage'))}
                leftChild={
                    <p onClick={()=>(navigate('/mypage'))}>
                        <img />
                    </p>
                }
                rightChild1={
                    <HeaderIcon 
                        text={'일정짜기'} 
                    />
                }
                rightChild2={
                    <HeaderIcon 
                        text={'사이드메뉴'}   
                    />
                }
            />
            <Outlet />
            <Footer1 />
            <BottomNavi />
        </div>
    );
};

function App() {
    return (
        <MyTripListDataContext.Provider value={dummyMyTripList}>    
            <MTLDataContext.Provider value={dummyMyTripPlan}>
                <MagazineDataContext.Provider value={dummyMagazine}>
                    <RecoCourseDataContext.Provider value={dummyRecoCourse}>
                        <SpotsDataContext.Provider value={dummyTouristSpots}>
                                <TravelogContext.Provider value={dummyTravelog} >
                                    <BrowserRouter>
                                        <div className="App">
                                            <Routes>
                                                <Route path='/' element={<Main />}>
                                                    <Route index element={<Home />} />
                                                    <Route path='/feed' element={<MainFeed />} />
                                                    <Route path='/travel' element={<MainTravel />} />
                                                </Route>
                                                <Route path='/search' element={<MainSearch />} />
                                                <Route path='/mypage' element={<Mypage />} />
                                            </Routes>
                                        </div>
                                    </BrowserRouter>
                                </TravelogContext.Provider> 
                        </SpotsDataContext.Provider>
                    </RecoCourseDataContext.Provider>
                </MagazineDataContext.Provider>
            </MTLDataContext.Provider>
        </MyTripListDataContext.Provider>
  );
}

export default App;