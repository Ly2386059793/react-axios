import axios from "axios";
export const getDatelist= params=>{
    return axios.get("http://www.phonegap100.com/appapi.php",{params:params})
}
