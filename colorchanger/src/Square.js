const Square = ({handleInputValue, handleColorChange}) =>{
    return(
        <div id = "color_display" style={{backgroundColor: handleColorChange()}}>
            {handleInputValue()}
        </div>
    )
}

export default Square