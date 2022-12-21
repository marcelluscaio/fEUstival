import './App.css';
import {useState} from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Palcos from './componentes/Palcos';

function App() {
  const [bandas, setBandas] = useState([]);

  const [palcos, setPalcos] = useState([
    {
      nome: 'Metal pesadão',
      cor: '#1DB954'
    },
    {
      nome: 'Punk divertido',
      cor: '#009933'
    },
    {
      nome: 'Grunge sofrência',
      cor: '#66AA88'
    },
    {
      nome: 'Desistimos de classificar',
      cor: '#99EEBB'
    },
  ]);

  function excluiBandaSelecionada(id){
    setBandas(bandas.filter(banda => banda.id != id))
  }

  return (
    <div className="App">
      <Banner />

     {palcos.map(palco => <Palcos
        key={palco.nome} 
        nome={palco.nome} 
        cor={palco.cor}
        bandas={bandas.filter(banda => banda.palco === palco.nome)}
        excluiBanda = {excluiBandaSelecionada}
      />)}

      <Formulario 
        nomesPalcos={palcos.map(palco => palco.nome)} 
        inserirBanda= { banda => {
          setBandas([...bandas, banda]);          
          }
        }
        inserirPalco= { palco => {
          setPalcos([...palcos, palco])
          }
        }
         />

    </div>
  );
}

export default App;
