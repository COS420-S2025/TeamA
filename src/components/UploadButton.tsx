import React from "react";
import { useNavigate } from "react-router-dom"
import { FilePond } from 'react-filepond';
import { ParsePdfToText } from "../utils/pdfParser";

interface UploadButtonProps {
    pondRef: React.RefObject<FilePond | null>;
}

export function UploadButton({ pondRef }: UploadButtonProps): React.JSX.Element {
    // Setup navigate
    const navigate = useNavigate()
    // Navigate to download page when clicked
    const handleClick = () => {navigate("/downloadPage")}
    ParsePdfToText(pondRef)
    // ()=>ParsePdfToText(pondRef)
    return(
        <button onClick={handleClick}>
        Create Schedule
        </button>)
}