import React from "react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText
} from "../subcomponents/InputGroup";
import { capitalize } from "../utils";

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

  return (
    <>
      <div className="form-group">
        <InputGroup className="mb-2">
          <InputGroupAddon type="prepend">
            <InputGroupText type="prepend">{capitalize(props.title)}</InputGroupText>
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
