import { withRouter, useParams, NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { Card, CardActionArea, CardContent } from '@mui/material';
// import { ModalBody } from 'react-bootstrap';
// import Workout from '../Workout/Workout';
// import { FaSearch } from "react-icons/fa"


function ClientDetail(props) {
    const [isEditing, setIsEditing] = useState(false);
    const [coachNote, setCoachNote] = useState(props.client.coach_notes); // an object or undefined

    const handleChange = (event) => {
        setCoachNote(event.target.value);
    }   

    const handleSave = async (event) => {

        const options = {
            method: 'PATCH',
            headers: {
                'X-CSRFToken' : Cookies.get('csrftoken'),
                'Content-Type' : 'application/json',
            },
            body: JSON.stringify({ coach_notes: coachNote }),
        };

        const response = await fetch(`/api_v1/accounts/profiles/${props.client.id}/`, options);
        if (!response.ok) {
            console.log(response)
        } else {
            const data = await response.json()
            props.handleUpdate(props.client.id, data);
            setCoachNote(coachNote);
            setIsEditing(false);

        }
    }

    
    return (
        <div className='client'>
            {
               
                <>
                    <div key={props.client.id} className='client-profile'>
                        <Card className='clientprofiles d-flex-col p-2 mb-3'>
                            <CardContent className='d-flex align-items-center'>
                                <img className='client-photo rounded-circle' src={props.client.avatar} alt=''/>
                                <p>{props.client.first_name} {props.client.last_name}</p>
                            </CardContent>
                            <CardContent className="d-flex-col">
                                <p>Primary phone: {props.client.phone_number}</p>
                                <p>Primary email: {props.client.email}</p>
                                <p>Client note: {props.client.member_notes}</p>
                                <label>Coach note:</label><textarea type="text" name="coach_notes" value={coachNote} disabled={!isEditing} cols='30' onChange={handleChange}></textarea>
                            
                                <p>PT Coach: {props.client.coach_name}</p>
                                <CardActionArea>
                                    {isEditing 
                                    ?
                                    <button type='button' className='edit-note-btn' onClick={handleSave}>Save</button>
                                    :
                                    <button type='button' className='edit-note-btn' onClick={() => setIsEditing(true)}>Edit</button>
                                    }
                                </CardActionArea>
                            </CardContent>
                        </Card>
                        
                    </div>

                </>

            }
        </div>
    )
}


function Clients(props) {
    // const {filter} = useParams();
    // console.log(props.computedMatch.params.filter)
    const [clients, setClients] = useState([]);
    const [searchClients, setSearchClients] = useState('');
    const [filteredResults, setFilteredResults] = useState();

    useEffect (() => {
        async function getClients() {
            let url = `/api_v1/accounts/profiles/`
           
            const response = await fetch(url);
            if(!response.ok) {
                console.log(response);
            } else {
                const data = await response.json();
                setClients(data);
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

    const clientList = searchClients ? filteredResults : clients;
    const ClientHTML = clientList
    .filter(client => props.computedMatch.params.filter === 'pt' ? client.is_client : client)
    .map(client => 
        <div className='client-detail-column'>
        <ClientDetail
            key={client.id}
            client={client}
            handleUpdate={handleUpdate}
        />
        </div>
        )

    
    useEffect (() => {
        if (searchClients !== '') {
            const filteredData = clients.filter((client) => {
                const checkValues = {
                    first_name: client.first_name,
                    last_name: client.last_name,
                    email: client.email
                }
                return Object.values(checkValues).join('').toLowerCase().includes(searchClients.toLowerCase())
            });
            setFilteredResults(filteredData)
        } else {
            setFilteredResults(clients)
        }
    }, [,searchClients]);

    const searchItems = (event) => {
        setSearchClients(event.target.value);
    }

        
    
    return (
        <div className='client-container'>
            <nav className='client-nav'>
                <NavLink to='/clients/'>All Members</NavLink>
                <NavLink to='/clients/pt/'>Personal Training Clients</NavLink>
                <input className='client-search' type='text' name='search' id='search' autoComplete='off' placeholder='Search Here...' onChange={searchItems}></input>
            </nav>

                <section className='client-list'>
                    {ClientHTML}
                </section>
        
        </div>
    )
}

export default Clients