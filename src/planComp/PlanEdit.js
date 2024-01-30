import { useContext, useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import styled from "styled-components";


import { PlanDispatchContext } from "../App.js";
import PlanCity from "./PlanCity.js";
import PlanKeyword from "./PlanKeyword.js";
import Plan from "../pages/Plan.js";
import PlanDate from "./PlanDate.js";
import PlanExpenses from "./PlanExpenses.js";
import PlanCourse from "./PlanCourse.js";
import PlanDays from "./PlanDays.js";
import Button from "../common/Button.js";

const PlanEdit = ({
    handleCity,
    chosedCity,
    travelDateRange,
    setTravelDateRange,
    add,
    money,
    AMClick,
    expenses,
    PCMClick
    handleOpenKW,
    keywordList,
    traveler,
    setTraveler
})=>{

    const navigate = useNavigate();
    const location = useLocation();

    const onClickChoiceCity = () => {
        handleCity();
    };

    // 키워드 선택창 열기
    const onClickKW = ()=>{
        handleOpenKW();
    };

    // 인원수 입력창 열기
    const [addPeople, setAddPeople] = useState(false);
    const closeBtn =()=>{
        if( parseInt(traveler) ){
            setAddPeople(false);
        } else{
            alert('숫자를 입력해주세요.');
        }
    }

    return(
        <StartWrap>
            <Traveler
                onClick={()=>{setAddPeople(true)}}> {traveler}
            </Traveler>
            <TravelerModal className={`travelerModal ${addPeople ? "open" : ""}`}>
                <div className="TM_in">
                    <div className="travelerInput">
                        <input type="text" value={traveler} onChange={(e)=>{setTraveler(e.target.value)}}/>
                        <div className="travelerBtn">
                            <Button type={'gray_border'} text={'-1'} onClick={()=>{if(traveler > 0) setTraveler(parseInt(traveler) - 1)}} /><Button type={'gray_border'} text={'+1'} onClick={()=>{setTraveler(parseInt(traveler) + 1)}} />
                        </div>
                        <div className="closeBtn">
                            <Button type={'active'} text={'확인'} onClick={closeBtn} />
                        </div>
                    </div>
                </div>
            </TravelerModal>
            <BoxWrap>
                <Where
                    onClick={onClickChoiceCity}
                >
                    {chosedCity === ''
                        ? '여행, 어디로 떠나시나요?'
                        : `${chosedCity} 여행`
                    }
                </Where>
            </BoxWrap>
            {keywordList.length >= 1 ?
                <TripKeyword
                    onClick={onClickKW}>{keywordList} <span> 키워드 편집</span></TripKeyword>
                : <TripKeyword
                onClick={onClickKW}>키워드 선택</TripKeyword>
             }
            <When >여행 날짜 선택</When>
            <PlanDate travelDateRange={travelDateRange} setTravelDateRange={setTravelDateRange} />
            <Expenses>
                <Cost>예상 여행 경비(선택하기)</Cost>
                <div>
                    <Add className={add ? 'add on' : 'add off'} onClick={AMClick} >추가</Add>
                    <Money className={money ? 'money on' : 'money off'} onClick={AMClick}>￦ {expenses}</Money>
                </div>
            </Expenses>
            <Course>
                <Tourist>
                    <h2>추천 코스</h2>
                    <button onClick={PCMClick}>더보기</button>
                </Tourist>
                <PlanCourse chosedCity={chosedCity} />
            </Course>
            {
                travelDateRange.map((day, idx) => (
                    <PlanDays key={idx} day={day} idx={idx} />
                ))
            }
            <BtnCreate>
                <Button 
                    type={'green'}
                    text={'저장하기'}
                />
            </BtnCreate>
        </StartWrap>
    );
    }   // PlanEdit끝
export default PlanEdit;


const StartWrap = styled.div`
    padding-top: 80px;
    margin-left: 20px;
`
const Traveler = styled.div`
    display: inline-block;
    height: 24px;
    padding: 2px 18px 4px 50px;
    margin-bottom: 20px;
    border-radius: 20px;
    background-color: #368FFF;
    text-align: right;
    font-size: 13px;
    font-weight: 600;
    line-height: 24px;
    color: #fff;
    background-image: url('./assets/icon-user-group-wh.svg');
    background-size: 20px auto;
    background-position: center left 16px ;
    background-repeat: no-repeat;
`
const TravelerModal = styled.div`
    position: fixed;
    bottom : -100%;
    right: 0;
    left: 0;
    height : 100%;
    background-color: rgba(0, 0, 0, 0.4);
    z-index: 700;
    transition: 0.3s;
    &.open{
        bottom: 0%;
    }
    .TM_in{
        position: absolute;
        top : 30%;
        right: 20px;
        left: 20px;
        border-radius : 20px;
        padding : 40px 20px;
        background-color: #ddd;
        text-align: center;
    }
    .travelerInput input{
        width: 99%;
        height: 30px;
        margin-bottom: 10px;
        text-indent : 10px;
        border-radius : 4px;
        border : transparent;
    }
    .travelerBtn{
        display: flex;
        justify-content: space-between;
        margin-bottom: 10px;
    }
    .travelerBtn .Button{
        width: 49%;
    }
    .Button .btn{
        width: 100%;
        line-height : 1.3;
    }
    .closeBtn .active{
        width: 100%;
        line-height : 1.3;
    }

`
const BoxWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-right: 20px;
    margin-bottom: 20px;
    line-height: 1.7;
`
     
const Where = styled.div`
    font-size: 18px;
    font-weight: 700;
    cursor: pointer;
     
`
const When = styled.div`
    margin-bottom: 5px;
    font-size: 16px;
    font-weight: 600;
    color: #368FFF;
     
`
const TripKeyword = styled.div`
    margin: 20px 0 30px 0;
    font-size: 15px;
    font-weight: 600;
    color: #368FFF;
    cursor: pointer;
    span{
        margin-left: 10px;
        font-size: 12px;
        color : #666;
    }
     
`

const Expenses = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 60px;
`

const Cost = styled.div`
    font-size: 15px;
    font-weight: 700;
     
`
const Add = styled.button`
    padding: 7px 20px 8px;
    margin-right: 20px;
    border-radius: 30px;
    background-color: #eeeeee;
    font-size: 12px;
    font-weight: 600;
    color: #121212;
`

const Money = styled.button`
    padding: 7px 20px 8px;
    margin-right: 20px;
    border-radius: 30px;
    background-color: #368FFF;
    font-size: 12px;
    font-weight: 600;
    color: #FFF;
`

const Course = styled.div`
    
`

const Tourist = styled.div`
    display: flex;
    justify-content: space-between;
    margin-right: 20px;

    h2{
        font-size: 18px;
        font-weight: 700;
        color: #222;
    }
`

const BtnCreate = styled.div`

`