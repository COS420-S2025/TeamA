import React from "react";
import { useNavigate } from "react-router-dom"

export function UploadButton(): React.JSX.Element {
    // Setup navigate
    const navigate = useNavigate()
    // Navigate to download page when clicked
    const handleClick = () => {navigate("/downloadPage")}
    return(
        <button onClick={handleClick}>
        Create Schedule
        </button>)
}