import { useEffect, useState } from "react";
import styled from "styled-components";
import TourMemo from "./TourMemo";
import Button from "../common/Button";

const SelectedSpots = ({ id, place, idx, memoList, day, deleteSpot, getThisDaySpList , dayList }) => {
    const shadowStyles = {
        boxShadow: '0 1px 8px rgba(0,0,0,0.2)',
        margin: '0 0 20px 0',
        borderRadius: '10px',
        lineHeight: '30px'
    };

    return(
        <SelectPlan>
            <div className="selected" style={shadowStyles}>
                <div className="left"> 
                    <div className="numberDot">{idx + 1}</div>
                    <div className="spotName">{place}</div>
                </div>
                <div className="placeDelete"
                    onClick={()=>deleteSpot(place)}
                >
                    삭제
                </div>
            </div>
        </SelectPlan>
    );
}

export default SelectedSpots;

const SelectPlan = styled.div`
    position: relative;
    width: 100%;
    .selected{
        display : flex;
        padding: 10px 10px;
        align-items: center;
        justify-content: space-between;
        .left{
            display : flex;
            align-items: center;
        }
        .numberDot{
            width: 30px;
            height: 30px;
            margin-right: 16px;
            border-radius: 50%;
            text-align: center;
            line-height: 28px;
            background-color: #9621F1;
            color : #fff;
        }
        .placeDelete{
            margin-right: 10px;
            background-color: red;
        }
    }

`