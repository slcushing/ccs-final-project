import {withRouter} from 'react-router-dom';
import {useState} from 'react';
import Cookies from 'js-cookie';

function ProfileEdit(props) {
    const [isEditing, setIsEditing] = useState(false);
    const [profile, setProfile] = useState({
        ...props
    });

    console.log(props)

    const [preview, setPreview] = useState('');

    const handleChange = (event) => {
        const {name, value} = event.target;
        setProfile({...profile, [name]:value})
    }

    const handleImage = event => {
        const file = event.target.files[0];
        setProfile({
            ...profile,
            avatar: file,
        })

        const reader = new FileReader();
        reader.onloadend = () => {
            setPreview(reader.result);
        }
        reader.readAsDataURL(file);
    }

    function handleError(error) {
        console.warn(error);
    }

    async function handleSubmit(event){
        event.preventDefault();
        const formData = new FormData();
        if(profile.avatar instanceof File) {
            formData.append('avatar', profile.avatar);
        }

        formData.append('first_name', profile.first_name);
        formData.append('last_name', profile.last_name);
        formData.append('phone_number', profile.phone_name);
        formData.append('notes', profile.text);

        const options = {
            method: 'PUT',
            headers: {
                'X-CSRFToken': Cookies.get('csrftoken'),
            },
            body: formData,
        };

        const response = await fetch(`/api_v1/accounts/profiles/${props.id}/`, options).catch(handleError);
        if(!response.ok) {
            console.log(response);
        } else {
            const data = await response.json();
            // props.history.push('/manage');
        }
    }

    return(
        <div className='my-profile'>
        {
            isEditing
            ?
            <form className='mt-3 col-4 offset-lg-4 profile-form'onSubmit={handleSubmit}>
                <div className='form-group text-left mb-3'>
                    <input 
                        type='file' 
                        name='avatar' 
                        onChange={handleImage}/>
                    {profile.avatar && <img src={preview} alt=''/>}
                </div>
                <div className='form-group text-left mb-3'>
                    <label htmlFor='first_name'>First Name: </label>
                    <input 
                        type='text' 
                        name='first_name'
                        id='first_name'
                        value={profile.first_name} 
                        onChange={handleChange}
                    />
                </div>
                <div className='form-group text-left mb-3'>
                    <label htmlFor='last_name'>Last Name: </label>
                    <input 
                        type='text' 
                        name='last_name'
                        id='last_name'
                        value={profile.last_name} 
                        onChange={handleChange}
                    />
                </div>
                <div className='form-group text-left mb-3'>
                    <label htmlFor='phone_number'>Primary Phone: </label>
                    <input 
                        type='tel' 
                        name='phone_number'
                        id='phone_number' 
                        value={profile.phone_number} 
                        onChange={handleChange}
                    />
                </div>
                <button type='submit' className='btn btn-primary mt-3' id='profile-button'>Save Profile</button>
            </form>
            :
                <div className="my-profile">
                    <img className="fit-picture" src={profile.avatar} alt="/"/>
                    <p>{profile.first_name} {profile.last_name}</p>
                    <p>{profile.phone_number}</p>
                    <button type='button' className='edit-workout-btn' onClick={() => setIsEditing(true)}>edit</button>

                </div>
        }
        </div>
    )
}

export default withRouter(ProfileEdit)