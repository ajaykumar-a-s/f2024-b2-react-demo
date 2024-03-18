import {axiosInstance} from "./axios-http-client"
class AccountService{

    getAllAccounts(){
        return axiosInstance.get('http://localhost:8090/accounts');
    }
}

export default new AccountService();