import Square from "./Square"
import ColorInput from "./ColorInput"
import { useState } from "react"


const Content = () => {

    const [inputValue, setInputValue] = useState("");



    const handleInputValue = () => {
        if( inputValue) return inputValue
        return "Empty value"
    }   

    const handleColorChange = () => {
        if( inputValue) return inputValue
        return "white"
    }

    return (
        <main>
            <Square
                handleInputValue={handleInputValue}
                handleColorChange = {handleColorChange}
            />
            <ColorInput
                inputValue={inputValue}
                setInputValue={setInputValue}
            />
        </main>
    )
}


export default Content