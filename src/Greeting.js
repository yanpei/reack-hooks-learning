import React from 'react';
import './App.css';
import Row from './Row';

class Greeting extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      name: 'Marry',
      surname: 'Gilbert',
      width: window.innerWidth,
    };
  }

  componentDidMount(){
    document.title = this.state.name + ' ' + this.state.surname;
    window.addEventListener('resize', this.handleResize);
  }

  componentDidUpdate(){
    document.title = this.state.name + ' ' + this.state.surname;
  }

  componentWillUnmount(){
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize = () => {
    this.setState({width: window.innerWidth});
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
        <Row label="Width">
          {this.state.width} 
        </Row>
      </section>
    );
  }
}

export default Greeting;
