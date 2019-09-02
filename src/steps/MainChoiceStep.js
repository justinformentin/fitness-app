import React, {useState, useEffect} from "react";
import { Box, FormContainer, FormItemTitle } from '../styles'

export const MainChoiceStep = (props) => {

  const [selected, setSelected] = useState('')

  useEffect(() => {
    props.handleMainChoice(selected)
  }, [selected])

  const selectChoice = v => {
    setSelected(v)
  }

  if (props.currentStep !== 1) {
    return null;
  }
  return (
    <FormContainer showing={props.showing}>
      <FormItemTitle>
      <h2>What is your main area of focus?</h2>
      <p>Please select the option which is more closely related to your long term goals.</p>
      </FormItemTitle>
      <div className="form-wrap flex-row">
        <Box selected={selected === 'Weight Loss'} onClick={() => selectChoice("Weight Loss")}>
          <img
            alt="weight"
            src="https://img.icons8.com/bubbles/200/000000/dumbbell.png"
          />
          <h2>Weight Loss</h2>
        </Box>
        <Box selected={selected === 'Gain Muscle'} onClick={() => selectChoice("Gain Muscle")}>
          <img
            alt="scale"
            src="https://img.icons8.com/bubbles/200/000000/dumbbell.png"
          />
          <h2>Gain Muscle</h2>
        </Box>
      </div>
    </FormContainer>
  );
};
