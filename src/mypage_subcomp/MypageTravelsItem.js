import styled from "styled-components";
import { dummyMyTripList } from "../api/data_myTripList";

const MypageTravlesItem = () => {
    return (
        <MPTravlesItem>
            {dummyMyTripList.length>0
                ?<div className="has">
                    {dummyMyTripList.map((item)=>(
                        <div key={item.id}>
                            <div className="photo">
                                <img src={`/assets/${item.photo[0]}`}/>
                            </div>
                            <div className="info">
                                <p className="title">{item.title}</p>
                                <p className="date">{new Date(item.firstDate).toLocaleDateString()} - {new Date(item.lastDate).toLocaleDateString()}</p>
                            </div>
                            <div className="edit">
                                <p>편집</p>
                            </div>
                        </div>
                        ))
                    }
                </div>
                :<p className="no">작성한 여행기가 없습니다.</p>
            }
            <div className="writeTrip">
                <p>+</p>
                <div>
                    <p className="bold">여행기 작성하기</p>
                    <p>지난 여행을 추가해보세요.</p>
                </div>
            </div>
        </MPTravlesItem>
    )
};

export default MypageTravlesItem;

const MPTravlesItem = styled.li`
    padding: 30px 20px;
    .has>div{
        display: flex;
        margin-bottom: 5vw;
    }
    .photo{
        width: 40px;
        height: 40px;
        background-color: rgb(170, 170, 170);
        color: #fff;
        text-align: center;
        box-sizing: border-box;
        border-radius: 50%;
        margin-right: 3vw;
        cursor: pointer;
        overflow: hidden;
    }
    .photo img{
        width: 100%;
        height: 100%;
    }
    .info{
        flex-grow: 1;
        cursor: pointer;
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
    .writeTrip{
        display: flex;
        padding: 10px;
        background-color: #EEEEEE;
        margin-top: 30px;
        cursor: pointer;
    }
    .writeTrip>p{
        width: 28px;
        padding-top: 3px;
        border-radius: 50%;
        font-size: 16px;
        text-align: center;
        background-color: #368FFF;
        color: #fff;
        margin-right: 10px;
    }
    .writeTrip>div>p{
        font-size: 10px;
        line-height: 1.3em;
        color: #666;
    }
    .writeTrip>div .bold{
        font-size: 12px;
        font-weight: 600;
        color: #000;
    }
    .no{
        text-align: center;
        background-color: #EEEEEE;
        color: #666666;
        padding: 20px;
        margin-bottom: 15px;
    }
`