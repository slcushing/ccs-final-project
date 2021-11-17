import { MdLogout } from 'react-icons/md';

function Header(props) {
    return(
        <nav className='navbar navbar-expand-lg' id='header-nav'>
            <div className='container'>
                <img className='navbar-brand' src='https://static1.squarespace.com/static/5fd13e0a92170d49d8b2c1e1/t/5fd6a3389264095525ddb611/1629747281826/' alt='logo'/>
                <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarResponsive' aria-controls='navbarResponsive' aria-expanded='false' aria-label='Toggle navigation'>
                    {/* <span className='navbar-toggler-icon'></span> */}
                </button>
                <div className='collapse navbar-collapse' id='navbar-responsive'>
                    <ul className='navbar-nav ml-auto' className='container d-flex justify-content-end' id='main-nav'>
                        {/* {props.isAuth && (
                            <li className='nav-item' id='dashboard-btn'>
                                <NavLink to='/dashboard'>Dashboard</NavLink>
                            </li>
                        )} */}
                        {props.isAuth && (
                            <button type='submit' className='logout' onClick={() => props.handleLogout()}>Logout <MdLogout/></button>
                        )}
                    </ul>
                </div>
            </div> 

        </nav>
    )
}

export default Header