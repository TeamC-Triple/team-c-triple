import styled from "styled-components";
import { useState, useRef, useContext } from "react";

import { SpotsDataContext } from "../App";

import Header1 from "../common/Header1";
import HeaderIcon from "../common/HeaderIcon";
import TourSpots from "../plan_subComp/TourSpots";
import Button from "../common/Button";

const PlanSpotModal = ({
    openAdd,
    closeSpots,
    getSpots,
    keywordData,
    keywordList,
    setKeywordList,
    chosedCity,
    addNewSpots,
    selectSpots,
    setSelectSpots,
    handleCity
}) => {
    // 장소 추가 창 헤더 검색창 부분 상태변수 시작
    const [search, setSearch] = useState('');
    const searchRef = useRef();
    const spotsData = useContext(SpotsDataContext);

    const [activeTab, setActiveTab] = useState(false);

    const activeToggle = ()=>{
        setActiveTab(!activeTab)
    }


    const changeInput = (e) => {
        setSearch(e.target.value);
    };

    const clickTap = (it)=> {
    };

    console.log(keywordList);

    return (
        <SpotAddModal className={openAdd ? 'open' : 'close'}>
            <Header1
                leftChild={<HeaderIcon
                    text={'뒤로가기'}
                    onClick={closeSpots}
                />}
                headTxt={
                    <>
                        <input
                            type="text"
                            placeholder="검색어를 입력해주세요."
                            value={search || ''}
                            ref={searchRef}
                            onChange={changeInput}
                        />
                        <p
                            className={`btnDel ${search.length > 0
                                    ? "show"
                                    : ""
                                }
                        `}
                            onClick={() => { setSearch('') }}
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
                    {/* <div className="keywordTap">
                        {keywordData.map((it) =>
                            <Button 
                            key={it.id} 
                            type={ keywordList.includes(it.kw)? "acitve" : "deActive" } 
                            text={it.kw} 
                            onClick={clickTap(it.kw)} 
                            />
                        )}
                    </div> */}
                    {/* 키워드 탭 보류...^^ */}
                </div>
                <div className="spotlist">
                    <ul>
                        {chosedCity === ''
                            ? <li>여행할 지역을 먼저 선택해 주세요.</li>
                            :
                            spotsData.filter((it) => {
                                if (it.city === chosedCity && search === "") {
                                    return it;
                                } else if (it.city === chosedCity && it.spotName.includes(search.toLowerCase())) {
                                    return it;
                                }
                            }
                            ).filter((it)=> keywordList.includes(...it.keyword)).map((it) => (
                                <TourSpots key={it.id} {...it}
                                    openAdd={openAdd}
                                    selectSpots={selectSpots}
                                    setSelectSpots={setSelectSpots}
                                />
                            ))
                        }
                    </ul>
                </div>
            </SpotListWrap>
            <SpotBtn className={!openAdd ? 'close' : ''}>
                <Button
                type={!selectSpots ? "deActive" : "active"}
                text={!selectSpots ? "장소를 선택하지 않았습니다." : `${selectSpots} 선택 완료`}
                onClick={!selectSpots ? closeSpots : getSpots}
                />
            </SpotBtn>
        </SpotAddModal>
    );
};

export default PlanSpotModal;

const SpotAddModal = styled.div`
    position: fixed;
    bottom : -100%;
    left: 0;
    right: 0;
    width : 100%;
    height : 100%;
    background-color: #fff;
    overflow-y: scroll;
    z-index: 700;
    transition: 0.3s;

    &.open{
        bottom: 0%;
    } 
    &.close{
        display : none;
    }
    
    button{
        font-size: 12px;
        font-weight: 600;
        color: #fff;
        padding: 10px;
        background-color: #368FFF;
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
    .spotlist_top .keywordTap{
        display : flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
    .keywordTap .Button{
        width : 23%;
        margin-bottom : 10px;
    }
    .keywordTap .btn{
        width : 100%;
        margin-right : 10px;
        text-wrap: nowrap;
        border-radius: 20px;
    }

`
const SpotBtn = styled.div`
    
    position: fixed;
    bottom: 20px;
    left: 20px;
    right: 20px;
    z-index: 1000;
    .Button .btn{
        width: 100%;
    } 
    &.close{
        display: none;
    }
`