import Keyboard from './keyboard.js';
import './App.css';
import {useState} from 'react';
function App(){

    let [input,setInput]=useState("");
    function handleClick(value){
        setInput(input+value)

    }

    function calculate(value){
        let outputval = eval(input);
        setInput(outputval);
    }
    function handleClear(){
        setInput("");
    }
    return(
        <div className="container">
            <h1>Claculator app using react</h1>
            <div className = "calculator">
                <input type="text" value={input} className ="output"></input>
               <Keyboard handleClick={handleClick} calculate={calculate} handleClear={handleClear}></Keyboard>
            </div>
        </div>
    )
}
export default App;