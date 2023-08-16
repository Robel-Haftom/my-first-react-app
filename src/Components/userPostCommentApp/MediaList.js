// import style from './media.css';
import Buttons from './Buttons';

const MediaList = ({ reqType, setReqType }) =>{
    return(
        <>
            <div className='body'>
            <form className="header" onSubmit={(e) => e.preventDefault()}>
                <Buttons
                    buttonText = "users"
                    reqType = {reqType}
                    setReqType = {setReqType}
                />
                <Buttons
                    buttonText = "posts"
                    reqType = {reqType}
                    setReqType = {setReqType}
                />
                <Buttons
                    buttonText = "comments"
                    reqType = {reqType}
                    setReqType = {setReqType}
                />
            </form>
            </div>
        </>
    );
    
}

export default MediaList;