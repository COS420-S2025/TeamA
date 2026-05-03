import { FilePond } from 'react-filepond';
import { ParsePdfToText } from "../utils/pdfParser";
import { useNavigate } from "react-router-dom"
import { TextToParsedResults, ParsedResultsToDate } from '../utils/DateExtraction';
import { CreateEventList } from '../utils/EventListCreation';
import { saveData } from '../utils/FireBase';

// Chat GPT assited with how to pass the reference and that I needed to create an interface
type UploadButtonProps = {
    pondRef: React.RefObject<FilePond | null>;
    email: string;
}

export function UploadButton({ pondRef, email }: UploadButtonProps): React.JSX.Element {
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
        const dateArr = ParsedResultsToDate(parsedArr);
        const result = CreateEventList(dateArr);
        if (email != null) {
            saveData(email, result); 
        }
        else {
            email = "john.doe@domain.org";
            saveData(email, result);
        }

        navigate("/DownloadPage", { state: { result, email, files } });
    }
    // 
    return(
        <button onClick={handleClick}>
        Create Schedule
        </button>)
}