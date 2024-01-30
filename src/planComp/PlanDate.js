import { useEffect, useState } from "react"
import styled from "styled-components";

import { getStringDate } from "../utill/dateString.js";


const PlanDate = ({
    travelDateRange,
    setTravelDateRange, 
    setLastDate, 
    setStartDate, 
    lastDate, 
    startDate
}) => {

    const [dateStart, setDateStart] = useState(getStringDate(new Date()));
    const [dateLast, setDateLast] = useState(getStringDate(new Date()));

    const handleStartDate = (e) => {
        setDateStart(e.target.value);
        setTravelDateRange(getDateRange(e.target.value, dateLast));
        setStartDate(new Date(e.target.value).getTime());
        
    };
    const handleLastDate = (e) => {
        setDateLast(e.target.value);
        setTravelDateRange(getDateRange(dateStart, e.target.value));
        setLastDate(new Date(e.target.value).getTime());
    };

    // 처음날짜부터 마지막날짜 사이를 구하는 변수
    const getDateRange = (date1, date2) => {
        const start = new Date(date1);
        const last = new Date(date2);
        const result = [];

        while(start <= last){
            result.push(start.toISOString().slice(0,10));
            start.setDate(start.getDate() + 1);
        }
        return result;
    }

    return(
        <Div>
            <div>
                <DateH2>시작 날짜 선택</DateH2>
                <Input 
                    type="date" 
                    value={dateStart} 
                    onChange={handleStartDate} 
                />
            </div>
            <div>
                <DateH2>마지막 날짜 선택</DateH2>
                <Input 
                    type="date" 
                    value={dateLast} 
                    onChange={handleLastDate} 
                    min={dateStart} 
                />
            </div>
        </Div>
    )
}

export default PlanDate

const Div = styled.div`
    margin-right: 20px;
    margin-bottom: 20px;

    & > div {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
`

const DateH2 = styled.h2`
    font-size: 14px;
`

const Input = styled.input`
    margin: 6px 0;
    padding: 5px 16px;
    border: 0;
    border-radius: 10px;
    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.18);
`