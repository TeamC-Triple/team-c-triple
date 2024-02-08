import { useContext, useEffect, useRef, useState } from "react";
import { PlanDispatchContext } from "../App";
import styled from "styled-components";
import { useBodyScrollLock } from "../utill/useBodyScrollLock.js";
import { getDateRange } from "../utill/getDateRange.js";

import PlanCity from "../planComp/PlanCity";
import PlanKeyword from "../planComp/PlanKeyword";
import PlanEdit from "../planComp/PlanEdit";
import PlanExpenses from "../planComp/PlanExpenses";
import PlanCourseModal from "../plan_subComp/PlanCourseModal";
import Button from "../common/Button.js";
import PlanDateCal from "../planComp/PlanDateCal.js";
import { useNavigate } from "react-router-dom";
import { CityDataContext } from "../App.js";

// [planKeyword]의 더미데이터
const keywordData = [ {id : 0, kw : '#친구와'}, {id : 1, kw : '#연인과'},{id : 2, kw : '#아이와'},{id : 3, kw : '#부모님과'} ,{id : 4, kw : '#관광지'}, {id : 5, kw : '#SNS핫플'},{id : 6,kw : '#힐링'},{id : 7, kw: '#맛집'} ];

const Plan = ({isEdit, planOriginData}) => {
    const { onCreatePlan, onEditPlan } = useContext(PlanDispatchContext);
    const { lockScroll, openScroll } = useBodyScrollLock();
    const navigate = useNavigate();

    // planCity
    // plancity 여닫음 상태변수
    const [isCity, setIsCity] = useState(false);
    // 선택한 도시 정보 담는 상태변수
    const [chosedCity, setChosedCity] = useState('');
    const cityData = useContext(CityDataContext);

    // 도시선택창 열기
    const handleCity = () => {
        setIsCity(!isCity);
    };

    // planDate / Calendar
    const [isCalendar, setIsCalendar] = useState(false);
    // 첫날짜~마지막날짜 배열
    const [travelDateRange, setTravelDateRange] = useState([]);
    // 첫날
    const [startDate, setStartDate] = useState(new Date().getTime());
    // 마지막날
    const [lastDate, setLastDate] = useState(new Date().getTime());

    // 달력창 열기
    const openModalDateCal = () => {
        setIsCalendar(true);
        lockScroll();
    };
    // 달력창 닫기
    const closeModalDateCal = () => {
        setIsCalendar(false);
        openScroll();
    };

    // planDays 여행 계획 전체
    const [dayList, setDayList]= useState([]);
    const daysId = useRef(dayList && isEdit ? dayList.length : 0);

    // planDays 
    // 여행장소를 해당 일자 계획에 추가
    const addDayPlan = (date, place)=>{
        const newPlace = {
            id : daysId.current,
            date : date,
            place : place,
        };
        daysId.current += 1;
        setDayList([...dayList, newPlace]);
    };

        // Memo
        const [memoTxt, setMemoTxt] = useState('');
        const onChangeTxt = (e) => {
            setMemoTxt(e.target.value)
        };

        const [memoList, setMemoList]= useState([]);
        const MemoId = useRef(0);

        const addDayMemo = (date,memo,time) => {
            const newMemo = {
                id : MemoId.current,
                date : date,
                memo : memo,
                writeTime : time
            };
            MemoId.current += 1;
            setMemoList([...memoList, newMemo]);
        };
        

    // PlanExpenses
    // PlanExpenses 여닫음 상태변수
    const [click, setClick] = useState(false);
    // 버튼 상태변수
    const [add, setAdd] = useState(true);
    const [money, setMoney] = useState(false)
    // 여행 경비를 담는 상태변수
    const [expenses, setExpenses] = useState(0);

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
        if(window.confirm(isEdit ? `${chosedCity} 여행 일정을 수정하시겠습니까?` :`${chosedCity} 여행 일정을 저장하시겠습니까?`)){
            if(!isEdit){
                onCreatePlan(chosedCity, startDate, lastDate, keywordList, traveler, expenses, dayList);
            } else {
                onEditPlan(planOriginData.id, chosedCity, startDate, lastDate, keywordList, traveler, expenses, dayList);
            }
        }
    };
  
    useEffect(() => {
        if(isEdit){
            setChosedCity(planOriginData.city);
            setStartDate(planOriginData.firstDate);
            setLastDate(planOriginData.lastDate);
            setDayList(planOriginData.days);
            setExpenses(planOriginData.expenses);
            setTraveler(planOriginData.people);
            setKeywordList(planOriginData.keyword);
            setTravelDateRange(getDateRange(planOriginData.firstDate, planOriginData.lastDate));
        }
    }, [isEdit, planOriginData]);

    return (
        <PlanDataControll>
            <PlanEdit 
                // 도시 
                handleCity={handleCity}
                chosedCity={chosedCity}

                // 날짜
                startDate={startDate}
                lastDate={lastDate}
                travelDateRange={travelDateRange}
                openModalDateCal={openModalDateCal}

                // 여행계획
                addDayPlan={addDayPlan}
                    addDayMemo={addDayMemo}
                dayList={dayList}
                setDayList={setDayList}
                    setMemoList={setMemoList}
                    memoList={memoList}
                    memoTxt={memoTxt}
                    onChangeTxt={onChangeTxt}
                    setMemoTxt={setMemoTxt}
                
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
                setKeywordList={setKeywordList}

                // 인원수
                traveler={traveler}
                setTraveler={setTraveler}
                clickCreatePlan={clickCreatePlan}
            />
            <PlanCity cityData={cityData} isCity={isCity} setChosedCity={setChosedCity} handleCity={handleCity} />
            <PlanDateCal 
                isCalendar={isCalendar}
                setIsCalendar={setIsCalendar}
                travelDateRange={travelDateRange}
                setTravelDateRange={setTravelDateRange}
                startDate={startDate}
                setStartDate={setStartDate}
                lastDate={lastDate}
                setLastDate={setLastDate}
                closeModalDateCal={closeModalDateCal}
            />
            <PlanKeyword keywordData={keywordData} selectKW={selectKW} setSelectKW={setSelectKW} openKeyword={openKeyword} handleOpenKW={handleOpenKW} setKeywordList={setKeywordList} keywordList={keywordList} />
            <PlanExpenses expenses={expenses} setExpenses={setExpenses} click={click} setClick={setClick} setAdd={setAdd} setMoney={setMoney} />
            <PlanCourseModal PCModal={PCModal} setPCModal={setPCModal} chosedCity={chosedCity} />
            <BtnCreate>
                <Button 
                    type={'active'}
                    text={isEdit ? '수정완료' : '저장하기'}
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
    margin: 60px 20px 120px;
    .btn.active{
        width: 100%;
        height: 48px;
        font-size: 15px;
    }
`;