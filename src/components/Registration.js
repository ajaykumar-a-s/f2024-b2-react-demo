import { useState } from "react";

function Registration() {

    let [person, setPerson] = useState({
        name: '',
        email: '',
        salary: 0,
        state: ''

    });
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(person);
    }
    const handleNameChange = (e) => {
        setPerson({ ...person, name: e.target.value });
    }

    const handleEmailChange = (e) => {
        setPerson({ ...person, email: e.target.value });
    }

    const handleSalaryChange = (e) => {
        setPerson({ ...person, salary: e.target.value });
    }
    const handlePersonChange = (e) => {
        let attribute = e.target.name;
        let newValue = e.target.value;
        // console.log(name+":"+value);
        setPerson({ ...person, [attribute]: newValue })
    }
    return (
        <>
            <h3>User Registration form:</h3>
            <form onSubmit={handleSubmit}>
                <p>
                    Name: <input type="text" value={person.name} onChange={handleNameChange}></input>
                </p>
                <p>
                    Email: <input type="text" value={person.email} onChange={handleEmailChange}></input>
                </p>
                <p>
                    Salary: <input type="text" name="salary" value={person.salary} onChange={handlePersonChange}></input>
                </p>
                <p>
                    State: <input type="text" name="state" value={person.state} onChange={handlePersonChange}></input>
                </p>
                <button type="submit" >Submit</button>
            </form>

        </>
    );

}

export default Registration;