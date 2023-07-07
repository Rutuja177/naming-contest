import { API_SERVER_URL } from "./public-config";
import axios from "axios";

export const fetchContestList = async () =>{
    const resp = await axios.get(`${API_SERVER_URL}/contests`);
    return resp.data
}
export const fetchContest = async (contestId) =>{
    const resp = await axios.get(`${API_SERVER_URL}/contest/${contestId}`); 
    return resp.data.contest
}
export const addNewName = async (contestId, newNameValue) =>{
    const resp = await axios.post(`${API_SERVER_URL}/contest/${contestId}`, 
    {newNameValue}
    )
    return resp.data
}

export const addNewContest = async ({newContestData}) =>{
    const resp = await axios.post(`${API_SERVER_URL}/contests`, 
    newContestData
    )
    return resp.data
    
}

export default {
    fetchContestList,
    fetchContest,
    addNewName,
    addNewContest
}