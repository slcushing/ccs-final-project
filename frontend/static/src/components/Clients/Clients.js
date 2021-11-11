import { withRouter, useParams, NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';





function Clients(props) {
    const {filter} = useParams();
    
    const [clients, setClients] = useState([]);
    // const [selection, setSelection] = useState(filter);

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

    const ClientHTML = clients
    .filter(client => filter === 'pt' ? client.is_client : client)
    .map(client => 
        <div key={client.id} className='client-profile'>
            <img className='client-photo' src={client.avatar} alt=''/>
            <p>{client.first_name} {client.last_name}</p>
            <p>Primary phone: {client.phone_number}</p>
            <p>Primary email: {client.email}</p>
            <p>Client Notes: {client.details}</p>
            <p>PT Coach: {client.coach_name}</p>
            <button type='button' className='edit-client'>Edit</button>
        </div>
        )
        
    
    return (
        <div className='client-container'>
            <nav className='client-nav'>
                <NavLink to='/clients/'>All Members</NavLink>
                <NavLink to='/clients/pt/'>Personal Training Clients</NavLink>
            </nav>
            <section className='client-list'>
                {ClientHTML}
            </section>
        </div>
    )
}

export default withRouter(Clients)