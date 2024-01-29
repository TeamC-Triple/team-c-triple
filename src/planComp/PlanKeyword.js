import { useEffect, useState } from "react";
import styled from "styled-components";

import Button from "../common/Button";
import Header1 from "../common/Header1";
import HeaderIcon from "../common/HeaderIcon";
import KeywordSub from "../plan_subComp/KeywordSub";



const PlanKeyword = ({keywordData, selectKW, setSelectKW, openKeyword, handleOpenKW, isSelectKW,
    setIsSelectKW, setKeywordList, keywordList}) => {


    // 키워드창 닫기
    const closeKeyword =()=>{
        handleOpenKW();
    }
    // 키워드창 선택완료
    const completeKW =()=>{
        if(isSelectKW){
            handleOpenKW();
        }
    }

    return(
        <PlanKW className={`PlanKeyword ${openKeyword ? "open" : ""}`}>
            <Header1 
            leftChild={<HeaderIcon 
                text={'뒤로가기'}
                onClick={closeKeyword}
                
            />}
    />
            <MainWrap>
                <ContentsWrap>
                    <MainTitle>여행 키워드 선택</MainTitle>
                    <SubWrap>
                        <SubTitle>누구와?</SubTitle>
                        <KeywordBtn>
                            {keywordData.slice(0, 4).map((it)=>(
                                <KeywordSub key={it.id} {...it} setSelectKW={setSelectKW} selectKW={selectKW}  setKeywordList={setKeywordList} keywordList={keywordList} setIsSelectKW={setIsSelectKW} isSelectKW={isSelectKW} />
                            ))}
                        </KeywordBtn>
                    </SubWrap>
                    <SubWrap>
                        <SubTitle>여행 스타일</SubTitle>
                        <KeywordBtn>
                            {keywordData.slice(4).map((it)=>(
                                <KeywordSub key={it.id} {...it} setSelectKW={setSelectKW} selectKW={selectKW}  setKeywordList={setKeywordList} keywordList={keywordList} setIsSelectKW={setIsSelectKW} isSelectKW={isSelectKW}  />
                            ))}
                        </KeywordBtn>
                    </SubWrap>
                </ContentsWrap>
                <BottomBtn>
                    <Button
                    text={!isSelectKW ?
                    '키워드 선택' : `선택완료`}
                    type={!isSelectKW ? 'deActive' : 'active'}
                    onClick={completeKW}
                    />
                    <StopChoose onClick={closeKeyword}>다음에 선택하기</StopChoose>
                </BottomBtn>
            </MainWrap>
        </PlanKW>
    );
}

export default PlanKeyword;

const PlanKW = styled.div`
position: fixed;
right: 0;
left: 0;
bottom : -100%;
width: 100%;
height: 100%;
background-color: #fff;
z-index: 700;
transition: 0.3s;
&.open{
    bottom : 0%;
}
.Header1{
    position: absolute;
    top: 0;
    left: 0;
    background-color: #fff;
}
.head_btn_right, .head_text{
    display: none;
`
const MainWrap = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .Header1 .head_btn_left p{
        width: 24px;
        height: 24px;
        background-image: url('../assets/icon-arrow-left.svg');
        background-size: 100% auto;
        background-repeat: no-repeat;
        background-position: center;
        text-indent: -9999px;
    }
`
const ContentsWrap = styled.div`
    padding-top: 80px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-sizing: border-box;
`
const MainTitle = styled.div`
    margin : 0 0 40px 20px;
    font-size: 18px;
    font-weight: 700;
`
const SubTitle = styled.div`
    margin : 0 0 20px 0;
    font-size: 16px;
    font-weight: 600;
`


const KeywordBtn = styled.div`

    display: flex;
   
`
const SubWrap = styled.div`
    margin : 0 10px 40px 20px;

    .btn.active, .btn.deActive{
        border-radius: 20px;
    }
`

const BottomBtn = styled.div`
    position: absolute;
    bottom: 16px;
    left: 20px;
    right: 20px;
    button{
        width : 100%;
    }
`
const StopChoose = styled.div`
    margin-top : 10px;
    text-align: center;
    font-size: 12px;
    font-weight: 500;
    color : #444;
`