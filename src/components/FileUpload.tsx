import { FilePond, registerPlugin } from 'react-filepond';
import { useState } from "react";
import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type"

import "filepond/dist/filepond.min.css"

interface FileUploadProps {
  pondRef: React.RefObject<FilePond | null>;
}

// Enable the plugin for file type validation
registerPlugin(FilePondPluginFileValidateType)

export function FileUpload({ pondRef }: FileUploadProps): React.JSX.Element {
    // Set up state for File Pond
    // Using any type becuase 
    // files requires FilePondInitalFile type
    // setFiles requires FilePondFile type
    const [files, setFiles] = useState<any[]>([])
    // Create a reference for other components

    return (
    <div>
      <FilePond
        ref={pondRef} // Assign the ref
        files={files} // Files uploaded
        onupdatefiles={setFiles} // Handle updates to the uploader
        allowMultiple={true} // Allow multiple PDFs to be uploaded
        storeAsFile={true} // Save file locally rather than using a server
        dropOnPage={true} // Enable drop on page rather than drop on box
        acceptedFileTypes={["application/pdf"]} // PDF Media type
        labelIdle='Drag & Drop your Syllabus PDF or <span class="filepond--label-action">Browse Files</span>'
      />
    </div>
  )
}