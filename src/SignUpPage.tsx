import { useState } from "react";
import { TextBox } from "./components/TextBox";
import { useNavigate } from "react-router";

export function SignUpPage(): React.JSX.Element {
    const [email, setEmail] = useState<string>("");
    const navigate = useNavigate()
    const handleClick = () => {

        navigate("/home", { state: { email } });

    }   
    return(
        <div className="App">
            <div className="Form-Container">
                <TextBox className="" placeholder='e.g. "user@domain.com"' value={email} onChange={setEmail} />
            </div>
            <button onClick={handleClick}>Sign Up</button>
        </div>
    )
}