import { useState } from "react";
import accountService from "../../services/AccountService";
import { useEffect } from "react";

function DisplayAccounts() {

   //let accounts;

   let [accounts,setAccounts] = useState([]);

   useEffect(() => {
    //Runs only on the first render
    loadAllData();
  }, []);
    const loadAllData = () => {

        accountService.getAllAccounts()
        .then(
            (resp)=>{
                console.log(resp.data);
                //accounts = resp.data;
                setAccounts(resp.data);
            }
        )
        .catch(
            (err)=>{
                console.log(err);
            }
        )
        .finally(
            ()=>{
                console.log("Loaded all data from Server");
            }
        )
    }

    // loadAllData();


    return (
        <>
            <h3> Display all Accounts.</h3>
            {JSON.stringify(accounts)}
        </>
    );
}

export default DisplayAccounts;