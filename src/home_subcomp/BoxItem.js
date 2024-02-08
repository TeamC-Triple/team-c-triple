import styled from "styled-components";
import BestSpotModal from "./BestSpotModal";
import { useNavigate } from "react-router-dom";

const BoxItem = ({id, ranking, spotName, city, photo})=> {
    
    const navigate = useNavigate();

    const handleSpotInfo = ()=>{
        navigate(`/spotinfo/${id}`);
    };
    return(
        <div className="BoxItem">
            <div className="SpotPhoto" onClick={handleSpotInfo}>
                <div className="bestSpot"><img src={photo}/></div>
                <div className="spotInfo">
                    <div className="ranking">{ranking}</div>
                    <div className="infoTxt">
                        <p className="locationName">{spotName}</p>
                        <p className="cityName">{city}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BoxItem;
