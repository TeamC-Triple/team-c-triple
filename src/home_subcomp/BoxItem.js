
const BoxItem = ({ranking, locationName, city, photo})=> {
    return(
        <div className="BoxItem">
            <div className="SpotPhoto">
                <img src={photo}/>
                <div className="spotInfo">
                    <div className="ranking">{ranking}</div>
                    <div className="infoTxt">
                        <p className="locationName">{locationName}</p>
                        <p>{city}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BoxItem;