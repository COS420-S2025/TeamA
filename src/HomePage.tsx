import { OfficeHoursBox } from './components/OfficeHoursBox.tsx';
import { DateTimeDropdown } from './components/DateTimeDropdown.tsx';
import { UploadButton } from './components/UploadButton.tsx';
import React, { useRef } from 'react';
import { FilePond } from 'react-filepond';
import { FileUpload } from './components/FileUpload.tsx';

export function Home(): React.JSX.Element {
  const pondRef = useRef<FilePond | null>(null);
  return (
    <div className="App">
      <header className="App-header">
          Welcome to Semester Sort
      </header>
      <header className="App-Description">
          Upload your course syllabu and build an exportable schdule to add to your calendar
      </header>
      <div className='OfficeHoursBox'>
        <OfficeHoursBox/>
      </div>
      <div className='DateTimeDropdown'>
        <DateTimeDropdown/>
      </div>
      <div className='DropZone'>
        <FileUpload pondRef={pondRef}/>
        <UploadButton pondRef={pondRef}/>
      </div>
      <p className='Footer'>
        An App By: <br />
        <br />
        Jack Ellingwood, Drew Turgeon, Dawson Ferguson, Nicholas Keenan, John Quinn<br />
      </p>
    </div>
  )
}