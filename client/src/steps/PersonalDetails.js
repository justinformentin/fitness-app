import React from "react";
import { FullInput } from "../components/FullInput";
import {
  FormContainer,
  FormWrap,
  FormItemTitle,
  RadioContainer,
  RadioGroup
} from "../styles";
import { RadioButton } from "../components/RadioButton";
import InputGroupText from "../subcomponents/InputGroup/InputGroupText";
export const PersonalDetails = props => {
  const heightUnits = [
    {
      value: "inches",
      label: "in"
    },
    {
      value: "centimeters",
      label: "cm"
    }
  ];

  const weightUnits = [
    {
      value: "pounds",
      label: "lbs"
    },
    {
      value: "kilograms",
      label: "kgs"
    }
  ];

  const validateNumbers = (v, type) => {
    if (!v) return `You must enter your ${type}.`;
    if (Math.sign(v) < 1) return "You must enter a positive number";
  };

  const getInputClass = key => {
    return (
      "form-control" +
      (props.formState.validity[key] === false ? " invalid" : "")
    );
  };

  const handleHeightUnit = e => props.heightUnit(e);

  const handleWeightUnit = e => props.weightUnit(e);

  if (props.currentStep !== 2) {
    return null;
  }

  const renderInput = (formItem, idx) => {
    const unitList =
      formItem === "height"
        ? heightUnits
        : formItem === "weight"
        ? weightUnits
        : null;
    const unit = !unitList ? "years" : null;
    const handleChange =
      formItem === "height" ? handleHeightUnit : handleWeightUnit;
    return (
      <div className="form-input-container" key={idx}>
        <FullInput
          title={formItem}
          unitList={unitList ? unitList : null}
          unit={unit}
          onChange={handleChange}
        >
          <input
            className={getInputClass(formItem)}
            placeholder={"Enter " + formItem}
            min="1"
            {...props.number({
              name: formItem,
              validate: v => validateNumbers(v, formItem),
              validateOnBlur: true
            })}
          />
        </FullInput>
        <div className="form-error">{props.formState.errors[formItem]}</div>
      </div>
    );
  };

  const selectRadio = v => props.insertFormItem("gender", v);

  const renderRadio = (radioItem, idx) => (
    <RadioButton
      key={idx}
      name="fruit"
      checked={props.formState.values.gender === radioItem}
      onChange={() => selectRadio(radioItem)}
    >
      {radioItem}
    </RadioButton>
  );

  const formValues = ["height", "weight", "age"];
  const radioValues = ["male", "female", "other"];

  return (
    <FormContainer showing={props.showing}>
      <FormItemTitle>
        <h2>Personal Details</h2>
        <p>
          To create a custom tailored plan, we need some information about you.
        </p>
      </FormItemTitle>
      <FormWrap>
        {formValues.map((formItem, idx) => renderInput(formItem, idx))}
        <RadioGroup>
          <InputGroupText className="single-text">Gender</InputGroupText>
          <RadioContainer>
            {radioValues.map((radioItem, idx) => renderRadio(radioItem, idx))}
          </RadioContainer>
        </RadioGroup>
      </FormWrap>
    </FormContainer>
  );
};
