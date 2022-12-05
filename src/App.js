import React, { useState } from "react";
import BinaryInput from "./input";
function App() {

  const [input , inputEdit] = useState("")
  let exists ; 
  function onChange(event){
  const value = event.target.value
  inputEdit(value)
  }

  function convertToBinary(x){ return parseInt(x,2)}
   
  function ValidationRule (){
    const validationInput = convertToBinary(input)
    let digits = (""+input).split("");
    const excludingDigits = ['2','3','4','5','6','7','8','9']; 
 exists = false ; 
     excludingDigits.forEach(element => {
      if (digits.includes(element)) {
        exists=true ; 
      }
    });
    if(input===""){return <p className="centerText text">Waiting For An Input</p>}else if(isNaN(validationInput) || exists === true){return <p className="badtext centerText">Please input a correct value</p>} else{return <p className="goodtext centerText">Thanks for your input</p>}
  }

  function CurrentInput (){
    const validationInput = convertToBinary(input)
 
    if(isNaN(validationInput) || exists===true){return <p></p>}else return <p className=" text answer-text">{validationInput}</p>
  }


return (<div className="center centerdiv">
  <h1 className="centerText binaryTitle">Binary Converter</h1>
  <label className="centerText text">Please Enter a Binary Input : </label>
<form>
<div className="centerText"  >
</div>
<ValidationRule />
<BinaryInput clickHandler={onChange } input={input}/>
<div className="centerText">
<CurrentInput />
<p className="footer">Made by <a href="https://github.com/laziman5898">Lerai Foulkes</a></p>
</div>
</form>
</div>)
}

export default App;
