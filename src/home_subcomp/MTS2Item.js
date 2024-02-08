import { useNavigate } from "react-router-dom";

const MTS2Item = ({id, city, firstDate, lastDate}) => {
    const navigate = useNavigate();

    const getDayOfWeek = (yyyyMMdd) => {
        const week = ['일', '월', '화', '수', '목', '금', '토'];
        const dayWeek = week[new Date(yyyyMMdd).getDay()];
        return dayWeek
    }

    const today = new Date().getTime();

    const untilFirstDate = new Date(firstDate - today);
    const day = Math.floor(untilFirstDate / (1000*3600*24)+1);

    return(
        <li className="MTS2Item" onClick={() => {navigate(`/editplan/${id}`)}}>
            <div className="MTSLeft">
                <p className="photo">{city}</p>
                <p className="city">{city} 여행</p>
                <p className="d-day">D-{day}</p>
            </div>
            <div className="MTSRight">
                <p className="day">{new Date(firstDate).getMonth()+1}.{new Date(firstDate).getDate()}({getDayOfWeek(firstDate)}) - {new Date(lastDate).getMonth()+1}.{new Date(lastDate).getDate()}({getDayOfWeek(lastDate)})</p>
                <p className="edit">수정</p>
            </div>
        </li>
    )
}

export default MTS2Item;