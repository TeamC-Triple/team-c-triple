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
    console.log(dataPlan);

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

    // plan REMOVE
    const onRemovePlan = (targetID) => {
        dispatchPlan({
            type: 'REMOVE',
            targetID
        });
        dataPlanId.current -= 1;
    };

    // log REMOVE
    const onRemoveLog = (targetID) => {
        dispatchLog({
            type: 'REMOVE',
            targetID
        });
        dataLogId.current -= 1;
    };
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
                                                            <Route path='/travellog' element={<TravelLog />} />
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