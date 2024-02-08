import { useNavigate } from "react-router-dom";

const MagaSlideItem = ({magaTitle, magaIcon, magaPhoto, id}) => {
    const navigate = useNavigate();
    const goDetail = () => {
        navigate(`/magaDetail/${id}`);
    };

    return (
        <div className="MagaSlideItem" onClick={goDetail}>
            <h3 className="msi_title">{magaTitle}<span>{magaIcon}</span></h3>
            <div className="msi_photo">
                <img 
                    src={`/assets/${magaPhoto}.webp`}
                />
            </div>
        </div>
    );
};

export default MagaSlideItem;