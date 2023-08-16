// import style from './color-display.css'

const ColorDisplay = ({ colorValue }) =>{
    return(
        <div  
            className="main"
            style={{backgroundColor: colorValue}}
        >
            <p>{colorValue ? colorValue : "Empty Value"}</p>
        </div>
    );
}


ColorDisplay.defaultProps = {
    colorValue : "Empty Color Value"
  }
  
export  default ColorDisplay;