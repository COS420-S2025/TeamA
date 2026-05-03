// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { doc, setDoc, getFirestore, collection, getDoc } from "firebase/firestore";
import { EventList } from "./EventList";
import { data } from "react-router";
import { EventEntry } from "./EventEntry";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKw4McJy9TREZwwgjvQrqb2baXQoU5ow0",
  authDomain: "semestersort.firebaseapp.com",
  projectId: "semestersort",
  storageBucket: "semestersort.firebasestorage.app",
  messagingSenderId: "20432707143",
  appId: "1:20432707143:web:4d4119aa718d8d62079b62"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export async function saveData(id: string, eventList: EventList) {
  const events = eventList.getEvents().map(event => event.toJSON());
  if (id.length !== 0) {
    await setDoc(doc(db, "users", id), {
      id: id,
      eventList: events,
    });
  }
}

export async function loadData(id: string): Promise<EventList> {
  const date: Date = new Date("04/20/2026")
  const eventEntryList: EventEntry[] = [new EventEntry("test", "test", date)]
  let eventList: EventList = new EventList(eventEntryList)
  const userRef = doc(db, "users", id);
  const userSnap = await getDoc(userRef);
  if(userSnap.exists()) {
    const dataObject = userSnap.data();
    const eventEntryList: EventEntry[] = [];
    eventList.removeEvent(new EventEntry("test", "test", date))
    for(let i: number = 0; i < dataObject.eventList.length; i++) {
      eventEntryList.push(new EventEntry(dataObject.eventList[i].name, dataObject.eventList[i].description, new Date(dataObject.eventList[i].date)));
    }
    eventList = new EventList(eventEntryList);
    console.log(eventList)

  }
  else {
    console.log("Error")
  }
  return eventList;
}