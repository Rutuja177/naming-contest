import {fetchContestList} from "../api-client"
import App from "../components/app"
import {renderToString } from "react-dom/server"

const serverRender = async () => {

    const initialContests = await fetchContestList()

    const initialMarkup = renderToString(
        <App initialList ={initialContests}/>
    ) 
    return initialMarkup;

}
export default serverRender;