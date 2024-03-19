import { useState } from "react";
import accountService from "../../services/AccountService";
import { useEffect } from "react";

function AccountsTable({ accountArray,handleDelete }) {

    console.log(accountArray);

 

    return (
        <>
            <h3> All Accounts:</h3>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Balance</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        accountArray.map(
                            (account) =>
                            (<tr key={account.id}>
                                <td>{account.id}</td>
                                <td>{account.name}</td>
                                <td>{account.amount}</td>
                                <td><button onClick={() => handleDelete(account.id)}>Delete</button></td>
                            </tr>)


                        )
                    }

                </tbody>
            </table>

        </>
    )

}

function DisplayAccounts() {

    //let accounts;

    let [accounts, setAccounts] = useState([]);

    useEffect(() => {
        //Runs only on the first render
        loadAllData();
    }, []);

    const loadAllData = () => {

        accountService.getAllAccounts()
            .then(
                (resp) => {
                    console.log(resp.data);
                    //accounts = resp.data;
                    setAccounts(resp.data);
                }
            )
            .catch(
                (err) => {
                    console.log(err);
                }
            )
            .finally(
                () => {
                    console.log("Loaded all data from Server");
                }
            )
    }

    // loadAllData();

    const handleDelete = (id) => {
        console.log(id);
        accountService.deleteAccountById(id)
        .then(
            (resp)=>{
              console.log(resp);      
              setAccounts(accounts.filter((a)=>a.id !==id))
            }
        )
        .catch(
            (err)=>{
                console.log(err);
            }
        )
    }

    return (
        <>
            <h3> Display all Accounts.</h3>
           
            {
                accounts.length > 0 ? <AccountsTable accountArray={accounts} handleDelete={handleDelete}/> : <h3> No Accounts found.</h3>
            }
        </>
    );
}

export default DisplayAccounts;