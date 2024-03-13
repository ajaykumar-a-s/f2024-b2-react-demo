
// function Details(props){

//     return (
//         <>
//         <h6>Employee {props.name} details: </h6>
//         <p>salary: {props.salary}</p>
//         </>
//     );
// }

function Details({name,salary}){

    return (
        <>
        <h6>Employee {name} details: </h6>
        <p>salary: {salary}</p>
        </>
    );
}

function Details2(props){
    const emp = props.emp;

    return (
        <>
        <h6>Employee details: </h6>
        <p>Id: {emp.id}</p>
        <p>Name: {emp.name}</p>
        <p>salary: {emp.salary}</p>
        </>
    );
}
function Details3(props){
    const {id,name,salary} = props.emp;

    return (
        <>
        <h6>Employee details: </h6>
        <p>Id: {id}</p>
        <p>Name: {name}</p>
        <p>salary: {salary}</p>
        </>
    );
}

function PropsDemo() {

    const employees = [{ id: 1, name: "Ford", salary: "1500" },
    { id: 2, name: "Ford 2", salary: "2500" }];
    const empName= "Ford India";

    return (
        <>
            <h3>Props Demo:</h3>
            <Details name={empName} salary="35000"></Details>
            <Details2 emp={employees[0]} ></Details2>
            <Details2 emp={employees[1]} ></Details2>
            <h3>Pass the entire emp object as pops.</h3>
            <Details3 emp={employees[1]} ></Details3>
        </>
    );
}
export default PropsDemo;