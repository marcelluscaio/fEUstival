import './banda.css';
import { BiTrash, BiCameraOff } from "react-icons/bi";

const Banda = ({banda, imagem, cor, genero, id, excluiBanda}) => {
   function executaExcluiBanda(){
      excluiBanda(id)
   }
   
   return(
      <div className='banda'>         
         <div className='banda__cabecalho' style={{backgroundColor: cor}}>
            {imagem === "Erro" ? <div className={'cabecalho__imagem'}><BiCameraOff className={'cabecalho__sem-imagem'} fill={cor} /></div> : <img className={'cabecalho__imagem'} src={imagem} alt={banda}/>}
         </div>
         <div className='banda__rodape'>
            <h4 className={'rodape__nome'} style={{color: cor}}>{banda}</h4>
            <h5 className={'rodape__genero'} style={{color: cor}}>{genero}</h5>
         </div>
         <BiTrash className={'banda__excluir'} onClick={executaExcluiBanda} fill={cor} />
      </div>
   
   );
};

export default Banda;