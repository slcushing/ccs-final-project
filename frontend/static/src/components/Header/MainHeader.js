import { MdLogout } from 'react-icons/md';

function Header(props) {
    return(
        <nav className='navbar navbar-expand-lg' id='header-nav'>
            <div className='container-fluid'>
                <img className='navbar-brand' src='https://static1.squarespace.com/static/5fd13e0a92170d49d8b2c1e1/t/5fd6a3389264095525ddb611/1629747281826/' alt='logo'/>
                
                {props.isAuth && (
                    <button type='submit' className='logout' onClick={() => props.handleLogout()}>Logout <MdLogout/></button>
                )}
                
                
            </div> 

        </nav>
    )
}

export default Header