import './App.css';
import {useState} from "react";
import {isPasswordValid} from "./validator";

function App() {
    const [password, setPassword] = useState();
    const [message, setMessage] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();

        if (isPasswordValid(password)) {
            setMessage("Password is valid!");
        } else {
            setMessage("Password is not valid!")
        }
    };

    return (
        <div>
            <p>
                Enter your username and password
            </p>

            <form onSubmit={onSubmit}>
                <label>Username
                <input id='username'/>
                </label>

                <label>Password
                <input id='password' onChange={(e) => setPassword(e.target.value)}/>
                </label>

                <button type='submit'>Login</button>
            </form>

            { message }
        </div>
    );
}

export default App;
