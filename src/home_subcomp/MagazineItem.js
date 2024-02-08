import { useNavigate } from "react-router-dom";
const MagazineItem = ({id, magaPhoto, magaTitle, magaMent, magaWriter, magaWeek}) => {
    const navigate = useNavigate();
    const goDetail = () => {
        navigate(`/magaDetail/${id}`);
    };
    return(
        <li className="MagazineItem" onClick={goDetail}>
            <p className="itemPhoto"><img src={`/assets/${magaPhoto}.webp`} /></p>
            <h3 style={{whiteSpace: "pre-wrap"}} className="itemTitle">{magaTitle}</h3>
            <p className="itemMent">{magaMent}</p>
            <div className="itemWeek">
                <p className="writer">{magaWriter}</p>
                <p className="week">{magaWeek}</p>
            </div>
        </li>
    )
}

export default MagazineItem;