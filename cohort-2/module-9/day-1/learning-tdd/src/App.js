import './App.css';
import {useState} from "react";

function App() {
    const [password, setPassword] = useState();

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(password);
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

                <label>Password
                <input name='password' onChange={(e) => setPassword(e.target.value)}/>
                </label>

                <button type='submit'>Login</button>
            </form>
        </div>
    );
}

export default App;
