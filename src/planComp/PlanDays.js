import { useContext, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Button from "../common/Button";
import TourSpots from "../plan_subComp/TourSpots";
import Header1 from "../common/Header1";
import HeaderIcon from "../common/HeaderIcon";
import SelectedSpots from "../plan_subComp/SelectedSpots";
import { SpotsDataContext } from "../App";

const PlanDays = ({day, idx, 
    dayList, setDayList,   
    selectSpots, setSelectSpots, 
    chosedCity, 
    selectSpotsList, setSelectSpotsList, 
    keywordData, 
    addNewSpots, addDayPlan, 
    travelDateRange
}) => {
    const spotsData = useContext(SpotsDataContext);


    // 장소 추가 여닫기
    const [openAdd, setOpenAdd]= useState(false);
    
    // 장소 추가 버튼
    const addSpotsBtn =()=>{
        setOpenAdd(true);
    };

    // 장소 추가 창 헤더 검색창 부분 상태변수 시작
    const [search, setSearch] = useState('');
    const searchRef = useRef();
    const changeInput = (e) => {
        setSearch(e.target.value);
    };

    // 장소 창 닫기
    const closeSpots =()=>{
        setOpenAdd(false);
    }

    // 장소 선택 완료
    const getSpots = ()=>{
        setOpenAdd(false);
        
        // 여행장소 리스트를 해당 일자에 추가
        addDayPlan(day, selectSpotsList);
    }


    // console.log(travelDateRange);
    console.log(selectSpotsList);
    console.log(dayList[idx]);

    
    return (
        <Plandays className="Plandays">
            <div className="pdy_top">
                <h3>DAY {idx+1} <span>({day})</span></h3>
                <p className="pdy_pay">예상 경비 : </p>
            </div>
            <div>
            {dayList.length < 1
                    ?
                     <Empty>일정이 비어있습니다.</Empty> 
                    
                    :   dayList.map((it, idx)=>(
                        it.date === day && <SelectedSpots key={idx} {...it} />
                    ))
            }
            </div>
            <DayBtn>
                <Button type={'gray_border'} text='장소추가' onClick={addSpotsBtn} />
                <Button type={'gray_border'} text='메모추가' />
            </DayBtn>
            <SpotAddModal className={openAdd ? 'open' : ''}>
                <Header1 
                    leftChild={<HeaderIcon 
                        text={'뒤로가기'}
                        onClick={closeSpots}
                    />}
                    // 헤더부분 추후에 어떤 페이지냐에 따라서 headTxt의 input태그 부분 보이고 <-> 보여지지 않고 처리할 예정. 지금은 그냥 두세요!
                    headTxt={
                        <>
                            <input 
                                type="text"
                                placeholder="검색어를 입력해주세요."
                                value={search}
                                ref={searchRef}
                                onChange={changeInput}
                            />  
                            <p 
                                className={`btnDel ${
                                    search.length > 0
                                    ? "show"
                                    : ""
                                }
                                `} 
                                onClick={() => {setSearch('')}}
                            >
                                <span className="hide">삭제</span>
                            </p>
                        </>
                    }
                    rightChild2={<HeaderIcon 
                        text={'검색'}
                    />}
                />
                <SpotListWrap>
                    <div className="spotlist_top">
                        <div className="keywordTap">
                            {keywordData.map((it)=>
                                <Button key={it.id} type={'deActive'} text={it.kw} />
                            )}
                        </div>
                    </div>
                    <div className="spotlist">
                        <ul>
                            {chosedCity === '' 
                                ?<li>여행할 지역을 먼저 선택해 주세요.</li>
                                :
                                spotsData.filter((it) => { 
                                    if(it.city === chosedCity && search === "") {
                                        return it;
                                    } else if (it.city === chosedCity && it.spotName.includes(search.toLowerCase()))  {
                                    return it;
                                    }}
                                ).map((it)=>(
                                    <TourSpots key={it.id} {...it} 
                                        openAdd={openAdd}
                                        addNewSpots={addNewSpots}
                                        selectSpots={selectSpots} 
                                        setSelectSpots={setSelectSpots} 
                                        selectSpotsList={selectSpotsList} 
                                        setSelectSpotsList={setSelectSpotsList}
                                    />
                            )) 
                            }
                        </ul>
                        {   selectSpotsList.length > 0   ? 
                                <Button type={'active'} text='장소 선택 완료' onClick={getSpots}/>
                                :<Button type={'deActive'} text='장소를 선택해주세요.'/>
                        }
                    </div>
                </SpotListWrap>
                <SpotBtn>
                    <Button />
                </SpotBtn>
            </SpotAddModal>
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
const SpotAddModal = styled.div`
    position: fixed;
    bottom : -100%;
    left: 0;
    right: 0;
    width : 100%;
    height : 100%;
    background-color: #fff;
    z-index: 700;
    transition: 0.3s;
    &.open{
        bottom: 0%;
    }

`
const SpotListWrap = styled.div`
    position: absolute;
    top: 40px;
    left: 20px;
    right: 20px;
    padding-top: 40px;
    padding-bottom: 90px;

    .spotlist_top{
        margin-bottom: 10px;
    }
    .keywordTap{
        display : flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
    .keywordTap .Button{
        width : 23%;
        margin-bottom : 10px;
    }
    .keywordTap .Button button{
        width : 100%;
        margin-right : 10px;
        text-wrap: nowrap;
        border-radius: 20px;
    }

`
const SpotBtn = styled.div`

`