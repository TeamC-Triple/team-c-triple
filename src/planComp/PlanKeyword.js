import { useContext, useEffect, useRef, useState } from "react";
import styled from "styled-components";

import Button from "../common/Button";



const PlanKeyword = ({withWho, travelStyle, setKeywordValue}) => {

    const [whoActive, setWhoActive] = useState('');
    const [styleActive, setStyleActive] = useState('');

    
    const whoToggleActive = (e) => {
        setWhoActive(() => {
          return e.target.id;
        });
        let thisValue = e.target.value;
        setKeywordValue([thisValue]);
      };

    const styleToggleActive = (e) => {
        setStyleActive(() => {
          return e.target.id;
        });
        let thisValue = e.target.value;
        setKeywordValue([thisValue]);
      };

    return(
        <MainWrap>
            <ContentsWrap>
                <MainTitle>여행 키워드 선택</MainTitle>
                <SubWrap>
                    <SubTitle>누구와?</SubTitle>
                    <KeywordBtn>
                        {withWho.map((it, idx)=> (
                                    <button
                                        key={it}
                                        id={it + idx}
                                        value={it}
                                        className={"btn" + (it + idx == whoActive ? " active" : "")}
                                        onClick={whoToggleActive}
                                    >{it}</button>
                        ))}
                    </KeywordBtn>
                </SubWrap>
                <SubWrap>
                    <SubTitle>여행 스타일</SubTitle>
                    <KeywordBtn>
                        {travelStyle.map((it, idx)=> (
                             <button
                                key={it}
                                id={it + idx}
                                value={it}
                                className={"btn" + (it + idx == styleActive ? " active" : "")}
                                onClick={styleToggleActive}
                            >{it}</button>
                        ))}
                    </KeywordBtn>
                </SubWrap>
            </ContentsWrap>
            <BottomBtn>
                <Button
                text={'키워드 선택'}
                type={'active'}  
                />
                <StopChoose>다음에 선택하기</StopChoose>
            </BottomBtn>
        </MainWrap>
    );
} 

export default PlanKeyword;

const KeywordBtn = styled.div`
    display: flex;
    .btn {
        width : 25%;
        height : 30px;
        margin-right : 10px;
        border-radius: 20px;
        text-align: center;
        width : 100%;
        height : 30px;
        margin-right : 10px;
        border-radius: 20px;
        text-align: center;
        line-height : 30px;
        background-color: #ccc;
        color: #fff;
    
        &.active {
            background-color: #368FFF;
        }
    }
`

const Keyword = styled.div`
`
// const Keyword = styled.div`
//     width : 25%;
//     height : 30px;
//     margin-right : 10px;
//     border-radius: 20px;
//     text-align: center;
//     line-height : 30px;
//     background-color: #bbb;
//     color: #fff;
// `




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
const SubWrap = styled.div`
    margin : 0 10px 40px 20px;

    .btn.active, .btn.deActive{
        border-radius: 20px;
    }
`

const BottomBtn = styled.div`
    position: fixed;
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