import {useState, useEffect} from 'react';
import {withRouter, useHistory} from 'react-router-dom';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek'
import getDay from 'date-fns/getDay'
import enUS from 'date-fns/locale/en-US'
import 'react-big-calendar/lib/css/react-big-calendar.css';
import {Modal, Button, Form} from 'react-bootstrap'
import Cookies from 'js-cookie';



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


function DashCalendar() {
    const [events, setEvents] = useState();
    const [event, setEvent] = useState({
        title:'',
        start: null,
        end: null,
        allDay: false,
        gymEvent: false,
        details:'',
    });

    const history = useHistory()
    
    const handleChange = (event) => {
        const {name,value} = event.target;
        setEvent({...event, [name]:value})
    }

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

    function handleError(error) {
        console.warn(error);
    }

    async function handleSubmit(event){
        event.preventDefault();

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': Cookies.get('csrftoken'),
            },
            body: JSON.stringify(event)
        };

        const response = await fetch(`/api_v1/events/`, options).catch(handleError);
        if(!response.ok) {
            console.log(response);
        } else {
            const data = await response.json();
            // push.history('/dashboard');
        }
    }

    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false)
    const handleSelection = (event) => {
        setShow(true);
        console.log(event);
        setEvent((prevState) => ({
            ...prevState,
            start: event.start,
            end: event.end,
        }));
        
    }
    

    if(!events) {
        return <div>loading</div>
    }
    return (
        <>
            <div className="daily-cal">
                <Calendar
                    selectable={true}
                    localizer={localizer}
                    events={events}
                    startAccessor="start"
                    endAccessor="end"
                    min={new Date(0,0,0,5,0,0)}
                    max={new Date(0,0,0,22,0,0)}
                    defaultView={"week"}
                    views={['week', 'day']}
                    onSelectSlot={handleSelection}
                    style={{ height: 500 }}
                    />
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Event</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group>
                        <Form.Label>Title: </Form.Label><Form.Control type='text' onChange={handleChange} value={event.title} placeholder='Event Title'></Form.Control>
                        <Form.Label>Start: </Form.Label><Form.Control plaintext readOnly value={event.start}></Form.Control>
                        <Form.Label>End: </Form.Label><Form.Control plaintext readOnly value={event.end}></Form.Control>
                        <Form.Label>Details: </Form.Label><Form.Control type='text' onChange={handleChange} value={event.details} placeholder='Event details...'></Form.Control>
                        <Form.Check type='checkbox' label='All Day' value={event.allDay}></Form.Check>
                        <Form.Check type='checkbox' label='Community Event' value={event.gymEvent}></Form.Check>
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='success' onSubmit={handleSubmit}>Save</Button>
                    <Button variant='danger' onClick={handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default withRouter(DashCalendar)

// onClick={handleSave}