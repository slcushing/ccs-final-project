import {useState, useEffect} from 'react';
import {withRouter} from 'react-router-dom';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek'
import getDay from 'date-fns/getDay'
import enUS from 'date-fns/locale/en-US'
import 'react-big-calendar/lib/css/react-big-calendar.css';

const locales = {
    'en-US': enUS
};

const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
});


function DailyCal() {
    const [events, setEvents] = useState();
    
    useEffect(() => {
        async function getEvents() {
            const response = await fetch(`/api_v1/events/`);
            if(!response.ok) {
                console.log(response);
            } else {
                const data = await response.json();
                const formatedEvents = data.map(event => ({...event, start: new Date(event.start), end: new Date(event.end)}));
                setEvents(formatedEvents);
                console.log(formatedEvents)
            }
        }
        getEvents();
    },[]);

    if(!events) {
        return <div>loading</div>
    }
    return (
        <div className="daily-cal">
            <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 500 }}
                />
        </div>
    );
}

export default withRouter(DailyCal)