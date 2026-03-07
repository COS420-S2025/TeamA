import React, { useState } from "react";


export function OfficeHoursBox(): React.JSX.Element {
    // Set up use state for checkbox
    const [checked, setChecked] = useState<boolean>(false);

    // Handle user interaction with check box
    // 
    function handleCheck(): void {
        setChecked(!checked)
    } 
    return(
        <label className="OfficeHoursText">Include Office Hours
        <input 
        type = "checkbox"
        checked={checked}
        onChange={handleCheck}
        />
        </label>
    )
}