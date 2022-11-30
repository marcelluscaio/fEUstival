import './banner.css';

function Banner(){

   return(
      <header className={'header'}>      
         <div className='credit-container'>
            <span className={'credit-vertical'}>Photo by</span>         
            <div className='credit-line'>
               <a href={"https://unsplash.com/@joewthompson?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"}>Joey Thompson</a>
               <span className={'header__credit'}>on</span> 
               <a href={"https://unsplash.com/s/photos/Festival?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"}>Unsplash</a>
               </div>         
            </div>
         
        
      </header>

   )
}

export default Banner;