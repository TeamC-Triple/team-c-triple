import styled from "styled-components";
import { useState, useRef, useContext } from "react";

import { SpotsDataContext } from "../App";

import Header1 from "../common/Header1";
import HeaderIcon from "../common/HeaderIcon";
import Button from "../common/Button";

const PlanMemoModal = ({
    openAddMemo,
    closeMemo,
    memoTxt,
    onChangeTxt
}) => {
    return (
        <MemoAddModal className={openAddMemo ? 'open' : ''}>
            <Header1
                leftChild={<HeaderIcon
                    text={'뒤로가기'}
                    onClick={closeMemo}
                />}
                headTxt= {'메모 작성'}
            />
            <MemoModalWrap>
                <textarea
                    value={memoTxt}
                    onChange={onChangeTxt}
                ></textarea>
            </MemoModalWrap>
            <Btn>
                <Button type='gray_border' text='취소'/>
                <Button type='gray_border' text='완료'/>
            </Btn>
        </MemoAddModal>
    );
};

export default PlanMemoModal;

const MemoAddModal = styled.div`
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
const MemoModalWrap = styled.div`
    padding: 0 20px;
    padding-top : 70px;
    margin-bottom : 20px;
    >textarea{
        width: 100%;
        height: 70vh;
        padding: 10px;
        box-sizing: border-box;
    }
    >textarea:focus{
        outline: none;
    }
`
const Btn = styled.div`
    display: flex;
    padding: 0 20px;
    .Button{
        width: 50%;
        margin-right: 5px;
    }
    .Button:last-child{
        margin-right: 0;
    }
`
