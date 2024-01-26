import { useContext, useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import styled from "styled-components";


import { PlanDispatchContext } from "../App.js";
import PlanCity from "./PlanCity.js";
import PlanKeyword from "./PlanKeyword.js";
import Plan from "../pages/Plan.js";
import PlanDate from "./PlanDate.js";
import PlanExpenses from "./PlanExpenses.js";

const PlanEdit = ()=>{
    const navigate = useNavigate();
    const location = useLocation();
    const [select, setSelect] = useState('');

    const [click, setClick] = useState(false);
    const [expenses, setExpenses] = useState();

    const addRef = useRef();
    const moneyRef = useRef();

    const AMClick = () => {
        addRef.current.style.display = 'none'
        setClick(true);
        setExpenses()
    }

    return(
        <StartWrap>
            <Traveler>0</Traveler>
            <BoxWrap>
                <Where
                
                >어디로 여행을 가실건가요?</Where>
            </BoxWrap>
            <When >여행 날짜 선택</When>
            <PlanDate />
            <TripKeyword>키워드 선택</TripKeyword>
            <Expenses>
                <Cost>예상 여행 경비(선택하기)</Cost>
                <div>
                    <Add onClick={AMClick} ref={addRef}>추가</Add>
                    <Money onClick={AMClick} ref={moneyRef}>￦ {expenses}</Money>
                </div>
                <PlanExpenses expenses={expenses} setExpenses={setExpenses} click={click} setClick={setClick} addRef={addRef} moneyRef={moneyRef} />
            </Expenses>
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
     
`
const When = styled.div`
    font-size: 15px;
    font-weight: 600;
    color: #368FFF;
     
`
const TripKeyword = styled.div`
    margin: 20px 0 30px 0;
    font-size: 15px;
    font-weight: 600;
    color: #368FFF;
     
`

const Expenses = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
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
    display: none;
    padding: 7px 20px 8px;
    margin-right: 20px;
    border-radius: 30px;
    background-color: #368FFF;
    font-size: 12px;
    font-weight: 600;
    color: #FFF;
`