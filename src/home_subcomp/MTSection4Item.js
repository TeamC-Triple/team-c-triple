const MTSection4Item = ({id, title, city, firstDate, lastDate, recoNum, commentNum, downloadNum, photo, reviewTxt}) => {
    const truncate = (str, n) => {
        return str && str.length > n
            ? str.substring(0, n) + '...'
            : str;
    }

    return(
        <li className="MTSection4Item">
            <p>{title}</p>
            <div className="photoList">
                <div className="p_L">
                    <img src={`/assets/${photo[0]}`}/>
                </div>
                <div className="p_R">
                    {photo.slice(1).map((it)=>(
                            <p key={it}><img src={`/assets/${it}`} /></p>
                    ))}
                </div>
            </div>
            <div className="info">
                <p>{recoNum}</p>
                <p>{commentNum}</p>
                <p>{downloadNum}</p>
            </div>
            <p className="txt">
                {truncate(reviewTxt, 100)}
            </p>
        </li>
    );
};

export default MTSection4Item;