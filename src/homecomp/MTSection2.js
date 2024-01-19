import { useContext, useEffect, useState } from "react";
import { MTLDataContext } from "../App";

import './MTSection2.css';
import MTS2Item from "../home_subcomp/MTS2Item";

const MTSection2 = () => {
    const MTLItem = useContext(MTLDataContext);

    const [data, setData] = useState([]);

    useEffect(()=>{
        setData(MTLItem);
    },[]);

    return(
        <div className="MTSection2">
            <h2>내 여행일정 보기</h2>
            {data.slice(0, 2).map((item)=> <MTS2Item key={item.id} {...item} />)}
        </div>
    )
}

export default MTSection2;