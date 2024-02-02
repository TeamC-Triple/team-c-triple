import { useState } from "react";
import styled from "styled-components";
import TourMemo from "./TourMemo";

const SelectedSpots =({id, place, idx})=>{
    const shadowStyles = {
        boxShadow: '0 1px 8px rgba(0,0,0,0.2)',
        marginBottom: '20px',
        borderRadius : '10px',
        lineHeight : '30px'
    };

    

    return(
        <SelectPlan>
            <div className="selected" style={shadowStyles}>
                <div className="numberDot">{idx + 1}</div>
                <div className="spotName">{place}</div>
            </div>
        </SelectPlan>
    );
}

export default SelectedSpots;

const SelectPlan = styled.div`
    position: relative;
    .selected{
        display : flex;
        padding: 10px 10px;
        align-items: center;
        
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
    }

`