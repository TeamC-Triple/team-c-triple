import { useNavigate } from 'react-router-dom';
import './MTSection1.css';

const MTSection1 = () => {
    const navigate = useNavigate();

    return(
        <div className="MTSection1" onClick={() => {navigate('/search')}}>
            <p className='content'>궁금한 것이 있으신가요?</p>
        </div>
    )
}

export default MTSection1;