import React from 'react';

const DisplaySingleTask = (props) => {
    return (
        <li className="list-item"
            onClick={() => {
                props.handleCompletedTask(props.task)
            }}
        >
        {props.task}
        </li>
    );
}

export default DisplaySingleTask;