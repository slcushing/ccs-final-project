import { NavLink, withRouter } from 'react-router-dom';

function LandingPage() {
    return (
        <>
        <div className='landing-body'>
            <section>
                <div>Where fitness and performance collide.</div>
                <div id="landing-welcome">Welcome to the Factory.</div>
            </section>
            <aside>
                <h4>New to the Factory?</h4>
                <div className='landing-atag'>
                    <NavLink to='/registration'>Register Here</NavLink>
                </div>
                <h4>Back for more? Welcome.</h4>
                <div className='landing-atag'>
                    <NavLink to='/login'>Login Here</NavLink>
                </div>
            </aside>
        </div>
        </>
    )
}

export default withRouter(LandingPage)