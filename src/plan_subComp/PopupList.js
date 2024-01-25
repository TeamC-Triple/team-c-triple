const PopupList = ({content, click}) => {
    return(
        <li className="PopupList" onClick={click}>{content}</li>
    );
};

export default PopupList;