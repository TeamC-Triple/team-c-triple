import './Button.css';

const Button = ({type, text, onClick}) => {
    return (
        // 임시로 넣어놈. 태그 수정하셔도 됩니다.
        <p className='Button'>
            <button className={`btn ${type}`} onClick={onClick}>
                {text}
            </button>
        </p>
    );
};

Button.defaultProps = {
    type : 'default'
}

export default Button;