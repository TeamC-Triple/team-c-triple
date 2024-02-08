import { useContext, useEffect, useState } from "react";
import { PlanDataContext } from "../App";

import './MTSection2.css';
import MTS2Item from "../home_subcomp/MTS2Item";
import Button from "../common/Button";
import { useNavigate } from "react-router-dom";

const MTSection2 = ({type, text, onClick}) => {
    const MTLItem = useContext(PlanDataContext);

    const [data, setData] = useState([]);
    const navigate = useNavigate();

    useEffect(()=>{
        setData(MTLItem);
    },[]);

    return(
        <div className="MTSection2">
            <h2>내 여행일정 보기</h2>
            {data.slice(0, 2).map((item)=> <MTS2Item key={item.id} {...item} />)}
            <Button type={'green'} text={'새로운 여행 일정 짜기'} onClick={() => {navigate('/newplan')}} />
        </div>
    )
}

export default MTSection2;