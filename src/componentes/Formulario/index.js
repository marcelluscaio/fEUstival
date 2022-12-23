import './formulario.css';
import {useState, useEffect} from 'react';
import { client_id, client_secret } from '../../keys.js';

const Formulario = (props) => {
   const [banda, setBanda] = useState('');
   const [imagem, setImagem] = useState('');
   const [genero, setGenero] = useState('');
   const [palco, setPalco] = useState('');
   const [accessToken, setAccessToken] = useState("");
   const [novoPalco, setNovoPalco] = useState({
      nome: '',
      cor: '#666666'
   });

   useEffect(() => {
         let authParameters = {
            method: 'POST',
            headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: 'grant_type=client_credentials&client_id=' + client_id + '&client_secret=' + client_secret
         }
         fetch('https://accounts.spotify.com/api/token', authParameters)
            .then(result => result.json())
            .then(data => setAccessToken(data.access_token))
      } , [])

   async function search (banda) {
      let busca = await fetch(`https://api.spotify.com/v1/search?q=${banda}&type=artist`, {
         method: 'GET',
         headers: {
         "Accept": "application/json",
         "Content-Type": "application/json",
         "Authorization": "Bearer " + accessToken
         }
      });
      let buscaJSON = await busca.json();
      setBanda(buscaJSON.artists.items[0].name);
      setImagem(buscaJSON.artists.items[0].images[0].url);
      setGenero(buscaJSON.artists.items[0].genres[0]);
   }

   useEffect(() =>{
         props.inserirBanda({
               banda: banda,
               imagem: imagem,
               genero: genero,
               palco: palco,
               id: `${banda}-${palco}`
            })
            setBanda('')      
            setImagem('')
            setPalco('')
      }, [imagem]);
   
   return(
      <section className='formulario'>
         <form onSubmit={(e) => {
            e.preventDefault();
            search(banda)}
            }>
            <div className={'field-container'}>
               <label>Artista</label>
               <input 
                  type={'search'}
                  placeholder={'Procure seu artista favorito'} 
                  value={banda} 
                  onChange={(e) => {
                     e.preventDefault();
                     setBanda(e.target.value);                   
                     }
                  } 
                  required />
            </div>
           <div className={'field-container select-container'}>
            <label>Palco</label>
            <select
               value={palco}
               onClick={({target}) => {target.classList.toggle('roda')}}
               onBlur={({target}) => {target.classList.remove('roda')}}
               onChange={(e) => setPalco(e.target.value)}
               required>
               <option key=""></option>
               {props.nomesPalcos.map(nomePalco => {
                  return <option key={nomePalco}>{nomePalco}</option>
               })}
            </select>
           </div>
           <button>Inserir banda</button>
         </form>
         <form onSubmit={(e) => {
            e.preventDefault();
            props.inserirPalco(novoPalco);
            setNovoPalco({
               nome: '',
               cor: '#666666'}
               )
            }
         }>
            <div className={'field-container novo-palco'}>
               <label>Novo palco</label>
               <input 
                  type={'text'}
                  placeholder={'Crie um palco'} 
                  value={novoPalco.nome} 
                  onChange={(e) => {
                     e.preventDefault();
                     setNovoPalco({...novoPalco, nome: e.target.value});                 
                     }
                  } 
                  required />
            </div>
            <button>Criar palco</button>
         </form>
      </section>
   )
};

export default Formulario;