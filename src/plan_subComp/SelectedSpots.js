import { useState } from "react";
import styled from "styled-components";

const SelectedSpots =({id, date, newdaySpots})=>{
    const shadowStyles = {
        boxShadow: '0 1px 8px rgba(0,0,0,0.2)',
        marginBottom: '20px',
        borderRadius : '10px',
        lineHeight : '30px'
    };

    // const [spotItem, setSpotItem] = useState({
    //     id => SelectedSpots의 id값으로 하고,
    //     place => 장소 프롭스로 하나 받아오고,
    //     memo 
    // });


    return(
        <SelectPlan>
            <div className="selected" style={shadowStyles}>
                {/* 넘버닷도 여기 컴포넌트의 아이디값으로 */}
                <div className="numberDot">1</div>
                <div className="spotName">{newdaySpots[0].spotName}</div>
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