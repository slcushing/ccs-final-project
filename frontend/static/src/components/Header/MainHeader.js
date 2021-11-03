import { NavLink } from 'react-router-dom';

function Header(props) {
    return(
        <nav className='navbar navbar-expand-lg navbar-dark bg-dark' id='header-nav'>
            <div className='container'>
                <a className='navbar-brand' href='/'>KPF</a>
                <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarResponsive' aria-controls='navbarResponsive' aria-expanded='false' aria-label='Toggle navigation'>
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div className='collapse navbar-collapse' id='navbar-responsive'>
                    <ul className='navbar-nav ml-auto' className='container d-flex justify-content-end' id='main-nav'>
                        {props.isAuth && (
                            <li className='nav-item'>
                                <NavLink to='/dashboard'>Dashboard</NavLink>
                            </li>
                        )}
                        {props.isAuth && (
                            <button type='submit' className='logout' onClick={() => props.handleLogout()}>Logout</button>
                        )}
                    </ul>
                </div>
            </div>

        </nav>
    )
}

export default Header