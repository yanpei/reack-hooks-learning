import React, {useState} from 'react';
import './App.css';
import Row from './Row';

function Greeting(props){
  const [name, setName] = useState('Marry');
  
  function handleChangeName(e){
    setName(e.target.value);
  }

  return (
    <section>
      <Row label="Name"> 
        <input value={name} onChange={handleChangeName}></input>
      </Row>
    </section>
  );
}

export default Greeting;
