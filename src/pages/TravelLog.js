// 완성된 여행기 페이지

import { useContext, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";

import BottomNaviSub from "../common/BottomNaviSub";
import Header1 from "../common/Header1";
import HeaderIcon from "../common/HeaderIcon";
import styled from "styled-components";
import { LogDataContext } from "../App";

const TravelLog = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const MyTripList = useContext(LogDataContext);

    const [data, setData] = useState([]);

    useEffect(() => {
        if (MyTripList.length >= 1) {
            const targetTrip = MyTripList.find((it) =>
                parseInt(it.id) === parseInt(id)
            );
            if (typeof targetTrip !== 'undefineded' && targetTrip) {
                setData(targetTrip);
            } else {
                alert('없는 여행기입니다.');
                navigate('/', { replace: true });
            };
        };
    }, [id, MyTripList]);

    return (
        <TravelLogWrap>
            <Header1
                headTxt={
                    <div>
                        <p className="TripTitle">
                            {data.city} 여행기
                        </p>
                        <p className="TripDate">
                            {new Date(data.firstDate).toLocaleDateString()}-{new Date(data.lastDate).toLocaleDateString()}
                        </p>
                    </div>
                }
                leftChild={
                    <p onClick={() => (navigate(-1))}>
                        뒤로가기
                    </p>
                }
                rightChild2={
                    <HeaderIcon
                        text={'사이드메뉴'}
                    />
                }
                className="TravelLog_header"
            />
            <TravlePage>
                <div className="photo">
                    <img src={`/assets/${data.photo[0]}`}/>
                </div>
                <div className="info">
                    <div className="feed">
                        {data.recoNum}{data.commentNum}{data.downloadNum}
                    </div>
                    <div className="title">
                        {data.title}
                    </div>
                    <div className="content">
                        {data.reviewTxt}
                    </div>
                </div>
            </TravlePage>
            <BottomNaviSub center={`travellog`} />
        </TravelLogWrap>
    );
};

export default TravelLog;

const TravelLogWrap = styled.div`
    .head_btn_left{
        text-indent: -9999px;
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
    .head_text>div>p{
        line-height : 1.4em;
    }
    .head_text>div .TripDate{
        font-size:11px;
        margin-left: 5px;
        color: #888;
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
const TravlePage = styled.div`
    margin-top : 60px;
    .photo img{
        width: 100%;
    }
    .info{
        padding: 40px 20px;
    }
    .title{
        font-size: 15px;
        font-weight: 500;
        margin-bottom: 20px;
    }
`