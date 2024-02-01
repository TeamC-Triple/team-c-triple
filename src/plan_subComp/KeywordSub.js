import { useEffect, useState } from "react";
import styled from "styled-components";
import Button from "../common/Button";

const KeywordSub =({id, kw , setSelectKW, setKeywordList, keywordList, setIsSelect })=>{
    
    const [click, setClick]= useState(false);
    const activeBtn = () => {
        setClick(true);
        setSelectKW(kw);
        setIsSelect(true);
        setKeywordList([kw, ...keywordList]);
    };
    const deactiveBtn = () => {
        setClick(false);
        setSelectKW('');
        setKeywordList(keywordList.filter((it)=> (it !== kw)));
    }


    return(
        <KWBtn>
            {!click
                ? <Button type={'deActive'} text={kw} onClick={activeBtn} />
                : <Button type={'active'} text={kw} onClick={deactiveBtn} />
            }
        </KWBtn>
    );
}

export default KeywordSub;

const KWBtn = styled.div`
width : 25%;
height : 30px;
margin-right : 10px;
border-radius: 20px;
text-align: center;
button {
    width : 100%;
    margin-right : 10px;
    border-radius: 20px;
    text-align: center;
    &.active {
        background-color: #368FFF;
    }
}`