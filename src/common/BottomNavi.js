import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";

const BottomNavi = ({leftChild, centerChild, rightChild}) => {
    const [active, setActive] = useState(1);
    const [home, setHome] = useState();
    const [feed, setFeed] = useState();
    const [travel, setTravel] = useState();


    return (
        <BottomNav>
            <Link to='/feed'>
                <NaviBtnOff>
                    <p>추천/매거진</p>
                </NaviBtnOff>
            </Link>
            <Link to='/'>
                <NaviBtnOff>
                    <p>홈</p>
                </NaviBtnOff>
            </Link>
            <Link to='/travel'>
                <NaviBtnOff>
                    <p>여행기 피드</p>
                </NaviBtnOff>
            </Link>
        </BottomNav>
    );
};

export default BottomNavi;

const BottomNav = styled.nav`
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 55px;
    background-color: #fff;
    border-top: 1px solid #eee;
    box-shadow: 0 -2px 6px rgba(0, 0, 0, 0.1);
`;

const NaviBtnOff = styled.div`
    width: 60px;
    height: 40px;
    margin: 0 8vw;
    text-align: center;
    background-color: skyblue;
    font-size: 11px;
    color: #666;
`;