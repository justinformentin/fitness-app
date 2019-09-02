import React from "react";
import {FormContainer } from '../styles';

export const Step4 = props => {
  if (props.currentStep !== 4) {
    return null;
  }
  return (
    <>
      <FormContainer showing={props.showing}>
        <div className="form-wrap">
          You're all done! Please submit your information now so we can create a
          custom tailored plan, just for you.
        </div>
        <button className="btn btn-success btn-block" onClick={props.submitForm}>
        Submit Info
      </button>
      </FormContainer>
    </>
  );
};
