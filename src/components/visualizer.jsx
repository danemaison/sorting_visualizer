import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  border: 5px solid white;
  width: 75vw;
  height: 100%;
  position: relative;
  background-color: rgb(58, 61, 67);
`;

const Bar = styled.div`
  width: 3px;
  background-color: darkgoldenrod;
  position: absolute;
  bottom: 0;
  transition: .1s;
`;

const Visualizer = ({ items }) => {
  return (
    <Container>
      {items.map(item => (
        <Bar
          ref={item.ref}
          style={{
            height: `${item.height}%`,
            left: `${item.left}%` }}
          key={item.height}
        />
      ))}
    </Container>
  );
};

export default Visualizer;
