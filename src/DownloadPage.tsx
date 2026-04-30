import { TextBox } from './components/TextBox.tsx'
import { DownloadButton } from './components/DownloadButton.tsx';
import { useLocation } from 'react-router';
import { AddEventButton } from './components/AddEventButton.tsx';
import React, { useEffect, useState } from "react";
import { CreateICSFile } from './utils/ICSFileCreation.ts';
import ScheduleBar from './components/ScheduleBar.tsx';
import { EventEntry } from './utils/EventEntry.ts';
import { EventList } from './utils/EventList.ts';
import { inferTagsFromText, mergeTags, parseUserTags } from './utils/EventTagging.ts';
import { PdfView } from './components/PdfView.tsx';


export function DownloadPage(): React.JSX.Element {
  const location = useLocation();
  const result = location.state?.result as EventList | undefined;
  const files = location.state?.files;
  const [eventList] = useState<EventList>(() => {//function fixed by cursor
    if (result) {
      Object.setPrototypeOf(result, EventList.prototype);
      return result;
    }
    return new EventList([]);
  });
  const [, setScheduleVersion] = useState(0);

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

  const handleEditEvent = () => { //function fixed by cursor
    if (!selectedEvent) {
      return;
    }

    const parsedDate = new Date(date2);
    if (!Number.isNaN(parsedDate.getTime())) {
      parsedDate.setHours(12, 0, 0, 0);
      selectedEvent.setDate(parsedDate);
    }

    selectedEvent.setName(name2);
    selectedEvent.setDescription(description2);
    selectedEvent.setTags(mergeTags(
      inferTagsFromText(name2, description2),
      parseUserTags(tags2)
    ));

    setScheduleVersion((prev) => prev + 1);
  };


  return(
    <div className='App'>
      <header className='App-header'>
        Download Page
      </header>
    <div className='Form-Row'>
      <div className='Form-Container'>
        <div className="Form-Container">
          <PdfView files={files}/>
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
            <AddEventButton //function fixed by cursor
              eventList={eventList}
              name={name1}
              description={description1}
              date={new Date(date1)}
              tags={tags1}
              onEventAdded={() => setScheduleVersion((prev) => prev + 1)}
            />
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
            <button className="Confirm-Edit" onClick={handleEditEvent}>Edit Event</button>
          </div>
        </div>
      </div>
      <ScheduleBar eventlist={eventList} setSelectedEvent={setSelectedEvent} selectedEvent={selectedEvent}/>
    </div>
      <div className='Body'>
        <DownloadButton calendar={CreateICSFile(eventList)}/>
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