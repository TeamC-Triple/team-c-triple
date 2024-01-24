import { useCallback, useState } from 'react';
import SideBar from '../side/SideBar';
import './Header1.css';

const Header1 = ({headTxt, leftChild, rightChild1, rightChild2}) => {
    const [sidebar, setSidebar] = useState('off');

    const [isOpen, setIsOpen] = useState(false);
    const { lockScroll, openScroll } = useBodyScrollLock();

    const sideBtnClick = () => {
        setSidebar('on')
        lockScroll();
        setIsOpen(true);
    };

    function useBodyScrollLock() {
        let scrollPosition = 0;
        const lockScroll = useCallback(() => {
          scrollPosition = window.pageYOffset;
          document.body.style.overflow = 'hidden';
          document.body.style.position = 'fixed';
          document.body.style.top = `-${scrollPosition}px`;
          document.body.style.width = '100%';
        }, []);
      
        const openScroll = useCallback(() => {
          document.body.style.removeProperty('overflow');
          document.body.style.removeProperty('position');
          document.body.style.removeProperty('top');
          document.body.style.removeProperty('width');
          window.scrollTo(0, scrollPosition);
        }, []);
      
        return { lockScroll, openScroll };
    }

    return (
        <header className="Header1">
             <div className="head_btn_left">
                {leftChild}
            </div>
            <p className="head_text">
                {headTxt}
            </p>
            <div className='head_btn_right'>
                <div className="head_btn_right1">
                    {rightChild1}
                </div>
                <div className="head_btn_right2" onClick={sideBtnClick}>
                    {rightChild2}
                </div>
            </div>
            <SideBar sidebar={sidebar} setSidebar={setSidebar} leftChild={leftChild} headTxt={headTxt} setIsOpen={setIsOpen} openScroll={openScroll} />
        </header>
    );
};

export default Header1;