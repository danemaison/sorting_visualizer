import React, { useState, useCallback } from 'react';
import styled from 'styled-components';

const Button = styled.button`
  margin: 8px 0;
  border: 3px solid ${({ active }) => (active ? 'green' : 'white')};
  box-shadow: ${({ active }) => (active ? 'inset 0 0 10px green' : 'none')};
  background: transparent;
  border-radius: 0;
  text-transform: uppercase;
  font-weight: bold;
  padding: 10px 25px;
  cursor:pointer;
  :active{
    text-outline:none;
  }

`;

const algorithms = ['Bubble Sort', 'Quick Sort', 'Heap Sort', 'Merge Sort'];

const AlgorithmList = ({ setAlgorithm }) => {
  const [active, setActive] = useState(0);
  const setAlg = useCallback((algorithm, index) => {
    setActive(index);
    setAlgorithm(algorithm);
  });
  return (
    <>
      {algorithms.map((alg, index) => (
        <Button active={index === active} key={index} onClick={() => setAlg(alg, index)}>
          {alg}
        </Button>
      ))}
    </>
  );
};

export default AlgorithmList;
