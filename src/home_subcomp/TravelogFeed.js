
import TravelogItem from "./TravelogItem";


const TravelogFeed = ({data})=> {
    return(
        <div className="TravelogFeed">
            <ul>
                {data.map((it) => (<TravelogItem key={it.id} {...it} />))}
            </ul>
        </div>
    );
}

export default TravelogFeed;