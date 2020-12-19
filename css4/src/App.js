import React from 'react';
import './App.css';
import Produto from './components/Produto';
import Imagem from './components/Imagem';
function App() {
  const [ativar, setAtivar] = React.useState(false);
  const [verImg, setVerImg] = React.useState(false);
  return (
    <>
      <h1>Loja</h1>
      <div>
        <button onClick={() => setAtivar(!ativar)}>Ver Promoções</button>
        {ativar && <Produto />}
      </div>
      {ativar ? (
        <div>
          <button onClick={() => setVerImg(!verImg)}>
            Ver Foto do Produto{' '}
          </button>
          {verImg && <Imagem />}
        </div>
      ) : (
        false
      )}
    </>
  );
}

export default App;
