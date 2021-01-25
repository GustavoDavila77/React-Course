import React, {Component} from 'react';

import Task from './Task';

class Tasks extends Component {
    render() {
        // property key is a requirement of react for don´nt show a warning
        //task => is a component that is returned
        return this.props.tasks.map(task => <Task task={task} key={task.id}/>)
    } 
}

export default Tasks;