import React from 'react'
import {capitalize } from '../utils';
import './radioStyle.css'


const RadioButton = props => {

  const {radioItem, formState, selectRadio} = props

  const getRadioClass = key => {
    return (
      "custom-control-input" +
      (formState.validity[key] === false ? " invalid" : "")
    );
  };

  console.log('formState.gender === radioItem?', formState.values.gender === radioItem)
  return (
    <div className="custom-control-wrap custom-radio" onClick={()=>selectRadio(radioItem)}>
      <input
      type="radio"
      className={getRadioClass(radioItem)}
      placeholder={"Enter " + radioItem}
      checked={formState.values.gender === radioItem}
      onChange={()=>selectRadio(radioItem)}
    />
        <label aria-hidden="true" className="custom-control-label" onClick={()=>selectRadio(radioItem)}/>
        <span>
        {capitalize(radioItem)}
        </span>
    </div>
  )
}

export default RadioButton
