import React from 'react';
import { Div } from "atomize";
import styled from "styled-components";

const Select = styled.select`
  margin: 1ch;
  font-size: 1.2rem;
  padding: 0.2rem;
  border-radius: 5px;
  text-align: center;
`;

const SizeDropdown = () => {
  return (
    <Div>
    <Select defaultValue="Choose size" >
      <option value="Choose size" disabled="disabled" >Choose size</option>
      <option value="7">7</option>
      <option value="8">8</option>
      <option value="9" disabled="disabled">9 -No stock</option>
      <option value="10">10</option>
      <option value="11">11</option>
    </Select>
    </Div>
  );
}

export default SizeDropdown;
