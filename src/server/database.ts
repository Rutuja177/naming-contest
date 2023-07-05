import { MongoClient } from "mongodb";
import config, { database } from "./config";

let connectedClient;


export const connectClient = async () => {
    if(connectedClient){
        return connectedClient.db(database)
    }

    const client = new MongoClient(config.mongoDB_URI)
    await client.connect();
    await client.db(config.database);
    client.db(config.database).command({ping: 1})
    console.info("Connected to the database")

    connectedClient = client;
    return connectedClient.db(database)
}

export const stopClient = async () => {
    await connectedClient?.close();
}
