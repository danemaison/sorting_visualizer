import React from 'react';
import styled from 'styled-components';

const Container = styled.header`
  width:100%;
  height: 300px;
  background-color: orange;
`;

const Section = styled.div`
  width:33%;
  height:100%;
`;

const Button = styled.button``;

const Header = () => {
  return (
    <Container>
      <Section>
        <Button>New Array</Button>
        <Button>Sort</Button>
      </Section>
      <Section>

      </Section>
      <Section>

      </Section>
    </Container>
  );
}
;
