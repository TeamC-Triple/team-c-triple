const MagaSlideItem = ({magaTitle, magaIcon, magaPhoto, id}) => {
    return (
        <div className="MagaSlideItem">
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