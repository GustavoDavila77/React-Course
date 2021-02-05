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

  render(){
    return <div>
      <TaskForm/>
      <Tasks tasks={this.state.tasks} />
    </div>
  }
}

export default App;
