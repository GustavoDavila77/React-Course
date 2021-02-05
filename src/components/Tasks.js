import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Task from './Task';

class Tasks extends Component {
    render() {
        // property key is a requirement of react for don´nt show a warning
        //task => is a component that is returned
        return this.props.tasks.map(task => <Task task= {task} key={task.id}/>);
    } 
}


Tasks.propTypes = {
    tasks: PropTypes.array.isRequired
}

export default Tasks;