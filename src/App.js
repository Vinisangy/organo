// Importa o hook useState do React para gerenciar o estado do componente funcional
import { useState } from 'react';

// Importa os componentes necessários
import Banner from './componentes/Banner/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';

// Componente principal da aplicação
function App() {
  
  // Definição dos times com suas cores correspondentes
  const times = [
    { nome: 'Programação', corPrimaria: '#57C278', corSecundaria: '#D9F7E9' },
    { nome: 'Front-End', corPrimaria: '#82CFFA', corSecundaria: '#E8F8FF' },
    { nome: 'Data Science', corPrimaria: '#A6D157', corSecundaria: '#F0F8E2' },
    { nome: 'Devops', corPrimaria: '#E06B69', corSecundaria: '#FDE7E8' },
    { nome: 'UX e Design', corPrimaria: '#DB6EBF', corSecundaria: '#FAE9F5' },
    { nome: 'Mobile', corPrimaria: '#FFBA05', corSecundaria: '#FFF5D9' },
    { nome: 'Inovação e Gestão', corPrimaria: '#FF8A29', corSecundaria: '#FFEEDF' }
  ];

  // Estado para armazenar a lista de colaboradores
  const [colaboradores, setColaboradores] = useState([]);

  // Função chamada quando um novo colaborador é adicionado
  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador]);
  }

  // Renderiza o componente principal
  return (
    <div className="App">
      {/* Componente de Banner */}
      <Banner />
      
      {/* Componente de Formulário passando os nomes dos times e a função para tratar novo colaborador */}
      <Formulario times={times.map(time => time.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)} />

      {/* Mapeia e renderiza os componentes de Time para cada time definido */}
      {times.map(time => <Time 
        key={time.nome} 
        nome={time.nome} 
        corPrimaria={time.corPrimaria} 
        corSecundaria={time.corSecundaria} 
        colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
      />)}   
    </div>
  );
}

// Exporta o componente principal
export default App;
