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

  
    // 선택한 버튼
    const [clickedBtn, setClickedBtn] = useState();
    // 이전 선택 버튼
    const [beforeClick, setBeforeClick] = useState();

    const [isCheck, setIsCheck ] = useState(false);

    const changeInput = (e) => {
        setSearch(e.target.value);
    };


    // 장소 선택완료
    const completeSpot = ()=>{
        getSpots();
        setIsCheck(false);
        setSelectSpots(null);
        setBeforeClick(null);
    }

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
                <div className="spotlist">
                    <ul>
                        {chosedCity === ''
                            ? <li>여행할 지역을 먼저 선택해 주세요.</li>
                            :
                            spotsData.filter((item)=> item.city === chosedCity && item.spotName.includes(search.toLowerCase()) )
                            .filter((it) => {
                                if (it.keyword.includes(...keywordList) !== false) {
                                    return it;
                                } else{
                                    return it;
                                }
                            }
                            )
                            .map((it) => (
                                <TourSpots key={it.id} {...it}
                                    openAdd={openAdd}
                                    selectSpots={selectSpots}
                                    setSelectSpots={setSelectSpots}
                                    clickedBtn={clickedBtn}
                                    setClickedBtn={setClickedBtn}
                                    beforeClick={beforeClick}
                                    setBeforeClick={setBeforeClick}
                                    isCheck={isCheck}
                                    setIsCheck={setIsCheck}
                                />
                            ))
                        }
                    </ul>
                </div>
            </SpotListWrap>
            <SpotBtn className={!openAdd ? 'close' : ''}>
                <Button
                type={!isCheck ? "deActive" : "active"}
                text={!isCheck ? "장소를 선택하지 않았습니다." : `${selectSpots} 선택 완료`}
                onClick={!isCheck ? closeSpots : completeSpot}
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
    


`    // button{
    //     font-size: 12px;
    //     font-weight: 600;
    //     color: #fff;
    //     padding: 10px;
    //     background-color: #368FFF;
    // }
const SpotListWrap = styled.div`
    position: absolute;
    top: 40px;
    left: 20px;
    right: 20px;
    padding-top: 40px;
    padding-bottom: 90px;

`
const SpotBtn = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 20px;
    background-color: #fff;
    z-index: 1000;
    .Button .btn{
        width: 100%
    } 
    .Button .btn.deActive{
        background-color: #eee;
    } 
    &.close{
        display: none;
    }
`