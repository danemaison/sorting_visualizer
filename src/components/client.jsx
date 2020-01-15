import React, { useState } from 'react';
import styled from 'styled-components';
import Algorithms from './algorithms';
import Visualizer from './visualizer';

const Container = styled.main`
width:100%;
padding: 32px 16px;
display:flex;
flex-direction:column;
border:1px solid black;
`;
const Row = styled.div`
  width:100%;
  display:flex;
  justify-content:center;
`;
const Col = styled.div`
  display:flex;
  flex-direction:column;
`;
const Button = styled.button`
`;

const Client = () => {
  const [algorithm, setAlgorithm] = useState('Merge Sort');
  return (
    <Container>
      <Row>{algorithm}</Row>
      <Row>
        <Col>
          <Algorithms setAlgorithm={setAlgorithm} />
          <Button>Unsort</Button>
          <Button>Sort</Button>
        </Col>
        <Visualizer algorithm={null} run={null} />
      </Row>
    </Container>
  );
};

export default Client;
