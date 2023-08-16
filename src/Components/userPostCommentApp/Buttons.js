// import style from './media.css'

const Buttons = ({ buttonText, reqType, setReqType}) =>{
    return(
        <button
            className={buttonText === reqType ? "selected" : null}
            type="button"
            onClick={() => setReqType(buttonText)}
        >
            {buttonText}
        </button>
    );

}

export default Buttons;