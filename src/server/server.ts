import express from "express";
import config from "./config";
import api_router from "./api-router";
import serverRender from "./render"

const server = express()

server.use(express.static("dist")) //use stuff from dist 

server.set("view Engine", "ejs");

server.use("/api", api_router);

server.get(["/","/contest/:contestId"], async(req, res) =>{
    const initialMarkup =   await serverRender();
    res.render("../views/index.ejs", 
        {initialMarkup}
    
    )                                                  
})

server.listen(config.PORT, config.HOST, ()=> {
    console.info(`Hi! Express server listening at ${config.SERVER_URL}`);
})