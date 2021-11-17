import {useState} from 'react';
import { withRouter } from 'react-router-dom';
import Cookies from 'js-cookie';

function RegistrationForm(props) {
    const [user,setUser] = useState({
        username: '',
        email: '',
        password1: '',
        password2:'',
    });

    const [error, setError] = useState(null)

    function handleInput(event) {
        const {name,value} = event.target;
        setUser(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    function handleError(error) {
        console.warn(error)
    };

    async function handleSubmit(event) {
        event.preventDefault();
        console.log('user', user)
        if(user.password1 !== user.password2) {
            setError('Passwords do not match!')
        } else {
            const options = {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    "X-CSRFToken": Cookies.get("csrftoken"),
                },
                body: JSON.stringify(user)
            };

            const response = await fetch('/rest-auth/registration/', options).catch(handleError);
            if(!response.ok) {
                console.log(response);
            } else {
                const data = await response.json();
                Cookies.set('Authorization', `Token ${data.key}`);
                props.setUser((prevState) => ({
                    ...prevState, isAuth: true,
                }));
                props.history.push('/profile');
            }
        }
    }

    // if(props.isAuth) {
    //     return <Redirect to='/' />
    // }

    return (
        <div className='register-container'>
            <form className='col-4 offset-lg-4 register-form' onSubmit={handleSubmit}>
                <div className='form-group text-left mb-3'>
                    <label htmlFor='username'>Username</label>
                    <input
                        type='text'
                        className='form-control'
                        id='username'
                        placeholder='Enter Username'
                        required
                        name='username'
                        value={user.username}
                        onChange={handleInput}
                        />
                </div>
                <div className='form-group text-left mb-3'>
                    <label htmlFor='email'>Email</label>
                    <input
                        type='email'
                        className='form-control'
                        id='email'
                        placeholder='Enter Email'
                        required
                        name='email'
                        value={user.email}
                        onChange={handleInput}
                        />
                </div><div className='form-group text-left mb-3'>
                    <label htmlFor='password1'>Password</label>
                    <input
                        type='password'
                        className='form-control'
                        id='password1'
                        placeholder='Enter Password'
                        required
                        name='password1'
                        value={user.password1}
                        onChange={handleInput}
                        />
                </div>
                <div className='form-group text-left mb-3'>
                    <label htmlFor='password2'>Confirm Password</label>
                    <input
                        type='password'
                        className='form-control'
                        id='password2'
                        placeholder='Confirm Password'
                        required
                        name='password2'
                        value={user.password2}
                        onChange={handleInput}
                        />
                </div>
                <button type='submit' className='btn btn-danger mt-3' id='register-button'>Register</button>
            </form>
        </div>
    )
}

export default withRouter(RegistrationForm)