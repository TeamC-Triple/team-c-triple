
import BoxItem from "./BoxItem";

const Best10 = ({SpotsData})=> {
    return(
        <div className="Best10">
            <div className="BestList">
                <div className="row">
                    {SpotsData.filter((it) => it.ranking % 2 === 1).sort((a, b) => a.ranking - b.ranking).map((it)=> <BoxItem key={it.id} {...it} />)
                    }
                </div>
                <div className="row">
                    {SpotsData.filter((it) => it.ranking % 2 === 0).sort((a, b) => a.ranking - b.ranking).map((it)=> <BoxItem key={it.id} {...it} />)
                    }
                </div>
            </div>
        </div>
    );
}

export default Best10;