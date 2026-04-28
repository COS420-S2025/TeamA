import { OfficeHoursBox } from './components/OfficeHoursBox.tsx';
import { DateTimeDropdown } from './components/DateTimeDropdown.tsx';
import { UploadButton } from './components/UploadButton.tsx';
import React, { useRef } from 'react';
import { FilePond } from 'react-filepond';
import { FileUpload } from './components/FileUpload.tsx';
import AppLogo from './assets/AppLogo.png'

export function Home(): React.JSX.Element {
  const pondRef = useRef<FilePond | null>(null);
  return (
    <div className="App">
      <header className="App-header">
        <div className='Logo'>
            <img src={AppLogo} alt=''/>
          </div>
          Welcome to Semester Sort
      </header>
      <header className="App-Description">
          Upload your course syllabus and build an exportable schedule to add to your calendar
      </header>
    
      <div className='Form-Container'>
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
      </div>
      <div className='Footer'>
        <div className='Foot-Header'>
          An App By: <br />
          <br />
          Jack Ellingwood, Drew Turgeon, Dawson Ferguson, Nicholas Keenan, John Quinn<br />
        </div>
      </div>
    </div>
  )
}