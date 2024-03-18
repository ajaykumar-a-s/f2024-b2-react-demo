import { useState } from "react";
import demoService from "../services/DemoService";
function Sender(){

    let [data,setData]=useState("");

    const handleSendData =()=>{
        demoService.setData(data);
    }

    const handleGetData=()=>{
        console.log(demoService.getData());
    }

    return(
        <>
        <h3> Sender :</h3>
        Data: <input value={data} onChange={(e)=>setData(e.target.value)}></input>
        <button onClick={handleSendData}>Send data</button>
        <button onClick={handleGetData}>Get data</button>
        </>
    )
}
export default Sender;