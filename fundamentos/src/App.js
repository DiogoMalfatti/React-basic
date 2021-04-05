import React from 'react';
import ComParametro from './components/basicos/ComParametro';
import Primeiro from './components/basicos/Primeiro';

function App (props) {
  return (
    <div>
      <Primeiro />
      <ComParametro
        titulo="Segundo Componente"
        subtitulo="muito legal"
      />
  </div>
  )
}

export default App;