import React from 'react';
import Header from './Header';
import AddTask from './AddTask';
import DisplayTasks from './DisplayTasks'
import CompletedTasks from './CompletedTasks';

class ToDoList extends React.Component{
    state = {
        tasks : [],
        completed : []
    }

    handleAddTaskMain = (task) => {
        if (!task) {
          return 'Enter valid task!!';
        }
    
        else if(this.state.tasks.indexOf(task) > -1) {
          return 'Task already exists!!';
        }
    
        this.setState((prevState) => ({
            tasks: [task].concat(prevState.tasks)
        }));
    };

    handleCompletedTask = (completedTask) => {
        this.setState((prevState) => ({
            tasks: prevState.tasks.filter((task) => {
                return completedTask !== task;
            }),
            completed: [completedTask].concat(prevState.completed)
        }));
    }

    handleClearCompletedTasks = () => {
        this.setState(() => ({
            completed: []
        }));
    }

    componentDidMount() {
        try {
          const json_tasks = localStorage.getItem('tasks');
          const json_completed = localStorage.getItem('completed');
          const tasks = JSON.parse(json_tasks);
          const completed = JSON.parse(json_completed);
    
          if (tasks) {
            this.setState(() => ({
              tasks
            }));
          }

          if (completed) {
            this.setState(() => ({
              completed
            }));
          }
        }
    
        catch(e) {
          //Do nothing
        }
      }
    
      componentDidUpdate(prevProps, prevState) {
        if(prevState.tasks.length !== this.state.tasks.length) {
          const json = JSON.stringify(this.state.tasks);
          localStorage.setItem('tasks', json);
        }

        if(prevState.completed.length !== this.state.completed.length) {
            const json = JSON.stringify(this.state.completed);
            localStorage.setItem('completed', json);
        }
      }

    render() {
        return (
            <div className="container">
                <div className="main-content">
                    <Header />
                    <AddTask 
                        handleAddTaskMain={this.handleAddTaskMain}
                    />
                    <DisplayTasks 
                        tasks={this.state.tasks}
                        handleCompletedTask={this.handleCompletedTask}/>
                    {
                        this.state.completed.length > 0 && 
                        <CompletedTasks 
                            completedTasks={this.state.completed}
                            handleClearCompletedTasks={this.handleClearCompletedTasks}
                        />
                    }
                </div>
                <div className="background-image">
                </div>
            </div>
        );
    }
    
}

export default ToDoList;