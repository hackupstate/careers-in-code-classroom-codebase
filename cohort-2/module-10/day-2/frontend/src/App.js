import './App.css';
import {useEffect, useState} from "react";
import axios from "axios";

const stateToMessage = {
    null: <p>Pinging {process.env.REACT_APP_API_URL}...</p>,
    true: <p>Ping success!</p>,
    false: <p>Ping to {process.env.REACT_APP_API_URL} failed... check console log</p>
}

function App() {
    const [pingState, setPingState] = useState(null);

    useEffect(() => {
        axios.get(process.env.REACT_APP_API_URL + '/ping').then(() => {
            setPingState(true);
        }).catch(() => {
            setPingState(false);
        })
    }, [])

    return (
        <div>
            {stateToMessage[pingState]}
        </div>
    );
}

export default App;
