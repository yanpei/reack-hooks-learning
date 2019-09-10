import React, {useState, useEffect} from 'react';
import './App.css';
import Row from './Row';

function Greeting(props){
  const [name, setName] = useState('Marry');
  const [surname, setSurname] = useState('Gilbert');
  
  useEffect(() => {
    document.title = name + ' ' + surname;
  });

  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  })

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
      <Row label="Width"> 
        {width}
      </Row>
    </section>
  );
}

export default Greeting;
