// hook
import React, { useReducer, useRef } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
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


// 하위컴포넌트 임포트

import './App.css';
import Main from './pages/Main.js';
import MainTravel from "./mainComp/MainTravel.js";
import Home from "./mainComp/Home.js";
import MainFeed from "./mainComp/MainFeed.js";
import MainSearch from './pages/MainSearch.js';
import Mypage from './pages/Mypage.js';
import NewPlan from './pages/NewPlan.js';
import EditPlan from './pages/EditPlan.js';
import NewLog from './pages/NewLog.js';
import EditLog from './pages/EditLog.js';
import TravelLog from './pages/TravelLog.js';
import LastTripLog from './pages/LastTripLog.js';

// plan(여행일정짜기) 파트 관리할 reducer 함수
let newStatePlan = dummyMyTripPlan;
const reducerPlan = (state, action) => {
    switch (action.type) {
        case 'INIT': {
            return action.data;
        }
        case 'CREATE': {
            const newPlan = {
                ...action.data
            }
            newStatePlan = [newPlan, ...newStatePlan];
            break;
        }
        case 'REMOVE': {
            newStatePlan = state.filter((item) => item.id !== action.targetID);
            break;
        }
        case 'EIDT': {
            newStatePlan = state.map((item) =>
                item.id === action.data.id ? { ...action.data } : item);
            break;
        }
        default:
            return state;
    }
    return newStatePlan;
};

let newStateLog = dummyMyTripList;
const reducerLog = (state, action) => {
    switch (action.type) {
        case 'INIT': {
            return action.data;
        }
        case 'CREATE': {
            const newLog = {
                ...action.data
            }
            newStateLog = [newLog, ...newStateLog];
            break;
        }
        case 'REMOVE': {
            newStateLog = state.filter((item) => item.id !== action.targetID);
            break;
        }
        default:
            return state;
    }
    return newStateLog;
};


// 데이터 전역 공급망 (더미데이터)
// export const MTLDataContext = React.createContext();
// export const MyTripListDataContext = React.createContext();
export const RecoCourseDataContext = React.createContext();
export const TravelogContext = React.createContext();
export const SpotsDataContext = React.createContext();
export const MagazineDataContext = React.createContext();
export const CityDataContext = React.createContext();

// 데이터 전역 공급망 (reducer함수)
export const PlanDataContext = React.createContext();
export const PlanDispatchContext = React.createContext();
export const LogDataContext = React.createContext();
export const LogDispatchContext = React.createContext();

function App() {
    // plan(여행일정짜기) 파트 관리할 reducer 선언.
    const [dataPlan, dispatchPlan] = useReducer(reducerPlan, dummyMyTripPlan);
    const dataPlanId = useRef(9);
    // log(여행기) 파트 관리할 reducer 선언.
    const [dataLog, dispatchLog] = useReducer(reducerLog, dummyMyTripList);
    const dataLogId = useRef(5);

    const location = useLocation();

    // plan CREATE
    const onCreatePlan = (city, firstDate, lastDate, keyword, people, expense, days) => {
        dispatchPlan({
            type: 'CREATE',
            data: {
                id: dataPlanId.current,
                city: `${city}`,
                firstDate: new Date(firstDate).getTime(),
                lastDate: new Date(lastDate).getTime(),
                keyword: keyword,
                people,
                expense,
                days: days
            }
        });
        dataPlanId.current += 1;
    };

    // plan Edit
    const onEditPlan = (targetId, city, firstDate, lastDate, keyword, people, expense, days) => {
        dispatchPlan({
            type: 'EDIT',
            data: {
                id: targetId,
                city: `${city}`,
                firstDate: new Date(firstDate).getTime(),
                lastDate: new Date(lastDate).getTime(),
                keyword: keyword,
                people,
                expense,
                days: days
            }
        });
    }

    // plan REMOVE
    const onRemovePlan = (targetID) => {
        dispatchPlan({
            type: 'REMOVE',
            targetID
        });
        dataPlanId.current -= 1;
    };

    // log CREATE
    const onCreateLog = (title, city, firstDate, lastDate, recoNum, commentNum, downloadNum, photo, reviewTxt, keyword) => {
        dispatchLog({
            type: 'CREATE',
            data: {
                id: dataLogId.current,
                title,
                city,
                firstDate,
                lastDate,
                recoNum,
                commentNum,
                downloadNum,
                photo,
                reviewTxt,
                keyword
            }
        });
        dataLogId.current += 1;

    };

    // log REMOVE
    const onRemoveLog = (targetID) => {
        dispatchLog({
            type: 'REMOVE',
            targetID
        });
        dataLogId.current -= 1;
    };

    console.log(dataPlan)
    return (
        <LogDispatchContext.Provider value={{ onCreateLog, onRemoveLog }}>
            <PlanDispatchContext.Provider value={{ onCreatePlan, onRemovePlan, onEditPlan }}>
                <CityDataContext.Provider value={dummyCity}>
                    <LogDataContext.Provider value={dataLog}>
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
                                                            <Route path='/newplan' element={<NewPlan />} />
                                                            <Route path='/editplan/:id' element={<EditPlan />} />
                                                            <Route path='/newlog' element={<NewLog />} />
                                                            <Route path='/editlog/:id' element={<EditLog />} />
                                                            <Route path='/travellog/:id' element={<TravelLog />} />
                                                            <Route path='/LastTripLog/:id' element={<LastTripLog />} />
                                                        </Routes>
                                                    }
                                                </AnimatePresence>
                                            </div>
                                        </TravelogContext.Provider>
                                    </SpotsDataContext.Provider>
                                </RecoCourseDataContext.Provider>
                            </MagazineDataContext.Provider>
                        </PlanDataContext.Provider>
                    </LogDataContext.Provider>
                </CityDataContext.Provider>
            </PlanDispatchContext.Provider>
        </LogDispatchContext.Provider>
    );
}

export default App;