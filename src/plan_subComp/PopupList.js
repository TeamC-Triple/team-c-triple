const PopupList = ({content, click}) => {
    return(
        <p className="PopupList" onClick={click}>{content}</p>
    );
};

export default PopupList;