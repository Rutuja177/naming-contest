import { useState } from "react";
import { addNewContest } from "../api-client";

const AddContest = ({OnSuccess}) =>{
    const [showForm, setShowForm] = useState(false)

    const handleNewContest = async (event) =>{
        event.preventDefault()
        const newContestData = {
            contestName: event.target[0].value,
            categoryName: event.target[1].value,
            description: event.target[2].value,
          };
        console.log("New Contest data sending from client", newContestData)
         
        const newContest = await addNewContest({newContestData})
        
        if(newContest?.id){
            OnSuccess(newContest.id)
        }
        else {
            console.log("Error")
        }

    }

    return(
        <div className="add-new-contest">
        {!showForm && (
            <div className="link" onClick={() => setShowForm(true)}>
            Add New Contest
         </div>
        )}
        
        { showForm && (
            <form onSubmit = {handleNewContest}>
            <input type= "text" 
               placeholder="Contest Name" 
               name = "contestName"></input>
               <input type= "text" 
               placeholder="Contest Category" 
               name = "categoryName"></input>
              <textarea 
              placeholder="Contest Description" 
               name = "description"></textarea>
           <button type = "submit">submit</button>
       </form> 
        )
        }
    </div>
    )

}
export default AddContest;