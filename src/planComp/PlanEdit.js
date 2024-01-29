import { useContext, useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import styled from "styled-components";


import { PlanDispatchContext } from "../App.js";
import PlanCity from "./PlanCity.js";
import PlanKeyword from "./PlanKeyword.js";
import Plan from "../pages/Plan.js";
import PlanDate from "./PlanDate.js";
import PlanDays from "./PlanDays.js";

const PlanEdit = ({
    handleCity,
    chosedCity,
    travelDateRange,
    setTravelDateRange,
    add,
    money,
    AMClick,
    expenses
})=>{
    const navigate = useNavigate();
    const location = useLocation();
    const [select, setSelect] = useState('');

    const onClickChoiceCity = () => {
        handleCity();
    };

    return(
        <StartWrap>
            <Traveler>0</Traveler>
            <BoxWrap>
                <Where
                    onClick={onClickChoiceCity}
                >
                    {chosedCity === ''
                        ? '여행, 어디로 떠나시나요?'
                        : `${chosedCity} 여행`
                    }
                </Where>
            </BoxWrap>
            <When >여행 날짜 선택</When>
            <PlanDate travelDateRange={travelDateRange} setTravelDateRange={setTravelDateRange} />
            <TripKeyword>키워드 선택</TripKeyword>
            <Expenses>
                <Cost>예상 여행 경비(선택하기)</Cost>
                <div>
                    <Add className={add ? 'add on' : 'add off'} onClick={AMClick} >추가</Add>
                    <Money className={money ? 'money on' : 'money off'} onClick={AMClick}>￦ {expenses}</Money>
                </div>
            </Expenses>
            {
                travelDateRange.map((day, idx) => (
                    <PlanDays key={idx} day={day} idx={idx} />
                ))
            }
        </StartWrap>
    );
    }   // PlanEdit끝
export default PlanEdit;


const StartWrap = styled.div`
    padding-top: 80px;
    margin-left: 20px;
`
const Traveler = styled.div`
    display: inline-block;
    padding: 2px 18px 4px 50px;
    margin-bottom: 20px;
    border-radius: 20px;
    background-color: #368FFF;
    text-align: right;
    font-size: 13px;
    font-weight: 600;
    color: #fff;
    background-image: url('./assets/icon-user-group-wh.svg');
    background-size: 20px auto;
    background-position: center left 16px ;
    background-repeat: no-repeat;
`
const BoxWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-right: 20px;
    margin-bottom: 20px;
    line-height: 1.7;
`
     
const Where = styled.div`
    font-size: 18px;
    font-weight: 700;
    cursor: pointer;
     
`
const When = styled.div`
    margin-bottom: 10px;
    font-size: 16px;
    font-weight: 600;
    color: #368FFF;
     
`
const TripKeyword = styled.div`
    margin: 20px 0 30px 0;
    font-size: 16px;
    font-weight: 600;
    color: #368FFF;
     
`

const Expenses = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
`

const Cost = styled.div`
    font-size: 15px;
    font-weight: 700;
     
`
const Add = styled.button`
    padding: 7px 20px 8px;
    margin-right: 20px;
    border-radius: 30px;
    background-color: #eeeeee;
    font-size: 12px;
    font-weight: 600;
    color: #121212;
`

const Money = styled.button`
    padding: 7px 20px 8px;
    margin-right: 20px;
    border-radius: 30px;
    background-color: #368FFF;
    font-size: 12px;
    font-weight: 600;
    color: #FFF;
`