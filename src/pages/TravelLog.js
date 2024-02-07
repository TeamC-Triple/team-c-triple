// 완성된 여행기 페이지

import { useContext, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import MagaSlide from "react-slick";

import BottomNaviSub from "../common/BottomNaviSub";
import Header1 from "../common/Header1";
import styled from "styled-components";
import { LogDataContext } from "../App";

const TravelLog = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const MyTripList = useContext(LogDataContext);

    const [data, setData] = useState([]);

    useEffect(() => {
        window.scrollTo(0, 0);
        if (MyTripList?.length > 0) {
            const targetTrip = MyTripList?.find((it) =>
                parseInt(it.id) === parseInt(id)
            );
            if (targetTrip) {
                setData(targetTrip);
            } else {
                alert('없는 여행기입니다.');
                navigate('/', { replace: true });
            };
        };
    }, [id, MyTripList]);

    const msSettings = {
        arrows : false,
        infinite : true,
        speed : 500,
        slidesToShow : 1,
        slidesToScroll : 1,
        dots: true
    };

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
                rightChild2={'수정'}
                className="TravelLog_header"
            />
            <TravlePage>
                <div className="photo">
                    <MagaSlide {...msSettings}>
                        {data.photo && data.photo.map((it)=><img src={it} />)}
                    </MagaSlide>
                </div>
                <div className="info">
                    <div className="title">
                        {data.title}
                    </div>
                    <div className="content">
                        {data.reviewTxt}
                    </div>
                    <DayTravel>
                        {data?.days&&data?.days.map((it)=><div>
                            <div className="day">
                                <span className="dayNum">DAY {it.id+1}</span>
                                <span className="dayDate">{it.date}</span>
                            </div>
                            {it.day&&it.day.map((it)=>
                                <div className="wrap">
                                    <div className="place">
                                        <p className="placeId">{it.id+1}</p>
                                        <p className="placeName">{it.place}</p>
                                    </div>
                                    <div className="memo">
                                        {it.memo}
                                    </div>
                                    <div className="dayphoto">
                                        <img src={it.photo}/>
                                    </div>
                                </div>
                            )}
                        </div>)}
                    </DayTravel>
                    <div className="feed">
                        <p className="recoNum">{data.recoNum}</p>
                        <p className="commentNum">{data.commentNum}</p>
                        <p className="downloadNum">{data.downloadNum}</p>
                    </div>
                    <div className="commentBox">
                        {data.commentInfo && data.commentInfo.map((it, idx)=>
                            <div key={idx}>
                                <div className="profilePhoto">
                                    <img src={it.profilePhoto} />
                                </div>
                                <div className="commentBox1">
                                    <div className="profile_date">
                                        <p>{it.writer}</p>
                                        <p>{new Date(it.date).toLocaleDateString()}</p>
                                    </div>
                                    <p className="commetBox2">{it.comment}</p>
                                </div>
                            </div>
                        )}
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
        cursor: pointer;
    }
`
const TravlePage = styled.div`
    margin-top : 60px;
    padding-bottom: 40px;
    .slick-slide{
        width: 100%;
    }
    .slick-slider{
        position: relative;
    }
    .slick-dots{
        position: absolute;
        top: 50vw;
        margin-left: 50%;
        transform: translateX(-50%);
        display: flex !important;
    }
    .slick-dots li button{
        width: 8px;
        height: 8px;
        border-radius: 50px;
        background-color:#fff;
        text-indent: -9999px;
        opacity: 0.5;
        margin : 0 5px;
    }
    .slick-dots li.slick-active button{
        opacity: 1;
    }
    .photo img{
        height: 55vw;
        overflow: hidden;
        object-fit: cover;
    }
    .info{
        padding: 40px 20px;
    }
    .title{
        font-size: 15px;
        font-weight: 500;
        margin-bottom: 20px;
    }
    .content{
        margin-bottom: 30px;
    }
    .feed{
        display: flex;
        justify-content: left;
        margin-bottom: 6px;
        font-size: 14px;
    }
    .feed>p{
        padding-left: 15px;
        margin-right: 16px;
        background-size: 13px 13px;
        background-repeat: no-repeat;
        background-position: left;
        color: #777;
    }
    .recoNum{
        background-image: url(/assets/icon-heart-line.svg);
    }
    .commentNum{
        background-image: url(/assets/icon-chat.svg);
    }
    .downloadNum{
        background-image: url(/assets/icon-download.svg);
    }
    .commentBox{
        margin-top: 20px;
    }
    .commentBox>div{
        display: flex;
        padding: 15px 0;
        border-top: 1px solid #eee;
    }
    .commentBox1{
        width: 100%;
    }
    .profilePhoto{
        width: 40px;
        height: 40px;
        border-radius: 50px;
        border: 1px solid #ddd;
        overflow: hidden;
        margin-right: 15px;
    }
    .profilePhoto img{
        width: 100%;
    }
    .profile_date{
        display: flex;
        justify-content: space-between;
        margin-bottom: 5px;
    }
    .profile_date>p:first-child{
        font-weight: 500;
    }
    .profile_date>p:last-child{
        font-size: 12px;
        color : #666;
    }
`
const DayTravel = styled.div`
    margin-bottom: 20px;
    .day{
        margin: 10px 0;
        margin-top: 20px;
    }
    .dayNum, .dayDate{
        font-size: 15px;
        font-weight: 500;
    }
    .dayNum::after{
        content:"|";
        margin: 0 5px;
        color: #ddd;
    }
    .wrap{
        padding: 10px;
    }
    .place{
        display: flex;
    }
    .placeId{
        background-color : #368FFF;
        width: 20px;
        color: #fff;
        font-size: 12px;
        text-align: center;
        border-radius: 50px;
        margin-right: 10px;
    }
    .placeName{
        font-size: 13px;
        font-weight: 500;
    }
    .memo{
        margin-left: 30px;
        font-size: 12px;
        margin-bottom: 10px;
    }
    .dayphoto{
        border-radius: 10px;
        overflow: hidden;
    }
    .dayphoto img{
        width: 100%;
        height: 55vw;
        object-fit: cover;
    }
`