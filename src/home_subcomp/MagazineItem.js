const MagazineItem = ({id, magaPhoto, magaTitle, magaMent, magaWriter, magaWeek}) => {
    return(
        <li className="MagazineItem">
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