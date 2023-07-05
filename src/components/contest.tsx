import { useEffect, useState } from "react";
import {addNewName, fetchContest} from "../api-client"
import Header from "./header";


const Contest = ({id, onContestListClick}) =>{

    const [contestData, setContestData] = useState({ contestName: "", description: "" , names: [], id})
    useEffect(()=>{
        fetchContest(id)
        .then((contestData)=>{
            setContestData(contestData)
        })
    }, [id])

    const handleNewNameSubmit = async (event) =>{
        event.preventDefault();
        const newName = event.target.newName
        const updateContest = await addNewName(contestData.id,  newName.value)
        setContestData(updateContest)
    }
    const handleClickContestList =  (event) =>{
        event.preventDefault()
        onContestListClick()

    }
    return(
        <>
        <Header message= {contestData.contestName}/>
        <div className="contest">
            <div className="title">Contest Description</div>
            <div className="description">{contestData.description}</div> 

            <div className="title">Proposed Names</div>
            <div className="body">

                {contestData.names?.length > 0 ?
                <div className="list">
                    {contestData.names.map((proposedNames)=>{
                        return <div key = {proposedNames.id}>{proposedNames.name}</div>
                    })}
                </div>
                : <div>No Names proposed yet</div>
                }
                
            </div>
            <div className="title">Propose a new name</div>
                <div className="body">
                    <form onSubmit={handleNewNameSubmit}>
                        <input type= "text" 
                        placeholder="New name here.." 
                        name = "newName"></input>
                        <button type = "submit">submit</button>
                    </form>
                </div>
        </div>

        <a href="/" className="link" onClick={handleClickContestList}>Contest List</a>

    </>
    )

}
export default Contest;