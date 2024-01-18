const MTSection4Item = ({id, title, city, firstDate, lastDate, recoNum, commentNum, downloadNum, photo, reviewTxt}) => {
    return(
        <li className="MTSection4Item">
            <p>{title}</p>
            <div className="photoList">
                <div className="p_L">
                    <img />
                </div>
                <div className="p_R">
                    <img />
                    <img />
                    <img />
                    <img />
                </div>
            </div>
            <div className="info">
                <p>{recoNum}</p>
                <p>{commentNum}</p>
                <p>{downloadNum}</p>
            </div>
            <p className="txt">
                {reviewTxt}
            </p>
        </li>
    );
};

export default MTSection4Item;