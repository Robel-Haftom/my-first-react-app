// import style from './color-display.css'

const InputColor = ({ colorValue, setColorValue}) => {
    return(
        <input
            type='text'
            value={colorValue}
            required
            onChange={ (e) => setColorValue(e.target.value)}
        />
    );
}

export default InputColor;