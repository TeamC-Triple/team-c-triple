import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { getStringDate } from "../utill/dateString.js";
import styled from "styled-components";


import { PlanDispatchContext } from "../App";
import PlanCity from "../planComp/PlanCity.js";
import PlanKeyword from "../planComp/PlanKeyword.js";
import Plan from "../pages/Plan.js";
import { Link } from "react-router-dom";

const PlanEdit = ({isEdit, planTotalData})=>{
    
    const [select, setSelect] = useState('/');

    const { onCreatePlan } = useContext(PlanDispatchContext);

    const [city, setCity] = useState('');
    const [firstDate, setFirstDate] = useState(getStringDate(new Date()));
    const [lastDate, setLastDate] = useState(getStringDate(new Date()));
    const [keyword, setKeyword] = useState('');


    return(
        <StartWrap>
            <Traveler>0</Traveler>
            <BoxWrap>
                <Link 
                    to='/plan/city'
                >
                   <Where>어디로 여행을 가실건가요?</Where>
                </Link>
            </BoxWrap>
            <Link 
                    to='/plan/keyword'
                >
                    <When>날짜 선택</When> 
                </Link> 
            <TripKeyword>키워드 선택</TripKeyword>
            <Cost>예상 여행 경비(선택하기)</Cost>
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
const Cost = styled.div`
    font-size: 15px;
    font-weight: 700;
     
`
