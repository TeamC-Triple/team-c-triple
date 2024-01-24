import './SideBar.css';
import { AccodionItem } from './accordion/AccordionItem';

const SideBar = ({sidebar, setSidebar, leftChild, headTxt, setIsOpen, openScroll}) => {
    const side = `sideBG ${sidebar}`
    const bar = `bar ${sidebar}`
    const closeBtn = () => {
        setSidebar('off')
        openScroll()
        setIsOpen(false);
    }
    
    return(
        <div className='SideBar'>
            <div className={side}></div>
            <div className={bar}>
                <div className='SDHeader'>
                    <div className='SDH_left'>
                        <button className='close' onClick={closeBtn}>닫기</button>
                    </div>
                    <div className='SDH_right'>
                        <button className='alarm'>알림</button>
                        <button className='option'>옵션</button>
                    </div>
                </div>
                <div className='profile'>
                    <div className='pName'>{headTxt}</div>
                    <div className='pPhoto'>{leftChild}</div>
                </div>
                <div className='btn'>
                    <button className='myTrip'>내 여행</button>
                    <button className='lastTrip'>지난 여행</button>
                    <button className='myTravels'>내 여행기</button>
                </div>
                <AccodionItem />
                <div className='service'>
                    <p>공지사항</p>
                    <p className='line'>ㅣ</p>
                    <p>고객센터</p>
                </div>
            </div>
        </div>
    )
}

export default SideBar;