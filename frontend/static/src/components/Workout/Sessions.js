import { withRouter, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { format } from 'date-fns';
import Cookies from "js-cookie";



function Sessions(props) {
    const {filter} = useParams();
    const [sessions, setSessions] = useState([]);
   
    function handleError(error) {
        console.warn(error);
    }

    useEffect (() => {
        async function getSessions() {
            const response = await fetch(`/api_v1/events/?type=session`);
            if(!response.ok) {
                throw new Error('Network response was not OK');
            } else {
                const sessions = {};
                const data = await response.json();
                data.forEach(session => {
                    let session_start_time = new Date(session.start);
                    let session_end_time = new Date(session.end);

                    let start = new Date();
                    start.setHours(session_start_time.getHours());
                    start.setMinutes(session_start_time.getMinutes());

                    let end = new Date();
                    end.setHours(session_end_time.getHours());
                    end.setMinutes(session_end_time.getMinutes());
                    

                    for(let i = 0; i < 6; i++) {
                        let day = start.getDay();
                        if(day === 0) {
                            i--;
                        } else {
                            // events.push({
                            //     ...session,
                            //     start: start.toString(),
                            //     end: end.toString(),
                            // }); 
                            const key = start.toDateString();
                            sessions[key] = !sessions[key]
                                ? [{ 
                                    ...session, 
                                    start: start.toString(), 
                                    end: end.toString() }]
                                : [
                                    ...sessions[key],
                                    {
                                      ...session,
                                      start: start.toString(),
                                      end: end.toString(),
                                    },
                                  ];
                        }

                        start = new Date(start.setDate(start.getDate() + 1));
                        end = new Date(end.setDate(end.getDate() + 1));
    
                    }
                });
                setSessions(sessions);
            }
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
            const data = await response.json()
            const updatedSessions = [...sessions];
            const index = updatedSessions.findIndex(e => e.id === session.id);
            updatedSessions[index] = data;
            setSessions(updatedSessions);
        }

    }

    
    const days = Object.keys(sessions);
    console.log(days);
    const sessionsHTML = days.map(day => {
            const details = sessions[day].map(session => (
                <div className="session">
                    <time>{format(new Date(session.start), 'p')} - </time>
                    <time>{format(new Date(session.end), 'p')}</time>
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