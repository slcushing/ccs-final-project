import { withRouter } from 'react-router-dom';
import { useState, useEffect } from 'react';



function Clients(props) {
    const [clients, setClients] = useState([]);
    const [ptclients, setPTClients] = useState([]);

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

    useEffect (() => {

    })
   

    const ClientHTML = clients.map(client => 
        <div key={client.id} className='client-profile'>
            <img className='client-photo' src={client.avatar} alt=''/>
            <p>{client.first_name} {client.last_name}</p>
            <p>Primary phone: {client.phone_number}</p>
            <p>Primary email: {client.email}</p>
            <p>Client Notes: {client.details}</p>

        </div>
        )
    
    
    return (
        <div className='client-container'>
        <section className='all-clients'>{ClientHTML}</section>
        <section className='pt-clients'>this is going to be for PT clients.</section>
        </div>
    )
}

export default withRouter(Clients)