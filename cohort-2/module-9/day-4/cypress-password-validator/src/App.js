import './App.css';
import {useState} from "react";
import {isPasswordValid} from "./validator";

function App() {
    const [password, setPassword] = useState();
    const [valid, setValid] = useState(null);

    const onSubmit = (e) => {
        e.preventDefault();

        setValid(isPasswordValid(password))
    };

    let message;
    if (valid === null) {

    }
    else if (valid) {
        message = <p data-cy="valid-password">Password is valid</p>
    } else {
        message = <p data-cy="invalid-password">Password is invalid</p>
    }

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

                <button data-cy="login" type='submit'>Login</button>
            </form>

            { message }
        </div>
    );
}

export default App;
