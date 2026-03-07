import React from 'react';
import './App.css';
import { FileUpload } from './components/FileUpload.tsx';
import { UploadButton } from './components/UploadButton.tsx';
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import { OfficeHoursBox } from './components/OfficeHoursBox.tsx';
import { DateTimeDropdown } from './components/DateTimeDropdown.tsx';
import { DownloadButton } from './components/DownloadButton.tsx';


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
        <FileUpload/>
        <UploadButton/>
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
