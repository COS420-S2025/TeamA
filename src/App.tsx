import React, { useRef } from 'react';
import { FilePond } from 'react-filepond';
import { FileUpload } from './components/FileUpload.tsx';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import { OfficeHoursBox } from './components/OfficeHoursBox.tsx';
import { DateTimeDropdown } from './components/DateTimeDropdown.tsx';
import { DownloadButton } from './components/DownloadButton.tsx';

import './App.css';
import { UploadButton } from './components/UploadButton.tsx';

function DownloadPage(): React.JSX.Element {
  return(
    <div className='App'>
      <header className='App-header'>
        Download Page
      </header>
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
