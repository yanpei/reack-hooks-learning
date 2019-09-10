import React from 'react';
import './App.css';
import Row from './Row';

class Greeting extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      name: 'Marry',
      surname: 'Gilbert',
    };
  }

  handleNameChange = (e) => {
    this.setState({name: e.target.value});
  }

  handelSurnameChange = (e) => {
    this.setState({surname: e.target.value});
  }

  render(){
    return  (
      <section>
        <Row label="Name">
          <input value={this.state.name} onChange={this.handleNameChange}/>
        </Row>
        <Row label="Surname">
          <input value={this.state.surname} onChange={this.handelSurnameChange}/> 
        </Row>
      </section>
    );
  }
}

export default Greeting;
