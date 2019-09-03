import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { capitalize } from "../utils";
import "./radioStyles.css";

export const RadioButton = props => {
  const {
    className,
    children,
    inline,
    valid,
    invalid,
    onChange,
    // id: _id,
    ...attrs
  } = props;

  const labelClasses = classNames(
    "custom-control",
    "custom-radio",
    inline && "custom-control-inline",
    valid && "is-valid",
    invalid && "is-invalid"
  );

  const inputClasses = classNames(
    className,
    "custom-control-input",
    valid && "is-valid",
    invalid && "is-invalid"
  );

  return (
    <label className={labelClasses}>
      <input
        {...attrs}
        // id={id}
        type="radio"
        className={inputClasses}
        onChange={onChange}
      />
      <label
        className="custom-control-label"
        aria-hidden="true"
        onClick={onChange}
      />
      <span className="custom-control-description">{capitalize(children)}</span>
    </label>
  );
};

RadioButton.defaultProps = {
  onChange: () => {}
};

RadioButton.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  inline: PropTypes.bool,
  valid: PropTypes.bool,
  onChange: PropTypes.func,
  invalid: PropTypes.bool
};
