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
      cor: '#57C278'
    },
    {
      nome: 'Punk divertido',
      cor: '#82CFFA'
    },
    {
      nome: 'Grunge sofrência',
      cor: '#A6D157'
    },
    {
      nome: 'Desistimos de classificar',
      cor: '#E06B69'
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
        cor={palco.cor}
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
