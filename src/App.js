
import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Funcao from './componentes/Funcao';

function App() {

  const funcoes = [
    {
    nome: 'Awper',
    corPrimaria: '#57c278',
    corSecundaria: '#d9f7e9'
    },
    {
    nome: 'Entry',
    corPrimaria: '#82cffa',
    corSecundaria: '#e8f8e2'
    },
    {
    nome: 'Suport',
    corPrimaria: '#a6d157',
    corSecundaria: '#f0f8e2'
    },
    {
    nome: 'Lurker',
    corPrimaria: '#e06b9',
    corSecundaria: '#fde7e8'
    },
    {
    nome: 'Rifler',
    corPrimaria: '#db6ebf',
    corSecundaria: '#fae9f5'
    }
  ]

  const [colaboradores, setColaborador] = useState([])

  const aoColaboradorAdicionado = (colaborador) =>{
    console.log(colaborador)
    setColaborador([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner/>
      <Formulario funcoes={funcoes.map(funcao => funcao.nome)} aoColaboradorCadastrado={colaborador => aoColaboradorAdicionado(colaborador)}/>
      {funcoes.map(funcao => <Funcao 
      key={funcao.nome} 
      nome={funcao.nome} 
      corPrimaria={funcao.corPrimaria} 
      corSecundaria={funcao.corSecundaria}
      colaboradores={colaboradores.filter(colaborador => colaborador.funcao === funcao.nome)}
      />)}
    </div>
  );
}

export default App;
