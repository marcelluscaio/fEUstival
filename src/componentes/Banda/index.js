import './banda.css';

const Banda = ({banda, imagem, cor, genero}) => {
   return(
      <div className='banda'>
         <div className='banda__cabecalho' style={{backgroundColor: cor}}>
            <img className={'cabecalho__imagem'} src={imagem} alt={banda}/>
         </div>
         <div className='banda__rodape'>
            <h4 className={'rodape__nome'} style={{color: cor}}>{banda}</h4>
            <h5 className={'rodape__genero'} style={{color: cor}}>{genero}</h5>
         </div>
      </div>
   
   );
};

export default Banda;