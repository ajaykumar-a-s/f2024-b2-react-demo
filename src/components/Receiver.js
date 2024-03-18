import demoService from "../services/DemoService"

export default function Receiver(){

    const handelGetData = ()=>{
        console.log(demoService.getData());
    }
    return(
        <>
        <h4>Receiver</h4>
        <button onClick={handelGetData}>Get Data</button>
        </>
    )
}