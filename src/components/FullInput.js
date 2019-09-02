import React from "react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText
} from "../subcomponents/InputGroup";

export const FullInput = props => {
  const handleChange = e => props.onChange(e.target.value);

  const getSelect = () => (
    <select className="custom-select form-control" onChange={handleChange}>
      {props.unitList.map((o, i) => {
        return (
          <option key={i} value={o.value}>
            {o.label}
          </option>
        );
      })}
    </select>
  );

  const title = props.title.charAt(0).toUpperCase() + props.title.slice(1);
  return (
    <>
      <div className="form-group">
        <InputGroup className="mb-2">
          <InputGroupAddon type="prepend">
            <InputGroupText type="prepend">{title}</InputGroupText>
          </InputGroupAddon>
          {props.children}
          <InputGroupAddon type="append">
            <InputGroupText type="append">
              {props.unitList ? getSelect() : props.unit}
            </InputGroupText>
          </InputGroupAddon>
        </InputGroup>
      </div>
    </>
  );
};
