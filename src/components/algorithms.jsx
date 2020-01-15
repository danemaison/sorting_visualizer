import React from 'react';
import styled from 'styled-components';

const Button = styled.button``;

const algorithms = ['Merge Sort', 'Quick Sort', 'Heap Sort', 'Bubble Sort'];

const AlgorithmList = ({ selectAlgorithm }) => {
  return (
    <>
      {algorithms.map((alg, index) => (
        <Button key={index} onClick={() => selectAlgorithm(alg)}>
          {alg}
        </Button>
      ))}
    </>
  );
};

export default AlgorithmList;
