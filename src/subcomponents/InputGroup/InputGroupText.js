import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const INPUT_GROUP_ADDON_TYPES = ["prepend", "append"];

const InputGroupText = props => {
  const { className, tag: Tag, type, ...attrs } = props;
  const classes = classNames(className, "input-group-text", type);

  return <Tag {...attrs} className={classes} />;
};

InputGroupText.propTypes = {
  className: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  type: PropTypes.oneOf(INPUT_GROUP_ADDON_TYPES).isRequired,
};

InputGroupText.defaultProps = {
  tag: "span"
};

export default InputGroupText;
