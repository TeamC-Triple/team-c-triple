const HeaderIcon = ({type, onClick, text}) => {
    return(
        <div className="HeaderIcon">
            <p className={`header_icon ${type}`} onClick={onClick}>
                {text}
            </p>
        </div>
    );
};

export default HeaderIcon;