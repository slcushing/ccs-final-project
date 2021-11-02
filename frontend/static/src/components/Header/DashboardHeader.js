import { NavLink, withRouter } from 'react-router-dom'

function Dashboard(props) {
    return (
        <>
        <header>Today is: </header>
        <nav className='navbar navbar-expand-lg navbar-dark bg-dark' id='dash-header'>
            <div className='container d-flex justify-content-center'>
                <ul className='navbar-nav' id='dash-nav'>
                    <li className='nav-item'>
                        <NavLink to='/schedule'>Schedule</NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to='/clients'>Clients</NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to='/calendar'>Calendar</NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to='/workout'>Daily Workout</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
        </>
    )
}

export default withRouter(Dashboard)