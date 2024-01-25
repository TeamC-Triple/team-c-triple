import React, { useState, useCallback } from 'react';
import { Route, Routes, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { isVisible } from '@testing-library/user-event/dist/utils/index.js';
import { AnimatePresence } from 'framer-motion';

import { dummyMyTripList } from './api/data_myTripList.js'
import { dummyMyTripPlan } from './api/data_myTripPlan.js'
import { dummyMagazine } from './api/dummyMegazine.js';
import { dummyRecoCourse } from './api/data_recommendCourse.js';
import { dummyTouristSpots } from './api/data_TouristSpots.js';
import { dummyTravelog } from './api/data_Travelog.js';
import { dummyCity } from './api/data_city.js';
import AnimatedPages from './AnimatedPages.js';

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
import SideBar from './side/SideBar.js';
import PlanCity from './plan/PlanCity.js';
import { react } from '@babel/types';


export const MTLDataContext = React.createContext();
export const RecoCourseDataContext = React.createContext();
export const TravelogContext = React.createContext();
export const SpotsDataContext = React.createContext();
export const MagazineDataContext = React.createContext();
export const MyTripListDataContext = React.createContext();
export const CityDataContext = React.createContext();

const Main = () => {
    const [sidebar, setSidebar] = useState('off');
    const [isOpen, setIsOpen] = useState(false);
    const { lockScroll, openScroll } = useBodyScrollLock();
    const navigate = useNavigate();

    const sideBtnClick = () => {
        setSidebar('on')
        lockScroll();
        setIsOpen(true);
    };

    function useBodyScrollLock() {
        let scrollPosition = 0;
        const lockScroll = useCallback(() => {
          scrollPosition = window.pageYOffset;
          document.body.style.overflow = 'hidden';
          document.body.style.position = 'fixed';
          document.body.style.top = `-${scrollPosition}px`;
          document.body.style.width = '100%';
        }, []);
      
        const openScroll = useCallback(() => {
          document.body.style.removeProperty('overflow');
          document.body.style.removeProperty('position');
          document.body.style.removeProperty('top');
          document.body.style.removeProperty('width');
          window.scrollTo(0, scrollPosition);
        }, []);
      
        return { lockScroll, openScroll };
    }
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
                        onClick={() => (navigate('/plan/city'))} 
                    />
                }
                rightChild2={
                    <HeaderIcon 
                        text={'사이드메뉴'}   
                        onClick={sideBtnClick}
                    />
                }
            />
            <AnimatedPages>
                <Outlet />
            </AnimatedPages>
            <Footer1 />
            <BottomNavi />
            <SideBar 
                sidebar={sidebar} 
                setSidebar={setSidebar} 
                leftChild={
                    <p onClick={()=>(navigate('/mypage'))}>
                        <img />
                    </p>
                } 
                headTxt={'김이박님'} 
                setIsOpen={setIsOpen} 
                openScroll={openScroll} 
            />
        </div>
    );
};

function App() { 
    const location = useLocation();
    return (
        <CityDataContext.Provider value={dummyCity}>
            <MyTripListDataContext.Provider value={dummyMyTripList}>    
                <MTLDataContext.Provider value={dummyMyTripPlan}>
                    <MagazineDataContext.Provider value={dummyMagazine}>
                        <RecoCourseDataContext.Provider value={dummyRecoCourse}>
                            <SpotsDataContext.Provider value={dummyTouristSpots}>
                                <TravelogContext.Provider value={dummyTravelog} >
                                    <div className="App">
                                        <AnimatePresence mode='sync'>
                                            {isVisible &&
                                                <Routes location={location} key={location.pathname}>
                                                    <Route path='/' element={<Main />}>
                                                        <Route index element={<Home />} />
                                                        <Route path='/feed' element={<MainFeed />} />
                                                        <Route path='/travel' element={<MainTravel />} />
                                                    </Route>
                                                    <Route path='/search' element={<MainSearch />} />
                                                    <Route path='/mypage' element={<Mypage />} />
                                                    <Route path='/plan/city' element={<PlanCity />} />
                                                </Routes>
                                            }
                                        </AnimatePresence>
                                    </div>
                                </TravelogContext.Provider> 
                            </SpotsDataContext.Provider>
                        </RecoCourseDataContext.Provider>
                    </MagazineDataContext.Provider>
                </MTLDataContext.Provider>
            </MyTripListDataContext.Provider>
        </CityDataContext.Provider>
  );
}

export default App;