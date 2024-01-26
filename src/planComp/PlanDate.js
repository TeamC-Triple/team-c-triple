import { useState } from "react"
import styled from "styled-components";

const getStringDate = (d) => {
    return d.toISOString().slice(0,10);
}

const PlanDate = () => {
    const [startDate, setStartDate] = useState(getStringDate((new Date())));
    const [lastDate, setLastDate] = useState(getStringDate(new Date()));


    // 처음날짜부터 마지막날짜 사이를 구하는 변수
    const getDateRange = (startDate, lastDate) => {
        const start = new Date(startDate);
        const last = new Date(lastDate);

        const result = [];

        while(start <= last){
            result.push(start.toISOString().slice(0,10));
            start.setDate(start.getDate() + 1);
        }
        return result;
    }

    // DAY페이지 만들기전까지 확인용 페이지 만들고 지우기
    console.log(getDateRange(startDate, lastDate));

    return(
        <Div>
            <div>
                <DateH2>시작 날짜 선택</DateH2>
                <Input type="date" value={startDate} onChange={(e)=>{setStartDate(e.target.value)}} />
            </div>
            <div>
                <DateH2>마지막 날짜 선택</DateH2>
                <Input type="date" value={lastDate} onChange={(e)=>{setLastDate(e.target.value)}} min={startDate} />
            </div>
        </Div>
    )
}

export default PlanDate

const Div = styled.div`
    margin-top: 10px;
`

const DateH2 = styled.h2`
    font-size: 14px;
`

const Input = styled.input`
    margin: 10px 0;
    padding: 4px 6px;
    border: 0;
    border-radius: 10px;
    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.18);
`