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

    const changeInput = (e) => {
        setSearch(e.target.value);
    };

    return (
        <SpotAddModal className={openAdd ? 'open' : ''}>
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
                    <div className="keywordTap">
                        {keywordData.map((it) =>
                            <Button key={it.id} type={'deActive'} text={it.kw} />
                        )}
                    </div>
                </div>
                <div className="spotlist">
                    <ul>
                        {chosedCity === ''
                            ? <li>여행할 지역을 먼저 선택해 주세요.</li>
                            :
                            spotsData.filter((it) => {
                                if (it.city === chosedCity && search === "") {
                                    return it;
                                } else if (it.city === chosedCity && it.spotName.includes(search)) {
                                    return it;
                                }
                            }
                            ).map((it) => (
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
            <SpotBtn>
                {selectSpots !== '' ?
                    <Button type={'active'} text={`${selectSpots} 선택 완료`} onClick={getSpots} />
                    : <Button type={'deActive'} text='장소를 선택해주세요.' onClick={handleCity} />
                }
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
    position: absolute;
    bottom: 20px;
    left: 20px;
    right: 20px;
    padding-top: 20px;
    .btn{
        width: 100%;
        height: 42px;
    }
`