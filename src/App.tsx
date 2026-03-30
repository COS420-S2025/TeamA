import React, { useRef } from 'react';
import { FilePond } from 'react-filepond';
import { FileUpload } from './components/FileUpload.tsx';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import { OfficeHoursBox } from './components/OfficeHoursBox.tsx';
import { DateTimeDropdown } from './components/DateTimeDropdown.tsx';
import { DownloadButton } from './components/DownloadButton.tsx';
import { UploadButton } from './components/UploadButton.tsx';
import { TextBox } from './components/TextBox.tsx'
import './App.css';


function DownloadPage(): React.JSX.Element {
  return(
    <div className='App'>
      <header className='App-header'>
        Download Page
      </header>
      <header className='Sub-Header'>
        Add New Event
      </header>
    <div className="Form-Container">
      <div className="Form-Row">
          <TextBox className="Name-Box" placeholder='e.g. "COS235 HW01"' />
          <TextBox className="Date-Box" placeholder="e.g. MM/DD/YYYY" />
      </div>

      <div className="Form-Row">
          <TextBox className="Description-Box" placeholder='e.g. "Simple C for-loop"' />
          <TextBox className="Tag-Box" placeholder='e.g. "Assignment"' />
          
      </div>
      <div className="Form-Row">
        <button className="Manual-Add">Add Event</button>
      </div>
    </div>
    <header className='Sub-Header'>
        Edit Event
      </header>
    <div className="Form-Container">
      <div className="Form-Row">
          <TextBox className="Name-Box" placeholder='e.g. "COS235 HW01"' />
          <TextBox className="Date-Box" placeholder="e.g. MM/DD/YYYY" />
      </div>

      <div className="Form-Row">
          <TextBox className="Description-Box" placeholder='e.g. "Simple C for-loop"' />
          <TextBox className="Tag-Box" placeholder='e.g. "Assignment"' />
          
      </div>
      <div className="Form-Row">
        <button className="Confirm-Edit">Edit Event</button>
      </div>
    </div>
      <div className='Body'>
        <DownloadButton/>
      </div>
      <p className='Footer'>
        An App By: <br />
        <br />
        Jack Ellingwood, Drew Turgeon, Dawson Ferguson, Nicholas Keenan, John Quinn<br />
      </p>
    </div>
  )
}

function Home(): React.JSX.Element {
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

function App() {
  return (
    // Chat GPT assited with how to set this up
    // Initialize Browser Router
    <BrowserRouter>
    {/* Set up Routes */}
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/DownloadPage" element={<DownloadPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
