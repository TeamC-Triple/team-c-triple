import { useEffect, useState } from "react"
import styled from "styled-components";
import { getStringDate } from "../utill/dateString.js";

const PlanDate = ({travelDateRange, setTravelDateRange}) => {
    const [startDate, setStartDate] = useState(getStringDate(new Date()));
    const [lastDate, setLastDate] = useState(getStringDate(new Date()));

    const handleStartDate = (e) => {
        setStartDate(e.target.value);
        setTravelDateRange(getDateRange(e.target.value, lastDate));
    };
    const handleLastDate = (e) => {
        setLastDate(e.target.value);
        setTravelDateRange(getDateRange(startDate, e.target.value));
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
                    value={startDate} 
                    onChange={handleStartDate} 
                />
            </div>
            <div>
                <DateH2>마지막 날짜 선택</DateH2>
                <Input 
                    type="date" 
                    value={lastDate} 
                    onChange={handleLastDate} 
                    min={startDate} 
                />
            </div>
        </Div>
    )
}

export default PlanDate

const Div = styled.div`
    margin-right: 20px;

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