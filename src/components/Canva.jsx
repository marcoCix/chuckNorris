import '../styles/Canva.css'

function Canva({joke}){
   
    return(
        <div className={`Canva ${joke == "" && "d-none"}`}>
            {joke}
        </div>
    )
}

export default Canva;