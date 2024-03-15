import { useState } from "react";

function DemoForm() {

    let [name, setName] = useState("");
    let [password, setPassword] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault(); // prevent form reload
        console.log(name);
        console.log(password);
    }

    return (
        <>
            <h3> User Login Form:</h3>
            <form onSubmit={handleSubmit}>
                <p>User Name:
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)}></input>
                </p>
                <p>Password:
                    <input type="text" value={password} onChange={(e) => setPassword(e.target.value)}></input>
                </p>
                <button type="submit">Submit</button>
            </form>
            <p>Name:{name}</p>
        </>
    );
}
export default DemoForm;