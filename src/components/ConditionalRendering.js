import Admin from "./Admin";
import User from "./User";
function ConditionalRendering() {
    
    let isAdmin = false;
    let count = -1;
    const paraElementA = <p>Para Admin</p>;
    const paraElementB = <p>Para User</p>;
    let displayPara;
    if (isAdmin)
        displayPara = paraElementA;
    else
        displayPara = paraElementB;

    return (
        <>
            {isAdmin ? <Admin /> : <User />}
            {count >= 0 && <p>Count :{count}</p>}
            {displayPara}
        </>
    );
}
export default ConditionalRendering;