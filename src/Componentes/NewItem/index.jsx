import React, { useState, useEffect } from 'react';
import { FiPlus, FiX } from 'react-icons/fi'
import { Container } from "./styles";



export function NewItem({ isNew, value, onClick, ...rest }) {
  const [inputWidth, setInputWidth] = useState(`${value.length * 1}rem`);

  useEffect(() => {
    adjustInputWidth(value);
  }, [value]);

  const adjustInputWidth = (inputValue) => {
    setInputWidth(`${inputValue.length * 1}rem`);
  };

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    adjustInputWidth(inputValue);
  };

  return (
    <Container $isNew={isNew}>
      <input
        type="text"
        value={value}
        readOnly={!isNew}
        onChange={handleInputChange}
        style={{ width: inputWidth }}
        {...rest}
      />
      <button type="button" onClick={onClick}> 
        {isNew ? <FiPlus /> : <FiX />}
      </button>
    </Container>
  );
}

