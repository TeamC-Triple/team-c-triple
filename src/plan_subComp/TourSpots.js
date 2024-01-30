import { useEffect, useState } from "react";

import styled from "styled-components";
import Button from "../common/Button";
import "./TourSpots.css"

const TourSpots = ({ spotName,  selectSpots, setSelectSpots, selectSpotsList, setSelectSpotsList, openAdd, addNewSpots})=>{
    
    const [spotClick, setSpotClick]= useState(false);

    useEffect(()=>{
    }, [spotClick]);

    useEffect(()=>{
        setSpotClick(false);
    }, [openAdd]);

    const activeBtn = () => {

        setSpotClick(true);
        setSelectSpots(spotName);

        // 새로운 장소 리스트에 추가
        addNewSpots(spotName);

    };
    const deActiveBtn = () => {
        setSpotClick(false);
        setSelectSpotsList(selectSpotsList.filter((item)=> (item.spotName !== spotName)));

    }

    
    return(
        <TourSpotsWrap>
            <div className="spotWrap"> 
                <div className="spotPhoto">
                    사진
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
    line-height: 36px;
    position: relative;
    z-index: 1000;
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
    .Button{
        width: 56px;
        .btn{
            width : 100%;
            border-radius: 20px;
            text-align: center;
            }
    }

`




