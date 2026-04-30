import { FilePond } from 'react-filepond';
import { ParsePdfToText } from "../utils/pdfParser";
import { useNavigate } from "react-router-dom"
import { TextToParsedResults, ParsedResultsToDateWithContext } from '../utils/DateExtraction';
import { CreateEventList } from '../utils/EventListCreation';

// Chat GPT assited with how to pass the reference and that I needed to create an interface
interface UploadButtonProps {
    pondRef: React.RefObject<FilePond | null>;
}

export function UploadButton({ pondRef }: UploadButtonProps): React.JSX.Element {
    // Setup navigate
    const navigate = useNavigate()
    // Call parsePdfToText Button and
    // Navigate to download page when clicked
    // ChatGPT assited with the state to pass the result to the download page
    const handleClick = async () => {
        const pond = pondRef.current
        if(!pond){
            return
        }
        const files = pond.getFiles().map(fileItem => fileItem.file);
        const pdfTextArr = await ParsePdfToText(pondRef);
        const parsedArr = TextToParsedResults(pdfTextArr);
        const dateArr = ParsedResultsToDateWithContext(parsedArr, pdfTextArr);
        const result = CreateEventList(dateArr);
        navigate("/downloadPage", { state: { result, files } });
    }
    // 
    return(
        <button onClick={handleClick}>
        Create Schedule
        </button>)
}