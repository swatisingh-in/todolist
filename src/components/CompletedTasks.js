import React from 'react';
import DisplayCompletedTask from './DisplayCompletedTask';

const CompletedTasks = (props) => {
    return (
        <div className="completed-task">
            <div className="completed-tasks-header">
                <h3>Done</h3>
                <h3 className="clear-tasks"
                onClick = {() => {
                    props.handleClearCompletedTasks()
                }}
                >Clear</h3>
            </div>
                <ul className="completed-tasks-list">
                {
                    props.completedTasks.map((task, index) => (
                        <DisplayCompletedTask key={index} task={task}/>
                    ))
                }
                </ul>
        </div>
        
    )
}

export default CompletedTasks;