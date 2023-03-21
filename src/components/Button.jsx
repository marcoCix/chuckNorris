import '../styles/Button.css'

function Button({content, variant, clbk}){

    return(
        <div className={`Button ${variant}`}>
            {content}
        </div>
    )
}

export default Button;