import MypageLastTripItem from "../mypage_subcomp/MypageLastTripItem";
import styled from "styled-components";
const MypageLastTrip = () => {
    return (
        <MypageLastTripCss>
            <ul>
                <MypageLastTripItem />
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