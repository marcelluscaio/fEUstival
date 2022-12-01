import './App.css';
import {useState} from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Palcos from './componentes/Palcos';

function App() {
 const [bandas, setBandas] = useState([]);

  const palcos = [
    {
      nome: 'Metal pesadão',
      cor1: '#57C278',
      cor2: '#D9F7E9'
    },
    {
      nome: 'Punk divertido',
      cor1: '#82CFFA',
      cor2: '#E8F8FF'
    },
    {
      nome: 'Grunge sofrência',
      cor1: '#A6D157',
      cor2: '#F0F8E2'
    },
    {
      nome: 'Desistimos de classificar',
      cor1: '#E06B69',
      cor2: '#FDE7E8'
    },
  ]; 

  return (
    <div className="App">
      <Banner />
      <Formulario 
        nomesPalcos={palcos.map(palco => palco.nome)} 
        inserirBanda= { banda => {
          setBandas([...bandas, banda]);          
          }
        } />

     {palcos.map(palco => <Palcos
        key={palco.nome} 
        nome={palco.nome} 
        cor1={palco.cor1}
        cor2={palco.cor2}
        bandas={bandas.filter(banda => banda.palco === palco.nome)}
      />)}
      
      {/* */}
      {/* <Palco nome={"Metal"} />
      <Palco nome={"Punk"} />
      <Palco nome={"Grunge"} /> */}

    </div>
  );
}

export default App;
