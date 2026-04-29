import { type ICalCalendar } from "ical-generator";

type DownloadButtonProps = {
    calendar: ICalCalendar
}

export function DownloadButton({ calendar }: DownloadButtonProps): React.JSX.Element {
    const handleClick = () => {
        // ChatGPT assisted with how to implement the downlaod file feature
        const icsContent = calendar.toString();
        const blob = new Blob([icsContent], { type: 'text/calendar' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'mycalendar.ics';
        link.click();
        URL.revokeObjectURL(url);
        console.log(url)
    }
    return(<button onClick={handleClick}>Download ics file</button>)
}