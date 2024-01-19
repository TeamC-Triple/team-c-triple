const MyFeedItem = ({id, photo, title, firstDate, lasgDate, recoNum, commentNum, downloadNum}) => {
    let firstMonth = new Date(firstDate).getMonth();
    const getToDay = () => {
    };

    return (
        <li className="MyFeedItem">
            <div className="myFeedItem_in">
                <div className="myTravelLog">
                    <p className="myl_icon">{photo}</p>
                    <p className="myl_title">{title}</p>
                    <p className="myl_date">
                    </p>
                    <p className="btn_edit">수정</p>
                </div>
                <div className="mt_social">
                    <p className="social reco">{recoNum}</p>
                    <p className="social comment">{commentNum}</p>
                    <p className="social download">{downloadNum}</p>
                </div>
            </div>
        </li>
    );
};

export default MyFeedItem;