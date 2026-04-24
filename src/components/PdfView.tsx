import { useEffect, useState } from "react";

// AI was used to aid the creation of this file

interface PdfViewProps {
    files: File[];
}

// PdfView function consists of two buttons to cycle through pdf's
// as well as the pdf view itself which displays the pdf to the user

export function PdfView({ files }: PdfViewProps): React.JSX.Element{
    const [currentIndex, setCurrentIndex] = useState(0);
    const [fileURL, setFileURL] = useState<string | null>(null);

    const file = files[currentIndex]


    useEffect(() => {
            if (!file) {
                return 
            }
            const url = URL.createObjectURL(file);
            setFileURL(url);

            return () => URL.revokeObjectURL(url);
        }, [file, files.length])

    


    const HandleLeft = () => {
            if(currentIndex > 0){
                setCurrentIndex(currentIndex-1)
            }
        }

    const HandleRight = () => {
        if(currentIndex < files.length - 1){
            setCurrentIndex(currentIndex+1)
        }
    }

        
    return(
    
        <div className='Form-Container'>
            <div className='Form-Row'>
                
                <button onClick={HandleLeft}>
                    Prev
                </button>
                <button onClick={HandleRight}>
                    Next
                </button>
        </div>
            <iframe
            src={fileURL}
            width="600px"
            height="600px"
            title={`pdf-${currentIndex}`}
            />
        </div>
    )
}
