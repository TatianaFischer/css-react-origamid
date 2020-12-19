import React from 'react';
import './App.css';
import Slide from './components/Slide';

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
  return (
    <>
      <Slide slides={slides} />
    </>
  );
}

export default App;
