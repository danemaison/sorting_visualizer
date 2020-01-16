import React, { useState, useEffect, useCallback, createRef } from 'react';
import styled from 'styled-components';
import Algorithms from './algorithms';
import Visualizer from './visualizer';
import { bubbleSort } from '../algorithms/bubblesort';

const Container = styled.main`
width:100%;
padding: 32px 16px;
display:flex;
flex-direction:column;
align-items:center;
`;
const Row = styled.div`
  width:100%;
  height: 80vh;
  display:flex;
  justify-content:center;
`;
const Col = styled.div`
  height:100%;
  display:flex;
  flex-direction:column;
  justify-content:center;
`;

const ButtonCol = styled(Col)`
  padding-right:16px;
`;
const VisualizerColumn = styled(Col)`
  align-items:center;
`;
const Button = styled.button`
  margin: 8px 0;
  border: 3px solid white;
  background: transparent;
  border-radius: 0;
  text-transform: uppercase;
  padding: 10px 25px;
`;

const Algorithm = styled.div`
  text-align:center;
  font-size: 2rem;
  font-weight:bold;
  padding-bottom:6px;
`;

const Client = () => {
  const [algorithm, setAlgorithm] = useState('Merge Sort');
  const [itemsToSort, setItemsToSort] = useState([]);

  const sort = () => {
    bubbleSort(itemsToSort);

  };
  const randomizeData = useCallback(() => {
    const items = [];
    for (let i = 0; i < 98; i++) {
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
          <Button onClick={randomizeData}>Unsort</Button>
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
