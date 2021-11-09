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
                const data = await response.json()
                setSessions(data);
            }
        }
        getSessions();
    }, []);

    const sessionsHTML = sessions.map(event =>
            <div key={event.id} className = 'session-info'>
                <p className='d-block'>AP Session
                <time className="d-block">start: {format(new Date(event.start), 'MM/dd/yyyy hh:mm a')}</time>
                <time className="d-block">end: {format(new Date(event.end), 'MM/dd/yyyy hh:mm a')}</time>
                </p>
            </div>
    );
    
    
    return(
        <>
        {sessionsHTML}
        </>
    )
}

export default withRouter(Sessions)