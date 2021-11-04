import { withRouter } from 'react-router-dom'
import {useState, useEffect} from 'react'
import Cookies from 'js-cookie';


function TaskList() {
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

    async function handleChange(event) {
        event.preventDefault();
        const complete = event.target.value;
        const id = event.target.dataset.id;
        const options = {
            method: 'PUT',
            headers: {
                'X-CSRFToken': Cookies.get('csrftoken'),
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({complete}),
        };
        const response = await fetch(`/api_v1/tasks/${id}/`, options);
        if (!response.ok) {
            console.log(response);
        } else {
            const data = await response.json();
        }

    }

    if(!tasks) {
        return <div>spinner thingy</div>
    }

    const TaskListHTML = tasks.map(task =>
        <div key={task.id} className='task-item'>
            <input type='checkbox' checked={task.complete}  name="task" onChange={handleChange}/>
            <label> {task.task} </label>
        </div>)

    return (
        <div className='task-container'>
            <h4>Tasks</h4>
            {TaskListHTML}
        </div>
    )
}

export default withRouter(TaskList)