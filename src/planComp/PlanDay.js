import styled from "styled-components";
import Button from "../common/Button";
import { useState } from "react";
import TourSpots from "../plan_subComp/TourSpots";

const PlanDay =()=>{
    const [isEmpty, setIsEmpty]= useState(true);
    return(
        <PlanDayWrap>
            <DayWrap>
                <div className="dayTitle">DAY 1 </div>
                {isEmpty ? <Empty>일정이 비어있습니다.</Empty> 
                        :  <TourSpots />}
                <Day>
                    <Button type={'gray_border'} text='장소추가' />
                    <Button type={'gray_border'} text='메모추가' />
                </Day>
            </DayWrap>
        </PlanDayWrap>

    );
}

export default PlanDay;
const PlanDayWrap = styled.div`
    margin-right : 20px;
`
const DayWrap = styled.div`
`
const Day = styled.div`
    display : flex;
    justify-content: space-between;
    .Button{
        width: 49%;
    }
`
const Empty = styled.div`
    padding : 30px 0;
    text-align:center;
`