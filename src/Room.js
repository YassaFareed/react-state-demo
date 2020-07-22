import React, { useState } from 'react'; /*using useState hook*/
import './Room.css'
function Room(){ 

    let [isLit,setLit]=useState(true); /* function setLit with initial value of isLit = false*/ 
    let [temp,setTemp]=useState(72);
    return(
        <div className={`room ${isLit? "on": "off"}`}> 
        <br/>
        Room is {isLit?"lit":"dark"}
        <br/>
        <br/>
        temp={temp} degree celsius
        <br/>
        <button onClick={()=> setLit(true)}> on </button> 
        <br/>
        <button onClick={()=> setLit(false)}> Off </button> 
        <br/>
        <button onClick={()=>{
                console.log("increase or decrease temp arrow function"); /*to show this message on console for debugging*/
                setTemp(temp++);}}> 
                +
                 </button>
            <br/>
        <button onClick={()=>{
                console.log("increase or decrease temp arrow function"); /*to show this message on console for debugging*/
                setTemp(temp--);}}> 
                -
                 </button>
        </div>
    );
}
/*onClick is an event that occurs when button is clicked, when clicked function is called on clicking*/
export default Room; /*exported to app.js*/