import React, { useState, useEffect } from "react";
import { MainChoiceStep, PersonalDetails, DietStep, Step4 } from "./steps";
import { useFormState } from "react-use-form-state";
import { Progress } from "./subcomponents/Progress";
import { StepContainer, ButtonContainer, Button } from "./styles";

const MasterForm = () => {
  const maxSteps = 4;
  const [disabled, setDisabled] = useState(true);
  const [showing, setShowing] = useState(true);
  const [step, setStep] = useState(1);
  const [hUnit, setHeightUnit] = useState("inches");
  const [wUnit, setWeightUnit] = useState("pounds");
  const [form, setForm] = useState({
    mainChoice: "",
    height: {
      value: "",
      unit: hUnit
    },
    weight: {
      value: "",
      unit: wUnit
    },
    age: "",
    dietRestrictions: []
  });

  const [formState, { number }] = useFormState();

  console.log("FORM", form);

  useEffect(() => {
    setShowing(true);
  }, [step]);

  const insertFormItem = (name, item) => formState.setField(name, item);

  const submitForm = () => {
    setForm({
      mainChoice: formState.values.mainChoice,
      height: {
        value: formState.values.height,
        unit: hUnit
      },
      weight: {
        value: formState.values.weight,
        unit: wUnit
      },
      age: formState.values.age,
      dietRestrictions: formState.values.dietRestrictions
    });
  };

  const nextStep = () => !disabled && step < maxSteps && setStep(step + 1);

  const prevStep = () => step > 1 && setStep(step - 1);

  const getDisabled = () => {
    const { mainChoice, weight, height, age } = formState.values;

    const checkVal = step =>
      ({
        1: mainChoice ? false : true,
        2: height && weight && age ? false : true,
        3: false,
        4: false
      }[step]);

    setDisabled(checkVal(step));
  };

  useEffect(() => {
    getDisabled();
  }, [formState]);

  const getPrevShowing = () => {
    setShowing(false);
    setTimeout(prevStep, 400);
  };

  const getNextShowing = () => {
    setShowing(false);
    setTimeout(nextStep, 400);
  };

  const previousButton = () => (
    <Button disabled={step === 1} type="button" onClick={getPrevShowing}>
      Previous
    </Button>
  );

  const nextButton = () => (
    <Button
      disabled={disabled || step === maxSteps}
      type="button"
      onClick={getNextShowing}
    >
      Next
    </Button>
  );

  return (
    <>
      <Progress value={step - 1} max={maxSteps - 1}></Progress>
      <StepContainer>
        <MainChoiceStep
          currentStep={step}
          handleMainChoice={v => insertFormItem("mainChoice", v)}
          showing={showing}
        />
        <PersonalDetails
          currentStep={step}
          formState={formState}
          number={number}
          heightUnit={setHeightUnit}
          weightUnit={setWeightUnit}
          showing={showing}
        />
        <DietStep
          currentStep={step}
          onChange={v => insertFormItem("dietRestrictions", v)}
          showing={showing}
        />
        <Step4 currentStep={step} submitForm={submitForm} showing={showing} />
        <ButtonContainer>
          {previousButton()}
          {nextButton()}
        </ButtonContainer>
      </StepContainer>
    </>
  );
};

export default MasterForm;
