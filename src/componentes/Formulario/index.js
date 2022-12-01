import './formulario.css';
import {useState, useEffect} from 'react';
import { client_id, client_secret } from '../../keys.js'

const Formulario = (props) => {

   const [banda, setBanda] = useState('');
   const [imagem, setImagem] = useState('');
   const [palco, setPalco] = useState('');
   const [accessToken, setAccessToken] = useState("");

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
         console.log("Searching for " + banda);
         console.log("Searching with " + accessToken);

         let busca = await fetch(`https://api.spotify.com/v1/search?q=${banda}&type=artist`, {
            method: 'GET',
            headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + accessToken
            }
         });
         let buscaJSON = await busca.json();
         console.log(buscaJSON.artists.items[0].images[0].url);
         setImagem(buscaJSON.artists.items[0].images[0].url);
      }

   const enviaFormulario = (e) => {
      e.preventDefault();
      
      search(banda)
         .then(props.inserirBanda({
         banda: banda,
         imagem: imagem,
         palco: palco
      }))
      .then(setBanda(''))
      .then(setImagem(''))
      .then(setPalco(''))     
      
      
   }
   
   return(
      <section className='formulario'>
         <form onSubmit={enviaFormulario}>
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
           <label>Palco</label>
           <select
            value={palco}
            onChange={(e) => setPalco(e.target.value)}
            required>
              <option key=""></option>
              {props.nomesPalcos.map(nomePalco => {
               return <option key={nomePalco}>{nomePalco}</option>
              })}
           </select>
           <button>Inserir banda</button>
         </form>
      </section>
   )
};

export default Formulario;