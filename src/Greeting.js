import React from 'react';
import './App.css';
import Row from './Row';

function Greeting(props){
  return (
    <section>
      <Row label="Name"> 
        {props.name}
      </Row>
    </section>
  );
}

export default Greeting;
