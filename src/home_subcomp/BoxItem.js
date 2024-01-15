

const BoxItem = ({id, locationName, city})=> {
    return(
        <div className="BoxItem">
            <div className="SpotPhoto">
                <div className="SpotContents">
                    <p>순위</p>
                    <p className="locationName">{locationName}</p>
                    <p>{city}</p>
                </div>
            </div>
        </div>
    );
}

export default BoxItem;