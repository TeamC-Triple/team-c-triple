
import styled from "styled-components";
import Button from "../common/Button";
import "./TourSpots.css"
import { useState } from "react";

const TourSpots = ({city, locationName, setSelectSpots})=>{
    
    const [spotsClick, setSpotsClick]= useState(false);
    const activeBtn = (locationName) => {
        setSpotsClick(true);
        setSelectSpots(locationName);
    };
    const deactiveBtn = () => {
        setSpotsClick(false);
        setSelectSpots('');
    }
    return(
        <TourSpotsWrap>
            <div className="spotWrap"> 
                <div className="spotPhoto">
                    사진
                </div>
                <div className="spotName">
                    {locationName}
                </div>
            </div>
            {!spotsClick
                ? <Button type={'deActive'} text={'선택'} onClick={activeBtn} />
                : <Button type={'active'} text={'선택'} onClick={deactiveBtn} />
            }
        </TourSpotsWrap>
    )
}

export default TourSpots;

const TourSpotsWrap =styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 20px 20px 0 ;
    line-height: 36px;
    .spotWrap{
        display: flex;
        .spotPhoto{
            width: 36px;
            height: 36px;
            margin-right : 16px;
            border-radius: 50%;
            text-indent: -9999px;
            text-align: center;
            line-height: 30px;
            background-color: #368FFF;
        }
    }
    .Button button{
        width: 60px;
        border-radius: 20px;
    }

`




