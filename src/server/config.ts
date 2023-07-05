//process.env: to store the PORT HOST
//read it from process.env holds all env variables 

const env = process.env

export const PORT = env.PORT ?? "8080";
export const HOST = env.HOST ?? "localhost"
export const SERVER_URL = `http://${HOST}:${PORT}`


export const mongoDB_URI = env.mongoDB_URI ?? "mongodb://localhost:27017" 
export const database = env.database ?? "local"

export default {
    PORT,
    HOST,
    SERVER_URL,

    mongoDB_URI,
    database,
}