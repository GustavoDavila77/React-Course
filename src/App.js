import React, {Component} from 'react';
import './App.css';
//import { directive } from '@babel/types';

import tasks from './samples/tasks.json';
import Tasks from './components/Tasks'; 

//console.log(tasks);

class App extends Component {

  state = {
    tasks: tasks
  }

  render(){
    return <div>
      <Tasks tasks={this.state.tasks} />
    </div>
  }
}

export default App;
