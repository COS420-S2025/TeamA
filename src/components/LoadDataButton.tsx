import React, { JSX } from "react";
import { loadData } from "../utils/FireBase";
import { useNavigate } from "react-router-dom"
import { EventList } from "../utils/EventList";
import { EventEntry } from "../utils/EventEntry";

type loadDataProps = {
    email: string
}

export function LoadDataButton({email}: loadDataProps): React.JSX.Element {
    const navigate = useNavigate()
    const handleClick = async () => {
        const loadedEventList = await loadData(email);
        Object.setPrototypeOf(loadedEventList, EventList.prototype);
        for(let i = 0; i < loadedEventList.getEvents().length; i++) {
            const event: EventEntry = loadedEventList.getEvents()[i];
        }
        navigate("/downloadPage", { state: { loadedEventList } });
    }
    return(
    <div>
        <button onClick={handleClick}> Load Data </button>
    </div>
    )
}