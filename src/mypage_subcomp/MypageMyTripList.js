import { useContext } from "react";
import MypageMyTripItem from "./MypageMyTripItem";
import { PlanDataContext } from "../App";


const MypageMyTripList = () => {
    const myTripList = useContext(PlanDataContext);
    const today = new Date().getTime();

    return (
        <div className="MypageMyTripList">
            {myTripList?.filter((triplist)=>
                    today-triplist.firstDate < 0
                ).sort((a, b)=> a.firstDate - b.firstDate).map((item)=>(
                <MypageMyTripItem key={item.id} {...item}/>
            ))}
        </div>
    )
};

export default MypageMyTripList;