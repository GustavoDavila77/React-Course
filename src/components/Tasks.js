import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Task from './Task';

class Tasks extends Component {
    render() {
        // property key is a requirement of react for don´nt show a warning
        //task => is a component that is returned
        return this.props.tasks_array.map(taskvalue =>
            <Task
                task_send= {taskvalue}
                key={taskvalue.id}
                deleteTask={this.props.deleteTask}
                checkTask= {this.props.checkTask}
            />);
    } 
}


Tasks.propTypes = {
    tasks_array: PropTypes.array.isRequired
}

export default Tasks;