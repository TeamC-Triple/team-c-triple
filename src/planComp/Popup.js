import styled from "styled-components";

const Popup = ({title, list1, list2, list3, list4, popUp, setPopUp, setIsPopupOpen, openScroll}) => {
    const popupBg = `popupBg ${popUp}`
    const popupIn = `${popUp}`

    const closePopUp = () => {
        setPopUp('off')
        setIsPopupOpen(false);
        openScroll();
    };

    return (
        <PopUpModal>
            <div className={popupBg}></div>
            <PopUpList className={popupIn}>
                <h4 className="p_title">{title}</h4>
                <div className="p_list">
                    <ul>
                        {list1}
                        {list2}
                        {list3}
                        {list4}
                    </ul>
                </div>
                <button onClick={closePopUp}>닫기</button>
            </PopUpList>
        </PopUpModal>
    );
};

export default Popup;

const PopUpModal = styled.div`
    position: relative;

    .popupBg{
        position : fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: rgba(0, 0, 0, 0.5);
        z-index: 800;
    }
    .popupBg.on{
        display: block;
    }
    .popupBg.off{
        display: none;
    }
`;
const PopUpList = styled.div`
    position: fixed;
    padding: 25px 30px 40px;
    background-color: #fff;
    border-radius: 20px 20px 0 0;
    transition: all 600ms cubic-bezier(0.86, 0, 0.07, 1);
    z-index: 810;

    &.on{
        bottom: 0;
        left: 0;
        right: 0;
    }
    &.off{
        bottom: -100%;
        left: 0;
        right: 0;
    }

    .p_title{
        margin-bottom: 24px;
        font-size: 13px;
        font-weight: 500;
        color: #666;
    }

    .p_list li{
        margin-bottom: 20px;
        font-size: 18px;
        font-weight: 600;
    }

    button{
        position: absolute;
        top: 20px;
        right: 20px;
        width: 30px;
        height: 30px;
        text-indent: -99999px;
        background-image: url('./assets/icon-cancel.svg');
        background-size: 20px auto;
        background-repeat: no-repeat;
        background-position: center;
        opacity: 0.8;
    }
`;