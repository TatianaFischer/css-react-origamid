import React from 'react';
import './App.css';
import DogSvg from './components/DogSvg';
import Slide from './components/Slide';
import dog from './img/dog.svg';
import { ReactComponent as Dog } from './img/dog.svg';

function App() {
  const slides = [
    {
      id: 'slide 1',
      text: 'slide 1',
    },
    {
      id: 'slide 2',
      text: 'slide 2',
    },
    {
      id: 'slide 3',
      text: 'slide 3',
    },
  ];

  const [raioOlho, setRaioOlho] = React.useState(2);

  function handleClick() {
    setRaioOlho(4);
    for (let i = 0; i < 6; i++) {
      setTimeout(() => {
        setRaioOlho(i);
      }, 20 * i);
    }
  }
  return (
    <>
      <Slide slides={slides} />
      <p onClick={handleClick}>
        <img src={dog} alt="dog" />
        <Dog />
        <DogSvg color="#84e" raioOlho="1" />
        <DogSvg color="tomato" raioOlho={raioOlho} />
      </p>
    </>
  );
}

export default App;
