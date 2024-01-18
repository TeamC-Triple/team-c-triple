
import TravelogItem from "./TravelogItem";


const TravelogFeed = ({TravelogData})=> {
    return(
        <div className="TravelogFeed">
            <ul>
                {TravelogData.map((it) => <TravelogItem key={it.id} {...it} />)}
            </ul>
        </div>
    );
}

export default TravelogFeed;