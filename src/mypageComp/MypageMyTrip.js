import styled from "styled-components";
import MypageMyTripList from "../mypage_subcomp/MypageMyTripList";
import { useNavigate } from "react-router-dom";

const MypageMyTrip = () => {
    const navigate = useNavigate();
    return (
        <MypageMyTripCss>
            <div className="makeTrip" onClick={() => {navigate('/newplan')}}>
                <p>+</p>
                <div>
                    <p className="bold">여행 일정 만들기</p>
                    <p>새로운 여행을 떠나보세요.</p>
                </div>
            </div>
            <div className="scheduledTrip">
                <h2>다가오는 여행</h2>
                <ul>
                    <MypageMyTripList />
                </ul>
            </div>
        </MypageMyTripCss>
    );
};

export default MypageMyTrip;

const MypageMyTripCss = styled.div`
    padding: 20px;
    .makeTrip{
        display: flex;
        padding: 10px;
        background-color: #EEEEEE;
        margin-bottom: 30px;
        cursor: pointer;
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