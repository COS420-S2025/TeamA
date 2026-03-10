import { FilePondFile } from 'filepond';
import { FilePond } from 'react-filepond';
import pdfToText from 'react-pdftotext'

// pass the pondRef reference object
// VSCode quick fix told me to make this function async and to use await
// this is because pdfToText() returns type promise<string>
export async function ParsePdfToText(pondRef: React.RefObject<FilePond | null>) {
    // Define the variable to store the results in
    let results: string[] = [];

    if (pondRef.current != null) {
        // set files to equal to array of FilePondFiles
        let files: FilePondFile[] = pondRef.current.getFiles();

        // Only continue if files exist
        if (files != null)
            // Loop through files converting each file to text
            // and add it to the results array
            for(let i: number = 0; i < files.length; i++ ) {
                let text = pdfToText(files[i].file);
                results.push(await text);
                console.log(text);
            }
            return results;
    }
    else {
        console.log("Error: No Files")
        return results
    }
}