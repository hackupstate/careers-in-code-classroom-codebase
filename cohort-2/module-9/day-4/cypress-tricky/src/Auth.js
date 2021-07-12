import {useState} from "react";

export const Auth = ({children}) => {
    const [authenticated, setAuthenticated] = useState(false);

    return <div>
        {authenticated ? children : <div>
            <p>Please sign in</p>
            <button onClick={() => setAuthenticated(true)}>Login</button>
        </div>}
    </div>
}