/*
    ※ 필독
    - Plan.js는 화면에 노출되는 부분입니다.
    - 데이터 관리를 위해 부득이하게 개별 컴포넌트가 router를 통해 이동하는 방식이 아닌,
      Plan.js 안에서 각각의 단계들이 보여지고 <-> 보여지지 않는 방식으로 화면전환이 됩니다.
    - 작업중 화면 주소 : http://localhost:3000/plan
    - 본인의 작업 중 다른이의 작업이 겹쳐 불편할때는 주석처리를 해주세요.
    - 추후 브랜치 병합시에는 꼭 주석 해제 해주셔야 합니다.
    - 주석 해제 후에는 먼저 작업한 다른이들의 작업과 충돌이 되지 않는지 꼭 확인해주셔야 합니다.
    - 다른 팀원들에게 설명이 필요한 작업부분은 꼭 주석으로 설명을 붙여주시기 바랍니다.
    - 코드 정리시에도 꼭 주석을 붙여 다른팀원들이 작업시 햇갈리지 않게끔 부탁드립니다!
*/


import { useContext, useEffect, useRef, useState } from "react";
import { PlanDataContext, PlanDispatchContext, SpotsDataContext } from "../App";
import styled from "styled-components";

import PlanCity from "../planComp/PlanCity";
import PlanKeyword from "../planComp/PlanKeyword";
import PlanEdit from "../planComp/PlanEdit";
import PlanExpenses from "../planComp/PlanExpenses";
import PlanCourseModal from "../plan_subComp/PlanCourseModal";
import Button from "../common/Button.js";

import { getStringDate } from "../utill/dateString.js";

// [planKeyword]의 더미데이터
const keywordData = [ {id : 0, kw : '#친구와'}, {id : 1, kw : '#연인과'},{id : 2, kw : '#아이와'},{id : 3, kw : '#부모님과'} ,{id : 4, kw : '#관광지'}, {id : 5, kw : '#SNS핫플'},{id : 6,kw : '#힐링'},{id : 7, kw: '#맛집'} ];

const Plan = () => {
    const PlanData = useContext(PlanDataContext);
    const { onCreatePlan } = useContext(PlanDispatchContext);
    const spotsData = useContext(SpotsDataContext);

    // planCity
    // plancity 여닫음 상태변수
    const [isCity, setIsCity] = useState(false);
    // 선택한 도시 정보 담는 상태변수
    const [chosedCity, setChosedCity] = useState('');

    const handleCity = () => {
        setIsCity(!isCity);
    };

    // planDate
    const [travelDateRange, setTravelDateRange] = useState([]);
    const [startDate, setStartDate] = useState(new Date().getTime());
    const [lastDate, setLastDate] = useState(new Date().getTime());

    // planDays 여행장소 일별 전체
    const [dayList, setDayList]= useState([]);

    // planDays 
    // 여행장소 리스트를 해당 일자에 추가
    const addDayPlan = (day, spotsList)=>{
        const newDay = {
            date : day,
            newdaySpots : spotsList
        };
        setDayList([newDay, ...dayList]);
    };

    // 1일 장소 리스트
    const [selectSpotsList, setSelectSpotsList]= useState([]);

    const spotOrder = useRef(0);

    // 새로운 장소를 리스트에 추가
    const addNewSpots = (spotName)=>{
        const newSpots = {
            id : spotOrder.current ,
            spotName : spotName
        }
        spotOrder.current += 1;
        setSelectSpotsList([newSpots, ...selectSpotsList])
    };


    // 장소 하나
    const [selectSpots, setSelectSpots]= useState();

 


    // PlanExpenses
    // PlanExpenses 여닫음 상태변수
    const [click, setClick] = useState(false);
    // 버튼 상태변수
    const [add, setAdd] = useState(true);
    const [money, setMoney] = useState(false)
    // 여행 경비를 담는 상태변수
    const [expenses, setExpenses] = useState();

    const AMClick = () => {
        setAdd(false);
        setClick(true);
        setExpenses();
    }

    // PlanCourseModal
    // PlanCourseModal 여닫음 상태변수
    const [PCModal, setPCModal] = useState(false);

    const PCMClick = () => {
        setPCModal(true);
    }

    // 인원수 선택
    const [traveler, setTraveler]= useState(0);

    // PlanKeyword
    // PlanKeyword 여닫음 상태변수
    const [openKeyword, setOpenKeyword] = useState(false);
 
    const handleOpenKW = ()=>{
        setOpenKeyword(!openKeyword);
    }

    // PlanKeyword 키워드 정보
    const [selectKW, setSelectKW] = useState('');
    const [keywordList, setKeywordList] = useState([]);

    // 저장하기 버튼 누르기
    const clickCreatePlan = () => {
        onCreatePlan(chosedCity, startDate, lastDate, keywordList, traveler, expenses);
    };
    
    

    return (
        <PlanDataControll>
            <PlanEdit 
                // 도시 
                handleCity={handleCity}
                chosedCity={chosedCity}

                // 날짜
                startDate={startDate}
                setStartDate={setStartDate}
                lastDate={lastDate}
                setLastDate={setLastDate}
                travelDateRange={travelDateRange}
                setTravelDateRange={setTravelDateRange}

                // 여행계획
                addDayPlan={addDayPlan}
                addNewSpots={addNewSpots}
                dayList={dayList}
                setDayList={setDayList}
                selectSpots={selectSpots}
                setSelectSpots={setSelectSpots}
                selectSpotsList={selectSpotsList}
                setSelectSpotsList={setSelectSpotsList}

                // 비용
                add={add}
                money={money}
                AMClick={AMClick}
                expenses={expenses}
                PCMClick={PCMClick}

                // 키워드
                handleOpenKW= {handleOpenKW}
                openKeyword={openKeyword}
                keywordList={keywordList}
                keywordData={keywordData}

                // 인원수
                traveler={traveler}
                setTraveler={setTraveler}
                clickCreatePlan={clickCreatePlan}
            />
            <PlanCity isCity={isCity} setChosedCity={setChosedCity} handleCity={handleCity} />
            <PlanKeyword keywordData={keywordData} selectKW={selectKW} setSelectKW={setSelectKW} openKeyword={openKeyword} handleOpenKW={handleOpenKW} setKeywordList={setKeywordList} keywordList={keywordList} />
            <PlanExpenses expenses={expenses} setExpenses={setExpenses} click={click} setClick={setClick} setAdd={setAdd} setMoney={setMoney} />
            <PlanCourseModal PCModal={PCModal} setPCModal={setPCModal} chosedCity={chosedCity} />
            <BtnCreate>
                <Button 
                    type={'active'}
                    text={'저장하기'}
                    onClick={clickCreatePlan}
                />
            </BtnCreate>
        </PlanDataControll>
    );
};

export default Plan;

const PlanDataControll = styled.div`

`;
const BtnCreate = styled.div`
    margin: 60px 20px;
    .btn.active{
        width: 100%;
        height: 48px;
        font-size: 15px;
    }
`;