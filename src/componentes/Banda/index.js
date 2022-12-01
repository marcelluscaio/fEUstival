import './banda.css';

const Banda = ({banda, imagem, cor}) => {
   return(
      <div className='banda'>
         <div className='banda__cabecalho' style={{backgroundColor: cor}}>
            <img src={imagem} alt={banda}/>
         </div>
         <div className='banda__rodape'>
            <h4 style={{color: cor}}>{banda}</h4>
            <h5 style={{color: cor}}>{'Genero'}</h5>
         </div>
      </div>
   
   );
};

export default Banda;