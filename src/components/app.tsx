import ContestList from "./contest-list"
import Contest from "./contest";
import { useEffect, useState } from "react";
import AddContest from "./add-contest";

const App = ({initialList}) => {
    //page: contest or contestList

    const [page, setPage ] = useState("contestList")
    const [currentContestId, setCurrentContestId] = useState()

    useEffect(()=>{
        window.onpopstate = (event) =>{
            const newPage = event.state ?.contestId ? "contest" : "contestList"
            setPage(newPage)
            setCurrentContestId(event.state?.contestId)
        }

    }, [])

    const navigateToContest = (contestId) =>{
        window.history.pushState({contestId} ,"", `/contest/${contestId}` )
        setPage("contest")
        setCurrentContestId(contestId)
    } 

    const navigateToContestList = () =>{
        window.history.pushState({} ,"", "/" )
        setPage("contestList")
        setCurrentContestId(undefined)
    } 
    const handleNewContest = (newContest) =>{
        console.log('New contest:', newContest);
        // window.history.pushState(
        //     newContest.id,
        //     "",
        //     `/contest/${newContest.id}`,
        //   );
          setPage("contest");
          setCurrentContestId(newContest.id);
    }
    
    const switchPages = () =>{
        switch (page) {
            case "contestList":
                return(
                   <>
                        <ContestList contestlist = {initialList} 
                        onContestClick = {navigateToContest}/>

                        <AddContest OnSuccess = {handleNewContest}/>
                   </>
                    
                )  
            case "contest":
                return <Contest id = {currentContestId} onContestListClick = {navigateToContestList}/>
        }
    }

    return (
        <div className="container">
            {switchPages()}        
        </div>   
      
    ); 
};
export default App;