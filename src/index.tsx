import {createRoot} from "react-dom/client";
import App from "./components/app";

const con = document.getElementById('app');
const root = createRoot(con);


root.render(<App initialList ={[]}/>);



