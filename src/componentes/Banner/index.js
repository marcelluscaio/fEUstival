import './banner.css';

function Banner(){

   return(
      <header className={'header'}>      
         <div className={'credit'}>
            <p className={'credit__line'}>
               Photo by <a href={"https://unsplash.com/@joewthompson?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"}>Joey Thompson</a> on <a href={"https://unsplash.com/s/photos/Festival?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"}>Unsplash</a>
            </p>
            <p className={'credit__line second'}>
               Photo by <a href={"https://unsplash.com/@joewthompson?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"}>Joey Thompson</a> on <a href={"https://unsplash.com/s/photos/Festival?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"}>Unsplash</a>
            </p>
         </div>
      </header>

   )
}

export default Banner;