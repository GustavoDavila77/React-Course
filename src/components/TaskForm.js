import React, {Component} from 'react';

export default class TasksForm extends Component {

    state = {
        title: '',
        description: ''
    }

    //capturamos el evento 
    onSubmit = (e) => {
        this.props.addTask(this.state.title, this.state.description);
        e.preventDefault(); //Evita el comportamiento por defecto de un evento
    } 

    //Escuchamos los eventos del input y el textarea a traves del metodo onChange
    //para capturar los datos
    onChange = e =>{
        //console.log(e.target.name, e.target.value);
        //modificamos el estado
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

