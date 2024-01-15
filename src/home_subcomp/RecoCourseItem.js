const RecoCourseItem = ({id, title, city, period, photo}) => {
    return (
        <li className="RecoCourseItem">
            <p className="item_photo">
                <img src={photo} />
            </p>
            <div className="item_info">
                <p className="item_title">
                    {title}
                </p>
                <p className="item_city">
                    <span>지역 : </span>{city}
                </p>
                <p className="item_period">
                    {period}
                </p>
            </div>
        </li>
    );
}

export default RecoCourseItem;