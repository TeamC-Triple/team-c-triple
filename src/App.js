// hook
import React, { useState, useCallback } from 'react';
import { Route, Routes, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { isVisible } from '@testing-library/user-event/dist/utils/index.js';
import { AnimatePresence } from 'framer-motion';

// 더미데이터 임포트

import { dummyMyTripList } from './api/data_myTripList.js'
import { dummyMyTripPlan } from './api/data_myTripPlan.js'
import { dummyMagazine } from './api/dummyMegazine.js';
import { dummyRecoCourse } from './api/data_recommendCourse.js';
import { dummyTouristSpots } from './api/data_TouristSpots.js';
import { dummyTravelog } from './api/data_Travelog.js';
import { dummyCity } from './api/data_city.js';
import AnimatedPages from './AnimatedPages.js';

// 하위컴포넌트 임포트

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

import Plan from './pages/Plan.js';
import { useReducer } from 'react';
import { useRef } from 'react';
import NewPlan from './pages/NewPlan.js';
import PlanPage from './pages/PlanPage.js';
import PlanKeyword from './planComp/PlanKeyword.js';


/* 
    <필독>
    ※ 혹시나 여러개의 reducer 함수를 선언할 경우 규칙
        디폴트 : const [data, dispatch] = useReducer(reducer, 초기값) <<= 저희 프로젝트에선 사용하지 맙시다. 햇갈리니까용.
        이라면,
        const [dataPlan, dispatchPlan] = useReducer(reducerPlan, 초기값)
        처럼 각각 이름 뒤에 카멜표기법으로 고유명 추가해주어 햇갈리지 않게하기!
        합치기전 인지하지 못하고 이미 디폴드값처럼 사용해버렸다면 미리 이름 바꾸고 master브랜치에 합치기.

    ※ 데이터 관리, 데이터를 처리할 함수들은 모두 App.js에서 선언, 모든 함수들은 추후에라도 reducer 함수로 병합하도록 하기.
    ※ 작업 후 master 브랜치에 합치기 전, 팀원들에게 말하고 충돌 및 데이터 날아갈 일 없는지 꼭 확인하고 병합하기.
    ※ 여행일정짜기나 여행기작성 과정을 작업중에는 하나의 페이지 안에서 작업해야하므로 본인의 작업물을 확인하기 어려울 수 있음.
        => 다른이의 작업물을 주석처리 해도 좋으나 병합전엔 반드시 주석 해제 후 작업.
*/


// plan(여행일정짜기) 파트 관리할 reducer 함수
let newStatePlan = dummyMyTripPlan;
const reducerPlan = (state, action) => {
    switch(action.type){
        case 'INIT' : {
            return action.data;
        }
        case 'CREATE' : {
            const newPlan = {
                ...action.data
            }
            newStatePlan = [newPlan, ...newStatePlan];
            break;
        }
        default :
            return state;
    }
    return newStatePlan;
};

// 데이터 전역 공급망 (더미데이터)
// export const MTLDataContext = React.createContext();
export const RecoCourseDataContext = React.createContext();
export const TravelogContext = React.createContext();
export const SpotsDataContext = React.createContext();
export const MagazineDataContext = React.createContext();
export const MyTripListDataContext = React.createContext();
export const CityDataContext = React.createContext();

// 데이터 전역 공급망 (reducer함수)
export const PlanDataContext = React.createContext();
export const PlanDispatchContext = React.createContext();


// 메인화면쪽 layout 컴포넌트 선언.
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
                        onClick={() => (navigate('/plan'))} 
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
    // plan(여행일정짜기) 파트 관리할 reducer 선언.
    const [dataPlan, dispatchPlan] = useReducer(reducerPlan, dummyMyTripPlan);
    const dataPlanId = useRef(5);
    
    // plan CREATE
    const onCreatePlan = (city, firstDate, lastDate, photo, keyword) => {
        dispatchPlan({
            type : 'CREATE',
            data : {
                id : dataPlanId.current,
                city,
                firstDate : new Date(firstDate).getTime(),
                lastDate : new Date(lastDate).getTime(),
                photo,
                keyword
            }
        });
        dataPlanId += 1;
    };


    
    const location = useLocation();
    return (
        <PlanDispatchContext.Provider value={{onCreatePlan}}>
            <CityDataContext.Provider value={dummyCity}>
                <MyTripListDataContext.Provider value={dummyMyTripList}>    
                    <PlanDataContext.Provider value={dataPlan}>
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
                                                        <Route path='/plan' element={<NewPlan />}>
                                                            <Route path='/plan/city' element={<Plan />} />
                                                            <Route path='/plan/keyword' element={<PlanKeyword />} />
                                                        </Route>
                                                    </Routes>
                                                }
                                            </AnimatePresence>
                                        </div>
                                    </TravelogContext.Provider> 
                                </SpotsDataContext.Provider>
                            </RecoCourseDataContext.Provider>
                        </MagazineDataContext.Provider>
                    </PlanDataContext.Provider>
                </MyTripListDataContext.Provider>
            </CityDataContext.Provider>
        </PlanDispatchContext.Provider>
  );
}

export default App;