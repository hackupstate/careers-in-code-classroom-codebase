import './App.css';
import {useState} from "react";
import {validatePassword} from "./validation";

function App() {
    const [password, setPassword] = useState();

    const onSubmit = (e) => {
        e.preventDefault();
        const isValid = validatePassword(password);
        if (isValid) {
            alert("It's valid!");
        } else {
            alert("It's not valid! OH NO");
        }
    };

    return (
        <div>
            <p>
                Enter your username and password
            </p>

            <form onSubmit={onSubmit}>
                <label>Username
                <input name='username'/>
                </label>

                <label>Password</label>
                <input name='password' onChange={(e) => setPassword(e.target.value)}/>

                <button type='submit'>Login</button>
            </form>
        </div>
    );
}

export default App;
