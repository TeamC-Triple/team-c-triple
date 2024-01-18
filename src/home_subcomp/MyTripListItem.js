const MyTripListItem = ({id, city, firstDate, lastDate, photo}) => {
    return(
        <li className="MyTripListItem">
            <p className="item_photo">
                <img src={`/assets/${photo[0]}`}/>
            </p>
            <div className="item_info">
                <p className="item_city">
                    {city} 여행
                </p>
                <p className="item_date">
                    {new Date(firstDate).toLocaleDateString()} - {new Date(lastDate).toLocaleDateString()}
                </p>
            </div>
        </li>
    );
};

export default MyTripListItem;