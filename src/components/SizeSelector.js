import React, { useContext } from 'react';
import { ShopContext } from '../context/shopContext';
import { Div } from "atomize";
import styled from "styled-components";

const Select = styled.select`
  font-size: inherit;

  padding: 0.5rem;
  border-radius: 5px;
  text-align: center;
`;

const SizeSelector = () => {
  const { product } = useContext(ShopContext);
  return (
    <Div d='flex' align="center"  justify="center">
    <Select defaultValue="Choose size" key={product.options[1].name} >
    <option value="Choose size" disabled="disabled" >Choose size</option>
    {product.options[1].values.map(size => (
        <option key={size.value}>{size.value}</option>
    ))}
    </Select>
    </Div>
  );
}

export default SizeSelector;
