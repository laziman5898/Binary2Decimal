import React from "react";
import PropTypes from 'prop-types';


function BinaryInput (props){

return <div className="centerText"> 
<input 
className="form-control input-size" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg"
 name="binary"
 type= "number"
  placeholder="Convert Binary Number"
  value={props.input} 
 onChange={(event)=> props.clickHandler(event)} />
 </div>
}

BinaryInput.propTypes = {
    value: PropTypes.number
  };


export default BinaryInput