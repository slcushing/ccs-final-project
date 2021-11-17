import { withRouter } from "react-router";
import { useState, useEffect } from 'react';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek'
import getDay from 'date-fns/getDay'
import enUS from 'date-fns/locale/en-US'
import 'react-big-calendar/lib/css/react-big-calendar.css';
import {Modal, Button, Form, ModalBody} from 'react-bootstrap'
import Cookies from 'js-cookie';

const defaultEvent = {
    title:'',
    start: null,
    end: null,
    allDay: false,
    gymEvent: false,
    details:'',
}

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


function CommunityCalendar(props) {
    const [events, setEvents] = useState();
    const [event, setEvent] = useState(defaultEvent);
    const [show, setShow] = useState(false);

    // const history = useHistory()
    
    const handleChange = (event) => {
       
        if(event.target.type === "checkbox") {
            setEvent((prevState) => ({
                ...prevState,
                [event.target.name]: event.target.checked,
            }));
            return;
        }
       
        const { name, value } = event.target;
        setEvent((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    }
    useEffect(() => {
        async function getEvents() {
            const response = await fetch(`/api_v1/events/?type=community`);
            if(!response.ok) {
                console.log(response)
            } else {
                const data = await response.json();
                const formatedEvents = data.map(event => ({...event, start: new Date(event.start), end: new Date(event.end)}));
                setEvents(formatedEvents);
            }
        }
        getEvents();
    }, []);

    function handleError(error) {
        console.warn(error);
    }

    async function handleSubmit(e){

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
            data.start = new Date(data.start);
            data.end = new Date(data.end);
            setShow(false);
            setEvent(defaultEvent);
            setEvents([...events, data]);
        }
    }

    async function handleUpdate() {
        
        const options = {
            method: 'PUT',
            headers: {
                'X-CSRFToken': Cookies.get('csrftoken'),
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(event)
        };

        const response = await fetch(`/api_v1/events/${event.id}/`, options).catch(handleError);
        if(!response.ok) {
            console.log(response)
        } else {
            setShow(false);
            const updatedEvents = [...events];
            const index = updatedEvents.findIndex(e => e.id === event.id);
            updatedEvents[index] = event;
            setEvents(updatedEvents);
            setEvent(defaultEvent);
        }
    }

    async function handleDelete() {
        const response = await fetch(`/api_v1/events/${event.id}/`, {
            method: 'DELETE',
            headers: {
                'X-CSRFToken': Cookies.get('csrftoken'),
            },
            
        });

        if(!response.ok) {
            console.log(response)
        } else {
            let updatedEvents = [...events];
            const index = updatedEvents.findIndex(e => e.id == event.id);
            updatedEvents.splice(index, 1);
            setEvents(updatedEvents);  
            setShow(false);
        }         
    }

    async function handleCancel() {
        const response = await fetch(`api_v1/events/${event.id}/cancellation/`, {
            method: 'DELETE',
            headers: {
                'X-CSRFToken' : Cookies.get('csrftoken'),
            },
        });

        if(!response.ok) {
            console.log(response)
        } else {
            let updatedEvents = [...events];
            const index = updatedEvents.findIndex(e => e.id == event.id);
            updatedEvents.splice(index, 1);
            setEvents(updatedEvents);
            setShow(false);
        }
    }

    const handleClose = () => {
        setShow(false);
        setEvent(defaultEvent);
    }    
    const handleSelection = (event) => {
        setShow(true);
        setEvent((prevState) => ({
            ...prevState,
            start: event.start,
            end: event.end,
        }));     
    }

    const handleEventSelect = (event) => {
        setEvent({
            ...event, 
            title: event.title,
            start: event.start,
            end:event.end,
            details: event.details,
        });
        setShow(true);
    }

    async function handleRegister() {
        
        const options = {
            method: 'PUT',
            headers: {
                'X-CSRFToken': Cookies.get('csrftoken'),
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(event)
        };

        const response = await fetch(`/api_v1/events/register/${event.id}/`, options).catch(handleError);
        if(!response.ok) {
            console.log(response)
        } else {
            setShow(false);
            const data = await response.json()
            const updatedEvents = [...events];
            const index = updatedEvents.findIndex(e => e.id === event.id);
            updatedEvents[index] = data;
            setEvents(updatedEvents);
            // setEvent(defaultEvent);
        }
    }

    if(!events) {
        return <div>loading SPINNER</div>
    }
    return (
        <>
            <h2>Community Events Calendar</h2>
            <div className="monthly-cal">
                <Calendar
                    selectable={true}
                    localizer={localizer}
                    events={events}
                    startAccessor="start"
                    endAccessor="end"
                    min={new Date(0,0,0,5,0,0)}
                    max={new Date(0,0,0,22,0,0)}
                    defaultView={"month"}
                    views={['month','week']}
                    onSelectSlot={handleSelection}
                    onSelectEvent={handleEventSelect}
                    style={{ height: 700 }}
                    />
            </div>
            
            {props.isAdmin && (
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add Event</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form.Group>
                            <Form.Label>Title: </Form.Label><Form.Control type='text' onChange={handleChange} name="title" value={event.title} placeholder='Event Title'></Form.Control>
                            <Form.Label>Start: </Form.Label><Form.Control name="start" value={event.start}></Form.Control>
                            <Form.Label>End: </Form.Label><Form.Control name="end" value={event.end}></Form.Control>
                            <Form.Label>Details: </Form.Label><Form.Control type='text' onChange={handleChange} name="details" value={event.details} autoComplete='off' placeholder='Event details...'></Form.Control>
                            <Form.Check type='checkbox' label='All Day' name="allDay" checked={event.allDay} onChange={handleChange}></Form.Check>
                            <Form.Check type='checkbox' label='Community Event' name="gymEvent" checked={event.gymEvent} onChange={handleChange}></Form.Check>
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                        {event.id
                        ? 
                        <>
                            <Button type='button' variant='info' onClick={handleCancel}>Cancel Event</Button>
                            <Button type='button' variant='warning' onClick={handleUpdate} >Update</Button>
                            <Button type='button' variant='dark' onClick={handleDelete}>Delete</Button>
                        </>
                        :
                            <Button type='button' variant='success' onClick={handleSubmit}>Save</Button>
                        }

                        <Button type='button' variant='danger' onClick={handleClose}>Close</Button>
                    </Modal.Footer>
                </Modal>
            )}

            {!props.isAdmin && (
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Event</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div>{event.title}</div>
                        <div>{event.details}</div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button type='button' variant='success' onClick={handleRegister}>{event.is_registered ? 'Unregister' : 'Register'}</Button>
                        <Button type='button' variant='danger' onClick={handleClose}>Close</Button>
                    </Modal.Footer>
                </Modal>




            )}


        </>
    )
}

export default withRouter(CommunityCalendar)