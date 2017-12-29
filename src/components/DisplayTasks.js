import React from 'react';
import DisplaySingleTask from './DisplaySingleTask';

const DisplayTasks = (props) => {
    return (
        <div className="task-list">
            <ul>
                {
                    props.tasks.length > 0 && props.tasks.map((task, index) => 
                        <DisplaySingleTask key={index} task={task} handleCompletedTask={props.handleCompletedTask}/>
                    )
                }
            </ul>
        </div>
    );
}

export default DisplayTasks;