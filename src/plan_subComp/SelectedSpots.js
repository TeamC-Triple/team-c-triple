import { useState } from "react";
import styled from "styled-components";

const SelectedSpots =({id, place})=>{
    const shadowStyles = {
        boxShadow: '0 1px 8px rgba(0,0,0,0.2)',
        marginBottom: '20px',
        borderRadius : '10px',
        lineHeight : '30px'
    };

    

    return(
        <SelectPlan>
            <div className="selected" style={shadowStyles}>
                <div className="numberDot">{id + 1}</div>
                <div className="spotName">{place}</div>
            </div>
            <Memo>
                <div className="memoDot">memo</div>
                <div className="memoContents">메모메모</div>
            </Memo>
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

const Memo = styled.div`
    display : flex;
    margin: 0 0 24px 18px;
    align-items: center;
    line-height: 20px;
        
    .memoDot{
        width: 16px;
        height: 16px;
        margin-right: 22px;
        border-radius: 50%;
        text-indent: -9999px;
        text-align: center;
        line-height: 30px;
        background-color: #368FFF;
    }
`