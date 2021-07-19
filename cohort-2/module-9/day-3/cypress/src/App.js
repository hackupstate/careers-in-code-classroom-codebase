import './App.css';
import {useForm} from "react-hook-form";
import {useState} from "react";
import {valid} from "./validation";

function App() {
    const {register, handleSubmit} = useForm();
    const [isValid, setValid] = useState(false);
    const [formSubmitted, setFormSubmitted] = useState(false);

    const onSubmit = async (data) => {
        if (await valid(data) ) {
            setValid(true);
        } else {
            setValid(false);
        }
        setFormSubmitted(true);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>Username</label>
                <input data-cy="username" {...register("username")} />
                <br/>

                <label>Password</label>
                <input data-cy="password" {...register("password")} />
                <br/>

                <button data-cy="submit" type={"submit"}>Submit</button>
            </div>
            {formSubmitted && isValid ? <p data-cy="valid-message">Valid user account!</p> : null}
            {formSubmitted && !isValid ? <p data-cy="invalid-message">Invalid user account!</p> : null}
        </form>
    );
}

export default App;
