import { NavLink } from 'react-router-dom';

function Header(props) {
    return(
        <nav className='navbar navbar-expand-lg navbar-dark bg-dark' id='header-nav'>
            <div className='container'>
                <a className='navbar-brand' href='/'>KPF</a>
                <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarResponsive' aria-controls='navbarResponsive' aria-expanded='false' aria-label='Toggle navigation'>
                    <span className='navbar-toggler-icon'></span>
                </button>
            </div>

        </nav>
    )
}

export default Header