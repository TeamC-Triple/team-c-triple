
const RecentLi = ({id, inputData, onDeleteSearchResult}) => {
    const clickDel = () => {
        onDeleteSearchResult(id);
    }

    return (
        <li><p>{inputData}</p> <button onClick={clickDel}>삭제</button></li>
    );
};

export default RecentLi;