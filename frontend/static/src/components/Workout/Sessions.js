import { withRouter, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { format } from 'date-fns';
import Cookies from "js-cookie";



function Sessions(props) {
    const {filter} = useParams();
    const [sessions, setSessions] = useState();
   
    function handleError(error) {
        console.warn(error);
    }

    useEffect (() => {
        async function getSessions() {
            const response = await fetch(`/api_v1/events/?type=session`);
            if(!response.ok) {
                throw new Error('Network response was not OK');
            }

            const sessions = {};
            const data = await response.json();
            console.log('data', data)

            data.forEach(session => {
                // session.start = new Date(session.start);
                // session.end = new Date(session.end);
                const date = new Date(session.start);
                const key = date.toDateString();
                sessions[key] = !sessions[key]
                  ? [
                      {
                        ...session,
                        start: session.start.toString(),
                        end: session.start.toString(),
                      },
                    ]
                  : [
                      ...sessions[key],
                      {
                        ...session,
                        start: session.start.toString(),
                        end: session.start.toString(),
                      },
                    ];

            });
            setSessions(sessions);
        }
        getSessions();
    }, []);

    async function handleRegister(session) {

        const options = {
            method: 'PUT',
            headers: {
                'X-CSRFToken': Cookies.get('csrftoken'),
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(session),
        };

        const response = await fetch(`/api_v1/events/register/${session.id}/`, options).catch(handleError);
        if(!response.ok) {
            console.log(response)
        } else {
            const data = await response.json(); // updated session event from the server (single object)
            const key = new Date(data.start).toDateString(); // key inside sessions you need to target (sessions is an object on state)
            const values = [...sessions[key]]; // all sessions (listed inside an array) for sessions[key]
            const index = values.findIndex(e => e.id === data.id);
            values[index] = data;
            
            const updatedSessions = {...sessions};
            updatedSessions[key] = values;

            setSessions(updatedSessions);
        }

    }

    if(!sessions) {
        return <div>No Sessions</div>
    }

    
    const days = Object.keys(sessions);
    console.log(days);
    const sessionsHTML = days.map(day => {
            const details = sessions[day].map(session => (
                <div className="session">
                    <div className='session-time'>
                        <time>{format(new Date(session.start), 'p')} - </time>
                        <time>{format(new Date(session.end), 'p')}</time>
                    </div>
                    {!props.isAdmin && <button type="button" onClick={() => handleRegister(session)}>Register</button>}
                    {props.isAdmin && <button>Attendees</button>}
                </div>
            ));

            return (
                <>
                <h5 className='session-day'>{day}:</h5>
                {details}
                </>
            )
        })
    
    
    return(
        <>
        {sessionsHTML}
        </>
    )
}

export default withRouter(Sessions)