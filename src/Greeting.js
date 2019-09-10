import React from 'react';
import './App.css';
import Row from './Row';

class Greeting extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      name: 'Marry',
    };
  }

  handleChangeName = (e) => {
    this.setState({name: e.target.value});
  }

  render(){
    return  (
      <section>
        <Row label="Name">
          <input value={this.state.name} onChange={this.handleChangeName}></input> 
        </Row>
      </section>
    );
  }
}

export default Greeting;
