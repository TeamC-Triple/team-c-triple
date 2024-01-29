// 완성된 여행기 페이지

import BottomNaviSub from "../common/BottomNaviSub";
import Header1 from "../common/Header1";

const TravelLog = () => {
    return (
        <div className="TravelLog">
            <Header1 />
            완성된 여행기 페이지
            <BottomNaviSub center={`travellog`} />
        </div>
    );
};

export default TravelLog;