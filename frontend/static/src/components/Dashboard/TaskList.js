import { withRouter } from 'react-router-dom'
import {useState, useEffect} from 'react'
import Cookies from 'js-cookie';
import {Modal, Button, Form} from 'react-bootstrap'

function TaskDetail(props) {
    const [isEditing, setIsEditing] = useState(false)
    const [editText, setEditText] = useState(props.task.text);
    const {id, text, complete} = props.task;

    const handleChange = (event) => {
        setEditText(event.target.value);
    }

    const handleUpdate = (event) => {
        const udpatedTask = {...props.task, text: editText}
        props.handleUpdate(udpatedTask);
        setIsEditing(false);
    }

    return (
        <div className='task-item'>
            <input type='checkbox' checked={complete} name="complete" onChange={props.toggleCompletion} value={id} />
            {
                isEditing ?
                <input type="text" name="editText" value={editText} onChange={handleChange} /> :
                <label>{text}</label>
            }
           
            {
                isEditing ? 
                <button type='button' className='edit-task-btn' onClick={handleUpdate}>save</button> :
                <button type='button' className='edit-task-btn' onClick={() => setIsEditing(true)}>edit</button>
            }
            <button type='button' className='delete-task-btn' onClick={props.handleDelete} value={id}>x</button>
        </div>
    )
}


function TaskList(props) {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        async function getTasks() {
            const response = await fetch(`/api_v1/tasks/`);
            if(!response.ok) {
                console.log(response);
            } else {
                const data = await response.json();
                
                setTasks(data);
            }
        }
        getTasks();
    }, []);

    const handleUpdate = async (task) => {
        // console.log('are you updated', task);
        const options = {
            method: 'PUT',
            headers: {
                'X-CSRFToken' : Cookies.get('csrftoken'),
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(task)
        };

        const response = await fetch(`/api_v1/tasks/${task.id}/`, options);
        if(!response.ok) {
            console.log(response)
        } else {
            const updatedTasks = [...tasks];
            const index = updatedTasks.findIndex(e => e.id === task.id);
            updatedTasks[index] = task;
            setTasks(updatedTasks);

        }
    }

    const handleDelete = async (event) => {
        const options = {
            method: 'DELETE',
            headers: {
                'X-CSRFToken': Cookies.get('csrftoken'),
            },
        };
        const response = await fetch(`/api_v1/tasks/${event.target.value}/`, options);
        
        if (!response.ok) {
            console.log(response);
        } 
    }

    const toggleCompletion = async (event) => {
        const updatedTasks = [...tasks];
        const id = event.target.value;
        const index = updatedTasks.findIndex(task => task.id == event.target.value);

        updatedTasks[index].complete = !updatedTasks[index].complete;
        setTasks(updatedTasks);

        const options = {
            method: 'PATCH',
            headers: {
                'X-CSRFToken': Cookies.get('csrftoken'),
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                complete: updatedTasks[index].complete
            }),
        };
        const response = await fetch(`/api_v1/tasks/${id}/`, options);
        
        if (!response.ok) {
            console.log(response);
        } 
    }

    if(!tasks) {
        return <div>spinner thingy</div>
    }

    const TaskListHTML = tasks.map(task =>
        <TaskDetail 
            key={task.id} 
            task={task}
            toggleCompletion={toggleCompletion} 
            handleDelete={handleDelete}
            handleUpdate={handleUpdate}
            />
        )


    return (
        <>
            <div className='task-container'>
                <h4>Tasks</h4>
                {TaskListHTML}
                <button type="button" className='add-task-btn'>+</button>
            </div>

            <Modal>
                <Modal.Header closeButton>
                    <Modal.Title>New Task</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group>
                        <Form.Label>Task:</Form.Label><Form.Control type='text' onChange={props.handleChange} name='text' value={props.text}></Form.Control>
                    </Form.Group>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default withRouter(TaskList)