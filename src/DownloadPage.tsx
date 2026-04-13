import { TextBox } from './components/TextBox.tsx'
import { DownloadButton } from './components/DownloadButton.tsx';
import { useLocation } from 'react-router';
import { AddEventButton } from './components/AddEventButton.tsx';
import React, { useEffect, useState } from "react";
import { CreateICSFile } from './utils/ICSFileCreation.ts';
import ScheduleBar from './components/ScheduleBar.tsx';
import { EventEntry } from './utils/EventEntry.ts';

export function DownloadPage(): React.JSX.Element {
  const location = useLocation();
  const result = location.state?.result;

  const [name1, setName1] = useState<string>("");
  const [description1, setDescription1] = useState<string>("");
  const [date1, setDate1] = useState<string>("");
  const [tags1, setTags1] = useState<string>("");

  const [selectedEvent, setSelectedEvent] = useState<EventEntry | null>(null);
  const [name2, setName2] = useState<string>("");
  const [description2, setDescription2] = useState<string>("");
  const [date2, setDate2] = useState<string>("");
  const [tags2, setTags2] = useState<string>("");

  useEffect(() => {
    if (selectedEvent){
      setName2(selectedEvent.name)
      setDescription2(selectedEvent.description)
      setDate2(selectedEvent.date.toString())
      setTags2(Array.from(selectedEvent.tags).join(", "))
    }
  }, [selectedEvent])
  


  return(
    <div className='App'>
      <header className='App-header'>
        Download Page
      </header>
    <div className='Form-Row'>
      <div className='Form-Container'>
        <div className="Form-Container">
          <header className='Sub-Header'>
            Add New Event
          </header>
          <div className="Form-Row">
              <TextBox className="Name-Box" placeholder='e.g. "COS235 HW01"' value={name1} onChange={setName1} />
              <TextBox className="Date-Box" placeholder="e.g. MM/DD/YYYY"  value={date1} onChange={setDate1} />
          </div>

          <div className="Form-Row">
              <TextBox className="Description-Box" placeholder='e.g. "Simple C for-loop"'  value={description1} onChange={setDescription1} />
              <TextBox className="Tag-Box" placeholder='e.g. "Assignment"'  value={tags1} onChange={setTags1} />
          </div>
          <div className="Form-Row">
            <AddEventButton eventList={result} name={name1} description={description1} date={new Date(date1)} />
          </div>
        </div>
        <div className="Form-Container">
          <header className='Sub-Header'>
            Edit Event
          </header>
          <div className="Form-Row">
              <TextBox className="Name-Box" placeholder='e.g. "COS235 HW01"' value={name2} onChange={setName2} />
              <TextBox className="Date-Box" placeholder="e.g. MM/DD/YYYY"  value={date2} onChange={setDate2} />
          </div>

          <div className="Form-Row">
              <TextBox className="Description-Box" placeholder='e.g. "Simple C for-loop"'  value={description2} onChange={setDescription2} />
              <TextBox className="Tag-Box" placeholder='e.g. "Assignment"'  value={tags2} onChange={setTags2} />
          </div>

          <div className="Form-Row">
            <button className="Confirm-Edit">Edit Event</button>
          </div>
        </div>
      </div>
      <ScheduleBar eventlist={result} setSelectedEvent={setSelectedEvent} selectedEvent={selectedEvent}/>
    </div>
      <div className='Body'>
        <DownloadButton calendar={CreateICSFile(result)}/>
      </div>
      <div>
        
      </div>
      <p className='Footer'>
        An App By: <br />
        <br />
        Jack Ellingwood, Drew Turgeon, Dawson Ferguson, Nicholas Keenan, John Quinn<br />
      </p>
    </div>
  )
}