import React, {useState, useEffect} from 'react';
import './App.css';
import Row from './Row';

export default function Greeting(props){
  const name = useFormInput('Marry');
  const surname = useFormInput('Gilbert');
  const width = useWindowWidth();
  useDocumentTitle(name.value + ' ' + surname.value);

  return (
    <section>
      <Row label="Name"> 
        <input value={name.value} onChange={name.onChange}></input>
      </Row>
      <Row label="Surname"> 
        <input value={surname.value} onChange={surname.onChange}></input>
      </Row>
      <Row label="Width"> 
        {width}
      </Row>
    </section>
  );
}

function useFormInput(initValue){
  const [name, setName] = useState(initValue);
  function handleNameChange(e){
    setName(e.target.value);
  }

  return {
    value: name,
    onChange: handleNameChange,
  }
}

function useDocumentTitle(title){
  useEffect(() => {
    document.title = title;
  });
}

function useWindowWidth(){
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  });

  return width;
}