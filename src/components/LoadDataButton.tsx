import React from "react";
import { loadData } from "../utils/FireBase";
import { useNavigate } from "react-router-dom"
import { EventList } from "../utils/EventList";

type loadDataProps = {
    email: string
}

export function LoadDataButton({email}: loadDataProps): React.JSX.Element {
    const navigate = useNavigate()
    const handleClick = async () => {
        if (!email) {
            return
        }
        const loadedEventList = await loadData(email);
        Object.setPrototypeOf(loadedEventList, EventList.prototype);
        navigate("/DownloadPage", { state: { loadedEventList } });
    }
    return(
    <div>
        <button onClick={handleClick}> Load Data </button>
    </div>
    )
}