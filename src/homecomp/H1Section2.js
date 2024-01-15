import './H1Section2.css';
import Best10 from '../home_subcomp/Best10';
import dummyTouristSpots from "../api/dummyTouristSpots";

const H1Section2 = () => {
    return (
        <div className="H1Section2">
            <h2>인기급상승<br />국내 여행지 BEST 10</h2>
            <Best10 dummyTouristSpots={dummyTouristSpots} />
        </div>
    );
};

export default H1Section2;