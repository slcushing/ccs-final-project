import { withRouter, useParams, NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { ModalBody } from 'react-bootstrap';
import Workout from '../Workout/Workout';


function ClientDetail(props) {
    const [isEditing, setIsEditing] = useState(false);
    const [coachNote, setCoachNote] = useState(props.client.notes.filter(note => note.is_editable)[0]); // an object or undefined

    const handleChange = (event) => {
        const {name, value} = event.target;
        setCoachNote((prevState) => ({...prevState, [name]: value}));
    }   

    const handleSave = async (event) => {

        let data;

        if(coachNote.id) {
            const options = {
                method: 'PUT',
                headers: {
                    'X-CSRFToken' : Cookies.get('csrftoken'),
                    'Content-Type' : 'application/json',
                },
                body: JSON.stringify(coachNote)
            };

            const response = await fetch(`/api_v1/accounts/notes/${coachNote.id}/`, options);
            if (!response.ok) {
                console.log(response)
            } else {
                setCoachNote(coachNote)
            }

            // make a put request to udpate note
            // alert('PUT request here!');
           
        } else {
            const options = {
                method: 'POST',
                headers: {
                    'Content-Type' : 'application/json',
                    'X-CSRFToken': Cookies.get('csrftoken'),
                },
                body: JSON.stringify({
                    ...coachNote, 
                    profile: props.client.id
                })
            };

            const response = await fetch(`/api_v1/accounts/notes/`, options);
            if(!response.ok) {
                console.log(response)
            } else {
                const data = await response.json();
                setCoachNote(data)
            }
            // make a post request to create note
            // alert('POST request here');

            
        }

        props.handleUpdate(props.client.id, data);
        
    }

    

    return (
        <div className='client'>
            {
               
                <>
                    <div key={props.client.id} className='client-profile'>
                        <img className='client-photo' src={props.client.avatar} alt=''/>
                        <p>{props.client.first_name} {props.client.last_name}</p>
                        <p>Primary phone: {props.client.phone_number}</p>
                        <p>Primary email: {props.client.email}</p>
                        <p>Client note: {props.client.notes.filter(note => !note.is_editable)[0]?.text}</p>
                        <input type="text" name="text" value={coachNote?.text} disabled={!isEditing} onChange={handleChange} />
                       
                        <p>PT Coach: {props.client.coach_name}</p>
                        {isEditing 
                        ?
                        <button type='button' className='edit-note-btn' onClick={handleSave}>Save</button>
                        :
                        <button type='button' className='edit-note-btn' onClick={() => setIsEditing(true)}>Edit</button>
                        }
                        
                    </div>

                </>

            }
        </div>
    )
}



function Clients(props) {
    const {filter} = useParams();
    const [clients, setClients] = useState([]);
    const [searchClients, setSearchClients] = useState('');
    const [filteredResults, setFilteredResults] = useState();

    useEffect (() => {
        async function getClients() {
            const response = await fetch(`/api_v1/accounts/profiles/`);
            if(!response.ok) {
                console.log(response);
            } else {
                const data = await response.json();
                setClients(data);
                console.log(data);
            }
        }
        getClients();
    }, []);

    const handleUpdate = async (clientID, coachNote) => {
        console.log(clientID, coachNote);


        // const options = {
        //     method: 'PUT',
        //     headers: {
        //         'X-CSRFToken' : Cookies.get('csrftoken'),
        //         'Content-Type' : 'application/json',
        //     },
        //     body: JSON.stringify(client)
        // };

        // const response = await fetch(`/api_v1/accounts/profiles/${client.id}/`, options);
        // if(!response.ok) {
        //     console.log(response)
        // } else {
        //     const updatedClients = [...clients];
        //     const index = updatedClients.findIndex(e => e.id === client.id);
        //     updatedClients[index] = client;
        //     setClients(updatedClients);
        // }
    }
    // console.log({filteredResults});
    const clientList = filteredResults || clients;
    const ClientHTML = clientList
    .filter(client => filter === 'pt' ? client.is_client : client)
    .map(client => 
        <ClientDetail
            key={client.id}
            client={client}
            handleUpdate={handleUpdate}
        />
        )

    const searchItems = (event) => {

        setSearchClients(event.target.value);




        if (searchClients !== '') {
            const filteredData = clients.filter((client) => {
                return Object.values(client).join('').toLowerCase().includes(searchClients.toLowerCase())
            });
            setFilteredResults(filteredData)
        } else {
            setFilteredResults(clients)
        }
    }

        
    
    return (
        <div className='client-container'>
            <nav className='client-nav'>
                <NavLink to='/clients/'>All Members</NavLink>
                <NavLink to='/clients/pt/'>Personal Training Clients</NavLink>
            </nav>
            <input className='client-search' type='text' name='search' id='search' placeholder='Search Here...' onChange={searchItems}></input>
       
                <section className='client-list'>
                    {ClientHTML}
                </section>
        
        </div>
    )
}

export default withRouter(Clients)