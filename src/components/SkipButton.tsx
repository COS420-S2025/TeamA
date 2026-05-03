import { FilePond } from 'react-filepond';
import { ParsePdfToText } from "../utils/pdfParser";
import { useNavigate } from "react-router-dom"
import { TextToParsedResults, ParsedResultsToDate } from '../utils/DateExtraction';
import { CreateEventList } from '../utils/EventListCreation';

type SkipButtonProps = {
    pondRef: React.RefObject<FilePond | null>;
    email: string;
}

export function SkipButton({ pondRef, email }: SkipButtonProps): React.JSX.Element {
    const navigate = useNavigate();
    const handleClick = async () => {
            const pond = pondRef.current
            const files = pond?.getFiles().map(fileItem => fileItem.file);
            const pdfTextArr = await ParsePdfToText(pondRef);
            const parsedArr = TextToParsedResults(pdfTextArr);
            const dateArr = ParsedResultsToDate(parsedArr);
            const result = CreateEventList(dateArr);
            navigate("/DownloadPage", { state: { result, email, files } });
        }
    return(
        <div>
            <button onClick={handleClick}> Skip To Download Page </button>
        </div>
    )
}