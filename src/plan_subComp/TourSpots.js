import { useEffect, useState } from "react";

import styled from "styled-components";
import Button from "../common/Button";
import "./TourSpots.css"

const TourSpots = ({ 
    spotName,
    selectSpots, 
    setSelectSpots,
    openAdd,
})=>{
    
    const [spotClick, setSpotClick ] = useState(false);

    useEffect(()=>{
    }, [spotClick]);

    useEffect(()=>{
        setSpotClick(false);
    }, [openAdd]);

    const activeBtn =  () => {
        setSpotClick(true);
        setSelectSpots(`${spotName}`);
    };
    const deActiveBtn = () => {
        setSpotClick(false);
        setSelectSpots('');
    }
    
    return(
        <TourSpotsWrap>
            <div className="spotWrap"> 
                <div className="spotPhoto">
                    관광지
                </div>
                <div className="spotName">
                    {spotName}
                </div>
            </div>
            <div>
                {spotClick
                    ? <Button type={'active'} text={'취소'} onClick={deActiveBtn} />
                    : <Button type={'deActive'} text={'선택'} onClick={activeBtn} />
                }
            </div>
        </TourSpotsWrap>
    )
}

export default TourSpots;

const TourSpotsWrap =styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 0 20px 0 ;
    line-height: 40px;
    position: relative;
    z-index: 1000;
    .spotWrap{
        display: flex;
        align-items: center;
        .spotPhoto{
            width: 12px;
            height: 12px;
            margin-top : 2px;
            margin-right : 16px;
            border-radius: 50%;
            text-indent: -9999px;
            line-height: 40px;
            background-color: #ccc;
        }
        .spotName{
            font-size: 15px;
            line-height: 40px;
        }
    }
    .Button{
        width: 56px;
        .btn{
            width : 100%;
            border-radius: 20px;
            text-align: center;
            }
    }

`




