import React from 'react';
import './App.css';
import { directive } from '@babel/types';

//TODO  React task, New topic to learn a

//Con los Props podemos enviar parametros y pintarlos
/* function Helloworld(props) {
  return (
    <div id="hello" >
      <h3>{props.subtitle}</h3>
      {props.mytext}
      </div>
    
  )
} */

class Helloworld extends React.Component {

  state = {
    show: true
  }

  toggleShow = () => {
    this.setState({show: !this.state.show})
  }

  //render is a React´s method that let return jsx
  render() {
    if (this.state.show){
      return (
        <div id="hello" >
          <h3>{this.props.subtitle}</h3>
          {this.props.mytext}
          <button onClick={this.toggleShow}>Toggle show</button>
        </div>
      )
    } else{
      return(
        <h1>
          No hay elementos
          <button onClick={this.toggleShow}>toggle Show</button>
        </h1>
        

      )
    }
    
  }
}

function App() {
  return (
    <div>
      This is my component:
      <Helloworld mytext="Hi tavo" subtitle="Name"/>
      <Helloworld mytext="Hi Davila" subtitle="lastname"/>
      </div>
  );
}


//other form to write function
//const App2 = () => <div>This is my component2: <Helloworld/></div>

// i can define like class
/*
class App2 extends React.Component {
  render() {
    return <div>This is my component: <Helloworld/></div>
  }
}*/


export default App;
