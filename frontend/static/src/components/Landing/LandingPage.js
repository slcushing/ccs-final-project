import { NavLink, withRouter } from 'react-router-dom';

function LandingPage() {
    return (
        <>
        <div className='landing-body'>
            <section>#alwaysimproving</section>
            <aside>
                <h4>New to the Factory?</h4>
                <div>
                    <NavLink to='/registration'>Register Here</NavLink>
                </div>
                <h4>Back for more? Welcome back.</h4>
                <div>
                    <NavLink to='/login'>Login Here</NavLink>
                </div>
            </aside>
        </div>
        </>
    )
}

export default withRouter(LandingPage)