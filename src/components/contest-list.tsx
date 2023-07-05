import { useEffect, useState } from "react"
import Contest_preview from "./contest-preview"
import {fetchContestList} from "../api-client"
import Header from "./header";


const ContestList = ({contestlist, onContestClick}) =>{
   
    const [contests, setContests] = useState(contestlist);
    useEffect(() =>{
        fetchContestList()
        .then((data) =>{
            console.log("List of Contests", data)
            setContests(data)
        });
    }, []);
   
    return (
        <>
        <Header message="Naming Contests"/>
        <div className="contest-list">
            { contests.map((contest) =>{
                return <Contest_preview key = {contest.contestName} 
                single_contest= {contest} 
                onClick = {onContestClick}/>
            })}
        </div>
        

</>
    )
}
export default ContestList;

