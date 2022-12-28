import './formulario.css';
import {useState, useEffect} from 'react';
/* import { client_id, client_secret } from '../../keys.js'; */

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

   const [listaBandas, setListaBandas] = useState([]);

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
   
  
   async function listBands(banda){
      let container = document.querySelector(".list-band-container");
      if(banda.length>2){
         container.classList.add("show");
         let busca = await fetch(`https://api.spotify.com/v1/search?q=${banda}&type=artist`, {
            method: 'GET',
            headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + accessToken
            }
         });
         let buscaJSON = await busca.json();
         setListaBandas(buscaJSON.artists.items);
      } else{
         setListaBandas([]);
         container.classList.remove("show");
         }
   }

   /* async function search (banda) {
      
      let busca = await fetch(`https://api.spotify.com/v1/search?q=${banda}&type=artist`, {
         method: 'GET',
         headers: {
         "Accept": "application/json",
         "Content-Type": "application/json",
         "Authorization": "Bearer " + accessToken
         }
      });
      let buscaJSON = await busca.json();      
      

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
      }, [imagem]); */

      function insereBanda(){
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
      }
   
   return(
      <section className='formulario'>                 
         
         <form onSubmit={(e) => {
            e.preventDefault();
            insereBanda()}
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
                     listBands(e.target.value)                             
                     }
                  }
                  required />
            </div>
            <div className={"list-band-container"}>
               {listaBandas.length>1 && listaBandas.map((itemLista, id) => {
               return ( 
                  <div onClick={() => {
                     setBanda(itemLista.name); 
                     setImagem(itemLista.images[0] === undefined ? "Erro" : itemLista.images[0].url);
                     setGenero(itemLista.genres[0]);
                     setListaBandas([])}} 
                  className={"list-band"} 
                  key={id}
                  >
                     <p className={"band-name"}>{itemLista.name}</p>
                     {itemLista.images[0] === undefined ? <div className={"band-img"}><p className={"error-msg"}>Sem imagem disponível</p></div> : <img className={"band-img"} src={itemLista.images[0].url} />}                     
                  </div>
               
               )
               })
            }
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