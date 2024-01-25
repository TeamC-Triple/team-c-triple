import Button from "../common/Button";

const KeywordClick = ()=> {
    return(
        <>
        <Button>
            key={it}
            text={it}
            type={isClick ? 'active' : 'deActive'}
            onClick={()=>{handleClick()}} 
        </Button>
        </>
    );
}

export default KeywordClick;