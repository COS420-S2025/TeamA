
function ButtonClick() {
    console.log("Click")
}

export function EntryButton() {
    return(
    <button className="Button" onClick={ButtonClick}>
        PDF to .ics File
    </button>
    )
}