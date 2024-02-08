import './Header1.css';

const Header1 = ({ headTxt, leftChild, centerChild, rightChild1, rightChild2, onClickHeadTxt }) => {
    return (
        <header className="Header1">
            <div className='hd_left'>
                <div className="head_btn_left">
                    {leftChild}
                </div>
                <div className="head_text" onClick={onClickHeadTxt}>
                    {headTxt}
                </div>
            </div>
            <div className='centerChild'>
                {centerChild}
            </div>
            <div className='head_btn_right'>
                <div className="head_btn_right1">
                    {rightChild1}
                </div>
                <div className="head_btn_right2">
                    {rightChild2}
                </div>
            </div>
        </header>
    );
};

export default Header1;