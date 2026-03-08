import { FilePond } from 'react-filepond';
import { PDFParse } from 'pdf-parse';
import { fileToBase64 } from '../components/FileUpload';
import { FilePondFile } from 'filepond';

interface ParserProps {
    pondRef: React.RefObject<FilePond| null>;
}

// pass the pondRef reference object
export function ParsePdfToText(pondRef: React.RefObject<FilePond | null>) {
    if (pondRef.current == null) {
        console.log("pondRef is null");
        return
    }

    // Read in file from PondFile
    let files = pondRef.current.getFiles();

    // If files is null or length is 0 there are no files
    if(files == null || files.length === 0) {
        console.log("files is empty");
        return
    }

    // Get a string array where each element is 
    // a base64 encoded text string
    let strArr: string[] = fileToBase64(files);

    // For each string in strArr apply atob(), this is required for
    // the pdf parser to be able to convert the files into plain text
    // atob turns decodes the base64 encoding
    const beforeParse = strArr.map((str: string): string => atob(str));

    // Combine the pdf data into one string
    // Not sure if this will work but in theory 
    // you can combine all the text into one string 
    // and extract the dates and times without loss
    const concatPDF: string = beforeParse.join("");

    // Create PDFParse object loading in the data
    const parser = new PDFParse({data: concatPDF});

    // Use the getText() method to get the plain text
    const result = parser.getText();

    // Destroy the parser
    parser.destroy();

    // Return the text
    console.log(result);

}