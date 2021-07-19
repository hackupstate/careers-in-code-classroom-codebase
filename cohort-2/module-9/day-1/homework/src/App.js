import './App.css';
import {useState} from "react";
import {checkGuess} from "./codebreaker";

const secretCode = Math.floor(Math.random() * 1000);

function App() {
    const [guess, setGuess] = useState();
    const [guessMessage, setGuessMessage] = useState();

    const onCheckGuess = (e) => {
        const msg = checkGuess(guess, secretCode);
        setGuessMessage(msg);
    }

    return (
        <div className="App">
            <p>Guess the code!</p>
            <input type="number" onChange={(e) => setGuess(e.target.value)}/>
            <button onClick={onCheckGuess}>Submit</button>
            <br/>
            {guessMessage ? <p>{guessMessage}</p> : null}
        </div>
    );
}

export default App;
