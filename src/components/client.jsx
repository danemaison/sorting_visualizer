import React, { useState, useEffect, useCallback, createRef } from 'react';
import styled from 'styled-components';
import Algorithms from './algorithms';
import Visualizer from './visualizer';
import { bubbleSort } from '../algorithms/bubblesort';
import mergeSort from '../algorithms/mergesort';

const Container = styled.main`
  width: 100%;
  padding: 32px 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Row = styled.div`
  /* width: 100%; */
  height: 80vh;
  display: flex;
  justify-content: center;
  flex-direction:column-reverse;
  @media ${({ theme }) => theme.mediaQueries.small} {
    height: 80vh;
    width: 100%;
    flex-direction: row;
  }
`;
const Col = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ButtonCol = styled(Col)`
  @media ${({ theme }) => theme.mediaQueries.small} {
    padding-right: 16px;
  }
`;
const VisualizerColumn = styled(Col)`
  align-items: center;
`;
const Button = styled.button`
  font-weight:bold;
  margin: 8px 0;
  border: 3px solid green;
  background: green;
  text-transform: uppercase;
  padding: 10px 25px;
  cursor:pointer;
`;

const RandomizeButton = styled(Button)`
  margin-top: 15px;
  background-color: darkred;
  border-color: darkred;
`;

const Algorithm = styled.div`
  text-align: center;
  text-transform:uppercase;
  font-size: 2rem;
  font-weight: bold;
  padding-bottom: 6px;
`;

const Client = () => {
  const [algorithm, setAlgorithm] = useState('Bubble Sort');
  const [itemsToSort, setItemsToSort] = useState([]);

  const sort = () => {
    switch (algorithm) {
      case 'Bubble Sort':
        bubbleSort(itemsToSort);
        break;
      case 'Merge Sort':
        mergeSort(itemsToSort);
        break;
    }
  };

  const randomizeData = useCallback(() => {
    const items = [];
    for (let i = 0; i < 97; i++) {
      const height = Math.random() * (98 - 5) + 5;
      const left = i + 1;
      const ref = createRef();
      items.push({ height, left, ref });
    }
    setItemsToSort(items);
  });
  useEffect(() => {
    randomizeData();
  }, []);

  return (
    <Container>
      <Row>
        <ButtonCol>
          <Algorithms setAlgorithm={setAlgorithm} />
          <RandomizeButton onClick={randomizeData}>Randomize</RandomizeButton>
          <Button onClick={sort}>Sort</Button>
        </ButtonCol>
        <VisualizerColumn>
          <Algorithm>{algorithm}</Algorithm>
          <Visualizer items={itemsToSort} algorithm={null} run={null} />
        </VisualizerColumn>
      </Row>
    </Container>
  );
};

export default Client;
