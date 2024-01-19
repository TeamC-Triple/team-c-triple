import './Button.css';

const Button = ({type, text, onClick}) => {
    return (
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