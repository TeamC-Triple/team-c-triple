import { useContext } from "react";
import MypageTravlesItem from "../mypage_subcomp/MypageTravelsItem";
import styled from "styled-components";
import { LogDataContext } from "../App"

const MypageTravels = () => {
    const myTravelList = useContext(LogDataContext);

    return (
        <div className="MypageTravels">
            <MypageTravlesCss>
                {myTravelList?.sort((a, b)=> b.firstDate - a.firstDate).map((item) => (
                    <MypageTravlesItem key={item.id} {...item} />
                ))}
            </MypageTravlesCss>
            <WriteTrip>
                <p>+</p >
                <div >
                    <p className="bold">여행기 작성하기 </p >
                    <p >지난 여행을 추가해보세요.</p >
                </div >
            </WriteTrip>
        </div>
    );
};

export default MypageTravels;

const MypageTravlesCss = styled.ul`
    margin-top: 30px;
`
const WriteTrip = styled.div`
    margin: 0 20px;
    display: flex;
    padding: 10px;
    background-color: #EEEEEE;
    margin-top: 30px;
    cursor: pointer;
>p{
    width: 28px;
    padding-top: 3px;
    border-radius: 50%;
    font-size: 16px;
    text-align: center;
    background-color: #368FFF;
    color: #fff;
    margin-right: 10px;
}
>div>p{
    font-size: 10px;
    line-height: 1.3em;
    color: #666;
}
>div .bold{
    font-size: 12px;
    font-weight: 600;
    color: #000;
}`