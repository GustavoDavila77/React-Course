import React, {Component} from 'react';
import './App.css';
//import { directive } from '@babel/types';

import tasks from './samples/tasks.json';

//Components
import Tasks from './components/Tasks'; 
import TaskForm from './components/TaskForm';

//console.log(tasks);

class App extends Component {

  state = {
    tasks: tasks
  }

  addTask = (title, description) => {
    const newTask = {
      title: title,
      description: description,
      id: this.state.tasks.length
    }
    this.setState({
      //concatenamos a task la nueva tarea
      tasks: [...this.state.tasks, newTask]
    })
    //console.log(title, description)
  }

  // pasamos a TaskForm la funcion addtask por medio de los
  // props
  render(){
    return <div>
      <TaskForm addTask={this.addTask} />
      <Tasks tasks={this.state.tasks} />
    </div>
  }
}

export default App;
