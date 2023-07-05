import express from "express";
import cors from "cors";
import { connectClient } from "../server/database";
import { Timestamp } from "mongodb";

const api_router = express.Router();
//configure cors
api_router.use(cors());
api_router.use(express.json());

api_router.get("/contests", async(req, res)=>{
    const client = await connectClient();

    const contests = await client
    .collection("contests")
    .find()
    .project({
        id:1,
        categoryName: 1,
        contestName: 1,
        _id: 0
    })
    .toArray()

    res.send(contests);
    console.log("Getting contests data");   
});

api_router.get("/contest/:contestId", async(req, resp) =>{
    const options = {
        id: 1,
        categoryName: 1,
        contestName: 1,
        _id: 0
    }
    console.log(req.params.contestId)
    const client = await connectClient();
    const contest = await client
    .collection("contests")
    .findOne({id: req.params.contestId}, options)

    
    resp.send({contest})

})

api_router.post("/contest/:contestId", async(req, res)=>{
    const client = await connectClient();
    console.log(req.body.newNameValue)
    const name = req.body.newNameValue
    const newNameList = await client
    .collection("contests")
    .findOneAndUpdate(
        {id:req.params.contestId},
        { $push: {
            names: {
                id: name.toLowerCase().replace(' ', "-"),
                name: name,
                timestamp: new Date(),
            },
           },
        },
        {returnDocument: "after"},
        );
        res.send(newNameList.value)
})
export default api_router;