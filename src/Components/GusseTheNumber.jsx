import style from './Style.css'
import { useState, useRef } from 'react';

function GussesTheNumber(){

    //hookes
    const userInputGusee = useRef(null);
    const [computersGusse , setComputersGusse] = useState(0);
    const [disableButton, setDissableButton] = useState(false);
    const [result, setResult] = useState("Try your best");
    const [round, setRound] = useState(1);

    //the number to be gussed
    const [theNumber, setTheNumber] = useState(Math.floor((Math.random() * 30) + 1));

    function computerGusse(){
        setTimeout(() => {
            setComputersGusse(Math.floor((Math.random() * 30 ) + 1));
            setDissableButton(false);
        }, 2000);
        
    }

    function checkUserGuess(userGuess, theNumber){
        if(userGuess == theNumber){
            setResult("You got it. Congrats !!!")
            setTheNumber(Math.floor((Math.random() * 30) + 1));
            setRound((round) =>{
                round = round + 1;
            } );
        } else {
            setResult("You Missed, Computers turn...");
            computerGusse();
            checkComputerGuess(computersGusse, theNumber);
        }
    }

    function checkGuesses(){


    }

    function checkComputerGuess(computersGusse, theNumber){
        if(computersGusse == theNumber){
            setResult("Computer got it. Congrats !!!")
            setTheNumber(Math.floor((Math.random() * 30) + 1));
            setRound((round) =>{
                round = round + 1;
            } );
        } else {
            setTimeout(() =>{
                setResult("Computer Missed it, Your turn...");
            }, 2000);
            console.log("Computer Missed it, Your turn...");

        }
    }

    function clickHandler(){
        setDissableButton(true);
        checkUserGuess(userInputGusee.current.value, theNumber)

        console.log(theNumber)
    }


    return(
    <div className='div'>
        <h1>Gusse The Number</h1>
        <h4>Round {round}</h4>
        <div className='parent'>
            <div className="user">
                <h3>You</h3>
                <input 
                    type="number"
                    defaultValue = "0" 
                    min="0"
                    max="30"
                    ref={userInputGusee}/>
            </div>
            <div className="computer">
                <h3>Computer</h3>
                <p>{computersGusse}</p>
            </div>  
        </div>
        <button className='button' disabled={disableButton
        } onClick={clickHandler}>Gusse</button>
        <p className='result'>{result}</p>
    </div>
    );
}

export default GussesTheNumber;