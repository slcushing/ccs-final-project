import { NavLink, withRouter } from 'react-router-dom'

function DashboardHeader(props) {
    return (
        <>
        <header className="dash-header">Welcome {props.username}!  Today is [date] </header>
        <nav className='navbar navbar-expand-lg navbar-dark bg-dark' id='dash-header'>
            <div className='container d-flex justify-content-center'>
                <ul className='navbar-nav' id='dash-nav'>
                    <li className='nav-item'>
                        <NavLink to='/dashboard'>Dashboard</NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to='/clients'>Clients</NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to='/calendar'>Event Calendar</NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to='/workouts'>Workouts + Group Training</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
        </>
    )
}

export default withRouter(DashboardHeader)