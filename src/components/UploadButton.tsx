import { FilePond } from 'react-filepond';
import { ParsePdfToText } from "../utils/pdfParser";
import { useNavigate } from "react-router-dom"

interface UploadButtonProps {
    pondRef: React.RefObject<FilePond | null>;
}

export function UploadButton({ pondRef }: UploadButtonProps): React.JSX.Element {
    // Setup navigate
    const navigate = useNavigate()
    // Call parsePdfToText Button and
    // Navigate to download page when clicked
    const handleClick = () => {
        ParsePdfToText(pondRef)
        navigate("/downloadPage")
    }
    // 
    return(
        <button onClick={handleClick}>
        Create Schedule
        </button>)
}