import './palcos.css';

import Banda from '../Banda';

const Palcos = (props) => {
   return(
      props.bandas.length > 0 && <section className='palco' style={{backgroundColor: props.cor1}}>
         <h3 className='palco__titulo' style={{borderColor: props.cor1, color: props.cor1}}>{props.nome}</h3>
         {/* <Colaborador /> */}
         <div className='palco__bandas'>
            {props.bandas.map(banda => <Banda key={banda.banda} banda={banda.banda} genero={banda.genero} imagem={banda.imagem} palco={banda.palco} cor={props.cor1} />)}
         </div>
      </section>
   )
}

export default Palcos;