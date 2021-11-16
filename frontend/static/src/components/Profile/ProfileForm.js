import { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import Cookies from 'js-cookie';

function ProfileForm(props) {
    const [profile, setProfile] = useState();
    const[preview, setPreview] = useState('');

    useEffect(() => {
        async function getProfile() {
            const response = await fetch(`/api_v1/accounts/profiles/current_user/`);
            if(!response.ok) {
                // console.log(response);
                setProfile({
                    first_name: '',
                    last_name: '',
                    phone_number: '',
                    member_notes: '',
                    avatar: null,
                });
            } else {
                const data = await response.json();
                console.log('data', data)
                setProfile({...data});
            }
           
        }
        getProfile();
    }, [])


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

    async function handleSave(event){
       
        const formData = new FormData();
        formData.append('first_name', profile.first_name);
        formData.append('last_name', profile.last_name);
        formData.append('phone_number', profile.phone_number)
        formData.append('member_notes', profile.member_notes)
        if(profile.avatar instanceof File) {
            formData.append('avatar', profile.avatar);
        }

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

    async function handleUpdate(event){
       
        const formData = new FormData();
        if(profile.avatar instanceof File) {
            formData.append('avatar', profile.avatar);
        }

        formData.append('first_name', profile.first_name);
        formData.append('last_name', profile.last_name);
        formData.append('phone_number', profile.phone_number);
        formData.append('member_notes', profile.member_notes);

        const options = {
            method: 'PUT',
            headers: {
                'X-CSRFToken': Cookies.get('csrftoken'),
            },
            body: formData,
        };

        const response = await fetch(`/api_v1/accounts/profiles/${profile.id}/`, options).catch(handleError);
        if(!response.ok) {
            console.log(response);
        } else {
            const data = await response.json();
        }
    }


    if(!profile) {
        return <div>SPINNER THINGY</div>
    }

    return (
        <div className='profile-form-container'>
            <form className='col-4 offset-lg-4 profile-form'>
                <div className='form-group text-left mb-3'>
                    <label htmlFor='first_name'>First Name: </label>
                    <input 
                        type='text' 
                        name='first_name'
                        id='first_name'
                        placeholder='First Name'
                        required
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
                        placeholder='Last Name' 
                        required
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
                        placeholder='+15558675309'
                        required
                        value={profile.phone_number} 
                        onChange={handleChange}
                    />
                </div>
                <div className='form-group text-left mb-3'>
                    <label htmlFor='notes'>Notes: </label>
                    <textarea 
                        name='member_notes'
                        id='member_notes'
                        cols="40"
                        rows="5"
                        placeholder='Notes...'
                        value={profile.member_notes} 
                        onChange={handleChange}
                    ></textarea>
                </div>
                <div className='form-group text-left mb-3'>
                    <input 
                        type='file' 
                        name='avatar' 
                        onChange={handleImage}/>
                    {profile.avatar && <img src={preview} alt=''/>}
                </div>
                
                {!profile.id
                ?
                    <button type='button' className='btn btn-dark mt-3' id='profile-button' onClick={handleSave}>Save Profile</button>
                :
                    <button type='button' className='btn btn-dark mt-3' id='profile-button' onClick={handleUpdate}>Update Profile</button>
                }
            </form>
        </div>
    )
}

export default withRouter(ProfileForm)
