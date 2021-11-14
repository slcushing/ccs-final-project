import { useState } from 'react';
import { withRouter } from 'react-router-dom';
import Cookies from 'js-cookie';

function ProfileForm(props) {
    const [profile, setProfile] = useState({
        first_name:'',
        last_name: '',
        phone_number: '',
        avatar: null,
    })

    const[preview, setPreview] = useState('');

    const handleChange = (event) => {
        const {name, value} = event.target;
        setProfile({...profile, [name]: value})
    }

    const handleImage = (event) => {
        const file = event.target.files[0];
        setProfile({
            ...profile,
            avatar: file,
        });

        const reader = new FileReader();
        reader.onloadend = () => {
            setPreview(reader.result);
        }
        reader.readAsDataURL(file);
    }

    function handleError(error) {
        console.warn(error);
    }

    async function handleSubmit(event, props){
        event.preventDefault();
        const formData = new FormData();
        formData.append('first_name', props.user.first_name);
        formData.append('last_name', props.user.last_name);
        formData.append('phone_number', profile.phone_number)
        formData.append('avatar', profile.avatar);

        const options = {
            method: 'POST',
            headers: {
                'X-CSRFToken' : Cookies.get('csrftoken'),
            },
            body: formData,
        };

        const response = await fetch(`/api_v1/accounts/profiles/`, options).catch(handleError);
        if(!response.ok) {
            console.log(response);
        } else {
            const data = await response.json();
            props.history.push('/workouts');
        }
    }

    return (
        <form className='mt-3 col-4 offset-lg-4 profile-form'onSubmit={handleSubmit}>
            <div className='form-group text-left mb-3'>
                <label htmlFor='first_name'>First Name: </label>
                <input 
                    type='text' 
                    name='first_name'
                    id='first_name'
                    placeholder='First Name'
                    required
                    value={props.user.first_name} 
                    onChange={handleChange}
                />
            </div>
            <div className='form-group text-left mb-3'>
                <label htmlFor='last_name'>Last Name: </label>
                <input 
                    type='text' 
                    name='last_name'
                    id='last_name'
                    placeholder='Last Name' 
                    required
                    value={props.user.last_name} 
                    onChange={handleChange}
                />
            </div>
            <div className='form-group text-left mb-3'>
                <label htmlFor='phone_number'>Primary Phone: </label>
                <input 
                    type='tel' 
                    name='phone_number'
                    id='phone_number' 
                    required
                    value={profile.phone_number} 
                    onChange={handleChange}
                />
            </div>
            <div className='form-group text-left mb-3'>
                <input 
                    type='file' 
                    name='avatar' 
                    onChange={handleImage}/>
                {profile.avatar && <img src={preview} alt=''/>}
            </div>
            <button type='submit' className='btn btn-primary mt-3' id='profile-button'>Save Profile</button>
        </form>
    )
}

export default withRouter(ProfileForm)
