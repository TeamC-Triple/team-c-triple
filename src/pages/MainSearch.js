import { useState, useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

import { MagazineDataContext } from "../App";

import Header1 from "../common/Header1";
import HeaderIcon from "../common/HeaderIcon";
import SearchContent from "../searchComp/SearchContent";

const MainSearch = () => {
    const [search, setSearch] = useState('');
    const [searchResult, setSearchResult] = useState([]);

    const navigate = useNavigate();
    const magazineList = useContext(MagazineDataContext);

    useEffect(() => {
        setSearchResult(magazineList);
    }, [search]);

    const handleChange = (e) => {
        setSearch(e.target.value);
    };
    
    return (
        <Mainsearch>
            <Header1 
                leftChild={<HeaderIcon 
                    text={'뒤로가기'}
                    onClick={() => {navigate(-1)}}
                />}
                headTxt={
                    <>
                        <input 
                            placeholder="도시, 장소, 키워드 등 검색"
                            value={search}
                            onChange={handleChange}
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
            <SearchContent />
        </Mainsearch>
    );
};

export default MainSearch;

const Mainsearch = styled.div`
    .head_btn_left, .head_btn_right2{
        width: 24px;
        height: 24px;
        text-indent: -99999px;
        background-repeat: no-repeat;
        background-size: 24px auto;
        background-position: center;
        cursor: pointer;
    }
    .head_btn_left{
        background-image: url(/assets/icon-arrow-left.svg);
    }
    .head_btn_right2{
        background-image: url(/assets/icon-search.svg);
    }
    .head_text{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 20px;
        input{
            margin-top: 5px;
            width: calc(100% - 26px);
            height: 50px;
            border: 0;
        }
        input:focus{
            outline: 0;
        }
        input::placeholder{
            color: #368FFF;
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
`;