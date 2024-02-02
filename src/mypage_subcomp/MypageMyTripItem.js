import styled from "styled-components";
import { dummyMyTripPlan } from "../api/data_myTripPlan";

const MypageMyTripItem = () => {
    return (
        <MPmyTripItem>
            {dummyMyTripPlan.map((item)=>(
                <div key={item.id}>
                    <div className="photo">
                        {item.city}
                    </div>
                    <div className="info">
                        <p className="title">{item.city} 일정</p>
                        <p className="date">{new Date(item.firstDate).toLocaleDateString()} - {new Date(item.lastDate).toLocaleDateString()}</p>
                    </div>
                    <div className="edit">
                        <p>편집</p>
                    </div>
                </div>
            ))}
        </MPmyTripItem>
    )
};

export default MypageMyTripItem;

const MPmyTripItem = styled.li`
    >div{
        display: flex;
        margin-bottom: 5vw;
    }
    .photo{
        width: 40px;
        height: 40px;
        background-color: rgb(170, 170, 170);
        color: #fff;
        text-align: center;
        padding-top: 10px;
        box-sizing: border-box;
        border-radius: 50%;
        margin-right: 3vw;
        cursor:pointer;
    }
    .info{
        flex-grow: 1;
        cursor:pointer;
    }
    .info .title{
        font-weight: 600;
    }
    .info .date{
        font-size: 10px;
        color: #666;
    }
    .edit{
        width:15px;
        background-image: url(/assets/icon-plusBtn.svg);
        background-repeat: no-repeat;
        background-position: center;
        text-indent: -9999px;
        cursor:pointer;
    }
`