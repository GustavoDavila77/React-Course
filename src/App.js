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

  deleteTask = (id) => {
    //show only tasks that doesn´t contain id sended
    const newTasks = this.state.tasks.filter(task => task.id !== id)
    this.setState({tasks: newTasks})
    console.log(newTasks);
  }

  checkDone = id => {
    const newTask = this.state.tasks.map(task => {
      if(task.id === id){
        task.done = !task.done
      }
      return task;
    });
    this.setState({task: newTask})
  }


  // pasamos a TaskForm la funcion addtask por medio de los
  // props
  render(){
    return <div>
      <TaskForm addTask={this.addTask} />
      <Tasks
        tasks={this.state.tasks}
        deleteTask={this.deleteTask}
        checkTask={this.checkDone}
      />
    </div>
  }
}

export default App;
