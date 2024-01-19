
import HotTL_item from "./HotTL_item";
import TravelogItem from "./TravelogItem";


const TravelogFeed = ({type, data})=> {
    
    const truncate = (str, n) => {
        return str && str.length > n
            ? str.substring(0, n) + '...'
            : str;
    }
    if(type === TravelogItem){
        return(
            <div className="TravelogFeed">
                <ul>
                    {data.map((it) => (<TravelogItem key={it.id} {...it} truncate={truncate} />))}
                </ul>
            </div>
        );
    } else if(type === HotTL_item){
        
        return(
            <div className="TravelogFeed">
                <ul>
                    {data.map((it) => (<HotTL_item key={it.id} {...it} truncate={truncate} />))}
                </ul>
            </div>
        );
    }
}

export default TravelogFeed;