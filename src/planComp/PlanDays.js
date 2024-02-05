import { useRef, useState } from "react";
import styled from "styled-components";

import Button from "../common/Button";
import SelectedSpots from "../plan_subComp/SelectedSpots";
import SelectedMemo from "../plan_subComp/SelectedMemo";
import PlanSpotModal from "../plan_subComp/PlanSpotModal";
import PlanMemoModal from "../plan_subComp/planMemoModal";
import TourMemo from "../plan_subComp/TourMemo";

const PlanDays = ({
    day, 
    idx,
    dayList, 
    setDayList,
    chosedCity,
    keywordData, 
    addDayPlan, 
    travelDateRange, 
    handleCity,
        addDayMemo,
        setMemoList,
        memoList,
        memoTxt,
        onChangeTxt,
        setMemoTxt
}) => {
    
    // 장소 추가 여닫기
    const [openAdd, setOpenAdd]= useState(false);
    // 장소 하나
    const [selectSpots, setSelectSpots]= useState('');
    const spId = useRef(0);

    // 장소 추가 버튼
    const addSpotsBtn =()=>{
        setOpenAdd(true);
    };

    // 장소 창 닫기
    const closeSpots =()=>{
        setOpenAdd(false);
    }

    // 장소 선택 완료
    const getSpots = ()=>{
        setOpenAdd(false);
        addDayPlan(day, selectSpots);
    }

    const getThisDaySpList = () => {
        const newList = dayList.filter((it) => {
            if(it.date === day){
                return it;
            };
        });
        return newList;
    };

        // 메모 추가 여닫기
        const [openAddMemo, setOpenAddMemo]= useState(false);
        // 메모 추가 버튼
        const addMemoBtn =()=>{
            setOpenAddMemo(true);
        };
        // 메모 창 닫기
        const closeMemo =()=>{
            setOpenAddMemo(false);
            setMemoTxt('');
        };

        const getThisMemoList = () => {
            const newMemoList = memoList.filter((it) => {
                if(it.date === day){
                    return it;
                };
            });
            return newMemoList;
        };

    return (
        <Plandays className="Plandays">
            <div className="pdy_top">
                <h3>DAY {idx+1} <span>({day})</span></h3>
                <p className="pdy_pay">사용 경비 : </p>
            </div>
            <div>
                {dayList.length < 1
                        ?
                        <Empty>일정이 비어있습니다.</Empty> 
                        
                        :   getThisDaySpList().map((it, idx)=>(
                            it.date === day && <SelectedSpots key={idx} {...it} idx={idx} />
                        ))
                }
                {memoList.length < 1
                    ? <span></span>
                    : getThisMemoList().map((it, idx)=>(
                        it.date === day && <SelectedMemo key={idx} {...it}/>
                    ))
                }
            </div>
            <DayBtn>
                <Button type={'gray_border'} text='장소추가' onClick={addSpotsBtn} />
                <Button type={'gray_border'} text='메모추가' onClick={addMemoBtn}/>
            </DayBtn>
            <PlanSpotModal 
                openAdd={openAdd}
                closeSpots={closeSpots}
                getSpots={getSpots}
                keywordData={keywordData}
                chosedCity={chosedCity}
                selectSpots={selectSpots}
                setSelectSpots={setSelectSpots}
                handleCity={handleCity}
            />
            <PlanMemoModal 
                openAddMemo={openAddMemo}
                closeMemo={closeMemo}
                setMemoList={setMemoList}
                day={day}
                addDayMemo={addDayMemo}
                memoTxt={memoTxt}
                onChangeTxt={onChangeTxt}
                memoList={memoList}
            />
        </Plandays>
    );
};

export default PlanDays;

const Plandays = styled.div`
    margin-right: 20px;
    margin-bottom: 30px;
    .pdy_top{
        margin-bottom: 15px;
        h3{
            margin-bottom: 6px;
            font-size: 17px;
            font-weight: 700;

            span{
                font-size: 14px;
                color: #333;
                font-weight: 600;
            }
        }
        .pdy_pay{
            font-size: 12px;
            color: #666;
        }
    }
    .Header1{
        position: absolute;
        top: 0;
        left: 0;
        background-color: #fff;
    }
    .head_btn_right1{
        display: none;
    }
    .head_btn_right2{
        width: 24px;
        height: 24px;
        text-indent: -99999px;
        background-repeat: no-repeat;
        background-size: 24px auto;
        background-position: center;
        cursor: pointer;
    }
    .head_btn_right2{
        background-image: url(/assets/icon-search.svg);
    }
    .head_btn_left, .head_btn_right2{
        width: 24px;
        height: 24px;
        text-indent: -99999px;
        background-repeat: no-repeat;
        background-size: 24px auto;
        background-position: center;
        cursor: pointer;
    }
    .head_text{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 20px;
        input{
            margin-top: 3px;
            width: calc(100% - 26px);
            height: 50px;
            border: 0;
        }
        input:focus{
            outline: 0;
            color : #368FFF;
        }
        input::placeholder{
            font-size : 15px;
        }
        .btnDel{
            display: none;
            position: relative;
            width: 24px;
            height: 24px;
            border-radius: 50%;
            background-color: #ddd;
            &::after, &::before{
                content: "";
                display: block;
                position: absolute;
                top: 5px;
                left: 11px;
                width: 2px;
                height: 14px;
                border-radius: 2px;
                background-color: #fff;
            }
            &::after{
                transform: rotate(45deg);
            }
            &::before{
                transform: rotate(135deg);
            }
        }
        .btnDel.show{
            display: block;
        }
    }
`
const Empty = styled.div`
    padding : 10px 0;
    margin-bottom: 20px;
    text-align:center;
 `
const DayBtn = styled.div`
    display : flex;
    justify-content: space-between;
    margin-top: 24px;
    .Button{
        width: 49%;
    }
    .Button .btn{
        font-size: 13px;
    }
`