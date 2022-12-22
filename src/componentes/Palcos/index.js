import './palcos.css';
import hexToRgba from 'hex-to-rgba';
import Banda from '../Banda';

const Palcos = (props) => {

   return(
      props.bandas.length > 0 && <section className='palco' style={{backgroundColor: hexToRgba(props.cor, 0.25)}}>
         <h3 className='palco__titulo' style={{borderColor: props.cor, color: props.cor}}>{props.nome}</h3>
         <input type={'color'} value={props.cor} onChange={(e) => props.mudaCor(e.target.value, props.nome)}/>
         <div className='palco__bandas'>
            {props.bandas.map(banda => <Banda key={banda.banda} banda={banda.banda} genero={banda.genero} imagem={banda.imagem} palco={banda.palco} cor={props.cor} id={banda.id} excluiBanda={props.excluiBanda} />)}
         </div>
      </section>
   )
}

export default Palcos;