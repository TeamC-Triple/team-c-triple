

const TravelogItem = ({id, title, writer, profileImg, travelImg, date, ment, city})=> {
    return(
        <li className="TravelogItem">
            <div className="PostInfo">
                <div className="left"><img src={profileImg} /></div>
                <div className="right">
                    <p className="title">{title}</p>
                    <p className="writer">{writer}님의 일정 <span>{date}</span></p>
                </div>
                <div className="photo">
                    {travelImg}
                </div>
                <div className="ment">{ment}</div>
            </div>
        </li>
    );
}

export default TravelogItem;