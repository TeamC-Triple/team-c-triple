import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useBodyScrollLock } from '../utill/useBodyScrollLock.js';

import Header1 from "../common/Header1";
import HeaderIcon from "../common/HeaderIcon";
import styled from "styled-components";
import MypageCate from "../mypageComp/MyPageCate";
import BottomNaviSub from "../common/BottomNaviSub";
import SideBar from '../side/SideBar';

const Mypage = () => {
    const navigate = useNavigate();
    const [category, setCategory] = useState('myTrip');

    const [sidebar, setSidebar] = useState('off');
    const [isOpen, setIsOpen] = useState(false);
    const { lockScroll, openScroll } = useBodyScrollLock();

    const sideBtnClick = () => {
        setSidebar('on')
        lockScroll();
        setIsOpen(true);
    };

    return(
        <MyPage>
            <Header1
                headTxt={'마이페이지'}
                leftChild={
                    <p onClick={()=>(navigate(-1))}>
                        뒤로가기
                    </p>
                }
                rightChild2={
                    <HeaderIcon 
                        text={'사이드메뉴'}
                        onClick={sideBtnClick}   
                    />
                }
                className="mypage_header"
            />
            <MypageCate 
                setCategory={setCategory}
            />
           <BottomNaviSub center={'mytravel'} />
           <SideBar 
                sidebar={sidebar} 
                setSidebar={setSidebar} 
                leftChild={
                    <p onClick={()=>(navigate('/mypage'))}>
                        <img src='/assets/travelogPhoto/profile0.jpg' />
                    </p>
                } 
                headTxt={'김이박님'} 
                setIsOpen={setIsOpen} 
                openScroll={openScroll} 
            />
        </MyPage>
    )
};

export default Mypage;

const MyPage = styled.div`
    .head_btn_left{
        text-indent: -9999px;
        margin-right: 14px;
    }
    .head_btn_left p{
        width: 24px;
        height: 24px;
        background-image: url(/assets/icon-arrow-left.svg);
        background-repeat: no-repeat;
        background-size: 24px auto;
        background-position: center;
        cursor: pointer;
    }
    .head_text{
        text-align: center;
    }
    .head_btn_right2{
        width: 24px;
        height: auto;
        background-image: url(/assets/icon-menu.svg);
        background-size: 24px auto;
        background-repeat: no-repeat;
        background-position: center;
        cursor: pointer;
        text-indent: -9999px;
    }
`