import styled from "styled-components";

const MTSection4Item = ({id, title, city, firstDate, lastDate, recoNum, commentNum, downloadNum, photo, reviewTxt}) => {
    const truncate = (str, n) => {
        return str && str.length > n
            ? str.substring(0, n) + '...'
            : str;
    }

    return(
        <li key={id} className="MTSection4Item">
            <div className="top">
                <MT_cityProfile>{city}</MT_cityProfile>
                <div className="top_box">
                    <div className="title">{truncate(title, 24)}</div>
                    <div className="info">
                        <p className="date">{new Date(firstDate).toLocaleDateString()} - {new Date(lastDate).toLocaleDateString()}</p>
                    </div>
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
            <p className="txt">
                {truncate(reviewTxt, 95)}
            </p>
            <div className="postInfo">
                <p className="recoNum">{recoNum}</p>
                <p className="commentNum">{commentNum}</p>
                <p className="downloadNum">{downloadNum}</p>
            </div>
        </li>
    );
};

export default MTSection4Item;

const MT_cityProfile = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #aaa;
    text-align: center;
    color: #fff;
    line-height : 2.8;
    margin-right : 10px;
`