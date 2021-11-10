import { NavLink, withRouter } from 'react-router-dom'
import { format } from 'date-fns'


function DashboardHeader(props) {
    const today = new Date();
    const formattedDate = format(today, 'PPPP');
    
    return (
        <>
        <header className="dash-header">Welcome {props.username}!  Today is {formattedDate} </header>
        <nav className='navbar navbar-expand-lg navbar-dark bg-dark' id='dash-header'>
            <div className='container d-flex justify-content-center'>
                <ul className='navbar-nav' id='dash-nav'>
                    {props.isAdmin && (
                        <>
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
                        </>
                    )}
                    {props.isAuth && !props.isAdmin && (
                        <>
                            <li className='nav-item'>
                                    <NavLink to='/calendar'>Event Calendar</NavLink>
                            </li>
                            <li className='nav-item'>
                                <NavLink to='/workouts'>Workouts + Group Training</NavLink>
                            </li>
                        </>
                    )}
                </ul>
            </div>
        </nav>
        </>
    )
}

export default withRouter(DashboardHeader)