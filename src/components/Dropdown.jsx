import '../styles/Dropdown.css'

function Dropdown({list, clbk}){
    function change (e){
        clbk(e.currentTarget.value)
    }
    return(
        <div className='Dropdown'>
            <select onChange={(e)=>{change(e)}}>
                <option value="">
                    SEGLI UNA CATEGORIA
                </option>

                {list.map((item, index)=>{
                   return(<option key={index} value={item} >{item.charAt(0).toUpperCase() + item.slice(1)}</option>)
                })}

            </select>
        </div>
    )
}

export default Dropdown;