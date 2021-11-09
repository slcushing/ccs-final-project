import { withRouter } from 'react-router-dom'
import {useState, useEffect} from 'react'
import Cookies from 'js-cookie';
import {Modal, Button, Form} from 'react-bootstrap'
import { FaRegEdit, FaTrash, FaRegPlusSquare } from 'react-icons/fa'

function TaskDetail(props) {
    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(props.task.text);
    const {id, text, complete} = props.task;

    const handleChange = (event) => {
        setEditText(event.target.value);
    }

    const handleUpdate = (event) => {
        const updatedTask = {...props.task, text: editText}
        props.handleUpdate(updatedTask);
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
                <button type='button' className='save-task-btn' onClick={handleUpdate}>save</button> :
                <button type='button' className='edit-task-btn' onClick={() => setIsEditing(true)}><FaRegEdit/></button>
            }
            <button type='button' className='delete-task-btn' onClick={props.handleDelete} value={id}><FaTrash/></button>
        </div>
    )
}


function TaskList(props) {
    const [tasks, setTasks] = useState([]);
    const [show, setShow] = useState(false);
    const [text, setText] = useState('');

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
        const id = event.currentTarget.value;
        const options = {
            method: 'DELETE',
            headers: {
                'X-CSRFToken': Cookies.get('csrftoken'),
            },
        };
        const response = await fetch(`/api_v1/tasks/${id}/`, options);
        if (!response.ok) {
            console.log(response);
        } else {
            let updatedTasks = [...tasks];
            const index = updatedTasks.findIndex(e => e.id === id);
            updatedTasks.splice(index, 1);
            setTasks(updatedTasks);
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

    function handleError(error) {
        console.warn(error);
    }

    async function handleSubmit(e) {

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': Cookies.get('csrftoken'),
            },
            body: JSON.stringify({text})
        };

        const response = await fetch(`/api_v1/tasks/`, options).catch(handleError);
        if(!response.ok) {
            console.log(response)
        } else {
            const data = await response.json();
            setShow(false);
            setText('');
            setTasks([...tasks, data]);
        }
    }

    const handleAdd = () => setShow(true)
    const handleClose = () => setShow(false)

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
                <button type="button" className='add-task-btn' onClick={handleAdd}>Add task <FaRegPlusSquare/></button>
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>New Task</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group>
                        <Form.Label>Task:</Form.Label><Form.Control type='text' onChange={(e) => setText(e.target.value)} name='text' value={text}></Form.Control>
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

export default withRouter(TaskList)