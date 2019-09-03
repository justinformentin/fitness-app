import React from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { dietData } from "../data/dietData.js";
import { FormContainer, FormWrap, FormItemTitle } from "../styles";

export const DietStep = props => {
  const animatedComponents = makeAnimated();

  const handleSelection = selArr => {
    let selVals = [];
    selArr.map(sel => selVals.push(sel.value));
    props.onChange(selVals);
  };

  if (props.currentStep !== 3) {
    return null;
  }
  return (
    <FormContainer showing={props.showing}>
      <FormItemTitle>
        <h2>Dietary Restrictions</h2>
      </FormItemTitle>
      <FormWrap>
        <p>
          Changing what and how you eat is tough enough. Let us know if you have
          any dietary restrictions so we can create a plan and list of rescipes
          that are unique to you.
        </p>
        <p>
          Planning and cooking meals is already a challenge. With [Company Name]
          you don't need to worry about getting recipes that you'll need to
          substitute ingredients because you have a dietary restriction.
        </p>
        <p>Use the dropdown to select all that apply.</p>
        <Select
          closeMenuOnSelect={false}
          components={animatedComponents}
          isMulti
          options={dietData}
          onChange={handleSelection}
          placeholder="No restrictions"
        />
      </FormWrap>
    </FormContainer>
  );
};
