import * as React from "react"


const Contest_preview = ({single_contest, onClick}) => {
    const handleClick = (event) =>{
        event.preventDefault();
        //navigate to a new view
        onClick(single_contest.id);
    }


    return (
        <div className="contest-preview link" onClick = {handleClick}>
            <div className="category">{single_contest.categoryName}</div>
            <div className="contest">{single_contest.contestName}</div>
        </div>
    )
}
export default Contest_preview;