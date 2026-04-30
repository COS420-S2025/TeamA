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
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export async function saveData(id: string, eventList: EventList) {
  const events = eventList.getEvents().map(event => event.toJSON());

  await setDoc(doc(db, "users", id), {
    id: id,
    eventList: events,
  });
}

export async function loadData(id: string): Promise<EventList> {
  const date: Date = new Date("04/20/2026")
  const eventEntryList: EventEntry[] = [new EventEntry("", "", date)]
  const eventList: EventList = new EventList(eventEntryList)
  const userRef = doc(db, "users", id);
  const userSnap = await getDoc(userRef);
  if(userSnap.exists()) {
    const dataObject = userSnap.data();
    console.log(dataObject)

  }
  else {
    console.log("Error")
  }
  return eventList;
}