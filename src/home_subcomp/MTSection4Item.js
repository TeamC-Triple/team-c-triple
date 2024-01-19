const MTSection4Item = ({id, title, city, firstDate, lastDate, recoNum, commentNum, downloadNum, photo, reviewTxt}) => {
    const truncate = (str, n) => {
        return str && str.length > n
            ? str.substring(0, n) + '...'
            : str;
    }

    return(
        <li key={id} className="MTSection4Item">
            <div className="top">
                <p className="title">{truncate(title, 13)}</p>
                <div className="top_R">
                    <p className="city">{city}</p>
                    <p className="date">{new Date(firstDate).toLocaleDateString()} - {new Date(lastDate).toLocaleDateString()}</p>
                </div>
            </div>
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
                <p className="recoNum">{recoNum}</p>
                <p className="commentNum">{commentNum}</p>
                <p className="downloadNum">{downloadNum}</p>
            </div>
            <p className="txt">
                {truncate(reviewTxt, 95)}
            </p>
        </li>
    );
};

export default MTSection4Item;