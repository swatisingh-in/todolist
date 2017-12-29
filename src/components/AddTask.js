import React from 'react';

class AddTask extends React.Component{
    state = {
        error: undefined
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const task = e.target.elements.task.value.trim();
        const error = this.props.handleAddTaskMain(task);
    
    
        this.setState(() => ({ error }));
    
        if (!error)
          e.target.elements.task.value = "";
    
    }
 
    render() {
        return (
            <div className="form-control">
                {
                    this.state.error &&
                    <div className="alert-warning">
                    <strong>{this.state.error}</strong>
                    </div>
                
                }
                <form onSubmit={this.handleSubmit}>
                    <input type="text" 
                    autoFocus
                    placeholder="Write a todo.."
                    name="task"
                    ></input>
                    <button type="submit" value="Submit">CREATE TASK</button>
                </form>
            </div>
        );
    }
    
}

export default AddTask;