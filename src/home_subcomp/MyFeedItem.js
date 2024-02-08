import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const MyFeedItem = ({id, photo, title, firstDate, lastDate, recoNum, commentNum, downloadNum}) => {
    
    const changeStringTD = (date) => {
        const stringDay = new Date(date).getDay();
        switch(stringDay){
            case 0 : {return '일'
                break;}
            case 1 : {return '월'
                break;}
            case 2 : {return '화'
                break;}
            case 3 : {return '수'
                break;}
            case 4 : {return '목'
                break;}
            case 5 : {return '금'
                break;}
            case 6 : {return '토'
                break;}
            default : return stringDay;
        };
    };
    
    const onMyTravelDate = (date) => {
        const myTravelDate = new Date(date).toLocaleDateString();
        const stringMTD = myTravelDate.slice(6, 11);
        const mtd = `${stringMTD}(${changeStringTD(date)})`;
        return mtd;
    }

    const truncate = (str, n) => {
        return str && str.length > n
            ? str.substring(0, n) + '...'
            : str;
    };

    const navigate = useNavigate();
    const goDetail = () => {
        navigate(`/travellog/${id}`);
    };

    return (
        <MyFeedItemLi onClick={goDetail}>
            <div className="myFeedItem_in">
                <MyTravelLog>
                    <div>    
                        <MylIcon>
                            <img src={`${photo[0]}`} />
                        </MylIcon>
                        <MylTitle>{truncate(title, 10)}</MylTitle>
                    </div>
                    <div>
                        <MylDate>
                            {`${onMyTravelDate(firstDate)} - ${onMyTravelDate(lastDate)}`}
                        </MylDate>
                        <GoEdit>수정</GoEdit>
                    </div>
                </MyTravelLog>
                <MytSocial>
                    <IconReco>{recoNum}</IconReco>
                    <IconComment>{commentNum}</IconComment>
                    <IconDownload>{downloadNum}</IconDownload>
                </MytSocial>
            </div>
        </MyFeedItemLi>
    );
};

export default MyFeedItem;

const MyFeedItemLi = styled.li`
    box-sizing: border-box;
    width: 100%;
    padding: 20px;
    margin-bottom: 20px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.18);
`;

const MyTravelLog = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 10px;
    margin-bottom: 10px;
    background-color: #eee;
    border-radius: 10px;
    cursor: pointer;

    & > div{
        display: flex;
        align-items: center;
    }
`;

const MylIcon = styled.p`
    width: 24px;
    height: 24px;
    margin-right: 5px;
    background-color: #0BD0AF;
    border-radius: 50%;
    overflow: hidden;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;
const MylTitle = styled.p`
    font-weight: 600;
`;
const MylDate = styled.p`
    margin-right: 10px;
    font-size: 11px;
    letter-spacing: -0.5px;
`;
const GoEdit = styled.p`
    font-size: 13px;
    font-weight: 500;
    cursor: pointer;
`;

const MytSocial = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    p{
        margin: 0 24px;
        padding-left: 28px;
        font-weight: 500;
        color: #121212;
        background-repeat: no-repeat;
        background-position: left center;
        background-size: 20px auto;
        opacity: 0.6;
        cursor: pointer;
    }
`;

const IconReco = styled.p`
    background-image: url('/assets/icon-heart-line.svg');
`;
const IconComment = styled.p`
    background-image: url('/assets/icon-chat.svg');
`;
const IconDownload = styled.p`
    background-image: url('/assets/icon-download.svg');
`;