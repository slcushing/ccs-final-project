import { withRouter } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { Modal, Button, Form } from 'react-bootstrap';
import Sessions from './../Workout/Sessions';
import { FaRegEdit, FaTrash, FaRegPlusSquare } from 'react-icons/fa';
import { format } from 'date-fns';
import { is } from 'date-fns/locale';
import { BsSave } from "react-icons/bs";



function WorkoutDetail(props) {
    const [isEditing, setIsEditing] = useState(false);
    const [editWorkout, setEditWorkout] = useState(props.workout);
    // const {id, date, text} = props.workout;

    const handleChange = (event) => {
        // setEditWorkout(event.target.value);
        const {name, value} = event.target;
        setEditWorkout(prevState => ({
            ...prevState,
            [name]: value,
        }));
    }

    const handleUpdate = (event) => {
        props.handleUpdate(editWorkout);
        setIsEditing(false);
    }

    return (
        <div className='workout'>
            {
                isEditing
                ? 
                <>
                    <div>
                        <label htmlFor="date">Date</label>
                        <input id="date" type='date' name='date' value={editWorkout.date} min='2021-11-01' onChange={handleChange}></input>
                        <textarea type='text' name='text' id="text" className='workout-edit-box' rows={5} cols={20} value={editWorkout.text} onChange={handleChange}></textarea>
                        <button type='button' className='save-workout-btn' onClick={handleUpdate}>Save <BsSave/></button>
                    </div>
                </>
                :
                <>
                    
                    <h5 className="workout-date">{format(new Date(props.workout.date + 'T08:00:00'), 'PPPP')}</h5>
                    <article className='workout-text'>{props.workout.text}</article>
                    {props.isAdmin && <button type='button' className='edit-workout-btn' onClick={() => setIsEditing(true)}><FaRegEdit/></button>}
                </>
        
            }
                {props.isAdmin && <button type='button' className='delete-workout-btn' value={editWorkout.id} onClick={props.handleDelete}><FaTrash/></button>}
        </div>
    )

}


function Workouts(props) {
    const [workouts, setWorkouts] = useState([]);
    const [show, setShow] = useState(false);
    const [text, setText] = useState('');
    const [date, setDate] = useState((new Date()).toISOString().substr(0,10));

    useEffect(() => {
        async function getWorkouts() {
            const response = await fetch(`/api_v1/workouts/`);
            if(!response.ok) {
                console.log(response);
            } else {
                const data = await response.json();
                setWorkouts(data);
            }
        }
        getWorkouts();
    }, []);

    const handleUpdate = async (workout) => {
        const options = {
            method: 'PUT',
            headers: {
                'X-CSRFToken' : Cookies.get('csrftoken'),
                'Content-Type' : 'application/json',
            },
            body: JSON.stringify(workout)
        };

        const response = await fetch(`/api_v1/workouts/${workout.id}/`, options);
        if(!response.ok) {
            console.log(response)
        } else {
            const updatedWorkouts = [...workouts];
            const index = updatedWorkouts.findIndex(e => e.id === workout.id);
            updatedWorkouts[index] = workout;
            setWorkouts(updatedWorkouts);
        }
    }

    const handleDelete = async (event) => {
        const id = event.currentTarget.value;
        const options = {
            method: 'DELETE',
            headers: {
                'X-CSRFToken' : Cookies.get('csrftoken'),
            },
        };
        const response = await fetch(`/api_v1/workouts/${id}/`, options);
        if(!response.ok) {
            console.log(response);
        } else {
            let updatedWorkouts = [...workouts];
            const index = updatedWorkouts.findIndex(e => e.id == id);
            updatedWorkouts.splice(index, 1);
            setWorkouts(updatedWorkouts);
        }
    }

    function handleError(error) {
        console.warn(error)
    }

    async function handleSubmit() {

        const options = {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json',
                'X-CSRFToken': Cookies.get('csrftoken'),           
            },
            body: JSON.stringify({
                date,
                text,
            })
        };

        const response = await fetch(`/api_v1/workouts/`, options).catch(handleError);
        if(!response.ok) {
            console.log(response)
        } else {
            const data = await response.json();
            setShow(false);
            setText('');
            console.log(workouts)
            let updatedWorkouts = [...workouts, data];
            updatedWorkouts = updatedWorkouts.sort((a, b) => {
                return new Date(a.date) - new Date(b.date);
            });
            setWorkouts(updatedWorkouts);
        }
    }

    const handleAdd = () => setShow(true)
    const handleClose = () => setShow(false)

    if(!workouts) {
        return <div>spinner thingy</div>
    }

    const WorkoutListHTML = workouts.map(workout =>
       <WorkoutDetail
            key={workout.id}
            workout={workout}
            handleDelete={handleDelete}
            handleUpdate={handleUpdate}
            isAdmin={props.isAdmin}
        />
    )
    
    return(
        <>  
            <div className='workout-container'>
                
                <section className='workout-list'>
                    <div className='workout-header'>
                    <h3>Adult Performance Workouts</h3>
                    {props.isAdmin && (
                        <button type='button' className='add-workout-btn' onClick={handleAdd}>Add <FaRegPlusSquare/></button>
                    )}
                    </div>
                    {WorkoutListHTML}
                </section>
                
                <section className='class-list'>
                    <h3>Adult Performance Group Training</h3>
                    <Sessions isAuth={props.isAuth} isAdmin={props.isAdmin}/>
                </section>
            </div>
 
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add New Workout</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form.Group>
                            <Form.Label>Date:</Form.Label>
                            <Form.Control type='date' name='workout-date' value={date} min={date} onChange={(e) => setDate(e.target.value)}></Form.Control>
                            <Form.Label>Workout:</Form.Label>
                            <Form.Control type='text' as='textarea' onChange={(e) => setText(e.target.value)} name='text' value={text}>
                            </Form.Control>
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button type='button' variant='success' onClick={handleSubmit}>Add</Button>
                        <Button type='button' variant='danger' onClick={handleClose}>Close</Button>
                    </Modal.Footer>
                </Modal>    
        </>
    )
}

export default withRouter(Workouts);