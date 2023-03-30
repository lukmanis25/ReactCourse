const ColorInput = ({inputValue, setInputValue}) =>{
    return(
        <form  onSubmit={(e)=>e.preventDefault()}>
            <input 
                type = "text"
                autoFocus
                placeholder = "Add color name"
                value = {inputValue}
                onChange = {(e) => setInputValue(e.target.value)}
            />

        </form>
    )
}

export default ColorInput