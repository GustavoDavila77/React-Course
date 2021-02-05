import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './Task.css'

class Task extends Component {
    
    StyleCompleted(){
        return {
            fontSize: '20px',
            color: this.props.task.done ? 'green' : 'black',
            textDecoration: this.props.task.done ? 'line-through' : 'none'
        }
    }
    
    render() {
        //destructuring
        //const {task} = this.props;
        const {title, description,done,id} = this.props.task;
        // return <div className="red"> other form
        //const color= {background: 'gray'}; 
        
        return <div style={this.StyleCompleted()}>
            {title} - 
            {description}-
            {done} -
            {id}
            <input type="checkbox"/>
            <button style={btnDelete}>
                x
            </button>
        </div>
    }
}

Task.propTypes = {
    task: PropTypes.object.isRequired
}

const btnDelete = {
    fontSize: '18px',
    background: '#ea2027',
    color: '#fff',
    border: 'none',
    padding: '10px 15px',
    borderRadius: '50%',
    cursor: 'pointer'
}

export default Task;