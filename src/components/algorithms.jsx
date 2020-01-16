import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  margin:8px 0;
  border: 3px solid white;
  background: transparent;
  border-radius:0;
  text-transform:uppercase;
  padding:10px 25px;
`;

const algorithms = ['Merge Sort', 'Quick Sort', 'Heap Sort', 'Bubble Sort'];

const AlgorithmList = ({ setAlgorithm }) => {
  return (
    <>
      {algorithms.map((alg, index) => (
        <Button key={index} onClick={() => setAlgorithm(alg)}>
          {alg}
        </Button>
      ))}
    </>
  );
};

export default AlgorithmList;
