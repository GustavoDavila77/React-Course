import React, {Component} from 'react';

export default class TasksForm extends Component {

    state = {
        title: '',
        description: ''
    }

    //capturamos el evento 
    onSubmit = (e) => {
        console.log(this.state);
        e.preventDefault();
    } 

    onChange = e =>{
        console.log(e.target.name, e.target.value);
        this.setState({
            [e.target.name]: e.target.value 
        })
    }

    

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <input
                    name= "title"
                    type="text"
                    placeholder="write a Task"
                    onChange={this.onChange}
                    value={this.state.title}
                    ></input>
                <br/>
                <br/>
                <textarea 
                    name= "description"
                    placeholder="write a description"
                    onChange={this.onChange}
                    value={this.state.description}
                    ></textarea>
                <input type="submit"/>
            </form>
        )
    }
}

