import { useContext } from "react";
import MypageLastTripItem from "../mypage_subcomp/MypageLastTripItem";
import styled from "styled-components";
import { PlanDataContext } from "../App";

const MypageLastTrip = () => {
    const myTriplList = useContext(PlanDataContext);
    const today = new Date().getTime();
    return (
        <MypageLastTripCss>
            <ul>
                {myTriplList?.filter((triplist)=>
                    today-triplist.firstDate > 0
                ).sort((a, b)=> b.firstDate - a.firstDate).map((item)=>(
                    <MypageLastTripItem key={item.id} {...item}/>
                ))}
            </ul>
        </MypageLastTripCss>
    );
};

export default MypageLastTrip;

const MypageLastTripCss = styled.div`
    padding: 30px 20px;
    .makeTrip{
        display: flex;
        padding: 10px;
        background-color: #EEEEEE;
        margin-bottom: 30px;
    }
    .makeTrip>p{
        width: 28px;
        padding-top: 3px;
        border-radius: 50%;
        font-size: 16px;
        text-align: center;
        background-color: #368FFF;
        color: #fff;
        margin-right: 10px;
    }
    .makeTrip>div>p{
        font-size: 10px;
        line-height: 1.3em;
        color: #666;
    }
    .makeTrip>div .bold{
        font-size: 12px;
        font-weight: 600;
        color: #000;
    }
    .scheduledTrip h2{
        font-size: 14px;
        font-weight: 400;
        margin-bottom: 23px;
    }
`