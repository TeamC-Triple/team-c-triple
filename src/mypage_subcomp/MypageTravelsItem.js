import { useContext, useState } from "react";
import styled from "styled-components";
import { LogDispatchContext } from "../App";

const MypageTravlesItem = ({ id, city, firstDate, lastDate, photo, title }) => {
    const [isEdit, setIsEdit] = useState(false);
    const { onRemoveLog } = useContext(LogDispatchContext);

    const showEdit = () => {
        setIsEdit(true);
        setTimeout(() => { setIsEdit(false) }, 3000);
    };

    const handleRemove = () => {
        if (window.confirm(`${city} 여행기를 정말로 삭제하시겠습니까?`)) {
            onRemoveLog(id);
        };
    };

    return (
        <MPTravlesItem>    
            <div key={id}>
                <div className="photo">
                    <img src={`/assets/${photo[0]}`} />
                </div>
                <div className="info">
                    <p className="title">{title}</p>
                    <p className="date">{new Date(firstDate).toLocaleDateString()} - {new Date(lastDate).toLocaleDateString()}</p>
                </div>
                <div className="edit">
                    <p
                        onClick={showEdit}
                        className={isEdit ? 'editBtn noShow' : 'editBtn Show'}
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
            </div>
        </MPTravlesItem>
    )
};

export default MypageTravlesItem;

const MPTravlesItem = styled.li`
    padding: 0 20px;
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
    .no{
        text-align: center;
        background-color: #EEEEEE;
        color: #666666;
        padding: 20px;
        margin-bottom: 15px;
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