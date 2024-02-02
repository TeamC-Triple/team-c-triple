import { useContext, useState } from "react";
import styled from "styled-components";
import { PlanDispatchContext } from "../App";

const MypageMyTripItem = ({id, city, firstDate, lastDate}) => {
    const [isEdit, setIsEdit] = useState(false);
    const { onRemovePlan } = useContext(PlanDispatchContext);

    const showEdit = () => {
        setIsEdit(true);
        setTimeout(()=>{setIsEdit(false)}, 3000);
    };

    const handleRemove = () => {
        if(window.confirm(`${city}일정을 정말로 삭제하시겠습니까?`)){
            onRemovePlan(id);
        };
    };

    return (
        <MPmyTripItem>
            <div className="photo">
                {city}
            </div>
            <div className="info">
                <p className="title">{city} 일정</p>
                <p className="date">{new Date(firstDate).toLocaleDateString()} - {new Date(lastDate).toLocaleDateString()}</p>
            </div>
                <div className="edit">
                    <p 
                        onClick={showEdit}
                        className={isEdit? 'editBtn noShow' : 'editBtn Show'}
                    >
                        편집
                    </p>
                    {isEdit &&
                        <MPEdit>
                            <p className="dateEdit">일정 수정</p>
                            <p className="deleteTravle" onClick={()=>{handleRemove(id)}}>일정 삭제</p>
                        </MPEdit>
                    }
                </div>
        </MPmyTripItem>
    )
};

export default MypageMyTripItem;

const MPmyTripItem = styled.li`
    display: flex;
    margin-bottom: 5vw;
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
        position: relative;
        width:15px;
        text-indent: -9999px;
        cursor:pointer;
    }
    .editBtn.Show{
        background-image: url(/assets/icon-plusBtn.svg);
        background-repeat: no-repeat;
        background-position: center;
    }
    .editBtn.noShow{
        display:none
    }
`
const MPEdit = styled.div`
    position: absolute;
    top: 10px;
    right: 0;
    display: flex;
    p{
        width:20px;
        height:20px;
        // background-color: blue;
        background-repeat: no-repeat;
        background-position: center;
        background-size: 15px;
        margin-left: 10px;
        cursor:pointer;
    }
    .dateEdit{
        background-image: url(/assets/icon-mytrip.svg);
    }
    .deleteTravle{
        background-image: url(/assets/icon-trash.svg);
    }
`