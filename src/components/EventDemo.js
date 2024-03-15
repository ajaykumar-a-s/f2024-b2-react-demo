import { useState } from "react";

function EventDemo() {
    let count = 0;
    let [index, setIndex] = useState(0); // hook
    let [isAdmin,setIsAdmin] = useState(false);
    let [name,setName] = useState("");
    let [employee,setEmployee] = useState({});
    let [fruits,setFruits] = useState([""]);
    let [employees,setEmployees] = useState([{}]);

    const handleClick = () => alert("you clicked");
    const handleMessageClick = (s) => alert("Message for :" + s);

    const handleIncrement = () => {
        count = count + 1;
        console.log(count);
    }

    const handleIncrementIndex = () => {
        setIndex(index + 1);
        //console.log(count);
    }
    const handleToggleAdmin = ()=>
    {
        setIsAdmin(!isAdmin);
    }
    return (
        <>
            <h3> Event demo</h3>
            {
                isAdmin && <h3>Welcome admin</h3>
            }
            <button onClick={handleToggleAdmin}>Toggle Me.</button>

            <button onClick={handleClick}>Click Me.</button>

            <button onClick={() => alert("Hello !")}>Greet.</button>

            <button onClick={() => handleMessageClick("Ford")}>Message me</button>
            <p>Count:{count}</p>
            <button onClick={handleIncrement}>Increment count</button>
            <p>Index:{index}</p>
            <button onClick={handleIncrementIndex}>Increment index</button>



        </>
    )
}

export default EventDemo;