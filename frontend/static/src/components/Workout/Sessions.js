import { withRouter, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { format } from 'date-fns';



function Sessions(props) {
    const {filter} = useParams();
    const [sessions, setSessions] = useState([]);
    
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

    
    const days = Object.keys(sessions);
    console.log(days);
    const sessionsHTML = days.map(day => {
        const details = sessions[day].map(session => (
            <>
            <div>{session.title}</div>
            <div>{session.start}</div>
            <div>{session.end}</div>
            </>
        ));

        return (
            <>
            <h2>{day}</h2>
            {details}
            </>
        )
    })

    // const sessionsHTML = sessions
    // .map(event =>
    //         <div key={event.id} className = 'session-info'>
    //             <p className='d-block'>Adult Performance Group Training
    //             <time className="d-block">start: {format(new Date(event.start), 'MM/dd/yyyy hh:mm a')}</time>
    //             <time className="d-block">end: {format(new Date(event.end), 'MM/dd/yyyy hh:mm a')}</time>
    //             <p className='d-block'>Attendees: {event.attendees}</p>
    //             </p>
    //         </div>
    // )
    // .sort( (a,b) => new Date(b) - new Date(a));
    
    
    return(
        <>
        hey
        {sessionsHTML}
        </>
    )
}

export default withRouter(Sessions)