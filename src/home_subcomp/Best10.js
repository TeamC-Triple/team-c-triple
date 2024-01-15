import BoxItem from "./BoxItem";

const Best10 = ({dummyTouristSpots})=> {
    return(
        <div className="Best10">
            <div className="box">
                {dummyTouristSpots.map((it)=> (
                    <BoxItem key={it.id} {...it} />
                ))}
            </div>
        </div>
    );
}

export default Best10;