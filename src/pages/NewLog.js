// 새로운 여행기 작성 페이지
// LogEdit => 새로운 여행기 작성 및 수정까지 가능하게끔 제작할 예정.
// 일단은 새로운 여행기 작성에 초점을 둬 제작.
// 헤더는 컴포넌트별로 따로 넣기. 수정일때는 headTxt가 작성 <-> 편집 으로 바뀌게끔.


import LogEdit01 from "../logComp/LogEdit01";
import LogEdit02 from "../logComp/LogEdit02";

const NewLog = () => {
    return (
        <div className="NewLog">
            새로운 여행기 작성 페이지
            <LogEdit01 />
            <LogEdit02 />
        </div>
    );
};

export default NewLog;