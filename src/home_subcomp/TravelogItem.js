

const TravelogItem = ({id, title, writer, profileImg, travelImg, date, ment})=> {
    
    const truncate = (str, n) => {
        return str && str.length > n
            ? str.substring(0, n) + '...'
            : str;
    }
    return(
        <li className="TravelogItem">
            <div className="info">
                <div className="profile"><img src={`/assets/travelogPhoto${profileImg}`} /></div>
                <div className="postInfo">
                    <p className="title">{title}</p>
                    <p className="writer">{writer}님의 일정 <span></span></p>
                </div>
            </div>
            <div className="photo">
                    <div className="mainImg"><img src={`/assets/travelogPhoto${travelImg[0]}`} alt="여행사진" /></div>
                    <div className="smallImg">
                        {travelImg.slice(1).map((it)=>(
                            <p key={it}><img src={`/assets/travelogPhoto${it}`} /></p>
                        ))}
                    </div>
            </div>
            <div className="ment">{truncate(ment, 60)}</div>
        </li>
    );
}

export default TravelogItem;