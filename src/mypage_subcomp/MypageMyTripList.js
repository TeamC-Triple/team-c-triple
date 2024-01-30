import { useContext } from "react";
import MypageMyTripItem from "./MypageMyTripItem";
import { MyTripListDataContext } from "../App";


const MypageMyTripList = () => {

    const myTripList = useContext(MyTripListDataContext);
    return (
        <div className="MypageMyTripList">
            {myTripList.map((item)=>(
                <MypageMyTripItem key={item.id} {...item}/>
            ))}
        </div>
    )
};

export default MypageMyTripList;