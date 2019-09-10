import React, {useState, useEffect} from 'react';
import './App.css';
import Row from './Row';

function Greeting(props){
  const [name, setName] = useState('Marry');
  const [surname, setSurname] = useState('Gilbert');
  
  useEffect(() => {
    document.title = name + ' ' + surname;
  });

  function handleNameChange(e){
    setName(e.target.value);
  }

  function handleSurnameChange(e){
    setSurname(e.target.value);
  }

  return (
    <section>
      <Row label="Name"> 
        <input value={name} onChange={handleNameChange}></input>
      </Row>
      <Row label="Surname"> 
        <input value={surname} onChange={handleSurnameChange}></input>
      </Row>
    </section>
  );
}

export default Greeting;
